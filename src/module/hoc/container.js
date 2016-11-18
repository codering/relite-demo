import React, {Component} from 'react'
import storeShape from 'utils/storeShape'
import { createStore, createLogger } from 'relite'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default function container({initialState, actions, loggerName, plugins = []}) {

    return function withContainer(WrappedComponent) {

        class Container extends Component {

            static displayName = `Container(${getDisplayName(WrappedComponent)})`

            static childContextTypes = {
                store: storeShape.isRequired
            }

            getChildContext() {
                return { store: this.store }
            }

            constructor(props, context) {
                super(props, context)
                this.store = createStore(actions, initialState)
                let listeners = []
                // logger
                if (loggerName) {
                    listeners.push(createLogger({ name: loggerName}))
                }
                // plugins
                listeners = listeners.concat(plugins)
                // current component
                const componentListener = () => this.forceUpdate()
                listeners.push(componentListener)
                // do subscribe
                listeners.map(listener => this.store.subscribe(listener))
            }

            render() {
                return <WrappedComponent store={this.store} />
            }
        }

        return Container
    }
}