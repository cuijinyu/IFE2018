import san,{DataTypes} from 'san';
import Card from './san-card.js';
var MyApp = san.defineComponent({
    template: `<div>
    <san-card>
       <span slot="title">我是标题</span>
       <p slot="content">我是内容</p>
    </san-card>
    <san-card title="我是标题" content="我是内容">
    
    </san-card>
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