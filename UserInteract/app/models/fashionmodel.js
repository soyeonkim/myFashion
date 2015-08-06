var FashionModel = Backbone.Model.extend({

	url: undefined,
    

	initialize: function() {
	},

	parse: function(response) {
		var that = this;

		// update url
		var newUrl = "http://assets.burberry.com/is/image/Burberryltd/";
        var catalog_id = response.id;
        // for example
        // http://assets.burberry.com/is/image/Burberryltd/56f2760093eaa97da4181154cd83d5beed889aa5?$cell_width_retina5$
		response.cover = newUrl+catalog_id;


		return response;
	}
});
