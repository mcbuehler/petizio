# petizio

Petizio is the winning submission for the eGovernment vertical at the [Swiss Blockchain Hackathon 2019](https://hackathon.trustsquare.ch/portfolio/egovernment/).

Petizio is a petition creating and voting app that allows users to vote pseudo-anonymously after veryfing themselves through government identification. Citizens can then create new petitions and vote through the app without the need of exposing their identity in a way that each vote gets count once.  

## Problem Description

Currently there are three approaches to gathering signatures for petitions;

* **Physical:** Physical petitions where signatures are gathered on the street through physical copies. This approach has multiple limitations ranging from signature consolidation to information dissemination. 
* **Private Entities:** Websites such as [change.org](https://www.change.org) digitizes the process of voting and allows users to gather votes and make their issues heard. But the lack of identification creates the problem of a single person signing the petition multiple times.
* **State Owned Websites:** There are solutions provided by the state such as in [Germany](https://epetitionen.bundestag.de/) overcomes the problem of identification of citizens, however they are still vulnerable to attacks and they do not provide full anonymity.

None of these solutions have an identity verification nor provide anonymity for citizens.

## Solution

Our solution is to use governmental facilities to verify the citizens and then register the verified citizens on a private blockchain. The citizens are given pseudo-anonymous IDs that can be identified by the government. Based on this premise;

* The list of verified pseudoanonyms are publicly displayed on the blockchain,
* Verified citizens can create and vote on petitions on the blockchain.
* When a citizen votes they use their anonymized pseudo ID.
* Petitioner can then compare the pseudo id published by the government and then count the votes.
* The counting of the singatures, creation of signature, and petitions are handled by a smart contract.

The entry process to the blockchain is depicted below.

<figure align="center">
  <img src="https://github.com/ssoima/petizio/blob/master/web-app/src/assets/Solution_Explanation.png" alt="not found" style="width:100%">
</figure> 


The development of the project was done as follow;
* A github repository was used to coordinate.
* The repository was then moved into AWS CodeCommit
* A Rest API and Composer was used in an EC2 instance
* This EC2 instance was used between AWS Managed BlockChain and Angular.Js using REST:API.


<figure align="center">
  <img src="https://github.com/ssoima/petizio/blob/master/web-app/src/assets/TechnicalArchitecture.png" alt="not found" style="width:100%">
</figure> 


To coclude Petizio offers three strengths;  
* One vote is one vote: The confirmation method prevents a single agent to vote multiple times.  
* Immutability: Nobody can tamper with votes once they have been written to the blockchain.  
* Anonymity: When the issues are being voted for, it is not known who supports the ideas, people can vote without revealing their identity.  
  
The most important part is thatpetitions create a low-risk, high-reward environment that allows the general public to familiarize themselves with the idea of blockchain in governmental processes. This allows the dissemination of technology and creates the building blocks for a e-voting system.
