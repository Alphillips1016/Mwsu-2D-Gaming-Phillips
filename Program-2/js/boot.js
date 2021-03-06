var bootState = {
    preload: function () {
        // Load the image
        game.load.image('progressBar', 'assets/progressBar.png');
		
	//	this.jumpSound = game.add.audio('jump');
	//	this.coinSound = game.add.audio('coin');
	//	this.deadSound = game.add.audio('dead');
	},
    create: function() {
        // Set some game settings
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        // Start the load state
        game.state.start('load');
    }
};