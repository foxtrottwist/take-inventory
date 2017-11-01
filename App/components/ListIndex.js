import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Button } from 'react-native'
import styled from 'styled-components/native'
import axios from 'axios'

import ListItem from './ListItem'

const ScrollBox = styled.ScrollView`background-color: #fff;`

class ListIndex extends Component {
  state = {
    availableLists: [],
  }

  onListSelect(list) {
    this.props.navigation.navigate('List', { list })
  }

  componentDidMount() {
    axios
      .get('https://order-commander.herokuapp.com/api/inventory_lists')
      .then(res => this.setState({ availableLists: res.data }))
      .catch(err => console.log(err))
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
    console.log(this.state)
    return <ScrollBox>{this.renderLists()}</ScrollBox>
  }
}

export default ListIndex
