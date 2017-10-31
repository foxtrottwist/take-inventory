import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const ItemBox = styled.View`
  height: 60px;
  justify-content: center;
  align-items: center;
`

const ListItem = ({ title, subtitle }) => (
  <ItemBox>
    <Text>{title}</Text>
    <Text>{subtitle}</Text>
  </ItemBox>
)

export default ListItem
