import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.bgTop = this.add.tileSprite(0, 0, width, 150, 'bgImgTop');
    this.bgTop.setOrigin(0, 0);
    this.bgTop.setScrollFactor(0);

    this.bgImg = this.add.tileSprite(0, 150, width, 96, 'bgImg');
    this.bgImg.setOrigin(0, 0);
    this.bgImg.setScrollFactor(0);

    this.bgBottom = this.add.tileSprite(0, 246, width, 154, 'bgImgBottom');
    this.bgBottom.setOrigin(0, 0);
    this.bgBottom.setScrollFactor(0);

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(0, 200, 'platformImg');
    this.platforms.create(100, 200, 'platformImg');

    this.atlasTexture = this.textures.get('terrain');
    this.frames = this.atlasTexture.getFrameNames();
    this.add.image(0, 0, 'terrain', 'roca').setOrigin(0, 0);
  
    this.add.image(100, 100, 'player');
  }
}

export default Game;
