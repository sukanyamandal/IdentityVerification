#IdentityVerification

**A decentralized identity verification and management DApp built on Ethereum.**

**Requirements**
- Truffle v5.8.1 (core: 5.8.1)
- Ganache v7.7.7
- Solidity - ^0.8.0 (solc-js)
- Node v14.16.0
- Web3.js v1.8.2
- MetaMask

**Installation**

1. Clone the repository

	`git clone https://github.com/sukanyamandal/identity-verification.git`

2. Install the dependencies:

	`cd identity-verification`
	`npm install`

3. Compile the smart contracts:

	`truffle compile`

4. Deploy the smart contracts:

	`truffle migrate`

5. Check the deployment

	`truffle network`

6. Test the deployed contract using the `TestIdentityVerification.js` file provided.

	`truffle test`

7. Start the development server:

	`npm start`

8. Open MetaMask and connect it to your local Ethereum node or to the Rinkeby test network.

9. Visit http://localhost:8080 in your browser to use the DApp.

**Usage**
The IdentityVerification DApp allows users to verify their identity and manage their personal information securely on the Ethereum blockchain.

To use the DApp, follow these steps:

- Connect MetaMask to your Ethereum node or the Rinkeby test network.
- Click the "Connect" button in the DApp to connect it to MetaMask.
- Verify your identity by submitting the required documents and personal information.
- View and manage your personal information by clicking the "My Profile" button.
- Log out of the DApp by clicking the "Log out" button.

****Contributing
Contributions are welcome! To contribute to the project, follow these steps:

Fork the repository.

1. Create a new branch:

	`git checkout -b my-new-feature`

2. Make your changes and commit them:

	`git commit -am 'Add some feature'`

3. Push to the branch:

	`git push origin my-new-feature`

4. Submit a pull request.

**License**
This project is licensed under the MIT License. See the LICENSE file for details.
