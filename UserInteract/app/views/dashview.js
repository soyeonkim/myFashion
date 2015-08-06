var DashView = Backbone.View.extend({

    isLoaded : false,
    events : {
        "click #lesfashions": "navigateCollection"
    },

    initialize : function() {
        if (Skymedic.LOG) console.log('DashView.initialize');
        this.template = Handlebars.compile($('#dashTemplate').html());
        if (Skymedic.LOG) console.log('DashView.InitDashLoad', this.dashload);

    },

    resize: function() {
        var lesfashionsContainer = this.$el.find("#lesfashions");
        var containerWidth = lesfashionsContainer.parent().width();
        var containerHeight = lesfashionsContainer.parent().height();

        var axis = "width";
        var otherAxis = "height";
        var dimension = Math.floor(containerWidth*0.9);
        
        if(containerWidth>containerHeight) {
            axis = "height";
            otherAxis = "width";
            dimension = Math.floor(containerHeight*0.9);
        }

        var top = (containerHeight-dimension)/2-(dimension/16);
        var left = (containerWidth-dimension)/2-(dimension/16);

        lesfashionsContainer.css(axis, dimension);
        lesfashionsContainer.css(otherAxis, dimension);
        lesfashionsContainer.css("top", top);
        lesfashionsContainer.css("left", left);
    },

    render : function(eventName) {
        if(Skymedic.LOG) console.log('DashView.render');

        this.$el.html(this.template());
        this.resize();
        
        return this;
    },

    reset : function() {
        var that = this;
        setTimeout(function() {
            that.$el.find("#lesfashions").removeClass("animated-dash-lesfashions-offscreen");
        }, 400);
    },

    navigateCollection : function() {
        setTimeout(function() {
            window.location.href = "#/app/lesfashions";
        }, 400);
    }
});
