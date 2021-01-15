import React, { Component } from 'react'

// 组件通信
// 父组件对子组件通信, 就是父组件把数据给子组件
// 子组件对父组件通信, 就是子组件把数据给父组件
// 父组件传递回调函数给子组件, 然后在子组件调用

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameFromChild: null,
        }
    }
    tsxn = (dataFromChild) => {
        console.log('data', dataFromChild)
        this.setState({
            nameFromChild: dataFromChild,
        })
    }
    render() {
        let name = 'gua'
        return (
            <div>
                <hr/>
                <h2>父组件</h2>
                <p style={{'background': 'pink'}}>父组件获取子组件的数据: { this.state.nameFromChild }</p>
                <h4 style={{'background': 'lightblue'}}>父组件传给子组件的数据: { name }</h4>
                <Child username={name} onParentToChild={this.tsxn} />
                <br />
            </div>
        )
    }
}

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childName: 'xiao gua',
        }
    }
    actionClick = () => {
        let func = this.props.onParentToChild
        if (typeof func === 'function') {
            // 说明父组件传过来的是一个函数
            // 调用这个函数, 并且传递参数
            func(this.state.childName)
        }
    }
    render() {
        let name = this.props.username
        return (
            <div>
                <hr/>
                <h2>子组件</h2>
                <p style={{'background': 'lightblue'}}>子组件获取父组件的数据: { name }</p>
                <br/>
                <p style={{'background': 'pink'}}>子组件的数据: { this.state.childName }</p>
                <button onClick={this.actionClick}>child button click</button>
            </div>
        )
    }
}

export default Parent
