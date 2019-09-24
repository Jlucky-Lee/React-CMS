import React, { Component } from 'react'

export default class SiderBar extends Component {
    render() {
        return (
            <div>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}>
                    
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
            </div>
        )
    }
}
