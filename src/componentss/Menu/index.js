import React,{Component} from 'react'
import {HashRouter as Router ,Route,NavLink } from 'react-router-dom'
import { Menu, Icon} from 'antd';


export default class Menus extends Component {
  state = {
    current: 'mail',
    logosty:''
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    
    <div>

        <div style={{display:'inline-block',padding:'0 20px' ,fontWeight:600,fontSize:'20px',color:'white'}}>React CMS</div>
      <Menu 
            onClick={this.handleClick}
            selectedKeys={[this.state.current]} 
            mode="horizontal"
            theme="dark"
            style={{display:'inline-block'}}
            >
        <Menu.Item key="home">
          <Icon type="home" />
          <NavLink to='/home' style={{display:'inline-block'}}>首页</NavLink>
        </Menu.Item>

        <Menu.Item key="user">
          <Icon type="user" />
          <NavLink to='/users' style={{display:'inline-block'}}>用户管理</NavLink>
        </Menu.Item>

        <Menu.Item key="news">
          <Icon type="setting" />
          <NavLink to='/news' style={{display:'inline-block'}}>新闻管理</NavLink>
        </Menu.Item>

      </Menu>

    </div>

      
    );
  }
}
