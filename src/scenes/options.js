import Phaser from 'phaser';
import Button from '../game-objects/button';

class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'checkbox2');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(200, 300, 'checkbox2');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', (() => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    }));

    this.soundButton.on('pointerdown', (() => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    }));

    this.menuButton = new Button(this, 400, 500, 'greenButton1', 'greenButton2', 'Menu', 'Title');

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('checkbox1');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkbox2');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('checkbox1');
    } else {
      this.soundButton.setTexture('checkebox2');
    }
  }
}

export default OptionsScene;
