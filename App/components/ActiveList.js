import React, { Component } from 'react'
import { ScrollView, Alert } from 'react-native'
import { List, Icon, Button } from 'react-native-elements'
import styled from 'styled-components/native'

import { ItemBox, ItemDetail, ItemText } from '../utils/sharedStyles'

const IconBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

class ActiveList extends Component {
  state = {
    activeList: [],
    isCompleted: false,
  }

  incrementByOne = index => {
    this.setState(state => ({ activieList: (state.activeList[index].count += 1) }))
  }

  incrementByOneQuarter = index => {
    this.setState(state => ({ activieList: (state.activeList[index].count += 0.25) }))
  }

  decrementByOneQuarter = index => {
    this.setState(state => ({ activieList: (state.activeList[index].count -= 0.25) }))
  }

  decrementByOne = index => {
    this.setState(state => ({ activieList: (state.activeList[index].count -= 1) }))
  }

  componentDidMount() {
    const { title, list } = this.props.navigation.state.params
    this.setState({ activeList: list })
  }

  renderInventoryList = () => {
    return (
      <List>
        {this.state.activeList.map(({ inventoryItem, _id, count }, index) => (
          <ItemBox key={_id} height={185}>
            <ItemDetail>
              <ItemText length={inventoryItem.length}>{inventoryItem}</ItemText>
            </ItemDetail>
            <ItemDetail>
              <ItemText>{this.state.activeList[index].count}</ItemText>
            </ItemDetail>
            <IconBox>
              <Icon
                type="entypo"
                name="squared-plus"
                color="#016025"
                reverse
                raised
                onPress={() => this.incrementByOne(index)}
              />

              <Icon
                type="entypo"
                name="squared-plus"
                color="#016025"
                reverse
                raised
                onPress={() => this.incrementByOneQuarter(index)}
              />

              <Icon
                type="entypo"
                name="squared-minus"
                color="#b60009"
                reverse
                raised
                onPress={() => this.decrementByOneQuarter(index)}
                onLongPress={() => this.decrementByOne(index)}
              />
            </IconBox>
          </ItemBox>
        ))}
      </List>
    )
  }

  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => this.props.navigation.state.params.onSaveList(this.state.activeList)}
          raised
          backgroundColor="#109121"
          title="Save List"
          icon={{ name: 'save', type: 'foundation' }}
        />
        {!this.state.activeList ? null : this.renderInventoryList()}
      </ScrollView>
    )
  }
}

export default ActiveList
