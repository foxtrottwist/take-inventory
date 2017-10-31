import React, { Component } from 'react'
import { View, Button } from 'react-native'
import styled from 'styled-components/native'

import ListItem from './ListItem'

const ScrollBox = styled.ScrollView`background-color: #fff;`

class ListView extends Component {
  onUse(list) {
    this.props.navigation.navigate('ActiveList', { list })
  }

  render() {
    return (
      <ScrollBox>
        <Button title="Use" onPress={() => this.onUse(this.props.navigation.state.params.list)} />
        {this.props.navigation.state.params.list.map(({ inventoryItem, _id }) => (
          <ListItem key={_id} title={inventoryItem} />
        ))}
      </ScrollBox>
    )
  }
}

export default ListView
