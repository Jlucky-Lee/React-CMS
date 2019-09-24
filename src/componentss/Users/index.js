import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {HashRouter as Router ,Route} from 'react-router-dom'
import { Layout } from 'antd';
import Aside from '../Aside';


const { Header, Sider, Content } = Layout;
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
                <h1>user</h1>
               <Layout>
                <Sider style={{height:screenHeight + 'px'}}>
                  <Aside  menulist={this.state.menulist}/>
                </Sider>
                <Content>
               
                <Route path='/users' component={Users}/>
                
                </Content>
            </Layout>
            </Router>
        )
    }
}
