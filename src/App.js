import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {HashRouter as Router ,Route} from 'react-router-dom'
import { Layout } from 'antd';
import News from './componentss/News';
import Home from './componentss/Home';
import Users from './componentss/Users';
import Menus from './componentss/Menu';


const { Header, Sider, Content } = Layout;



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
                <Route path='/users' component={Users}/>
                <Route path='/news' component={News}/>
            </Content>
        </Layout>

      </Router>
    )
  }
}
