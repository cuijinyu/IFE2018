import './assert/style/common.css';
import san,{DataTypes} from 'san';
import sanInput from './components/san-input.san';
import sanFormItem from './components/san-form-item.san';
import sanForm from './components/san-form.san';
import sanButton from './components/san-button-item.san';
var MyApp = san.defineComponent({
    template: `<div>
    <p>{{value}}</p>
       <san-form
            formModel="{=formModel=}"
            san-ref="formModel">
            <san-form-item
                rules="{{ruleMobile}}"
                prop="mobile"
                helpText="请输入手机号码"
                label="手机号码">
                <san-input
                    value="{=formModel.mobile=}"
                ></san-input>
            </san-form-item>
            <san-form-item
                rules="{{ruleAddress}}"
                prop="address"
                helpText="请输入地址"
                label="地址">
                <san-input
                    value="{=formModel.address=}"
                ></san-input>
            </san-form-item>
            <san-form-item
                prop="userName"
                require="{{true}}"
                helpText="输入姓名与身份证保持一致"
                label="姓名">
                <san-input
                    value="{=formModel.userName=}"
                ></san-input>
            </san-form-item>
            <san-form-item
                rules="{{ruleIdCard}}"
                prop="idCard"
                helpText="根据国家相关规定，需要您输入身份证号码"
                label="身份证号码">
                <san-input
                    value="{=formModel.idCard=}"
                ></san-input>
            </san-form-item>
            <san-form-item style="position: relative;left:60px;">
                <san-button class="submit-button" on-click="submitForm('formModel')" ui="primary small">提交</san-button>
                <san-button class="submit-button" on-click="resetForm('formModel')" ui="primary small">重置</san-button>
            </san-form-item>
        </san-form>
</div>`,
    components:{
    'san-input':sanInput,
        'san-form-item':sanFormItem,
        'san-form':sanForm,
        'san-button':sanButton
    },
    initData() {
        const idCardValidate = (rule, value, callback) => {
            if (value) {
                // 异步、远程验证
                let userName = this.data.get('formModel.userName');
                console.log({
                    userName,
                    idCard: value
                });
                // 将用户名和身份证号码作为参数发送异步请求，到服务端验证
                setTimeout(function() {
                    callback([new Error('您输入的身份信息不匹配')]);
                }, 1000);
            }
            else {
                setTimeout(function() {
                    callback(['请输入身份证号码']);
                }, 1000);
            }
        };

        return {
            formModel: {
                mobile: '',
                userName: '',
                idCard: '',
                address: ''
            },
            ruleMobile: [
                {
                    type: 'string',
                    required: true,
                    message: '请输入手机号码'
                },
                {
                    validator(rule, value, callback) {
                        if (value) {
                            if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
                                callback([new Error('请输入正确的手机号码!')]);
                            }
                            else {
                                callback([]);
                            }
                        }
                        else {
                            callback([new Error('请输入手机号码!')]);
                        }
                    }
                }
            ],
            ruleAddress: [
                {
                    required: true,
                    message: '必选',
                    type: 'string'
                },
                {

                    min: 6,
                    message: '用户名需不少于6个字符'
                },
                {
                    max: 20,
                    message: '用户名需不超过20个字符'
                }
            ],
            ruleIdCard: [
                {
                    type: 'string',
                    require: true
                },
                {
                    validator: idCardValidate
                }
            ]
        };
    },
    submitForm(formName) {
        let formModel = this.data.get(formName);
        if (formName === 'formModel') {
            this.data.set('formStatus', 'validating');
        }
        this.ref(formName).validate((valid) => {
            this.data.set('formStatus', 'validateEnd');
            if (valid) {
                // 验证成功 do someThing
                console.log(formModel);
            } else {
                // 验证失败 do someThing
                console.log(valid)
            }
        });
    },
    resetForm(formName) {
        this.ref(formName).resetFields();
    }
});
var myApp = new MyApp();
myApp.attach(document.getElementById("app"));