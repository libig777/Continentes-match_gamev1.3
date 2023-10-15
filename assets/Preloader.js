
// You can write more code here

/* START OF COMPILED CODE */

class Preloader extends Phaser.Scene {
	
	constructor() {
		super("Preloader");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// text_1
		const text_1 = this.add.text(400, 300, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.tintTopLeft = 15321605;
		text_1.tintTopRight = 16709858;
		text_1.text = "Loading...";
		text_1.setStyle({"fontSize":"32px"});
	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){

		this.editorCreate()
		//RollerDots.create(this, 400, 250)
			//.play()
	}

	preload() {

		//this._create();

		//this._preload();
		/*this.editorCreate()

		this.load.on(Phaser.Loader.Events.PROGRESS, p => {

			this.text_1.text = "Loading " + Math.floor(p * 100) + "%...";
		});

		this.load.on(Phaser.Loader.Events.COMPLETE, () => {
			//console.log("iniciar Welcome")
			this.scene.start("Welcome");
		});*/
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
