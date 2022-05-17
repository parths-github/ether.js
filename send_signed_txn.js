const { ethers } = require("ethers");
require("dotenv").config({path: ".env"})
// Sending GOR from one account to another one
const INFURA_RPC_URL = process.env.INFURA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider(INFURA_RPC_URL);
// Getting signer to sign the msg
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const account1 = "0xbd49cCB1021CBB8AeD051e4eF78b5750A94e2700"; 
const account2 = "0xE9Ec3662277405f4144c93347d7C568497d88146";
async function main() {
    // Checking before balnce of both account
    let bal1 = await provider.getBalance(account1);
    let bal2 = await provider.getBalance(account2);
    console.log(ethers.utils.formatEther(bal1), ethers.utils.formatEther(bal2));

    const tx = await signer.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.002")
    })
    const receipt = await tx.wait();
    console.log(receipt);

    // Checking after balance
    bal1 = await provider.getBalance(account1);
    bal2 = await provider.getBalance(account2);
    console.log(ethers.utils.formatEther(bal1), ethers.utils.formatEther(bal2));


}

main();
