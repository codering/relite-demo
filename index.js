
import React from 'react'
import ReactDOM from 'react-dom'

import history from 'react-router/lib/hashHistory'

import router from './router'

const Root = router({history})

ReactDOM.render(Root, document.getElementById('root'))

