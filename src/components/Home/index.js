import { Layout, Menu, Icon } from 'antd';
import React, { Component } from "react";
import { HashRouter as Router, Route,NavLink } from 'react-router-dom'
import "antd/dist/antd.css";
import '../../css/index.css'
import First from '../Home/First';

import UserList from '../Users/UserList';
import UserAdd from '../Users/UserAdd';

import NewsList from '../News/NewsList';
import NewsAdd from '../News/NewsAdd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class SiderDemo extends Component {
　　render(){
     return(
       <Router>
        <Layout>
        <Header className="header">
          <ul className="nav">
            <li>React-CMS</li>
            <li><NavLink to="/home">首页</NavLink></li>
            <li><NavLink to="/users">用户管理</NavLink></li>
            <li><NavLink to="/news">新闻管理</NavLink></li>
          </ul>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              
              <Menu.Item><NavLink to="/home"><Icon type="home" />首页</NavLink></Menu.Item>
              
              <SubMenu key="sub2" title={<span><Icon type="user" />用户管理</span>}>
                <Menu.Item key="5"><NavLink to="/users">用户列表</NavLink></Menu.Item>
                <Menu.Item key="6"><NavLink to="/users/useradd">用户添加</NavLink></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />新闻管理</span>}>
                <Menu.Item key="9"><NavLink to="/news">新闻列表</NavLink></Menu.Item>
                <Menu.Item key="10"><NavLink to="/news/newsadd">新闻添加</NavLink></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            
            <Content style={{ background: '#fff',padding:'24px' }}>
              <Route path="/home"  component={First}/>
              <Route path="/users" component={UserList}/>
              <Route path="/news"  component={NewsList}/>

              <Route path="/news/newsadd" component={NewsAdd}/>
              <Route path="/users/useradd" component={UserAdd}/>
            </Content>
          </Layout>
        </Layout>
        </Layout>
       
       
    </Router>
    )
  }
}
export default SiderDemo;
