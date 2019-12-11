q = document.getElementById ("lol") ;
t = document.getElementById ("03") ;
w = document.getElementById ("Flex") ;
k = document.getElementById ("Blueface") ;
j = document.getElementById ("Drizzy") ;
d = document.getElementById ("Da") ;
c = document.getElementById ("Ohgeesy") ;
n = document.getElementById ("Wayne") ;
var audio1= new Audio('Sounds/sherm.mp3');
var audio2= new Audio('Sounds/Rude03.mp3');
var audio3= new Audio('Sounds/fenix.mp3');
var audio4= new Audio('Sounds/bluefacesc.mp3');
var audio5= new Audio('Sounds/drakeaudio.mp3');
var audio6= new Audio('Sounds/dababya.mp3');
var audio7= new Audio('Sounds/ohgeesy.mp3');
var audio8= new Audio('Sounds/abortion.mp3');


function changeImg() {
	q.src="Images/mikeshermlyrics.jpg";
	audio1.play();
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeGreedo() {
	t.src="Images/03lyric.jpg";
	audio1.pause();
	audio1.currentTime = 0
	audio2.play();
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeFenix() {
	w.src="Images/FFlyric.jpg";
	audio1.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.play();
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeBface() {
	k.src="Images/Bface.jpg";
	audio4.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.play();
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeDrake() {
	j.src="Images/Drake.jpg";
	audio1.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
	audio5.play();
}
function changeBaby() {
	d.src="Images/Dababy.jpg";
	audio1.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
	audio6.play();
}
function changeOhgeesy() {
	c.src="Images/ohgeesylyric.jpg";
	audio1.pause();
	audio6.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.play();
	audio8.pause();
	audio8.currentTime = 0
}
function changeWayne() {
	n.src="Images/waynelyric.jpg";
	audio6.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.play();
	
}
function resetImages() {
	//MIKE
	q.src="Images/mike sherm.jpg";
	audio1.pause();
	audio1.currentTime = 0;
	
	//03-GREEDO
	t.src="Images/03-Greedo.jpg";
	audio2.pause();
	audio2.currentTime = 0;
	
	//FENIXFLEXIN
	w.src="Images/unnamed.jpg";
	audio3.pause();
	audio3.currentTime = 0;
	
	//Blueface
    k.src="Images/Blueface.jpg"
	audio4.pause();
	audio4.currentTime = 0;
	
	//drake
	j.src="Images/Drake.jpg";
	audio5.pause();
	audio5.currentTime = 0;
	
	//dababy
	d.src="Images/Dababy.jpg";
	audio6.pause();
	audio6.currentTime = 0;
	
	//ohgeesy
	c.src="Images/ohgeesy.jpg";
	audio7.pause();
	audio7.currentTime = 0;
	
	
	// lilwayne
	n.src="Images/lilwayne.jpg";
	audio8.pause();
	audio8.currentTime = 0;
	

	
}