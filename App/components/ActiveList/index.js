import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components/native'

const ScrollBox = styled.ScrollView`background-color: #fff;`

const CountBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
`

class ActiveList extends Component {
  state = {
    activeList: null,
  }

  incrementByOne(index) {
    this.setState(state => ({ activieList: (state.activeList[index].count += 1) }))
  }

  incrementByOneQuarter(index) {
    this.setState(state => ({ activieList: (state.activeList[index].count += 0.25) }))
  }

  decrementByOneQuarter(index) {
    this.setState(state => ({ activieList: (state.activeList[index].count -= 0.25) }))
  }

  componentDidMount() {
    const { list } = this.props.navigation.state.params
    if (this.state.activeList === null) {
      this.setState({ activeList: list })
    }
  }

  renderInventoryList() {
    return this.state.activeList.map(({ inventoryItem, _id, count }, index) => (
      <View key={_id}>
        <CountBox>
          <Text>{inventoryItem}</Text>
          <Text>{this.state.activeList[index].count}</Text>
        </CountBox>
        <CountBox>
          <Button title="plus" onPress={() => this.incrementByOne(index)} />
          <Button title="plus" onPress={() => this.incrementByOneQuarter(index)} />
          <Button title="minus" onPress={() => this.decrementByOneQuarter(index)} />
        </CountBox>
      </View>
    ))
  }

  render() {
    return (
      <ScrollBox>
        {!this.state.activeList || this.state.activeList === false
          ? null
          : this.renderInventoryList()}
      </ScrollBox>
    )
  }
}

export default ActiveList
