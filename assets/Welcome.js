
// You can write more code here
var myMusic;
/* START OF COMPILED CODE */

class Welcome extends Phaser.Scene {
	
	constructor() {
		super("Welcome");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// bacgroundContinentesTrans
		this.add.image(402, 300, "bacgroundContinentesTrans");
		
		// text_1
		const text_1 = this.add.text(138, 223, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.tintTopLeft = 14376736;
		text_1.tintTopRight = 15536363;
		text_1.text = "Instrucciones\n";
		text_1.setStyle({"color":"#eeddddff","fontFamily":"Calibri","fontSize":"40px","fontStyle":"bold","stroke":"#2c06aaff","strokeThickness":3});
		
		// text_2
		const text_2 = this.add.text(391, 347, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Desplazar el personaje hasta un bloque con las flechas de desplazamiento.";
		text_2.setStyle({"fontFamily":"Arial","fontSize":"22px","stroke":"#030303ff","strokeThickness":3});
		
		// text_2_1
		const text_2_1 = this.add.text(286, 397, "", {});
		text_2_1.setOrigin(0.5, 0.5);
		text_2_1.text = "Destapar los bloques con la tecla espaciadora.";
		text_2_1.setStyle({"fontFamily":"Arial","fontSize":"25px","stroke":"#030303ff","strokeThickness":3});
		
		// image_1
		const image_1 = this.add.image(431, 478, "texture", "Button Pack - Green_Button Green - Play.png");
		image_1.scaleX = 0.5;
		image_1.scaleY = 0.5;
		
		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(400, 97, "hyperdrive", "Los Continentes");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Los Continentes";
		bitmaptext_1.fontSize = 80;
		bitmaptext_1.align = 1;
		bitmaptext_1.letterSpacing = 2;
		
		// text_3
		const text_3 = this.add.text(13, 233, "", {});
		text_3.text = "Tu misión es encontrar las parejas del continente con su nombre.";
		text_3.setStyle({"fontFamily":"Arial","fontSize":"25px","stroke":"#030303ff","strokeThickness":3});
		
		// text_3_1
		const text_3_1 = this.add.text(18, 284, "", {});
		text_3_1.text = "Para eso debes:";
		text_3_1.setStyle({"color":"#f88defff","fontFamily":"Arial","fontSize":"30px","stroke":"#030303ff","strokeThickness":3});
		
		// image_1 (components)
		new InteractiveObject(image_1);
		const image_1StartSceneOnClick = new StartSceneOnClick(image_1);
		image_1StartSceneOnClick.sceneKey = "Level";
		new PushOnClick(image_1);
		
		// bitmaptext_1 (components)
		new FloatingObject(bitmaptext_1);
	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		this.editorCreate()
		// sonido ambiental
		myMusic = this.sound.add('music')
		myMusic.play({ loop: true, volume: 0.02 })
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
