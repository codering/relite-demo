import React, {Component} from 'react'

import { createStore, createLogger } from 'relite'

import container from './container'
import User from './User'

let initialState = {
    user: {name: 'test'},
}

const actions = {
    updateUser: (state, payload) => {
        return {...state, user: payload}
    }
}

let logger =  createLogger({
    name: 'userLogger',
})

@container({
    initialState,
    actions,
    plugins: [logger]
})
class RoutePage extends Component {

    constructor(props) {
        super(props)
    }
   
    render() {
        return (
            <div style={{margin: 100}}>
                <User />
            </div>
        )
    }
}

export default RoutePage


