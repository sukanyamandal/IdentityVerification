const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0xA55586b11F315207b2A77234CA441Ed6ff0B1744";
const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "identities",
      "outputs": [
        {
          "internalType": "string",
          "name": "firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lastName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lastName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "verifyIdentity",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getIdentity",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

const identityVerificationContract = new web3.eth.Contract(contractAbi, contractAddress);

const verifyForm = document.getElementById("verify-form");
const resultDiv = document.getElementById("result");

verifyForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstName = event.target.elements["first-name"].value;
  const lastName = event.target.elements["last-name"].value;
  const age = event.target.elements.age.value;

  const accounts = await web3.eth.getAccounts();

  try {
    const result = await identityVerificationContract.methods
      .verifyIdentity(firstName, lastName, age)
      .send({ from: accounts[0] });

    resultDiv.innerHTML = `Identity verification successful. Transaction hash: ${result.transactionHash}`;
  } catch (error) {
    resultDiv.innerHTML = `Error: ${error.message}`;
  }
});
