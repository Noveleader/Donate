//SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// People should be able to donate
// Contract owner should be able to withdraw
// A mapping having all the info of addresses and their respective donation

contract donation {
    /*
    Hence we need 3 things : 
    1. A mapping of addresses and their respective donations
    2. A function to donate
    3. A function to withdraw
    */
    address public immutable i_owner;
    mapping(address => uint256) public donations;
    uint256 public total_donations;
    uint256 public total_donors;

    constructor() {
        i_owner = msg.sender;
    }

    event donation_made(address indexed _from, uint256 _value);
    event withdrawn(address indexed _from, uint256 _value);

    function donate() public payable {
        uint256 donation_Amount = msg.value;
        donations[msg.sender] += donation_Amount;
        total_donations += donation_Amount;
        total_donors += 1;
        emit donation_made(msg.sender, donation_Amount);
    }

    function withdraw() public {
        require(msg.sender == i_owner, "Only the owner can withdraw");
        uint256 balance = address(this).balance; //this is the contract balance
        payable(msg.sender).transfer(balance); //transfer the balance to the owner
        emit withdrawn(msg.sender, balance);
    }

    //Helper functions - These functions show some values

    function showBalance() public view returns (uint256) {
        //This will show the contract balance
        return address(this).balance;
    }

    function showTotalDonation() public view returns (uint256) {
        //This will show total donations made
        return total_donations;
    }

    function showDonationOfAddress(
        address _address
    ) public view returns (uint256) {
        // This will show donation from a particular address
        return donations[_address];
    }

    function showTotalDonors() public view returns (uint256) {
        //This will show total donors
        return total_donors;
    }

    function showOwner() public view returns (address) {
        //This will show the owner address
        return i_owner;
    }
}
