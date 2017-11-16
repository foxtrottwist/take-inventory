import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'

class Inventory extends Component {
  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => this.props.navigation.state.params.exportList()}
          raised
          backgroundColor="#110a5c"
          title="Export Inventory"
          icon={{ name: 'page-export-doc', type: 'foundation' }}
        />

        <List>
          {this.props.navigation.state.params.countedList.map(({ _id, inventoryItem, count }) => (
            <ListItem hideChevron key={_id} title={inventoryItem} subtitle={count} />
          ))}
        </List>
      </ScrollView>
    )
  }
}

export default Inventory
