
var FashionGridView = Backbone.View.extend({

	initialize: function() {
		if(Skymedic.LOG) console.log('FashionGridView.initialize');
		this.template = Handlebars.compile($('#fashionGridTemplate').html());
		this.loadingtemplate = Handlebars.compile($('#loadingTemplate').html());
		this.failedtemplate = Handlebars.compile($('#failedTemplate').html());
		this.tiletemplate = Handlebars.compile($('#fashionTileTemplate').html());

		this.collection.on("add", this.addfashion, this);
		this.collection.on("reset", this.clearView, this);

	},

	render: function() {
		if(Skymedic.LOG) console.log('FashionGridView.render', this.collection.type, this.collection.length);

		var that = this;

		var loadSuccess = function() {
			if(Skymedic.LOG) console.log('Loading success.');

			that.$el.find(".grid-message").remove();
			//TO DO: render images 
            //that.loadTileImage($(this).context.id);
    
		};

		var loadError = function() {
			if(Skymedic.LOG) console.error('Loading error.');
			that.$el.find(".grid-message").remove();
			that.$el.append(that.failedtemplate());
		};

	},

	loadTileImage: function(id) {
		if(this.collection.get(id)) {
            
            this.imageLoaded();
		}
	},

	imageLoaded: function(e) {
		//var tile = $("#"+id);
		//tile.css("background-image", "url('" + e.srcElement.src + "')");
	},

	addfashion: function(model) {	
		// TO DO:
        // var data = model.toJSON();
		//this.$el.append(this.tiletemplate(data));

	},

	clearView: function() {
		if(Skymedic.LOG) console.log("Collection Reset, cleared elements from gridview");
	}
});
