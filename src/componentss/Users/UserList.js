import React, { Component } from 'react'
import { Table } from 'antd';
const { Column } = Table;

const data = [
    {
      key: '1',
      firstName: 'John',
      address: 'New York No. 1 Lake Park',
      email:'765657@qq.com'
    },
    {
      key: '2',
      firstName: 'Jim',
      address: 'London No. 1 Lake Park',
      email:'gogrey@126.com'
    },
    {
      key: '3',
      firstName: 'Joe',
      address: 'Sidney No. 1 Lake Park',
      email:'gopink@126.com'
    },
  ];
  let screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
export default class UserList extends Component {

    
    render() {
        return (
            <Table dataSource={data} style={{backgroundColor:'white',height:screenHeight + 'px',}}>
           
              <Column title="ID" dataIndex="key" key="key" />
              <Column title="姓名" dataIndex="firstName" key="firstName" />
              
              <Column title="邮箱" dataIndex="email" key="email" />
              <Column title="住址" dataIndex="address" key="address" />
           
            <Column
              title="操作"
              key="action"
              render={(text, record) => (
                <span>
                  {/* <Divider type="vertical" /> */}
                  <button>删除</button>
                </span>
              )}
            />
          </Table>
        )
    }
}
