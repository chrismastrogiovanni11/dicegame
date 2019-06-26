// function WhoGetsPossesion (FirstRollPlayerOne)


function NamePlayers(){
	let userName1 = prompt ("Enter Player One Name");
console.log(userName1)
}
NamePlayers()

	// let score = 0
	// let PlayerOne = NamePlayers(userName1)
	// let GamePoint = 21
	// let turnThing = DiceRoll(6);
	// let Foul = DiceRoll(12);
	// let freethrowShot = DiceRoll(8);
	// let Jumpshot = DiceRoll(10);
	// let ThreePointer = DiceRoll(20);
	// let GameWinner = DiceRoll(16);


function DiceRoll(){

	let DiceRoll = Math.ceil(Math.random() * )
	let roll = DiceRoll;
	console.log(roll)

}

function playBasketBall(){
	
	let turnThing = DiceRoll(6);


// 	console.log("")
	if(turnThing > 4){
		console.log("Player One's turn")
		return;


	}else {
		console.log("Player Two's turn")
		}return;
}
// // let Foul = DiceRoll(12);

// 	if (Foul > 4){
// 	console.log("There was a foul!")
	

// 	}else{
// 		console.log("Continue play")
// 	}

// // let freethrowShot = DiceRoll(8);

// 	if(freethrowShot >= 5){
// 	console.log("Free throw was made")
// 	score++

// 	}else{
// 		console.log("Brick!")
// 	}
// // let Jumpshot = DiceRoll(10);

// 	if(Jumpshot >= 6){
// 		console.log("Getting Buckets!")
// 		score+2
	
// 	}else{
// 		console.log("You missed and lost possession")
// 	}


// // let ThreePointer = DiceRoll(20);

// 	if(ThreePointer >= 15){
// 		console.log("That's a three pointer!")
// 		score+3
// 	}else
// 	console.log("You missed and lost possession")

// // let GameWinner = DiceRoll(16);
// // let buzzerbeater = true

// // while (buzzerbeater = true)

// 	if (GameWinner >= 8){
// 	console.log("You Won! You did that!")

// 	}else{
// 	console.log("Sorry return to 16!")
// 		}

playBasketBall()

DiceRoll()



//How do I keep score in game? on the back end without ending loop?
// Do i have to use multiple while loops in order to keep  game going?
//How do i prevent it from ending game once while loops eventually stop?