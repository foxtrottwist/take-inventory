import styled from 'styled-components/native'

export const ItemBox = styled.View`
  border-bottom-width: 0.35;
  border-bottom-color: #000;
  height: ${({ height }) => height};
  justify-content: space-around;
`

export const ItemDetail = styled.View`align-items: center;`

export const ItemText = styled.Text`font-size: ${({ length }) => (length > 30 ? 16 : 18)};`
