const IdentityVerification = artifacts.require("IdentityVerification");

contract("IdentityVerification", (accounts) => {
  let identityVerification;

  beforeEach(async () => {
    identityVerification = await IdentityVerification.new();
  });

  it("should verify identity", async () => {
    const firstName = "John";
    const lastName = "Doe";
    const age = 30;
    const result = await identityVerification.verifyIdentity(firstName, lastName, age, { from: accounts[0] });
    assert(result, true, "Identity verification failed");

    const identity = await identityVerification.getIdentity(accounts[0]);
    assert.equal(identity[0], firstName, "First name does not match");
    assert.equal(identity[1], lastName, "Last name does not match");
    assert.equal(identity[2], age, "Age does not match");
    assert.equal(identity[3], true, "Identity was not verified");
  });

  it("should not verify identity twice", async () => {
    const firstName = "Jane";
    const lastName = "Doe";
    const age = 25;
    await identityVerification.verifyIdentity(firstName, lastName, age, { from: accounts[0] });

    try {
      await identityVerification.verifyIdentity(firstName, lastName, age, { from: accounts[0] });
      assert.fail("Expected revert not received");
    } catch (error) {
      assert(error.message.includes("Identity already exists"), "Error message does not include 'Identity already exists'");
    }
  });

  it("should not get identity without verification", async () => {
    try {
      await identityVerification.getIdentity(accounts[0]);
      assert.fail("Expected revert not received");
    } catch (error) {
      assert(error.message.includes("Identity does not exist"), "Error message does not include 'Identity does not exist'");
    }
  });
});

