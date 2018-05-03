import san from 'san';
var MyApp = san.defineComponent({
    template: `
               <div class="san-checkgroup">
                    <slot></slot>
               </div>`,
    initData(){
        return{
            data:[]
        }
    },
    messages:{
        "checkbox-add":function (msg) {
            this.data.push("data",msg.value);
        },
        "checkbox-sub":function (msg) {
            let data = this.data.get('data');
            let index = data.indexOf(msg.value);

            this.data.removeAt('data',index);
        }
    },
    updated(){

    }
});
export default MyApp;