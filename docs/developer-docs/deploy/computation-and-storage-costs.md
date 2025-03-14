# Computation and Storage Costs

The Internet Computer requires computation operations and storage to be supported by cycles. Cycles are generated from the conversion of Internet Computer (ICP) utility tokens.

## The Role of the Network Nervous System (NNS) in Defining Costs

The Internet Computer is a decentralized public utility, controlled by the NNS –– the network’s open, algorithmic governance system. The NNS fundamentally controls how many cycles are required for low-level computation actions for computation and storage. The number of cycles needed for individual computations will vary based on a number of factors considered by the NNS, including proposals from the community.

## Details: Cost of Compute and Storage Transactions on the Internet Computer

Canister smart contract computations running on the Internet Computer blockchain are fueled by “cycles”, which play a similar role to “gas” on Ethereum. There are several major differences however. One of the most fundamental differences is that Ethereum leverages “user pays” and the Internet Computer and “smart contract pays” (sometimes called “reverse gas”) model. Whereas the Ethereum blockchain requires end users to send payments for the gas smart contracts consume with every transaction, on the Internet Computer, Canister smart contracts are pre-charged with cycles, such that contracts effectively pay for their own computation - freeing users from the responsibility.

See below for details on the cost of compute and storage transactions on the Internet Computer as of August 29, 2022.
A thorough example how the cost of running a canister is computed can be found [here](https://medium.com/@DBOXFoundation/findings-from-calculating-the-cycle-consumption-of-messity-a-universal-example-b2af8dcd3151).

| Transaction                          | Description                                                                                                    | All Application Subnets |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------|
| Canister Created                     | For creating canisters on a subnet                                                                             | 100,000,000,000         |
| Compute Percent Allocated Per Second | For each percent of the reserved compute allocation (a scarce resource).                                       | 10,000,000              |
| Update Message Execution             | For every update message executed                                                                              | 590,000                 |
| Ten Update Instructions Execution    | For every 10 instructions executed when executing update type messages                                         | 4                       |
| Xnet Call                            | For every inter-canister call performed (includes the cost for sending the request and receiving the response) | 260,000                 |
| Xnet Byte Transmission               | For every byte sent in an inter-canister call (for bytes sent in the request and response)                     | 1,000                   |
| Ingress Message Reception            | For every ingress message received                                                                             | 1,200,000               |
| Ingress Byte Reception               | For every byte received in an ingress message                                                                  | 2,000                   |
| GB Storage Per Second                | For storing a GB of data per second                                                                            | 127,000                 |

Note: System API calls are just like normal function calls from the WebAssembly stand point. The number of instructions each call takes depends on the work done.

Cycles Cost per Transaction (as of August 29, 2022)

The $USD cost for transactions below is based on the above cycle costs. 1 XDR is equal to 1 Trillion cycles. As of August 29, 2022, the exchange rate for 1 XDR = $1.301940. The exchange rate for USD/XDR may vary and it will impact the conversion rate. For XDR exchange rates please visit: <https://www.imf.org/external/np/fin/data/rms_sdrv.aspx>

To derive the estimated GB Storage per month, we assume a 30 day month.

| Transaction                          | Description                                                                                                    | All Application Subnets |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------|
| Canister Created                     | For creating canisters on a subnet                                                                             | $0.130194                 |
| Compute Percent Allocated Per Second | For each percent of the reserved compute allocation (a scarce resource).                                       | $0.0000130194           |
| Update Message Execution             | For every update message executed                                                                              | $0.0000007681446          |
| Ten Update Instructions Execution    | For every 10 instructions executed when executing update type messages                                         | $0.000000000005208        |
| Xnet Call                            | For every inter-canister call performed (includes the cost for sending the request and receiving the response) | $0.0000003385044          |
| Xnet Byte Transmission               | For every byte sent in an inter-canister call (for bytes sent in the request and response)                     | $0.00000000130194         |
| Ingress Message Reception            | For every ingress message received                                                                             | $0.000001562328           |
| Ingress Byte Reception               | For every byte received in an ingress message                                                                  | $0.00000000260388         |
| GB Storage Per Second                | For storing a GB of data per second                                                                            | $0.00000016534638         |

Cost per Transaction in $USD (as of August 29, 2022)

Assuming a 30 day month — 

|                      |                                    |        |
|----------------------|------------------------------------|--------|
| GB Storage Per Month | For storing a GB of data per month | $0.429 |
