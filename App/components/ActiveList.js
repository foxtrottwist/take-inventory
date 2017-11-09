import React, { Component } from 'react'
import { ScrollView, Text, Alert } from 'react-native'
import { List, ListItem, Icon, Button } from 'react-native-elements'
import styled from 'styled-components/native'

import * as XLSX from 'xlsx'
import RNFetchBlob from 'react-native-fetch-blob'
import { DROP_BOX } from 'react-native-dotenv'
import { writeFile, DocumentDirectoryPath } from 'react-native-fs'
const DDP = DocumentDirectoryPath + '/'
const output = str => str

const ItemBox = styled.View`
  border-bottom-width: 0.3;
  border-bottom-color: #000;
`

const ItemDetail = styled.View`
  align-items: center;
  margin-top: 8;
  margin-bottom: 8;
`

const IconBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10;
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

  uploadList = file => {
    RNFetchBlob.fetch(
      'POST',
      'https://content.dropboxapi.com/2/files/upload',
      {
        // dropbox upload headers
        Authorization: `Bearer ${DROP_BOX}`,
        'Dropbox-API-Arg': JSON.stringify({
          path: '/Take Inventory/inventory.xlsx',
          mode: 'add',
          autorename: true,
          mute: false,
        }),
        'Content-Type': 'application/octet-stream',
        // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
        // Or simply wrap the file path with RNFetchBlob.wrap().
      },
      RNFetchBlob.wrap(file),
    )
      .then(res => {
        console.log(res.text())
      })
      .catch(err => {
        Alert.alert('exportFile Error', 'Error ' + err.message)
      })
  }

  exportFile = () => {
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
      .then(() => this.uploadList(file))
      .catch(err => {
        Alert.alert('exportFile Error', 'Error ' + err.message)
      })
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
              <Text>{inventoryItem}</Text>
            </ItemDetail>
            <ItemDetail>
              <Text>{this.state.activeList[index].count}</Text>
            </ItemDetail>
            <IconBox>
              <Icon
                type="entypo"
                name="squared-plus"
                reverse
                raised
                onPress={() => this.incrementByOne(index)}
              />

              <Icon
                type="entypo"
                name="squared-plus"
                reverse
                raised
                onPress={() => this.incrementByOneQuarter(index)}
              />

              <Icon
                type="entypo"
                name="squared-minus"
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
          onPress={() => this.exportFile()}
          title="Export"
          icon={{ name: 'page-export-doc', type: 'foundation' }}
        />
        {!this.state.activeList ? null : this.renderInventoryList()}
      </ScrollView>
    )
  }
}

export default ActiveList
