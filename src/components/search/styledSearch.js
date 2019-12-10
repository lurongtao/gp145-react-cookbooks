import styled from 'styled-components'
import border from '../styled/border'

export const SearchWrap = styled.div `
  padding: .1rem .15rem;
  background: ${props => props.wrapperBgc || 'transparent'}
`

export const InputWrap = border(
  styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: .4rem;
    color: #666;
    background: ${props => props.background || '#fff'};
    img {
      width: .22rem;
      height: .22rem;
      margin-right: .05rem;
    }
  `
)