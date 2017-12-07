import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import targetsManagement from '../reducer'
import { logger, setStateToLocalStore, autoUpdateCurrentTime } from '../util'
import autoUpdateTargets from '../util/autoUpdateTargets/index'
import TargetsManagementContainer from '../container/index'

import FastClick from 'fastclick'
// solve the 300ms delay problem in mobile
FastClick.attach(document.body);


// global util
import $ from '../util/jquery'
window.$ = $


let store = createStore(
  targetsManagement,
  applyMiddleware(setStateToLocalStore)
)

// sync store to global varible: ReduxStore
ReduxStore = store

// auto update targets
autoUpdateTargets(5000)



render(
  <Provider store={store}>
    <TargetsManagementContainer />
  </Provider>,
	document.getElementById('app')
)