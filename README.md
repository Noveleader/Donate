<h1> A Web App to Donate </h1>
<hr>
<p>The project leverages blockchain to make decentralized donations for the students who have backlogs. This is a sample project and 
it is not going to be deployed on mainnet. But we deployed it on testnet. You can find the contract [here](https://mumbai.polygonscan.com/address/0xb9aC3D271D01D31DE416F120aB02934C3CfE625D)</p>


<hr>

<h2> Backend </h2>
```Donation.sol```<br>
It is a smart contract which have donating and withdrawing functionalities. It also maintains a mapping of addresses to their donations.

```Scripts```<br>
There are two different script, one is of donating which is hard coded with value of ```0.001``` . You can put any value when it is integrated with 
frontend.


<h2> Frontend </h2>
```HTML, CSS, JS```<br>
Frontend part is kept pretty simple. It only have two buttons which are ```Connect to wallet``` and other is  ```Donate``` with a placeholder for input
from the Dapp user.
![image](https://github.com/Noveleader/Donate/assets/91677627/a973c96d-3e42-4139-ab68-c8ab4846afa7)

