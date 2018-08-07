function revertFilter() {
	Caman('#my-image', function () {
	    this.revert()
	  });
}

function applyFilter() {
	Caman('#my-image', function () {
	    this.brightness(10);
	    this.contrast(30);
	    this.sepia(60);
	    this.saturation(-30);
	    this.render();
	  });
}

function myAlert(){
	alert('hi');
}
// function applyVintageFilter() {
//   Caman('#my-image', function() {
//       this['vintage']();
//       this.render();
//     });
// }
	
/*
Full list of available filters:
vintage, lomo, clarity, sinCity, sunrise, 
crossProcess, orangePeel, love, grungy, 
barques, pinhole, oldBoot, glowingSun, 
hazyDays, herMajest, nostalgia, hemingway, 
concentrate
*/

function applyCrop() {
	Caman("#my-image", function () {
	  // width, height, x, y
	  this.crop(500, 300);
	  this.render();
	});
}

function applyResize() {
	Caman("#my-image", function () {
	  this.resize({
	    width: 1000,
	    height: 600
	  });
	  this.render();
	});

}
