import san from 'san';
import Child from "./child";
var MyApp = san.defineComponent({
    template: `<div>
               <child></child>
        <div>
            我是父组件：{{msg}}
        </div>
</div>`,
    initData:function () {
        return{
            msg:""
        }
    },
    components:{
        'child':Child
    },
    messages:{
        "mes":function (msg) {
            this.data.set("msg",msg.value);
            console.log("I will send some msg")
            this.dispatch("msg",this.data.get("msg"));
        }
    }
});
export default MyApp;