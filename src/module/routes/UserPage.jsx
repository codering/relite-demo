import React, {Component} from 'react'

import container from 'hoc/container'
import User from 'components/User'

let initialState = {
    user: {name: 'test'},
}

const actions = {
    updateUser: (state, payload) => {
        return {...state, user: payload}
    }
}

const xxPlugin = (data) => console.log(data) 

@container({
    initialState,
    actions,
    loggerName: 'userLogger',
    plugins: [xxPlugin]
})
class UserPage extends Component {

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

export default UserPage


