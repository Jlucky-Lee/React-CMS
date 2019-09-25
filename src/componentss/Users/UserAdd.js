import React, { Component } from 'react'
import {
    Form,
    Input,
    Icon,
    Button,
    PageHeader
} from 'antd';
// import { userInfo } from 'os';



class AddUser extends Component {
    handleSubmit = (e) =>{
        let un=this.userName.state;
        let ei=this.Mail.state;
        let pw=this.Pwd.state;
        if(un ==="" || ei === "" || pw === ""){
             e.preventDefault();
             window.alert('请输入合法的信息！');
             return;
        }
        
        var userDataObj=localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : [];
        let userinfo={
           id:Math.random(),
           userName:un,
           password:pw,
           email:ei
        }
        userDataObj.push(userInfo);
       localStorage.setItem("userinfo", JSON.stringify(userDataObj));
       
    }
    
   
    render() {
        const { getFieldDecorator } = this.props.form;
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
                                prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
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
