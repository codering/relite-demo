import React, {Component} from 'react'

import {Button} from 'antd'

import presentational from './presentational'

function User(props) {
    const {user, updateUser} = props
    return (
        <div>
            <div>User: <strong>{user.name}</strong></div>
            <Button onClick={ () => updateUser({name: "张三" + new Date().getTime() })}>更新</Button>
        </div>
    )
}

const mapStateToProps = state => ({user: state.user})

export default presentational(mapStateToProps)(User)