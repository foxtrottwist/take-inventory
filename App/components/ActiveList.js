import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import ListItem from './ListItem'

const ScrollBox = styled.ScrollView`background-color: #fff;`

class ActiveList extends Component {
  state = {
    activeList: null,
  }

  componentDidMount() {
    if (this.state.activeList === null) {
      this.setState({ activeList: this.props.navigation.state.params.list })
    }
  }

  render() {
    console.log(this.state)
    return (
      <ScrollBox>
        {!this.state.activeList || this.state.activeList === false
          ? null
          : this.state.activeList.map(({ inventoryItem, _id }) => (
              <ListItem key={_id} title={inventoryItem} />
            ))}
      </ScrollBox>
    )
  }
}

export default ActiveList
