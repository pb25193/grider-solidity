pragma solidity ^0.5.10;

contract Siri {

    string public greeting;

    constructor(string memory masterName) public {
        greeting = masterName;
    }

    function setGreeting(string memory newName) public {
        greeting = newName;
    }

}