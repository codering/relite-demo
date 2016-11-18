import React, {Component} from 'react'
import storeShape from 'utils/storeShape'
import { createStore, createLogger } from 'relite'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const defaultMapStateToProps = state => ({}) 

export default function presentational(mapStateToProps = defaultMapStateToProps) {

    return function withPresentational(WrappedComponent) {

        const presentationalDisplayName = `Presentational(${getDisplayName(WrappedComponent)})`

        return class Presentational extends Component {

            static displayName = presentationalDisplayName
            static contextTypes = {
                store: storeShape
            }

            render() {
                const {store} = this.context
                const props = {...mapStateToProps(store.getState()), ...store.actions}
                return <WrappedComponent {...props} />
            }
        }
    }

   
}