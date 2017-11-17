import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'

import { ItemBox, ItemDetail, ItemText } from '../utils/sharedStyles'

class Inventory extends Component {
  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => this.props.navigation.state.params.exportList()}
          buttonStyle={{ marginTop: 20 }}
          containerViewStyle={{ borderRadius: 3 }}
          borderRadius={3}
          raised
          backgroundColor="#1663c7"
          title="Export Inventory"
          icon={{ name: 'page-export-doc', type: 'foundation' }}
        />

        <List>
          {this.props.navigation.state.params.countedList.map(({ _id, inventoryItem, count }) => (
            <ItemBox key={_id} height={100}>
              <ItemDetail>
                <ItemText length={inventoryItem.length}>{inventoryItem}</ItemText>
              </ItemDetail>
              <ItemDetail>
                <ItemText>{count}</ItemText>
              </ItemDetail>
            </ItemBox>
          ))}
        </List>
      </ScrollView>
    )
  }
}

export default Inventory
