import './assert/style/common.css';
import san,{DataTypes} from 'san';
import sanInput from './components/san-input.san';
import sanFormItem from './components/san-form-item.san';
import sanForm from './components/san-form.san'
var MyApp = san.defineComponent({
    template: `<div>
    <p>{{value}}</p>
    <san-form s-ref="form" formModel="{=test=}" labelPosition="left" labelWidth="100px">
        <san-form-item labelValue="1234" prop="try" rules="{=rule=}" label="我是一个标签">
            <san-input  on-input="dealInput" value="{=test.try=}"></san-input>
        </san-form-item>
    </san-form>
    <button on-click="reset">重置</button>
</div>`,
    initData:function () {
        return{
           isRed:true,
            msg:"",
            value:"",
            test:{
               'try':1234,
                'tty':2345
            },
            rule:[ {
                    required: true,
                    message: '必选',
                    type: 'string'
                },
                {

                    min: 6,
                    message: '用户名需不少于6个字符'
                },
                {
                    max: 20,
                    message: '用户名需不超过20个字符'
                }]
        }
    },
    components:{
        'san-input':sanInput,
        'san-form-item':sanFormItem,
        'san-form':sanForm
    },
    reset(){
        this.ref('form').resetFields();
    },
    dealInput(){
        this.ref('form').validate();
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));