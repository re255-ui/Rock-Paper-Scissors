const usersChoice = Vue.message
console.log("User Choice" + usersChoice)
let opponentsChoices = ["Rock", "Paper", "Scissors"]
let opponentsChoice = opponentsChoices[Math.floor(Math.random() * opponentsChoices.length)]
console.log("Opponents Choice: " + opponentsChoice)
var app = Vue.createApp({
	setup() {
    var message = Vue.ref("Rock, Paper, Scissors")

    var play=() => {
    if (message.value == "Rock" && opponentsChoice == "Scissors" ) {
        console.log("You win!")
    }
    if (message.value == "Scisors" && opponentsChoice == "Paper" ) {
        console.log("You win!")
    }
    if (message.value == "Paper" && opponentsChoice == "Rock" ) {
        console.log("You win!")
    }
    if (message.value == "Rock" && opponentsChoice == "Paper" ) {
        console.log("You lose!")
    }
    if (message.value == "Paper" && opponentsChoice == "Scissors" ) {
        console.log("You lose!")
    } 
    if (message.value == "Scissors" && opponentsChoice == "Rock" ) {
        console.log("You lose!")
    }
    if (message.value == "Paper" && opponentsChoice == "Paper" ) {
        console.log("Draw!")
    }   
    if (message.value == "Scissors" && opponentsChoice == "Scissors" ) {
        console.log("Draw!")
    }
    if (message.value == "Paper" && opponentsChoice == "Paper" ) {
        console.log("Draw!")
    }         
    }

		return {
			message,
            play
		}
	}
}).mount("#app")