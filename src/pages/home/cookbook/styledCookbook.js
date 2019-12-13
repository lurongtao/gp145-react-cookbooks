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
  > div {
    height: 100% !important;
    padding-bottom: 66.66667%;
  }
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
  /* Grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    span {
      margin-top: .05rem;
    }
    img {
      width: 70%;
      border-radius: .1rem;
    }
  }
`

export const HotListWrap = styled.div `
  padding: 0 .1rem .1rem .1rem;

  header {
    color: #666;
    padding-bottom: .1rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 50%;
      img {
        width: 100%;
      }
      &:nth-child(odd) {
        padding-right: .05rem;
      }
      &:nth-child(even) {
        padding-left: .05rem;
      }
      figcaption {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: .6rem;
        h3 {
          font-size: .18rem;
        }
        h5 {
          font-size: .12rem;
          font-weight: normal;
        }
      }
    }
  }
`