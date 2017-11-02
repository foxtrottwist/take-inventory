import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import styled from 'styled-components/native'

import * as XLSX from 'xlsx'

import { writeFile, DocumentDirectoryPath } from 'react-native-fs'
const DDP = DocumentDirectoryPath + '/'
const output = str => str

const ScrollBox = styled.ScrollView`background-color: #fff;`

const CountBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
`

class ActiveList extends Component {
  state = {
    activeList: [],
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

  exportFile() {
    const counted = this.state.activeList.map(item => [item.inventoryItem, item.count])
    /* convert AOA to worksheet */
    const ws = XLSX.utils.aoa_to_sheet(counted)

    /* build new workbook */
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Inventory')

    /* write file */
    const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' })
    const file = DDP + 'inventory.xlsx'
    writeFile(file, output(wbout), 'ascii')
      .then(res => {
        Alert.alert('exportFile success', 'Exported to ' + file)
      })
      .catch(err => {
        Alert.alert('exportFile Error', 'Error ' + err.message)
      })
  }

  componentDidMount() {
    const { list } = this.props.navigation.state.params
    this.setState({ activeList: list })
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
    console.log(this.state.activeList)
    return (
      <ScrollBox>
        <Button onPress={() => this.exportFile()} title="Export List to XLSX" color="#016025" />
        {!this.state.activeList ? null : this.renderInventoryList()}
      </ScrollBox>
    )
  }
}

export default ActiveList
