const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 

const seedUsers = [
    {
	aid: '2345',
        name: 'Aman',
        email: 'singhaman@gmail.com',
        balance: 37000
    },
    {
	aid: '1975',
	name: 'Rahul',
	email: 'rahu@gmail.com',
	balance: 35000
    },
    {
	aid: '3423',
	name: 'Rocky',
	email: 'rocky@gmail.com',
	balance: 20000
    },
    {
	aid: '1111',
	name: 'Rishi',
	email: 'rishi@gmail.com',
	balance: 40000
    },
    {
	aid: '3489',
	name: 'Jay',
	email: 'jay@gmail.com',
	balance: 26000
    },
    {
	aid: '3119',
	name: 'Joe',
	email: 'joe@gmail.com',
	balance: 25000
    },
    {
	aid: '6129',
	name: 'Charles',
	email: 'charles@gmail.com',
	balance: 25000
    },
    {
	aid: '1345',
	name: 'Vinay',
	email: 'vinay@gmail.com',
	balance: 45000
    },
    {
	aid: '9239',
	name: 'Vijay',
	email: 'vijaysingh@gmail.com',
	balance: 38000
    },
    {
	aid: '1890',
	name: 'Rock',
	email: 'rock12@gmail.com',
	balance: 25000
    }
]

User.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log(err))
