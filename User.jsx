import React, {Component} from 'react'

import presentational from './hoc/presentational'

function User(props) {
    const {user, updateUser} = props
    return (
        <div>
            <div>User: <strong>{user.name}</strong></div>
            <button onClick={ () => updateUser({name: "张三" + new Date().getTime() })}>更新</button>
        </div>
    )
}

const mapStateToProps = state => ({user: state.user})

export default presentational(mapStateToProps)(User)