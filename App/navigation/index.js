import React from 'react'
import { StackNavigator } from 'react-navigation'

import ListIndex from '../components/ListIndex'
import ActiveList from '../components/ActiveList'

const Root = StackNavigator({
  Index: {
    screen: ListIndex,
    navigationOptions: {
      title: 'Available Lists',
    },
  },
  List: {
    screen: ActiveList,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
})

export default Root
