export const contractAddress = "0xFe6C40f826C6954ac3d4C7BDA72bD41540429879"
export const abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_entranceFee",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "_interval", type: "uint256", internalType: "uint256" },
      {
        name: "_vrfCoordinator",
        type: "address",
        internalType: "address",
      },
      { name: "_gasLane", type: "bytes32", internalType: "bytes32" },
      {
        name: "_subscriptionId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_callbackGasLimit",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkUpkeep",
    inputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    outputs: [
      { name: "upkeepNeeded", type: "bool", internalType: "bool" },
      { name: "", type: "bytes", internalType: "bytes" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "enterLottery",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getEntranceFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getLastTimeStamp",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getLotteryState",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum Lottery.LotteryStates",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlayer",
    inputs: [{ name: "_index", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlayers",
    inputs: [],
    outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRecentWinner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "performUpkeep",
    inputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rawFulfillRandomWords",
    inputs: [
      { name: "requestId", type: "uint256", internalType: "uint256" },
      {
        name: "randomWords",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "EnterLottery",
    inputs: [
      {
        name: "_player",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PickedWinner",
    inputs: [
      {
        name: "_winner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestId",
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestedLotteryWinner",
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "Lottery_CouldNotPayWinner", inputs: [] },
  { type: "error", name: "Lottery_LotteryClosed", inputs: [] },
  { type: "error", name: "Lottery_NotEnoughEtherToEnter", inputs: [] },
  { type: "error", name: "Lottery_UpkeepNotNeeded", inputs: [] },
  {
    type: "error",
    name: "OnlyCoordinatorCanFulfill",
    inputs: [
      { name: "have", type: "address", internalType: "address" },
      { name: "want", type: "address", internalType: "address" },
    ],
  },
]
