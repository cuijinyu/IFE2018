import san,{DataTypes} from 'san';
import sanCheckbox from './san-checkbox.js';
import sanInput from './san-input';
import sanCheckGroup from './san-check-group';
var MyApp = san.defineComponent({
    template: `<div>
    <san-checkbox></san-checkbox>
    <san-input></san-input>
    <san-check-group>
        <san-checkbox trueValue="1234"></san-checkbox>
        <san-checkbox trueValue="2345"></san-checkbox>
    </san-check-group>
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
        'san-checkbox':sanCheckbox,
        'san-input':sanInput,
        'san-check-group':sanCheckGroup
    },
    messages:{
        "msg":function (msg) {
            this.data.set("msg",msg.value);
        }
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));