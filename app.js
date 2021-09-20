const { concatSeries } = require('async');
const express =require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride =require('method-override');

const User = require('./models/user');
const Transaction = require('./models/transaction');

let i = 1;

require('dotenv').config();

const DB = process.env.DATABASE;
const port = process.env.PORT;

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 


//require('./seeds');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + "/public")));

app.get('/',(req,res)=>{
	res.render('home')
});

app.get('/view', async (req, res) => {
	const users = await User.find({});
	res.render('userlist', {users} );
});

app.get('/view/:id', async (req,res)=>{
    const {id} = req.params;
    const u = await User.find({aid: id});
    let user = u[0];
    const users = await User.find({});
	res.render('transfer', {user, users});
});

app.get("/view/:id1/:id2", async(req, res) =>{
    const {id1, id2} = req.params;
    let fromUser = await User.find({aid:id1});
    fromUser = fromUser[0];
    let toUser = await User.find({aid:id2});
    toUser = toUser[0];
    res.render("form", {fromUser, toUser});
});

app.put("/view/:id1/:id2", async(req, res) =>{
    const {id1, id2} = req.params;
    const balance = parseInt(req.body.balance);
    let fromUser = await User.find({aid : id1});
    let toUser = await User.find({aid: id2});
    fromUser = fromUser[0];
    toUser = toUser[0];
    if(balance <= fromUser.balance && balance > 0){
        
      let fromBalanceNew = fromUser.balance - balance;
      let toBalanceNew = parseInt(toUser.balance + balance);
      await User.findOneAndUpdate({aid:id1}, {balance : fromBalanceNew}, 
        { runValidators: true, new: true });
      await User.findOneAndUpdate({aid:id2}, {balance : toBalanceNew}, 
				{ runValidators: true, new: true });

        let newTransaction = new Transaction();
        newTransaction.sno = i;
        newTransaction.fromName = fromUser.name;
        newTransaction.toName = toUser.name;
        newTransaction.transfer = balance;
        await newTransaction.save();
        i++;
        res.redirect("/");
    }
    else{
        res.render('error');
    }
});

app.get("/history", async(req, res)=>{
    const transactions = await Transaction.find({});
    res.render("history", {transactions});
});

app.listen(port || 3000, process.env.IP,function(){
	console.log('App running at ' + port);
   });
