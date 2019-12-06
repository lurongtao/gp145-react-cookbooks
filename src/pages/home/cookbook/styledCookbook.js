import styled from 'styled-components'
import border from '@/styled/border'

export const HeaderWrap = styled.div `
  height: .44rem;
  background: #ee742f;
  font-size: .18rem;
  color: #fff;
  text-align: center;
  line-height: .44rem;
`

export const SwiperWrap = styled.div `
  height: 0;
  font-size: 0;
  padding-bottom: 66.66667%;
  img {
    width: 100%;
  }
`

export const HotCatHeader = border(styled.header `
  line-height: .5rem;
  background: #fff;
  padding-left: .2rem;
`)

export const HotcatWrap = styled.div `
  padding-bottom: .2rem;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: .05rem;
    }
    img {
      width: 70%;
      border-radius: .1rem;
    }
  }
`