import san,{DataTypes} from 'san';
import Card from './san-transition.js';
var MyApp = san.defineComponent({
    template: `<div>
    <san-card></san-card>
</div>`,
    initData:function () {
        return{
           isRed:true,
            msg:""
        }
    },
    components:{
        'san-card':Card
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));