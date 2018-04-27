import san from 'san';
var MyApp = san.defineComponent({
    template: `<div>
        <style>
            .san-input{
                transition: border-color 0.5s;
                border-radius:1px;
                box-shadow: 0px 0px 0px;
                height: 30px;
                width:200px;
                border:1px solid rgb(226,226,226);
                outline:0;
                color:rgb(139,139,139);
                padding:5px;
                font-size:12px;
                letter-spacing: 1px;
            }   
            .san-input:focus{
                border-color:rgb(173,173,173);
                color:rgb(38,38,38);
            }
            .san-input:hover{
                border-color:rgb(173,173,173);
            }
            .san-input:disabled{
                background: rgb(249,249,249);
            }
        </style>
        <p>{{value}}</p>
        <input class="san-input" type="text" value="{=value=}" placeholder="{=placeholder=}" disabled="{=disabled=}" readonly="{=readonly=}" on-click="dealClick" on-focus="dealFocus" on-blur="dealBlur">
</div>`,
    initData:function () {
        return{
            value:"",
            placeholder:"",
            disabled:false,
            readonly:""
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
