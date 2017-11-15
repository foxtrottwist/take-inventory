import React, { Component } from 'react'
import { ScrollView, Alert } from 'react-native'
import { List, ListItem, Icon, Button } from 'react-native-elements'
import styled from 'styled-components/native'

const ItemBox = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #000;
  height: 185;
  justify-content: space-around;
`

const ItemDetail = styled.View`align-items: center;`

const ItemText = styled.Text`font-size: ${({ length }) => (length > 30 ? 16 : 18)};`

const IconBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

class ActiveList extends Component {
  state = {
    activeList: [],
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
          <ItemBox key={_id}>
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
          title="Save List"
          icon={{ name: 'save', type: 'entypo' }}
        />
        {!this.state.activeList ? null : this.renderInventoryList()}
      </ScrollView>
    )
  }
}

export default ActiveList
