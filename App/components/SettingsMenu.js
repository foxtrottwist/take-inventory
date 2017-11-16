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
          backgroundColor="#b60009"
          title="Remove Previous Inventory"
          icon={{ name: 'page-delete', type: 'foundation' }}
        />
      </ScrollView>
    )
  }
}

export default SettingsMenu
