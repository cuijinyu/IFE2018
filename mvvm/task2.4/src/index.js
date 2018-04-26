import san,{DataTypes} from 'san';
import Parent from './parent.js';
var MyApp = san.defineComponent({
    template: `<div>
        <parent></parent>
        <div>
            我是祖父组件：{{msg}}
        </div>
</div>`,
    initData:function () {
        return{
           isRed:true,
            msg:""
        }
    },
    changeColor(){
        let isRed = this.data.get("isRed");
        this.data.set("isRed",!isRed);
    },
    components:{
        'parent':Parent
    },
    messages:{
        "msg":function (msg) {
            this.data.set("msg",msg.value);
        }
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));