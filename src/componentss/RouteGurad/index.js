import React from 'react'
//路由守卫，根据不同的鉴权结果显示不同路由映射表

import UserConst from '../../const/store'
import {Redirect,Route} from 'react-router-dom'

import Login from '../Login'
//根据RouteGuard标签穿过来的值进行显示路由映射表

const RouteGuard =function (props) {
    console.log(props);
    // 下面在返回的组件是的是小写，所以这里的自定义组件的名字得换一个,并且自定义的属性得大写首字母解构props

    let {component:Component, ...rest} =props;

    var key =UserConst.LOCAL_USER_TOKEN_KEY;
    var token=localStorage.getItem(key) ? localStorage.getItem(key) :'';

    if(!token){
        //把路径传回去
        return <Route {...rest} component={Login}/>
    }
    return <Route {...rest} component={Component}/>;
    
}
export default RouteGuard


