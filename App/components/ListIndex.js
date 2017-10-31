import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Button } from 'react-native'
import styled from 'styled-components/native'

import ListItem from './ListItem'

const ScrollBox = styled.ScrollView`background-color: #fff;`

class ListIndex extends Component {
  state = {
    availableLists: [
      {
        _id: '59eff5c89cbb7d6192816078',
        title: 'PRODUCE 10.16.2017',
        dateCreated: '2017-10-25T02:24:08.946Z',
        __v: 0,
        list: [
          {
            inventoryItem: 'APPLES GALA OG',
            sortOrder: 0,
            _id: '59eff5c89cbb7d6192816082',
            count: 0,
          },
          {
            inventoryItem: 'APPLES GRANNY SMITH CV',
            sortOrder: 1,
            _id: '59eff5c89cbb7d6192816081',
            count: 0,
          },
          {
            inventoryItem: 'APPLES FUJI OG',
            sortOrder: 2,
            _id: '59eff5c89cbb7d6192816080',
            count: 0,
          },
          { inventoryItem: 'AVOCADO CV', sortOrder: 3, _id: '59eff5c89cbb7d619281607f', count: 0 },
          { inventoryItem: 'AVOCADO OG', sortOrder: 4, _id: '59eff5c89cbb7d619281607e', count: 0 },
          { inventoryItem: 'LEMON CV', sortOrder: 5, _id: '59eff5c89cbb7d619281607d', count: 0 },
          { inventoryItem: 'LEMON OG', sortOrder: 6, _id: '59eff5c89cbb7d619281607c', count: 0 },
          { inventoryItem: 'LIME CV', sortOrder: 7, _id: '59eff5c89cbb7d619281607b', count: 0 },
          {
            inventoryItem: 'TOMATO VINE CV',
            sortOrder: 8,
            _id: '59eff5c89cbb7d619281607a',
            count: 0,
          },
          {
            inventoryItem: 'TOMATO BEEFSTEAK OG',
            sortOrder: 9,
            _id: '59eff5c89cbb7d6192816079',
            count: 0,
          },
        ],
      },
      {
        _id: '59eff6679cbb7d6192816083',
        title: 'PRODUCE 10.23.2017',
        dateCreated: '2017-10-25T02:26:47.224Z',
        __v: 0,
        list: [
          {
            inventoryItem: "PEAR D'ANJOU OG",
            sortOrder: 0,
            _id: '59eff6679cbb7d6192816089',
            count: 0,
          },
          {
            inventoryItem: 'PEAR COMICE CV',
            sortOrder: 1,
            _id: '59eff6679cbb7d6192816088',
            count: 0,
          },
          {
            inventoryItem: 'CITRUS NAVEL ORANGES WTG CV',
            sortOrder: 2,
            _id: '59eff6679cbb7d6192816087',
            count: 0,
          },
          {
            inventoryItem: 'CITRUS GRAPEFRUIT CV',
            sortOrder: 3,
            _id: '59eff6679cbb7d6192816086',
            count: 0,
          },
          {
            inventoryItem: 'CITRUS GRAPEFRUIT OG',
            sortOrder: 4,
            _id: '59eff6679cbb7d6192816085',
            count: 0,
          },
          {
            inventoryItem: 'POMEGRANATE CV',
            sortOrder: 5,
            _id: '59eff6679cbb7d6192816084',
            count: 0,
          },
        ],
      },
      {
        _id: '59eff7439cbb7d619281608a',
        title: 'PRODUCE 10.30.2017',
        dateCreated: '2017-10-25T02:30:27.926Z',
        __v: 0,
        list: [
          {
            inventoryItem: 'PEPPER RED BELL WTG OG',
            sortOrder: 0,
            _id: '59eff7439cbb7d6192816092',
            count: 0,
          },
          {
            inventoryItem: 'PEPPER ORANGE BELL WTG OG',
            sortOrder: 1,
            _id: '59eff7439cbb7d6192816091',
            count: 0,
          },
          {
            inventoryItem: 'PEPPER YELLOW BELL WTG OG',
            sortOrder: 2,
            _id: '59eff7439cbb7d6192816090',
            count: 0,
          },
          {
            inventoryItem: 'PEPPER GREEN BELL CV',
            sortOrder: 3,
            _id: '59eff7439cbb7d619281608f',
            count: 0,
          },
          {
            inventoryItem: 'ZUCHNNI CV ZUCHINNI OG',
            sortOrder: 4,
            _id: '59eff7439cbb7d619281608e',
            count: 0,
          },
          { inventoryItem: 'CUCUMBER OG', sortOrder: 5, _id: '59eff7439cbb7d619281608d', count: 0 },
          {
            inventoryItem: 'CARROTS LOOSE 50LB',
            sortOrder: 6,
            _id: '59eff7439cbb7d619281608c',
            count: 0,
          },
          {
            inventoryItem: 'CARROTS SHRED  10OZ',
            sortOrder: 7,
            _id: '59eff7439cbb7d619281608b',
            count: 0,
          },
        ],
      },
      {
        _id: '59f1763330d77c744eebc460',
        title: 'PRODUCE 11.06.2017',
        dateCreated: '2017-10-26T05:44:19.600Z',
        __v: 0,
        list: [
          {
            inventoryItem: 'APPLES GRANNY SMITH BAGGED OG',
            sortOrder: 0,
            _id: '59f1763330d77c744eebc476',
            count: 0,
          },
          {
            inventoryItem: 'CITRUS BLOOD CV',
            sortOrder: 1,
            _id: '59f1763330d77c744eebc475',
            count: 0,
          },
          {
            inventoryItem: "PEAR RED D'ANJOU",
            sortOrder: 2,
            _id: '59f1763330d77c744eebc474',
            count: 0,
          },
          {
            inventoryItem: 'GREENS KALE OG',
            sortOrder: 3,
            _id: '59f1763330d77c744eebc473',
            count: 0,
          },
          {
            inventoryItem: 'GREENS KALE RED',
            sortOrder: 4,
            _id: '59f1763330d77c744eebc472',
            count: 0,
          },
          {
            inventoryItem: 'GREENS CHARD',
            sortOrder: 5,
            _id: '59f1763330d77c744eebc471',
            count: 0,
          },
          {
            inventoryItem: 'GREENS CHARD RAINBOW',
            sortOrder: 6,
            _id: '59f1763330d77c744eebc470',
            count: 0,
          },
          {
            inventoryItem: 'MUSHROOM SHITAKE 5OZ',
            sortOrder: 7,
            _id: '59f1763330d77c744eebc46f',
            count: 0,
          },
          {
            inventoryItem: 'BRUSSELL SPROUT CV 24OZ',
            sortOrder: 8,
            _id: '59f1763330d77c744eebc46e',
            count: 0,
          },
          {
            inventoryItem: 'CARROTS RAINBOW 24OZ',
            sortOrder: 9,
            _id: '59f1763330d77c744eebc46d',
            count: 0,
          },
          {
            inventoryItem: 'CARROTS PURPLE BUNCH',
            sortOrder: 10,
            _id: '59f1763330d77c744eebc46c',
            count: 0,
          },
          {
            inventoryItem: 'MELON HONEYDEW CV',
            sortOrder: 11,
            _id: '59f1763330d77c744eebc46b',
            count: 0,
          },
          {
            inventoryItem: 'BROCCOLI CROWNS CV',
            sortOrder: 12,
            _id: '59f1763330d77c744eebc46a',
            count: 0,
          },
          {
            inventoryItem: 'BROCCOLI OG',
            sortOrder: 13,
            _id: '59f1763330d77c744eebc469',
            count: 0,
          },
          { inventoryItem: 'BANANAS CV', sortOrder: 14, _id: '59f1763330d77c744eebc468', count: 0 },
          { inventoryItem: 'BANANAS OG', sortOrder: 15, _id: '59f1763330d77c744eebc467', count: 0 },
          {
            inventoryItem: 'POTATO YUKON GOLD OG',
            sortOrder: 16,
            _id: '59f1763330d77c744eebc466',
            count: 0,
          },
          {
            inventoryItem: 'POTATO RUSSET CV',
            sortOrder: 17,
            _id: '59f1763330d77c744eebc465',
            count: 0,
          },
          {
            inventoryItem: 'POTATO RUSSET OG',
            sortOrder: 18,
            _id: '59f1763330d77c744eebc464',
            count: 0,
          },
          {
            inventoryItem: 'POTATO RED OG',
            sortOrder: 19,
            _id: '59f1763330d77c744eebc463',
            count: 0,
          },
          {
            inventoryItem: 'SWEET POTATO GARNET OG',
            sortOrder: 20,
            _id: '59f1763330d77c744eebc462',
            count: 0,
          },
          {
            inventoryItem: 'SWEET POTATO HANNAH WHITE OG',
            sortOrder: 21,
            _id: '59f1763330d77c744eebc461',
            count: 0,
          },
        ],
      },
    ],
  }

  onListSelect(list) {
    this.props.navigation.navigate('List', { list })
  }

  onSelectInventory() {
    this.props.navigation.navigate('ActiveList', { list: false })
  }

  renderLists() {
    return this.state.availableLists.map(({ title, _id, list, dateCreated }) => (
      <TouchableOpacity key={_id} onPress={() => this.onListSelect(list)}>
        <ListItem
          title={title}
          subtitle={`Created on: ${new Date(dateCreated).toLocaleDateString()}`}
        />
      </TouchableOpacity>
    ))
  }

  render() {
    return (
      <ScrollBox>
        <Button title="Current Inventory List" onPress={() => this.onSelectInventory()} />
        {this.renderLists()}
      </ScrollBox>
    )
  }
}

export default ListIndex
