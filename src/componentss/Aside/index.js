import React, { Component } from 'react'
import {HashRouter as Router ,Route,NavLink} from 'react-router-dom'
import 'antd/dist/antd.css'
import { Menu, Icon, Button } from 'antd';
const { SubMenu } = Menu;

export default class Aside extends Component {
  constructor(props){
  super(props)
  this.state={
    menuItem:[]
  }
  } 
  componentDidMount(){
    console.log('huahua',this.props.menulist);
    
      // this.setState({
      //   menuItem:this.props.menuList
      // })
    }
      render() {
        return (
          <div>
           
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
             
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>首页</span>
              </Menu.Item>

         
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>用户管理</span>
                  </span>
                }
              >

                {/* {
                  this.state.menuItem.map((ele,index) =>{
                    return(
                      <Menu.Item key="5"><NavLink>用户添加</NavLink> </Menu.Item>
                    )
                  })
                } */}
                
              </SubMenu>

             
            </Menu>
          </div>
        );
      }
    }
