import React, { Component } from 'react'

import {Form,Input,Icon,Button,PageHeader} from 'antd';
// 使用提示框，防止用户误操作
import {Prompt} from 'react-router-dom'
import {getUUID} from '../../utils/UUID';
import UserConst from '../../const/store'




class AddUser extends Component {
    constructor(props){
        super(props)
        this.state={
            showModel:false
        }
    }
    handleSubmit = (e) =>{
       
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
              return;
            }
            console.log(values);

            let key = UserConst.LOCAL_USER_STORE_KEY;
            var userDataObj = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
            var userInfos = {
                id: getUUID(),
                userName: values.username,
                password: values.password,
                email: values.email
            }
            userDataObj.push(userInfos);
            localStorage.setItem(key, JSON.stringify(userDataObj));
            //TODO :添加完毕应该清楚输如框的内容

          });
         
     
    }
    
   
    render() {
        const { getFieldDecorator } = this.props.form;

        // 如果在表单有内容的时候再切换别的内容的弹出提示框

        <prompt 
        when={this.state.showModel}
        message={'你确定要离开吗？'}
        />
        return (
            // <h3>用户</h3>
            <div style={{backgroundColor:'white',width:'60%', padding:'50px 0' , margin: '20px auto' ,borderRadius:'5px'}}>
                <PageHeader title="用户添加" />

                <Form onSubmit={this.handleSubmit} style={{ width: "60%" , margin: '0 auto'}}>

                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                ref={ref=>this.userName=ref}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                                ref={ref=>this.Mail=ref}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                                type="password"
                                ref={ref=>this.Pwd=ref}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">添加用户</Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
const UserAdd = Form.create({ name: 'add-form' })(AddUser);
export default UserAdd
