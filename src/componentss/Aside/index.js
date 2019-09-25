import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class Aside extends Component {
  
  render() {
  
    return (
      <div>

        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"

        >


          <SubMenu
            key="sub1"
            title={
              <span><Icon type="user" /> <span>{this.props.menulist.name}</span> </span>
            } >

            {
              this.props.menulist.data.map((ele, index) => {
                return (
                  <Menu.Item key={index}>
                    <NavLink to={ele.path}>{ele.title}</NavLink>
                  </Menu.Item>
                )
              })
            }

          </SubMenu>

        </Menu>
      </div>
    );
  }
}
