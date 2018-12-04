var score = 0




var hobbies = prompt ("Do you drink, smoke, both or neither?")
if (hobbies == "drink") { 
	score+=2
	var drinkChoice = prompt("Do you perfer liquor or beer?")
	if (drinkChoice == "liquor") {
		var liquorChoice = prompt ("cocktails or straight?")
		if (liquorChoice == "cocktails"){
			score -= 2
			alert(`You must be a girl! Your score is ${score}!`)
		}
		else if (liquorChoice=="straight"){
			score+=5
			alert(`You must like to get straight to the point! Your score is ${score}!`)
		}
	}else if(drinkChoice == "beer"){
		score+=1
		var beerChoice = prompt("IPA or sour?")
		if (beerChoice =="IPA"){
			score-=1
			alert(`Gross. Your score is ${score}!`)
		}
		else if (beerChoice=="sour"){
			score+=6
			alert("samesies. Try Lovelady 9th Island Pineapple Sour, thank me later.")
		}

	}else{
		score-=2
		alert(`You're a dummy that's not a answer! Your score is ${score}!`)
	}


}else if(hobbies == "smoke"){
	score +=1
	var smokeChoice = prompt("Okay lil' smokey, is it cigarettes or ganja?")
	if (smokeChoice == "cigarettes") {
		score-=1
		alert(`Cancer.. DEAD.. Whomp Whomp Whomp. Your score is ${score}!`)
	}
	else if (smokeChoice == "ganja"){
		var ganjaChoice = prompt("grass or edibles?")
		if (ganjaChoice == "grass"){
			score+=6
			alert (`puff puff pass! Your score is ${score}`)
		}
		else if (smokeChoice = "edibles"){
			score+=8
			alert (`Special brownies = special dreams! Your score is ${score}!`)
		}
	}

}else if(hobbies == "both"){
	score+=5
	var bothChoice = prompt("Not sure if I should be concerned. Are you stressed or just a party animal?")
	if (bothChoice == "stressed"){
	var	 join = confirm ("We are same, can I join?")
		if (join == true){
			score+=95
			alert(`Well here is my number 818-720-4538 Your score is ${score}!`)
		}
		else if (join == false){
			score-=5
			alert(`Rude, no wonder! Your score is ${score}!`)
		}
	}else if (bothChoice == "party animal"){
		var kidsChoice = prompt ("Jealous, no kids or too many kids?")
			if (kidsChoice == "no kids"){
				score+=3
				alert(`MUST BE NICE!! Your score is ${score}!`)
			}
			else if (kidsChoice == "too many kids"){
				score-=3
				alert (`You should probably stop drinking, and maybe also wrap it up! Your score is ${score}!`)
	}

	}
	
			


}else{
	alert ("BORING! Game Over!!!")
} 