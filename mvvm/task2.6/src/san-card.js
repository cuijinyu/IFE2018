import san from 'san';
var MyApp = san.defineComponent({
    template: `<div>
        <style scoped>
             
        </style>
        <div>
            标题：<slot name="title"><b>{{title}}</b></slot>
        </div>
        <div>
            内容：<slot name="content">{{content}}</slot>
        </div>
        <div>
            时间：<slot name="time">{{time}}</slot>
        </div>
</div>`,
    initData:function () {
        return{
            title:"",
            content:"",
            time:""
        }
    }
});
export default MyApp;
