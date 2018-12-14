'use strict';

define(['jquery', 'underscore', 'marionette', 'backbone.radio', 'text!tmpl/main.html', 'view/list'],
function($, _, Mn, Radio, templateHTML, ListColView) {
    var view = Mn.View.extend({
        template: _.template(templateHTML),
        ui: {
            txt: ".txtName"  
        },
        events: {
            "click .btn": "click",
            "click .addItem": "addItem",
            "click .removeItem": "removeItem"
        },
        regions: {
            list: ".listRegion"
        },
        initialize: function() {
            var me = this;            
            var channelApp = Radio.channel("app");                        
            me.app = channelApp.request("app:get");                    var me = this;            
            var channelApp = Radio.channel("app");                        
            me.app = channelApp.request("app:get");                    
        },
        onRender: function() {
            /*
            this.listColView = new ListColView({collection: this.collection});
            this.listColView.render();
            this.$el.append(this.listColView.$el);
            */
            
            this.showChildView("list", new ListColView({collection: this.collection}));
                                                        
            console.log('main - render');
        },
        onDestroy: function() {
            console.log('main - destroy');
        },
        click: function(event) {
            console.log("main - click!");
        },
        addItem: function(event) {
            var me = this;
            me.app.addItem({id: this.collection.length, name: this.ui.txt.val(), age: 30});
            //this.collection.add({id: this.collection.length, name: this.ui.txt.val(), age: 30});
        },
        removeItem: function(event) {
            //this.collection.pop();
        },
        onChildviewDeleteItem: function(childView) {            
            //this.collection.remove(childView.model);
        }
    });
    
    return view;
});

