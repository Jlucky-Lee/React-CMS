import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
export default class NewsAdd extends Component {
    render() {
        return (
            <Router>
            <div>
                <h1>这个是新闻添加</h1>
                {/* <Route path="/news/newsadd" component={NewsAdd}/> */}
            </div>
        </Router>
        )
    }
}
