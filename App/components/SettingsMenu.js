import React, { Component } from 'react'
import { ScrollView, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'

class SettingsMenu extends Component {
  onResetLists = () => {
    const storageKeys = this.props.navigation.state.params.titles
    AsyncStorage.multiRemove(storageKeys)
    this.props.navigation.goBack(null)
  }

  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => this.props.navigation.state.params.onRemovePreviousInventory()}
          buttonStyle={{ marginTop: 20 }}
          containerViewStyle={{ borderRadius: 3 }}
          borderRadius={3}
          raised
          backgroundColor="#c71f16"
          title="Remove Previous Inventory"
          icon={{ name: 'page-delete', type: 'foundation' }}
        />
        <Button
          onPress={() => this.onResetLists()}
          buttonStyle={{ marginTop: 20 }}
          containerViewStyle={{ borderRadius: 3 }}
          borderRadius={3}
          raised
          backgroundColor="#c71f16"
          title="Reset Lists"
          icon={{ name: 'page-delete', type: 'foundation' }}
        />
      </ScrollView>
    )
  }
}

export default SettingsMenu
