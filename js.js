let width = block.offsetWidth - text.offsetWidth - 50

function animate({timing, draw, duration}) {
		  let start = performance.now();
		  requestAnimationFrame(function animate(time) {
		    let timeFraction = (time - start) / duration;
		    if (timeFraction > 1) timeFraction = 1;

		    let progress = timing(timeFraction);
		    draw(progress);

		    if (timeFraction < 1) {
		      requestAnimationFrame(animate);
		    }

		  });
		}

		setTimeout(() => {animate({
		  duration: 500,
		  timing(timeFraction) {
		    return timeFraction;
		  },
		  draw(progress) {
		    block.style.width = progress * 100 + '%';
		  }
		})} , 20)

		setTimeout(() => { 
			animate({
			  duration: 1000,
			  timing(timeFraction) {
			    return timeFraction;
			  },
			  draw(progress) {
			  	color_1.style.opacity = 1;
			    color_1.style.height = progress * 80 + '%';
			  }
			})
			color_1.style.display = 'block'
		} , 1000)

		setTimeout(() => { 
			animate({
			  duration: 1000,
			  timing(timeFraction) {
			    return timeFraction;
			  },
			  draw(progress) {
			  	color_2.style.opacity = 1;
			    color_2.style.height = progress * 50 + '%';
			  }
			})
			color_2.style.display = 'block'
		} , 2000)

		setTimeout(() => { 
			animate({
			  duration: 1500,
			  timing(timeFraction) {
			    return Math.pow(timeFraction, 2) * ((1.2 + 1) * timeFraction - 1.2)
			  },
			  draw(progress) {
			  	text.style.opacity = 1;
			    text.style.left = progress * width + 'px';
			  }
			})
		} , 3000)

