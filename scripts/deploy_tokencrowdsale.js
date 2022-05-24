const { hre, ethers } = require("hardhat");

//async function latestTime() {
//  const block = await ethers.provider.getBlock("latest");
//  return block.timestamp;
//}
//
//const duration = {
//  seconds(val) {
//    return val;
//  },
//  minutes(val) {
//    return val * this.seconds(60);
//  },
//  hours(val) {
//    return val * this.minutes(60);
//  },
//  days(val) {
//    return val * this.hours(24);
//  },
//  weeks(val) {
//    return val * this.days(7);
//  },
//  years(val) {
//    return val * this.days(365);
//  },
//};
//

async function main() {
  const TOKEN_CROWDSALE = "TokenCrowdsale";
  const rate = 10000; // rate 4 = 500 wei per token // rate 10000 = 1bnb per 1.000.000 tokens
  const cashoutWallet = "0xd989f9505e3b94b7514e878d94a2a68dcbba9a29"; // wallet to receive BNB
  const tokenAddress = "0x055EAbf08efD7283232c066F0f0e4151b9651E71";
  const tokenWallet = "0xd989f9505e3b94b7514e878d94a2a68dcbba9a29"; // wallet to handle the tokens
  const openingTime = 1652108341; // 22/04 18hrs gmt-3
  // const openingTime = await latestTime() + duration.minutes(1);
  const closingTime = 1652151541; // 07/04 18hrs gmt-3

  // deploy crowdsale contract
  const crowdsaleContract = await ethers.getContractFactory(TOKEN_CROWDSALE);
  const crowdsale = await crowdsaleContract.deploy(
    rate,
    cashoutWallet,
    tokenAddress,
    tokenWallet,
    openingTime,
    closingTime
  );
  console.log("token wallet:", tokenWallet);

  await crowdsale.deployed();
  console.log("TokenCrowdsale deployed to: ", crowdsale.address);

  console.log(
    "verify with the following arguments:",
    rate,
    cashoutWallet,
    tokenAddress,
    tokenWallet,
    openingTime,
    closingTime
  );

  await hre.run("verify:verify", {
    address: crowdsale.address,
    constructorArguments: [rate, cashoutWallet, tokenAddress, tokenWallet, openingTime, closingTime],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
