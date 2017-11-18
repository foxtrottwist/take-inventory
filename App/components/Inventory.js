import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { List, Button } from 'react-native-elements'

import { ItemBox, ItemDetail, ItemText } from '../utils/sharedStyles'

class Inventory extends Component {
  trimTitle = title => {
    if (title.length > 28) {
      return `${title.slice(0, 26)}...`
    } else {
      return title
    }
  }

  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => this.props.navigation.state.params.onExportList()}
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
            <ItemBox key={_id} height={60}>
              <ItemDetail>
                <ItemText length={inventoryItem.length}>{this.trimTitle(inventoryItem)}</ItemText>
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
