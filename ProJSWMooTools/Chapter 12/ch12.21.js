var tween = new Fx.Tween('square', {
    duration: 1000,
    fps: 50
});
tween.start('height', 30);
tween.start('height', 20, 30);
