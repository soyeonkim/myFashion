// Mapping urls into views and actions
var AppRouter = Backbone.Router.extend({

	currentSubView: undefined,
	
	initialize: function(app) {
		this.app = app;
        var that = this;

		$("#fashionscontainer").bind("click", function(e) {
			window.location.href = "#/app/lesfashions";
		});

		$("#dashBtn").bind("click", function(e) {
			window.location.href = "#/dash";
		});

	},

	routes: {
		"": "startApp",
		"dash": "showDash",
		"app": "showApp",
		"app/:subview": "showApp"
	},

	removeSplashscreen: function() {
		if(Skymedic.LOG) console.log("Removing splashscreen");
		$("#splashScreen").fadeOut(1000, function() {
			$("#splashScreen").remove();
		});
	},

	startApp: function() {
		if(Skymedic.LOG) console.log("Starting application");
		this.app.views.dash.render();
		this.setView("dash");
	},

	showDash: function() {
		if(Skymedic.LOG) console.log("Showing dash view...");
		this.app.views.dash.reset();
		this.setView("dash");
	},

	showApp: function(subview) {
		if(Skymedic.LOG) console.log("Showing app view... subview:", subview);
		this.setView("app");

		if(!subview) {
			// no subview specified, this means set it to the last subview
			subview = this.currentSubView ? this.currentSubView : "lesfashions";
		}

		this.setAppSubView(subview);
	},

	renderView: function(view) {
		console.log("render", view);
		view.render();
	},

	setAppSubView: function(subview) {
		if(Skymedic.LOG) console.log("App subview:", subview);
		
		switch(subview) {
			case "lesfashions":
				$("#headerTitle").html("Latest collection");
				this.renderView(this.app.views.fashion);
			break;
			default:
				$("#headerTitle").html("UserInterface");
			break;
		}

		this.currentSubView = subview;
	},

	setView: function(viewID) {
		if(Skymedic.LOG) console.log("AppRouter.setView", viewID);
		switch(viewID) {
			case "dash":
				$("#appArea").removeClass("bottom-app");
				$("#appArea").addClass("top-dash");
			break;
			case "app":
				$("#appArea").removeClass("top-dash");
				$("#appArea").addClass("bottom-app");
			break;
			default:
			break;
		}
	}

});
