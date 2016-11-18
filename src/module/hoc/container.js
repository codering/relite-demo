import React, {Component} from 'react'
import storeShape from 'utils/storeShape'
import { createStore, createLogger } from 'relite'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default function container({initialState, actions, loggerName, plugins = []}) {

    return function withContainer(WrappedComponent) {

        const containerDisplayName = `Container(${getDisplayName(WrappedComponent)})`
        let store = createStore(actions, initialState)

        if (process.env.NODE_ENV !== 'production') {
            if (loggerName) {
                let logger =  createLogger({ name: loggerName})
                plugins = [logger].concat(plugins)
            }
        }

        const unsubscribeList = plugins.map(p => store.subscribe(p))

        class Container extends Component {

            static displayName = containerDisplayName

            static childContextTypes = {
                store: storeShape.isRequired
            }

            getChildContext() {
                return { store: store }
            }

            componentDidMount() {
                const unsubscribe= store.subscribe(() => this.forceUpdate())
                unsubscribeList.push(unsubscribe)
            }
            
            componentWillUnmount() {
                for (let unsubscribe of unsubscribeList ) {
                    unsubscribe()
                }
            }

            render() {
                return <WrappedComponent store={store} />
            }
        }

        return Container
    }
}