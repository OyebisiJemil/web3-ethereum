const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');

//Calculate the gas price
web3.eth.getGasPrice().then((result) => {
   console.log(web3.utils.fromWei(result, 'ether'));
})

//get the hash value of a string with sha3
console.log(web3.utils.sha3('Jemil'))