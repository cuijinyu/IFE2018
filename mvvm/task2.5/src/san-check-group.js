import san from 'san';
var MyApp = san.defineComponent({
    template: `
               <div class="san-checkgroup">
                <style scoped>
                    
                </style>
                    <slot></slot>
               </div>`,
    initData(){
        return{
            data:[]
        }
    },
    messages:{
        "checkbox-changed":function (msg) {
            console.log(msg);
        }
    }
});
export default MyApp;