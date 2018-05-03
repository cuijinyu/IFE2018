import san from 'san';
var MyApp = san.defineComponent({
    template: `
                <div>
                    <div s-if="!indeterminate">
                        <svg  s-if="!checked" on-click="svgClick" t="1522742656342" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1942" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M832 928.00086l-640 0c-52.9288 0-96.00086-43.07206-96.00086-95.99914l0-640c0-52.9288 43.07206-96.00086 96.00086-96.00086l640 0c52.92708 0 95.99914 43.07206 95.99914 96.00086l0 640C928.00086 884.9288 884.9288 928.00086 832 928.00086zM192 160.00086c-17.632039 0-32.00086 14.368821-32.00086 32.00086l0 640c0 17.664722 14.368821 31.99914 32.00086 31.99914l640 0c17.664722 0 31.99914-14.336138 31.99914-31.99914l0-640c0-17.632039-14.336138-32.00086-31.99914-32.00086L192 160.00086z" p-id="1943"></path></svg>
         
                        <svg s-if="checked" on-click="svgClick" t="1522742638607" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1828" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M832 96.00086l-640 0c-52.9288 0-96.00086 43.07206-96.00086 96.00086l0 640c0 52.92708 43.07206 95.99914 96.00086 95.99914l640 0c52.92708 0 95.99914-43.07206 95.99914-95.99914l0-640C928.00086 139.0712 884.9288 96.00086 832 96.00086zM727.231286 438.432254 471.00766 697.439161c-0.063647 0.063647-0.192662 0.096331-0.25631 0.192662-0.096331 0.063647-0.096331 0.192662-0.192662 0.25631-2.048757 1.983389-4.575729 3.19957-6.944443 4.544765-1.183497 0.672598-2.143368 1.696116-3.392232 2.176052-3.839484 1.536138-7.904314 2.33603-11.967424 2.33603-4.095794 0-8.224271-0.799892-12.096439-2.399677-1.279828-0.543583-2.303346-1.632469-3.519527-2.303346-2.368714-1.343475-4.832039-2.528692-6.880796-4.544765-0.063647-0.063647-0.096331-0.192662-0.159978-0.25631-0.063647-0.096331-0.192662-0.096331-0.25631-0.192662l-126.016611-129.503454c-12.320065-12.672705-12.032791-32.928047 0.639914-45.248112 12.672705-12.287381 32.895364-12.063755 45.248112 0.639914l103.26354 106.112189 233.279613-235.808305c12.416396-12.576374 32.704421-12.672705 45.248112-0.25631C739.520387 405.631501 739.647682 425.888563 727.231286 438.432254z" p-id="1829"></path></svg>       
                    </div>  
                    <div s-else>
                        <svg on-click="indeterminateClick" s-if="indeterminate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1524820899879" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" p-id="1473" width="200" height="200"><defs><style type="text/css"/></defs><path d="M726.016 553.984l0-84.010667-427.989333 0 0 84.010667 427.989333 0zM809.984 128q34.005333 0 59.989333 25.984t25.984 59.989333l0 596.010667q0 34.005333-25.984 59.989333t-59.989333 25.984l-596.010667 0q-34.005333 0-59.989333-25.984t-25.984-59.989333l0-596.010667q0-34.005333 25.984-59.989333t59.989333-25.984l596.010667 0z" p-id="1474"/></svg>          
                    </div>
          
                    <input type="checkbox" checked="{=checked=}" disabled="{=disabled=}" on-change="dealChange($event)" trueValue="trueValue" falseValue="falseValue" indeterminate="indeterminate" class="san-checkbox">
                    <slot></slot>
               </div>`,
    initData:function(){
        return{
            msg:"",
            trueValue:"",
            falseValue:"",
            disabled:false,
            checked:false,
            indeterminate:false
        }
    },
    dealChange:function(e){
        this.fire('change',e);
    },
    svgClick:function () {
        let temp = this.data.get("checked");
        this.data.set("indeterminate",undefined);
        this.data.set("checked",!temp);
        if(this.data.get('trueValue')!==""&&!temp){
            this.data.set("checked",this.data.get('trueValue'));
        }else if(this.data.get('falseValue')!==""&&temp){
            this.data.set("checked",this.data.get('falseValue'));
        }
    },
    indeterminateClick:function () {
        this.data.set("indeterminate",undefined);
        this.data.set("checked",true);
        if(this.data.get('trueValue')!==""){
            this.data.set("checked",this.data.get('trueValue'));
        }
    },
    updated(){
        const checked = this.data.get("checked");
        if(checked){
            this.dispatch("checkbox-add",this.data.get('checked'));
        }else{
            if(this.data.get("trueValue")!==''){
                this.dispatch("checkbox-sub",this.data.get('trueValue'));
            }
        }
    }
});
export default MyApp;