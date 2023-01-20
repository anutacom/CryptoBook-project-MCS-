import provider from "./provider"
import {ethers} from "ethers"

const address = "0xC4b92E363E2fbCE2d7A61f2d763A6A7a11272E73"
const abi= [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_telegram",
        "type": "string"
      }
    ],
    "name": "createContact",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_telegram",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_discord",
        "type": "string"
      }
    ],
    "name": "createContact",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "ownerToContact",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const ethABI = [
    "function ownerToContact (address) public view returns (address)",
    "function createContact(string, string)public",
    "function createContact(string)public"
]
const contactFactory = new ethers.Contract (address, ethABI, provider)

export default contactFactory