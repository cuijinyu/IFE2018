import san,{DataTypes} from 'san';
var MyApp = san.defineComponent({
    template: `<div>
        <style>
            .red{
                background:red;width:100px;height:100px;
            }
            .blue{
                background:blue;width:100px;height:100px;
            }
        </style>
        <button on-click="changeColor">改变颜色</button>
        <div id="block" class="{{isRed?'red':'blue'}}"></div>
</div>`,
    initData:function () {
        return{
           isRed:true
        }
    },
    changeColor(){
        let isRed = this.data.get("isRed");
        this.data.set("isRed",!isRed);
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));