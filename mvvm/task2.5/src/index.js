import './asserts/style/common.css';
import san,{DataTypes} from 'san';
import sanCheckbox from './components/san-checkbox.san';
import sanInput from './components/san-input.san';
import sanCheckGroup from './components/san-check-group.san';
var MyApp = san.defineComponent({
    template: `<div>
    <san-checkbox></san-checkbox>
    <san-input textarea></san-input>
    <san-check-group data="{=data=}">
        <san-checkbox trueValue="1234"></san-checkbox>
        <san-checkbox trueValue="2345"></san-checkbox>
    </san-check-group>
    我是复选框，我的值是：{{data}}
    <san-input></san-input>
</div>`,
    initData:function () {
        return{
           isRed:true,
            data:[]
        }
    },
    components:{
        'san-input':sanInput,
        'san-checkbox':sanCheckbox,
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