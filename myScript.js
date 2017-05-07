		
		var circles = [];
		var sounds = ['bubbles', 'clay', 'corona', 'moon', 'splits', 'strike', 'ufo', 'glimmer', 'timer', 'wipe', 'veil', 'piston-1',
						'piston-2', 'piston-3', 'flash-1', 'flash-2', 'flash-3'];


		function onKeyDown(event) {

			var maxPoint = new Point(window.innerWidth, window.innerHeight); //maximum possible point in view
			var randomPoint = Point.random(); //x random, y random
			var myPoint = maxPoint * randomPoint
			var randomSong = Math.floor(Math.random() * sounds.length);

			myCircle = new Path.Circle(myPoint, 300);
			myCircle.fillColor = 'blue';
			circles.push(myCircle);

			var sound = new Howl({
				src: ["sounds/" + sounds[randomSong] + ".mp3"]
			});

			sound.play();



		}

		function onFrame(event) {

			for (var i=0; i<circles.length; i++){
				circles[i].fillColor.hue += 1;
				circles[i].scale(0.9);
			}
		}
