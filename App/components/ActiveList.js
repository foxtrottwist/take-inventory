import React, { Component } from 'react'
import { ScrollView, Alert } from 'react-native'
import { List, ListItem, Icon, Button } from 'react-native-elements'

import * as XLSX from 'xlsx'
import Mailer from 'react-native-mail'
import { writeFile, DocumentDirectoryPath } from 'react-native-fs'
const DDP = DocumentDirectoryPath + '/'
const output = str => str

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

  decrementByOneHalf = index => {
    this.setState(state => ({ activieList: (state.activeList[index].count -= 0.5) }))
  }

  handleEmail = file => {
    Mailer.mail(
      {
        subject: 'Inventory Count',
        recipients: ['law.horne@live.com'],
        body: '<b>A Bold Body</b>',
        isHTML: true,
        attachment: {
          path: file, // The absolute path of the file from which to read data.
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Mime Type: jpg, png, doc, ppt, html, pdf
        },
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
            { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') },
          ],
          { cancelable: true },
        )
      },
    )
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
      .catch(err => {
        Alert.alert('exportFile Error', 'Error ' + err.message)
      })

    this.handleEmail(file)
  }

  componentDidMount() {
    const { list } = this.props.navigation.state.params
    this.setState({ activeList: list })
  }

  renderInventoryList = () => {
    return (
      <List>
        {this.state.activeList.map(({ inventoryItem, _id, count }, index) => (
          <ListItem
            key={_id}
            title={inventoryItem}
            titleContainerStyle={{ alignItems: 'center' }}
            subtitle={this.state.activeList[index].count}
            subtitleContainerStyle={{ alignItems: 'center' }}
            leftIcon={
              <Icon type="entypo" name="squared-plus" onPress={() => this.incrementByOne(index)} />
            }
            rightIcon={
              <Icon
                type="entypo"
                name="squared-minus"
                onPress={() => this.decrementByOneQuarter(index)}
              />
            }
          />
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
