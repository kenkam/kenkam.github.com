window.PageView = Backbone.View.extend({
    template: _.template($('#page-template').html()),
    
    initialize: function(model) {
        this.render(model);
    },
    
    render: function(model) {
        $(this.el).html(this.template(model));
        return this;
    }
})