import san from 'san';
var MyApp = san.defineComponent({
    template: `<div>
        <textarea s-if="textarea" cols="30" rows="10" value="{=value=}" placeholder="{=placeholder=}" disabled="{=disabled=}" readonly="{=readonly=}" on-click="dealClick" on-focus="dealFocus" on-blur="dealBlur"></textarea>
        <input s-if="!textarea" class="san-input" type="text" value="{=value=}" placeholder="{=placeholder=}" disabled="{=disabled=}" readonly="{=readonly=}" on-click="dealClick" on-focus="dealFocus" on-blur="dealBlur">
</div>`,
    initData:function () {
        return{
            value:"",
            placeholder:"",
            disabled:false,
            readonly:"",
            textarea:false
        }
    },
    dealClick:function (e) {
        this.fire("click",e);
    },
    dealFocus:function (e) {
        this.fire("focus",e);
    },
    dealBlur:function (e) {
        this.fire("blur",e);
    }
});
export default MyApp;