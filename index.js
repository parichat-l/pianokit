
function handleClick() {
	var button, i;
	button = document.querySelectorAll(".key");
	for (i = 0; i < button.length; i++){
		button[i].addEventListener("click", function(){
			
			console.log(this.innerHTML);
			var buttonInnerHTML = this.innerHTML;

			makeSound(buttonInnerHTML);

		});
	}
}

document.addEventListener("keypress", function(event) {
	console.log(event.key);
	makeSound(event.key);
});

function makeSound(key) {
	// switch
	switch (key) {
		case "a": 
			var cmajor = new Audio('sounds/piano-c_C_major.mp3');
			cmajor.play();
			break;

		case "s":
			var dmajor = new Audio('sounds/piano-d_D_major.mp3');
			dmajor.play();
			break;

		case "d":
			var emajor = new Audio('sounds/piano-e_E_major.mp3');
			emajor.play();
			break;

		case "f":
			var fmajor = new Audio('sounds/piano-f_F_major.wav');  
			fmajor.play();
			break;

		case "g":
			var gmajor = new Audio('sounds/piano-g_G_major.mp3');
			gmajor.play();
			break;

		case "h":
			var amajor = new Audio('sounds/piano-a_A_major.mp3');
			amajor.play();
			break;

		case "j":
			var bmajor = new Audio('sounds/piano-b_B_major.wav'); 
			bmajor.play();
			break;
	}

}

handleClick()