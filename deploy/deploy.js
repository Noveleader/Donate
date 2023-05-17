const { ethers } = require("hardhat");

async function main() {
  // Compile the smart contract
  const DonationContract = await ethers.getContractFactory("donation");
  console.log("Compiling Contract...");

  // Deploy the contract
  console.log("Deploying Contract...");
  const donation = await DonationContract.deploy();
  // Display contract address and owner
  console.log("Contract deployed to:", donation.address);
  console.log("Contract owner:", await donation.showOwner());
}

// Run the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
