const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');
const _ = web3.utils._

//Calculate the gas price
web3.eth.getGasPrice().then((result) => {
   console.log(web3.utils.fromWei(result, 'ether'));
})

//get the hash value of a string with sha3
console.log(web3.utils.sha3('Jemil'))

//get the hash value of a string with keccak256
console.log(web3.utils.keccak256('Jemil'))

//get the hash value of a string with soliditySha3
console.log(web3.utils.soliditySha3('Jemil'))

//generate random hex
console.log(web3.utils.randomHex(32))


_.each({key1: 'value1', key2: 'value2'}, (value, key) => {
    console.log(key);
    console.log(value);
})