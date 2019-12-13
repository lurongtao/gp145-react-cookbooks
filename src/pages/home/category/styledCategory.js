import styled from 'styled-components'
import border from '@/styled/border'

export const CateWrap = styled.div `
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .cate-box {
    flex: 1;
    overflow: hidden;
    position: relative;
  }
`

export const HeaderWrap = styled.div `
  height: .44rem;
  background: #ee742f;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SliderArea = border(styled.ul `
  width: 1.4rem;
  height: .3rem;
  display: flex;
  position: relative;
  z-index: 0;
  li {
    flex: 1;
    line-height: .3rem;
    text-align: center;
    color: #fff;
    &:last-child {
      position: absolute;
      width: 50%;
      height: .3rem;
      background: #fff;
      z-index: -1;
      transform: translate(0, 0);
      transition: all 0.2s ease-in;
      border-radius: .15rem;
      &.right {
        transform: translate(100%, 0);
      }
    }
    &.active {
      color: #ee742f;
    }
  }
`)