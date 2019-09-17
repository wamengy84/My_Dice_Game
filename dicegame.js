"use strict"

// function rollDie(numberSides){ //function name(parameter)
// 	let side = Math.floor(Math.random() * numberSides + 1)  //var sides = Round #/returns random # between number of sides(+1 includes last #)
// 		return sides;
// }

// console.log(rollDie(20));

function GameMasterLogic(){
	let distanceRemain = 1150;
	console.log("Make it in the hole in 5. You have " + distanceRemain + " yards remaining.");
	let introMessage = prompt("Are you ready to roll? Use your Driver off the teebox to start off.");
    let driverResult = Drivers();
    distanceRemain = distanceRemain - driverResult;
    console.log("You hit " +  driverResult + " yards with your driver. You have " + distanceRemain + " yards remaining.");
    console.log("Now that you're on the fairway, let's use your fairway Woods.");
    let woodsResult = Woods();
    distanceRemain = distanceRemain - woodsResult;
    console.log("You hit " +  woodsResult + " yards with your fairway wood. You have " + distanceRemain + " yards remaining.");
    console.log("You're getting closer to the pin. Let's see if we can get it closer with the irons.");
    let ironsResult = Irons();
    distanceRemain = distanceRemain - ironsResult;
    console.log("You hit " +  ironsResult + " yards with your irons. You have " + distanceRemain + " yards remaining.");
    console.log("You're in range, time to change it up to your pitch wedge.");
    let wedgesResult = PWedges();
    distanceRemain = distanceRemain - wedgesResult;
    console.log("You hit " +  wedgesResult + " yards with your wedge. You have " + distanceRemain + " yards remaining.");
    console.log("Simple now, just make a good putt.");
    let puttResult = Putter();
    distanceRemain = distanceRemain - puttResult;
    console.log("You hit " +  puttResult + " yards with your putter. You have " + distanceRemain + " yards remaining.");
    console.log("Once last chance to get it in!!!");
    let bonusResult = BonusFinalShot();
    console.log("Thanks for playing, come back again anytime!!!")

}

function rollDie(numberSides){
	let side = Math.floor(Math.random() * numberSides + 1);
	return side;
}

function Drivers(){
		let driverDistance = [400, 300, 200];
		let randomNumberD = rollDie(3);
		let valueGrabD = driverDistance[randomNumberD - 1];
		return valueGrabD;
}

function Woods(){
	let woodsDistance = [350, 300, 250, 200];
	let randomNumberW = rollDie(4);
	let valueGrabW = woodsDistance[randomNumberW - 1];
	return valueGrabW;
}

function Irons(){
	let ironsDistance = [300, 275, 250, 200, 150];
	let randomNumberI = rollDie(5);
	let valueGrabI = ironsDistance[randomNumberI - 1];
	return valueGrabI;
}

function PWedges(){
	let pWedgeDistance = [225, 200, 175, 150, 125, 100];
	let randomNumberPW = rollDie(6);
	let valueGrabPW = pWedgeDistance[randomNumberPW - 1];
	return valueGrabPW;
}

function Putter(){
	let putterDistance = [60, 50, 40, 30, 20, 10, 5];
	let randomNumberP = rollDie(7);
	let valueGrabP = putterDistance[randomNumberP - 1];
	return valueGrabP;
}

function BonusFinalShot(){
	let randomNumberB = rollDie(8);
		if(randomNumberB === 1) {
			console.log("Awesome Shot!!!");
		
		} else if(randomNumberB === 2) {
			console.log("In and Out!!!");

		} else if(randomNumberB === 3) {
			console.log("You need more PRACTICE!!!");
		
		} else if(randomNumberB === 4){
			console.log("Great Shot!!!");
		
		} else if(randomNumberB === 5) {
			console.log("Almost doesn't count!!!");

		} else if(randomNumberB === 6) {
			console.log("Winner!!!");

		} else if(randomNumberB === 7) {
			console.log("Miss by a mile!!!");

		} else if(randomNumberB === 8) {
			console.log("Lucky, in the hole shot!!!");

		}
		
}
		


GameMasterLogic();

