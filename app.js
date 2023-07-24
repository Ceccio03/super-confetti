console.log('super confetti');

function fire1() {
    confetti({
        particleCount: 100,
        spread: 20,
        origin: { y: 0.6 }
      });
}

function fire2() {
    // confetti({
    //     particleCount: 50,
    //     spread: 26,
    //     startVelocity: 55,
    //     origin: {y: 0.7}
    // });
    var count = 200;

    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });

    fire(0.2, {
        spread: 60,
    });

    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

function fire3() {
    console.log('3');
}