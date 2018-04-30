// require("./css/common.css");
import style from './css/common.css'
import list from './components/san-list.san'
import {transition} from 'san-transition'
import sanMessageBox from './components/san-message-box.san';
import san,{DataTypes} from 'san';
var MyApp = san.defineComponent({
    template: `<div>
                 <san-list info="{{info}}"></san-list>
                 <san-messagebox show="{{show}}" on-click="close">
                    <p slot="title">消息</p>
                    <p slot="content">{{msg}}</p>
                    <button on-click="close" slot="footer" class="test-button">我知道了</button> 
                </san-messagebox>
               </div>`,
    initData:function () {
        return{
            msg:"",
            show:false,
            info:[{
                val:'这是一条信息',
                show:true
            },{
                val:'这也是一条消息',
                show:true
            }]
        }
    },
    components:{
        'san-list':list,
        'san-messagebox':sanMessageBox
    },
    close(){
      this.data.set('show',false);
    },
    messages:{
        'message':function (mes) {
            this.data.set('msg',mes.value);
            this.data.set('show',true);
        }
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));