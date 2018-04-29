import san from 'san';
import pullDownUrl from './img/下拉.png';
var MyApp = san.defineComponent({
    template: `<div>
                    <button on-click="dealClick($event)" class="san-button"><img src="${pullDownUrl}" alt="" style="{{arrayStyle}}">{{text}}</button>
                </div>`,
    initData() {
        return {
            text:"",
            position:'up',//存储按钮箭头的方向，若为up则方向向上，若为down则方向向下
            arrayStyle:``
        };
    },
    dealClick(e){
        //监听点击事件
        this.fire('click',e);
        if(this.data.get('position') !== 'up'){
            this.data.set("arrayStyle",`transform:rotate(180deg)`);
        }else{
            this.data.set("arrayStyle","");
        }
    },
    compiled(){
        console.log("I am complied button");
    },
    created(){
        console.log("I am created button");
    },
    attached(){
        console.log("I am attached button");
    },
    detached(){
        console.log("I am detached button");
    }
});
export default MyApp;