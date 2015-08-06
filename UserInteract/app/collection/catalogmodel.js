var CatalogModel = Backbone.Collection.extend({

	model: FashionModel,
	url: undefined,


	initialize: function(model, options) {
		this.type = options.type;
		this.name = options.name;
		this.url = "http://assets.burberry.com/is/image/Burberryltd/";
	},

	fetch: function(options) {
		if(!options) (options = {});

		Backbone.Collection.prototype.fetch.call(this, options);
	},

	parse: function(response) {
		if(Skymedic.LOG) console.log("CatalogModel parse", response);

		if(!response || !response.newArrive || response.newArrive.length<1) {
			if(Skymedic.LOG) console.log("No caltalog in response.");
		}

		return response.newArrive;
	}

});
