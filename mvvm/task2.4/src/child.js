import san from 'san';
var MyApp = san.defineComponent({
    template: `<div>
        <label for="">通知父组件</label><input type="text" value="{=mes=}"><button on-click="sendMessage">通知父组件</button>
</div>`,
    initData:function () {
        return{
            mes:""
        }
    },
    sendMessage(){
        console.log("send some message")
        this.dispatch("mes",this.data.get("mes"));
    }
});
export default MyApp;
