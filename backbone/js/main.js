var AppRouter = Backbone.Router.extend({
    
    routes: {
        ""      : "page1",
        "page1" : "page1",
        "page2" : "page2",
        "page3" : "page3"
    },
    
    initialize: function(contentEl) {
        this.el = $(contentEl);
    },
    
    page1: function() { 
        this.page("Page 1"); 
    },
    
    page2: function() { 
        this.page("Page 2"); 
    },
    
    page3: function() { 
        this.page("Page 3"); 
    },
    
    page: function(title) {
        this.el.html(new PageView({title: title}).el);
    }
})

!function() {
    app = new AppRouter('#content');
    Backbone.history.start();
}();