import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {HashRouter as Router ,Route} from 'react-router-dom'
import { Layout } from 'antd';
import News from './componentss/News';
import Home from './componentss/Home';
import Users from './componentss/Users';
import Menus from './componentss/Menu';
import Login from './componentss/Login/index'
import RouteGurad from './componentss/RouteGurad'
const { Header, Content } = Layout;


export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
            <Header style={{backgroundColor:'#001529'}}>
              <Menus/>
            </Header>
          
            <Content>
                <Route path='/home' component={Home}/>
                {/* <Route path='/users' component={Users}/> */}
                
                {/* 这个RouteGurad 属于自定义组件，后面所定义的为自定义属性*/}
                <RouteGurad path='/users' component={Users}/> 
                <RouteGurad path='/news' component={News}/>
                <Route path='/login' component={Login}/>
            </Content>
        </Layout>

      </Router>
    )
  }
}
