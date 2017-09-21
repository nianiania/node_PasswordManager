console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('accounts',[{
// 	username: 'nia',
// 	balance : 0
// }])

var accounts = storage.getItemSync('accounts');
	// push on a new account 
	accounts.push({
		username: 'Kevin',
		balance: 10	
	});

	// save using setItemSync
	storage.setItemSync('accounts',accounts)


	console.log(accounts);



