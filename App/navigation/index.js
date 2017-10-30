import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ListIndex from '../components/ListIndex'
import ListView from '../components/ListView'

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
      headerRight: <Button title="Use" color="#016025" onPress={() => {}} />,
    },
  },
})

export default Root
