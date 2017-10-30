import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import ListItem from './ListItem'

const ScrollBox = styled.ScrollView`background-color: #fff;`

class ListView extends Component {
  state = {
    activeList: [],
  }

  render() {
    return (
      <ScrollBox>
        {this.props.navigation.state.params.list.map(({ inventoryItem, _id }) => (
          <ListItem key={_id} title={inventoryItem} />
        ))}
      </ScrollBox>
    )
  }
}

export default ListView
