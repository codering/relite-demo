import React,{Component} from 'react'
import Link from 'react-router/lib/Link'

function IndexPage() {

    return <div>welcome, go <Link to="/user">user</Link></div>
}

export default IndexPage