pragma solidity ^0.8.0;

contract IdentityVerification {

    struct Identity {
        string firstName;
        string lastName;
        uint age;
        bool isVerified;
    }

    mapping(address => Identity) public identities;

    function verifyIdentity(string memory _firstName, string memory _lastName, uint _age) public returns (bool) {
        Identity storage identity = identities[msg.sender];
        require(bytes(identity.firstName).length == 0, "Identity already exists");
        identity.firstName = _firstName;
        identity.lastName = _lastName;
        identity.age = _age;
        identity.isVerified = true;
        return true;
    }

    function getIdentity(address _address) public view returns (string memory, string memory, uint, bool) {
        Identity storage identity = identities[_address];
        require(bytes(identity.firstName).length != 0, "Identity does not exist");
        return (identity.firstName, identity.lastName, identity.age, identity.isVerified);
    }

}
