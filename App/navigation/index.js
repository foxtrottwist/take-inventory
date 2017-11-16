import React from 'react'
import { StackNavigator } from 'react-navigation'

import ListIndex from '../components/ListIndex'
import ActiveList from '../components/ActiveList'
import SettingsMenu from '../components/SettingsMenu'

const ListStack = StackNavigator({
  Index: {
    screen: ListIndex,
    navigationOptions: {
      title: 'Take Inventory',
    },
  },
  List: {
    screen: ActiveList,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
})

const SettingsStack = StackNavigator({
  Settings: {
    screen: SettingsMenu,
    navigationOptions: {
      title: 'Settings',
    },
  },
})

const Root = StackNavigator(
  {
    ListView: {
      screen: ListStack,
    },
    Settings: {
      screen: SettingsStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

export default Root
