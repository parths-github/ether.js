const { ethers } = require("ethers");
require("dotenv").config({path: ".env"})

const INFURA_RPC_URL = process.env.INFURA_RPC_URL;
const provider = new ethers.providers.JsonRpcProvider(INFURA_RPC_URL);
const contractAddress = "0x8a339099d09aB366a95c785AF2C099867F32b244";
const abi = [{"inputs":[{"internalType":"bytes32[]","name":"admins","type":"bytes32[]"}],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_question","type":"string"},{"internalType":"bytes32","name":"_responseHash","type":"bytes32"}],"name":"New","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_question","type":"string"},{"internalType":"string","name":"_response","type":"string"}],"name":"Start","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Stop","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_response","type":"string"}],"name":"Try","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"question","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
/** Ether.ja allows user to store abi as array of fucntions
 * In case we don't want to call the all the function of contrcat.
 * We can just add the function that we want to call just like interfcae
 */
const contract = new ethers.Contract(contractAddress, abi, provider);
async function main() {
    const question = await contract.question(); // What kind of clothes do lawyers wear?
    console.log(question);
}

main();
