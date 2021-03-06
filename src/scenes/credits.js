import Phaser from 'phaser';

export default class Credits extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    const { height, width } = this.sys.game.config;
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Alvaro Ruiz', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(
      width / 2, height / 2,
      width, height,
    );

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    this.madeByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: () => this.destroy,
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: () => {
        this.madeByTween.destroy();
        this.scene.start('Title');
      },
    });
  }
}
