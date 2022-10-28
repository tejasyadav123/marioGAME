function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.waw")
	mario_coin = loadSound("coin.waw")
	mario_gameover = loadSound("gameover.waw")
    mario_kick = loadSound("kick.waw")
	mario_die = loadSound("mariodie.waw")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent("canvas")

	instializeInSetup(mario);

	video = createCapture(VIDEO)
	video.size(800 , 400)
	video.parent("game_console")

	poseNet = ml5.poseNet(video , modelloded)
	poseNet.on("pose" , gotposes)
}

function draw() {
	game()
}

function modelloded(){
	console.log("poseNet is loded!")
}

function gotposes(result){
   if(result.langth > 0){
	console.log(result)
	noseX = result[0].pose.nose.x
    noseY = result[0].pose.nose.y
   }
}




