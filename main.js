
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#0A969A",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade:{
				gravity: { y: 0},
				//debug: true  
			}
		}
	});
	
	game.scene.add("Boot", Boot, true);
	game.scene.add("Preloader",Preloader);
	

});

class Boot extends Phaser.Scene {

	preload() {

		this.scene.launch("Preloader")
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {

		this.time.delayedCall(1000,()=>{
			this.scene.stop("Preloader")
			this.scene.start("Welcome");
			//this.scene.start("Welcome");
			//console.log("iniciar welcome")
		})
		
	}

}