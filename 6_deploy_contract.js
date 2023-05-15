// Import the libraries and load the environment variables.
const { SDK, Auth, TEMPLATES, Metadata } = require('@infura/sdk') ;
require('dotenv').config()

// Create Auth object
const auth = new Auth({
      projectId: process.env.INFURA_API_KEY,
      secretId: process.env.INFURA_API_KEY_SECRET,
      privateKey: process.env.WALLET_PRIVATE_KEY,
      privateKey: process.env.WALLET_PRIVATE_KEY,
      rpcUrl: process.env.RPC_URL,
      chainId: 11155111,
});

// Instantiate SDK
const sdk = new SDK(auth);

async function deployContract() {
  try {
    const newContract = await sdk.deploy({
      template: TEMPLATES.ERC721Mintable,
      params: {
        name: 'Airplanes',
        symbol: 'JET',
        contractURI: 'https://gateway.pinata.cloud/ipfs/Qmbta8RRbdXjyvXwkuqmbsXkZ8ZRoMezNsP7g6n9Db1Mx1'
      },
    });
    console.log('contract address: \n', newContract.contractAddress);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

deployContract();
