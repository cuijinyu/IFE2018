import san from 'san';
import sanButton from "./san-button.js";
var MyApp = san.defineComponent({
        template: `<div class="san-panel">
                    <div class="san-panel-title">
                        <div class="san-panel-title-text">
                            <slot name="title"></slot>
                        </div>
                        <div class="san-panel-title-button">
                            <san-button on-click="openPanel" position="{{open|position}}"></san-button>
                        </div>
                    </div>
                    <div class="san-panel-content" s-if="open">
                        <slot name="content">
                        
                        </slot>
                    </div>
                </div>`,
        initData() {
            return {
                open: false
            };
        },
        compiled() {
            console.log("I am complied");
        },
        created() {
            console.log("I am created");
        },
        attached() {
            console.log("I am attached");
        },
        detached() {
            console.log("I am detached");
        },
        openPanel() {
            this.data.set('open', !this.data.get('open'));
        },
        components: {
            'san-button': sanButton
        },
        filters: {
            position(value){
                if(value === true){
                    return 'up';
                }else{
                    return 'down';
                }
            }
        }
    })
    
;
export default MyApp;
