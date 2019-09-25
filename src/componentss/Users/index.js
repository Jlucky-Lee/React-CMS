import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {HashRouter as Router ,Route} from 'react-router-dom'
import { Layout } from 'antd';
import Aside from '../Aside';
import UserList from './UserList.js';
import UserAdd from './UserAdd.js';


const {  Sider, Content } = Layout;
let screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
export default class Users extends Component {
    constructor(props){
        super(props)
        this.state={
            menulist:{
                name:'用户管理',
                data:[
                    {
                        title:'用户列表',
                        path:'/users/userlist',
                        icon:'user',
                        compn:'UserList'
                    },
                    {
                        title:'用户添加',
                        path:'/users/useradd',
                        icon:'add',
                        compn:'UserAdd'
                    }
                ]

            }
        }
    }
    render() {
    
        return (
            <Router>
              
               <Layout>
                <Sider style={{height:screenHeight + 'px',backgroundColor:'white'}}>
                  <Aside  menulist={this.state.menulist}/>
                </Sider>
                <Content style={{backgroundColor:'#ccc'}}>
               <Route path='/users/useradd' component={UserAdd}/>
               <Route path='/users/userlist'  component={UserList}/>
                </Content>
            </Layout>
            </Router>
        )
    }
}
