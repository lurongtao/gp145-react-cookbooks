import styled from 'styled-components'
import border from '@/styled/border'

export const CateWrap = border(styled.div `
  height: 100%;
  display: flex;
  width: 100%;
  position: absolute !important;
  top: 0;
  left: 0;
  > div:first-child {
    width: .9rem;
    > ul {
      height: 100%;
      overflow-y: scroll;
      li {
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        background: #f3f3f3;
        &.active {
          background: #fff;
          span {
            display: inline-block;
            height: 100%;
            border-bottom: solid #ee742f 2px;
          }
        }
      }
    }
  }

  > div:last-child {
    flex: 1;
    padding: .2rem .1rem;
    background: #fff;
    > ul {
      display: flex;
      flex-wrap: wrap;
      overflow-y: scroll;
      height: 100%;
      align-content: flex-start;
      li {
        width: 33.3333%;
        text-align: center;
        height: .5rem;
        line-height: .5rem;
        color: #666;
      }
    }
  }
`)


