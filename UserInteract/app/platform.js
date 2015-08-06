var Skymedic = Skymedic || {};
Skymedic.LOG = false;

Skymedic.platform = {
	platform: undefined,
	applicationVersion: "0.0.1",

	RenderWidth: 120,


	init: function(success) {
		var that = this;
        that.doInit();
        success();
	},

	doInit: function() {
		var that = this;

		if(Skymedic.LOG) console.log("Platform init...");
        //Platfor : desktop , mobile:ios , android, blackberry, windows etc..
   		that.platform = "desktopwebkit";
        
		// register for focus callbacks
		document.addEventListener('webkitvisibilitychange', function() {
			if(Skymedic.LOG) console.log("webkitvisibility changed "+ document.webkitHidden+ ", "+document.webkitVisibilityState);
		}, false);
		
		console.log("Platform: " + that.platform);
		return that.platform;
	}
};
