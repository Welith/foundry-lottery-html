# html-lottery

This is my idea for a minimalistic Lottry Front End. The project assumes that you have the [foundry-lottery](https://github.com/Welith/foundry-lottery) project locally.

_NOTE: I've created this repo to be ran against the SEPOLIA MAINNET, so that you can get a better feel of how to enable Chainlink VRF and Upkeeps.

# Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you've installed it right if you can run:
    - `git --version`
- [Metamask](https://metamask.io/)
  - This is a browser extension that lets you interact with the blockchain.


# Quickstart

1. Clone the repo

```bash
git clone https://github.com/Welith/foundry-lottery-html
cd foundry-lottery-html
```

2. Run the file.

You can usually just double click the file to "run it in the browser". Or you can right click the file in your VSCode and run "open with live server".

And you should see a small button that says "connect".

![Connect](connect.png)

Hit it, and you should see metamask pop up.

# Execute a transaction

If you want to join the lottery follow the steps below:

Make sure you have the following installed:

1. You'll need to open up a second terminal and run:

```bash
git clone https://github.com/Welith/foundry-lottery
cd foundry-lottery
make build 
make deploy ARGS="--network sepolia" (supposed you've got all the requirements from the lottery repo README!)
```

This will deploy a contract to SEPOLIA.

2. Update your `constants.js` with the new contract address.

In your `constants.js` file, update the variable `contractAddress` with the address of the deployed "Lottery" contract. Check it out in the lottery depoyment terminal output.

3. Connect your [metamask](https://metamask.io/) to your local hardhat blockchain.

> **PLEASE USE A METAMASK ACCOUNT THAT ISNT ASSOCIATED WITH ANY REAL MONEY.**
> I usually use a few different browser profiles to separate my metamasks easily.


4. Refresh the front end, input an amount in the text box, and hit `Enter Lottery` button after connecting.

5. In order to enable the lottery automation, you will need to create a chainlink VRF, then create a subscription, fund it, and in the end add your deployed contract as a consumer.

6. Finally, you will need to create an Upkeep, which will draw the lucky winner.

# Thank you!
