
var FashionView = Backbone.View.extend({

	newFashionView: undefined,
	currentView: undefined,

	events: {
		"click #newArriveWomenTab": "changeTab",
		"click #newArriveMenTab": "changeTab",
		"click #newArriveChildrenTab": "changeTab"
        
	},

	initialize: function() {
		if(Skymedic.LOG) console.log('FashionView.initialize');
		this.template = Handlebars.compile($('#fashionTemplate').html());

		// initialise the child grid views
		this.newFashionView = new FashionGridView({ collection: Skymedic.app.collections.latest,
											  template: '#fashionGridTemplate'});

	},

	render: function(eventName) {
		var that = this;
		if(Skymedic.LOG) console.log('FashionView.render');
		this.$el.html(this.template());

		return this;
	},

	changeTab: function(e) {
		// this is only called when a tab is selcted by the user,
		if(!$("#" + e.currentTarget.id).hasClass("active")) {
			this.setTab(e.currentTarget.id);
		} else {
			if(Skymedic.LOG) console.log("same tab selected");
		}
	},

	setTab: function(tabid) {
		tabid = "#" + tabid;
		
		this.$el.find('.button').removeClass("active");
		$(tabid).addClass("active");
		var girdView = undefined;
		switch(tabid) {
			case "#newArriveWomenTab": {
				girdView = this.newFashionView;
			} break;
			default:
				break;
		}

		// selected the correct child view for the grid, now render it
		if(girdView) {
			if(this.currentView) {
				this.currentView.remove();
			}		
			girdView.render();
			$("#tileArea").append(girdView.$el);
			this.currentView = girdView;
		}
		
	}

});

