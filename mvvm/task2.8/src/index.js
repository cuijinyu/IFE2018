// require("./css/common.css");
import style from './css/common.css'
import san,{DataTypes} from 'san';
import sanPanel from './san-panel.js';
var MyApp = san.defineComponent({
    template: `<div>
    
    <san-panel>
        <span slot="title">我是标题</span>
        <span slot="content">我是内容</span>
    </san-panel>
</div>`,
    initData:function () {
        return{
            msg:""
        }
    },
    components:{
        'san-panel':sanPanel
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));