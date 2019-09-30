import React from "react"
import { Form, Icon, Input, Button, Checkbox,PageHeader } from 'antd';
import UserConst from '../../const/store'
 class UserLogin extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
      
        let userkey =UserConst.LOCAL_USER_STORE_KEY;
        var userDataObj=localStorage.getItem(userkey) ? JSON.parse(localStorage.getItem(userkey)) : [];
        
          var obj=userDataObj.find(ele =>{
            return ele.userName === values.username && ele.password === values.password
          })

          if(obj){
           let key =UserConst.LOCAL_USER_TOKEN_KEY;
           localStorage.setItem(key , values.username)
           
          }
          else{
            window.alert('login fail!!!')
            return;
          }
        
      }
    });
  };

  render() { 
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width:"60%",margin:"50px auto"}}>
      <PageHeader title="用户登录" />
      <Form onSubmit={this.handleSubmit} >
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}
const Login = Form.create({ name: 'login-form' })(UserLogin);
export default Login


