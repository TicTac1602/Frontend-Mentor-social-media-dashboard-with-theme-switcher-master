function dark(argument) {
	var checkBox = document.getElementById("checkbox");
	var card = document.getElementsByClassName("Item_card");
	var number = document.getElementsByClassName("number");
	var header = document.getElementById("header");
	if (checkBox.checked == true) {
		document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
		document.body.style.color = "hsl(0, 0%, 100%)";
		header.style.backgroundColor = "hsl(232, 19%, 15%)";
		for (var i = card.length - 1; i >= 0; i--) {
		  const element = card[i];
		  const num = number[i];
		  num.style.color = "hsl(0, 0%, 100%)";
		  element.classList.replace("light","black");
		}
	}
	else{
		document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
		document.body.style.color = "hsl(230, 17%, 14%)";
		header.style.backgroundColor = "hsl(225, 100%, 98%)";
		for (var i = card.length - 1; i >= 0; i--) {
		  const element = card[i];
		  const num = number[i];
		  num.style.color = "hsl(230, 17%, 14%)";
		  element.classList.replace("black","light");
		}
	}
}

