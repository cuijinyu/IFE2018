import san,{DataTypes} from 'san';
var MyApp = san.defineComponent({
    template: `<div>
        <style>
            td{
                border: 1px solid black;
            }
            th{
                border: 1px solid black;
            }
        </style>
        <button on-click="addPerson">添加</button>
        <table>
            <tr>
                <th>姓名</th>
                <th>审核状态</th>
                <th>操作</th>
            </tr>
            <tr s-for="person,index in people">
                <td>{{person.name}}</td>
                <td>{{person.state|state}}</td>
                <td>
                    <button s-if="person.state!='verify'" on-click="deletePerson(index)">删除</button>
                    <button s-else on-click="verifyPerson(index)">审核</button>
                </td>
            </tr>
        </table>
</div>`,
    initData:function () {
        return{
           people:[
               {
                   name:"张三",
                   state:'verify'
               },
               {
                   name:"李四",
                   state:"ready"
               }
           ]
        }
    },
    filters:{
        state:status=>{
            switch (status){
                case "verify":
                    return "待审核";
                case "ready":
                    return "合格";
                case "notReady":
                    return "不合格";
            }
        }
    },
    addPerson(){
        this.data.push("people",{
            name:"我是测试",
            state:"verify"
        })
    },
    deletePerson(row){
        console.log(row);
        this.data.removeAt("people",row);
    },
    verifyPerson(row){
        this.data.set(`people[${row}].state`,"ready");
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));