import san,{DataTypes} from 'san';
var MyApp = san.defineComponent({
    template: `<div>
        <div>
            <input type="text" placeholder="姓名（string）" value="{=name=}">
            <input placeholder="年龄（number）" value="{=age=}" type="number">
            <input type="text" placeholder="简介（string）" value="{=des=}">
        </div>
        <div>
            <label for="">信息</label>
            <button on-click="clearMessage">清除信息</button>
        </div>
        <div>
            <div>姓名：<span>{{name}}</span></div>
            <div>年龄：<span>{{age}}</span></div>
            <div>简介：<span>{{des}}</span></div>
        </div>
    </div>`,
    initData:function () {
        return{
            name:'',
            age:undefined,
            des:''
        }
    },
    dataTypes:{
        name:DataTypes.string,
        age:DataTypes.number,
        des:DataTypes.string
    },
    clearMessage:function(){
        this.data.set("name","");
        this.data.set("des","");
        this.data.set("age",undefined);
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));