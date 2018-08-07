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
// YouTube video: http://bit.ly/camanfun

function applyVintageFilter() {
	Caman('#my-image', function () {
	    this['vintage']();
	    this.render();
	  });
}

function applyOrangyness() {
	Caman('#my-image', function () {
	    this['orangePeel']();
	    this.render();
	  });
}

function applyGamma() {
	Caman('#my-image', function () {
	    this.gamma(1.2);
	    this.render(function () {
		    this.save("/output.png");
		  });
	  });
}


function applySinCity() {
	Caman('#my-image', function () {
		this.contrast(100);
        this.brightness(15);
        this.exposure(10);
        this.posterize(80);
        this.clip(30);
        this.greyscale()
       	this.render();
	  });
}