const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const seed = require('./seed');
/**
 * The above dependency is gitignored. create your own file 'seed.js' with your own seed.
 * add this line of code in it:
 * module.exports = {enter your seed here as a string of space separated mnemonic words};
 */
const { interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
    seed,
   'https://rinkeby.infura.io/v3/0c7da3e3e3004a879dacfdaa4b7711e4'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode,
        arguments: ['Rinkeby contract']
    }).send({
        gas: '1000000',
        from: accounts[0]
    });

    console.log('Contract deployed to', result.options.address);
}

deploy();