var Skymedic = Skymedic || {};

Skymedic.app = {

	start: function() {
		var that = this;

		this.models = {
			fashion: new FashionModel()
		};

		this.collections = {
			latest: new CatalogModel(null, {type: "#newArriveWomenTab", name: "latest"})
		};

		this.views = {
			dash: new DashView({el: '#dashView',
								template: '#dashTemplate',
								model: that.models.code }),

			fashion: new FashionView({el: '#subviewContainer',
								template: '#fashionTemplate' })
		};

		this.router = new AppRouter(this);
		Backbone.history.start();
		this.startupRequests();
	},

	startupRequests: function() {
        setTimeout(function() {
			Skymedic.app.router.removeSplashscreen();
		}, 300);        
	},
    clearCache: function() {
		console.log("Clearing cache...");
	}

};

$(document).ready(function(){
	// init the platform variables
	Skymedic.platform.init( function() {  // desktop , mobile
		if(Skymedic.LOG) console.log("Init complete.");
		Skymedic.app.start();
	});
	
});
