import React from 'react'
import { StackNavigator } from 'react-navigation'

import ListIndex from '../components/ListIndex'
import ListView from '../components/ListView'
import ActiveList from '../components/ActiveList'

const Root = StackNavigator({
  Index: {
    screen: ListIndex,
    navigationOptions: {
      title: 'Available Lists',
    },
  },
  List: {
    screen: ListView,
    navigationOptions: {
      title: 'List',
    },
  },
  ActiveList: {
    screen: ActiveList,
    navigationOptions: {
      title: 'Inventory',
    },
  },
})

export default Root
