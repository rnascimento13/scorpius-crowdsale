/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Crowdsale, CrowdsaleInterface } from "../Crowdsale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161092c38038061092c83398101604081905261002f9161019b565b6001600055826100865760405162461bcd60e51b815260206004820152601460248201527f43726f776473616c653a2072617465206973203000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0382166100ea5760405162461bcd60e51b815260206004820152602560248201527f43726f776473616c653a2077616c6c657420697320746865207a65726f206164604482015264647265737360d81b606482015260840161007d565b6001600160a01b03811661014c5760405162461bcd60e51b8152602060048201526024808201527f43726f776473616c653a20746f6b656e20697320746865207a65726f206164646044820152637265737360e01b606482015260840161007d565b600392909255600280546001600160a01b039283166001600160a01b031991821617909155600180549290931691161790556101de565b6001600160a01b038116811461019857600080fd5b50565b6000806000606084860312156101b057600080fd5b8351925060208401516101c281610183565b60408501519092506101d381610183565b809150509250925092565b61073f806101ed6000396000f3fe60806040526004361061004e5760003560e01c80632c4e722e146100685780634042b66f1461008c578063521eb273146100a1578063ec8ac4d8146100d3578063fc0c546a146100e157600080fd5b3661006357610061336100ff565b6100ff565b005b600080fd5b34801561007457600080fd5b506003545b6040519081526020015b60405180910390f35b34801561009857600080fd5b50600454610079565b3480156100ad57600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610083565b61006161005c3660046105d0565b3480156100ed57600080fd5b506001546001600160a01b03166100bb565b600260005414156101575760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026000553461016782826101e7565b6000610172826102a1565b905081600454610182919061060f565b60045561018f83826102c5565b60408051838152602081018390526001600160a01b0385169133917f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b910160405180910390a36101dd6102cf565b5050600160005550565b6001600160a01b0382166102505760405162461bcd60e51b815260206004820152602a60248201527f43726f776473616c653a2062656e656669636961727920697320746865207a65604482015269726f206164647265737360b01b606482015260840161014e565b8061029d5760405162461bcd60e51b815260206004820152601960248201527f43726f776473616c653a20776569416d6f756e74206973203000000000000000604482015260640161014e565b5050565b600062989680600354836102b59190610627565b6102bf9190610646565b92915050565b61029d828261030b565b6002546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610308573d6000803e3d6000fd5b50565b60015461029d906001600160a01b031683836040516001600160a01b03831660248201526044810182905261037f90849063a9059cbb60e01b9060640160408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610384565b505050565b60006103d9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104569092919063ffffffff16565b80519091501561037f57808060200190518101906103f79190610668565b61037f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161014e565b6060610465848460008561046f565b90505b9392505050565b6060824710156104d05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161014e565b843b61051e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161014e565b600080866001600160a01b0316858760405161053a91906106ba565b60006040518083038185875af1925050503d8060008114610577576040519150601f19603f3d011682016040523d82523d6000602084013e61057c565b606091505b509150915061058c828286610597565b979650505050505050565b606083156105a6575081610468565b8251156105b65782518084602001fd5b8160405162461bcd60e51b815260040161014e91906106d6565b6000602082840312156105e257600080fd5b81356001600160a01b038116811461046857600080fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115610622576106226105f9565b500190565b6000816000190483118215151615610641576106416105f9565b500290565b60008261066357634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561067a57600080fd5b8151801515811461046857600080fd5b60005b838110156106a557818101518382015260200161068d565b838111156106b4576000848401525b50505050565b600082516106cc81846020870161068a565b9190910192915050565b60208152600082518060208401526106f581604085016020870161068a565b601f01601f1916919091016040019291505056fea26469706673582212200dd22e7cdcc0000cd689752d2018475c35bab47179bd4d57be982aacc1f49fc864736f6c63430008090033";

type CrowdsaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdsaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Crowdsale__factory extends ContractFactory {
  constructor(...args: CrowdsaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    rate: BigNumberish,
    wallet: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Crowdsale> {
    return super.deploy(
      rate,
      wallet,
      token,
      overrides || {}
    ) as Promise<Crowdsale>;
  }
  getDeployTransaction(
    rate: BigNumberish,
    wallet: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(rate, wallet, token, overrides || {});
  }
  attach(address: string): Crowdsale {
    return super.attach(address) as Crowdsale;
  }
  connect(signer: Signer): Crowdsale__factory {
    return super.connect(signer) as Crowdsale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdsaleInterface {
    return new utils.Interface(_abi) as CrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Crowdsale {
    return new Contract(address, _abi, signerOrProvider) as Crowdsale;
  }
}
