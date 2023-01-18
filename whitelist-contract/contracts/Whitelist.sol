//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Whitelist {
    address private owner;
    uint16 public whitelistAllowed;
    mapping(address => bool) public whiteListPeople;

    event allPeople(address newPerson);

    modifier onlyOwner() {
        require(owner == msg.sender, "not owner");
        _;
    }

    constructor(uint16 _whitelistAllowed) {
        whitelistAllowed = _whitelistAllowed;
        owner = msg.sender;
    }

    function addWhiteListPublic() public {
        require(
            whiteListPeople[msg.sender] != true,
            "you are in the whitelist"
        );
        whiteListPeople[msg.sender] = true;
        emit allPeople(msg.sender);
    }

    function addWhiteListPrivate(address _addPerson) public onlyOwner {
        require(whiteListPeople[_addPerson] != true, " in the whitelist");
        whiteListPeople[_addPerson] = true;
        emit allPeople(_addPerson);
    }

    function viewPeople(address _get) public view returns (bool) {
        return whiteListPeople[_get];
    }
}
