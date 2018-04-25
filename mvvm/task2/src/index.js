import san from 'san';
var MyApp = san.defineComponent({
    template: '<div>Hello world</div>'
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));