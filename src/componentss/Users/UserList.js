import React, { Component } from 'react'
import { Table ,Button} from 'antd';
import UserConst from '../../const/store'
const { Column } = Table;

let screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
export default class UserList extends Component {
    constructor(props){
      super(props)
      this.state={
        userList:[]
      }
    }
    componentDidMount(){
      let key =UserConst.LOCAL_USER_STORE_KEY;
      //获取本都数据库的内容是异步的
      var userDataObj=localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
      this.setState({
        userList:userDataObj
      })
    }
    render() {
        return (
            <Table dataSource={this.state.userList} style={{backgroundColor:'white',height:screenHeight + 'px',}}>
      
              <Column title="ID" dataIndex="id" key="key" />
                <Column title="用户名" dataIndex="userName" key="firstName" />
                
                <Column title="邮箱" dataIndex="email" key="email" />
                
              <Column
                title="操作"
                key="action"
                render={(text, record) => (
                  <span>
                    {/* <Divider type="vertical" /> */}
                    <Button type="danger">删除</Button>
                  </span>
                )}
              />
           
          
          </Table>
        )
    }
}
