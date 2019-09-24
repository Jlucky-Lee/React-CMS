import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import NewsAdd from '../News/NewsAdd';
export default class NewsList extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>这个是新闻列表</h1>
                    {/* <Route path="/news/newsadd" component={NewsAdd}/> */}
                </div>
            </Router>
           
        )
    }
}
