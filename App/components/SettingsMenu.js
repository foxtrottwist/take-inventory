import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-elements'

class SettingsMenu extends Component {
  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => this.props.navigation.state.params.onRemovePreviousInventory()}
          raised
          backgroundColor="#c71f16"
          title="Remove Previous Inventory"
          icon={{ name: 'page-delete', type: 'foundation' }}
        />
      </ScrollView>
    )
  }
}

export default SettingsMenu
