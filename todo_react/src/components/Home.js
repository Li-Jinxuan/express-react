import React, { Component } from 'react'
import Menu from './Menu'
import Com from './Com'

class Home extends Component {
    render() {
        let path = this.props.match.path
        console.log('path in home', path)
        return (
            <div>
                {/*Home 组件中调用 Menu 组件*/}
                <Menu path={path}/>
                点击上面的链接
                <br/>
                <br/>
                <Com />
            </div>
        )
    }
}

export default Home
