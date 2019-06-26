if 



function NamePlayers(){
let userName1 = prompt ("Enter Player One Name")
let userName2 = prompt ("Enter Player Two Name")
console.log(userName1)
console.log(userName2)
}


NamePlayers()


let diceArray = []
diceArray[0] = DiceRoll(6);
diceArray[1] = DiceRoll(12);
diceArray[2] = DiceRoll(8);
diceArray[3] = DiceRoll(10);
diceArray[4] = DiceRoll(20);
diceArray[5] = DiceRoll(16);


function DiceRoll(n){

let DiceRoll = Math.ceil(Math.random() * n);
let roll = DiceRoll;
console.log(roll)
return (roll);



}

function DiceRollPlayerTwo(n){

let DiceRollPlayerTwo = Math.ceil(Math.random() * n)
let secondroll = DiceRollPlayerTwo
console.log(secondroll)
return (secondroll);



}



let x = DiceRoll
let y = DiceRollPlayerTwo

 function WhoGetsTheBall(){
 	if(x > y){
 		console.log("Player One has the ball!")
 		return;
 	}
 	else if(x < y){
 		console.log("Player Two has the ball!")
 		return;
 	}else{
 		console.log("Roll Again")

 	console.log(WhoGetsTheBall)
 	}
 	

}






let n = 6




let ballone = 
while 

	let userName2 = prompt ("Enter Player Two Name");









let score = 0

let PlayerOne = NamePlayers(userName1)

let GamePoint = 21

let turnThing = DiceRoll(6);
let Foul = DiceRoll(12);
let freethrowShot = DiceRoll(8);
let Jumpshot = DiceRoll(10);
let ThreePointer = DiceRoll(20);
let GameWinner = DiceRoll(16);







function playBasketBall(){
	
	// let turnThing = DiceRoll(6);


	console.log("")
	if(turnThing > 3){
		console.log("Player One's turn")



	}else {
		console.log("Player Two's turn")

	}

// let Foul = DiceRoll(12);

	if (Foul > 4){
	console.log("There was a foul!")
	

	}else{
		console.log("Continue play")
	}

// let freethrowShot = DiceRoll(8);

	if(freethrowShot >= 5){
	console.log("Free throw was made")
	score++

	}else{
		console.log("Brick!")
	}
// let Jumpshot = DiceRoll(10);

	if(Jumpshot >= 6){
		console.log("Getting Buckets!")
		score+2
	
	}else{
		console.log("You missed and lost possession")
	}


// let ThreePointer = DiceRoll(20);

	if(ThreePointer >= 15){
		console.log("That's a three pointer!")
		score+3
	}else
	console.log("You missed and lost possession")

// let GameWinner = DiceRoll(16);
// let buzzerbeater = true

// while (buzzerbeater = true)

	if (GameWinner >= 8){
	console.log("You Won! You did that!")

	}else{
	console.log("Sorry return to 16!")
		}
	}
playBasketBall()



































function NamePlayers(){
	let userName1 = prompt ("Enter Player One Name");
	let username2 = prompt ("Enter Player Two Name");
console.log(userName1)
console.log(userName2)
	return;
}

NamePlayers(userName1)
NamePlayers(userName2)

	let PlayerOneScore = 0
	let PlayerTwoScore = 0
	let PlayerOne = NamePlayers(userName1)
	let PlayerTwo = NamePlayers(userName2)
	let turnThing = r[0];
	let Foul = r[1];
	let freethrowShot = r[2];
	let Jumpshot = r[3];
	let ThreePointer = r[4];
	let GameWinner = r[5];



function playBasketBall(){

	
let r = []
	 r[0] = DiceRoll(6);
	 r[1] = DiceRoll(12);
	 r[2] = DiceRoll(8);
	 r[3] = DiceRoll(10);
	 r[4] = DiceRoll(20);
	 r[5] = DiceRoll(16);

		if(turnThing > 4)
			console.log(PlayerOne "turn"){
				return

			}else
			console.log(PlayerTwo "turn")
			
}







	
	

function DiceRoll(firstroll[n]) {

	let DiceRoll = Math.ceil(Math.random() * firstroll[n])
	let roll = DiceRoll;
	console.log(roll)
	return(roll)



}

// let turnThing = DiceRoll(6);


// 	console.log("")
// 	if(turnThing > 3){
// 		console.log("Player One's turn")
// 		return;


// 	}else {
// 		console.log("Player Two's turn")
// 		return;

// 	}

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
// 	}
// playBasketBall()
// }
// DiceRoll()








// while (userName1Score == 21 && userName2Score < 21){

// }






















