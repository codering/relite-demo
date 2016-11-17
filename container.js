import React, {Component} from 'react'
import storeShape from 'utils/storeShape'
import { createStore, createLogger } from 'relite'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default function container({initialState, actions, plugins = []}) {

    return function withContainer(WrappedComponent) {

        const containerDisplayName = `Container(${getDisplayName(WrappedComponent)})`
        let store = createStore(actions, initialState)

        plugins.map(p => store.subscribe(p))

        class Container extends Component {

            static displayName = containerDisplayName
            static childContextTypes = {
                store: storeShape.isRequired
            }

            getChildContext() {
                return { store: store }
            }

            componentDidMount() {
                this.unsubscribe = store.subscribe(() => this.forceUpdate())
            }
            
            componentWillUnmount() {
                this.unsubscribe && this.unsubscribe()
            }

            render() {
                return <WrappedComponent store={store} />
            }
        }

        return Container
    }
    

    
    
   

}