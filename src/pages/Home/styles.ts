import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width:100%;
  height:100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--tertiary);
  margin: 20px;
`

export const Header = styled.div`
  width: 100%;
  height: ${px2vw(150, 1440)};
  background-color: var(--tertiary);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextBox = styled.div`
  text-align: center;
  margin: 10px;
  border-bottom: 0.2px solid var(--tertiary);
  > h1{
    color: var(--primary);
    font-size: 38px;
  }
`
export const ButtonBox = styled.div`
  display: flex;
`

export const Button = styled.button`
    background-color: var(--primary);
    font-size: 18px;
    padding: 10px;
    border-radius: 20px;
    border: 0;
    margin: 20px 30px;
    width: ${px2vw(150, 1440)};
    :hover{
      cursor: pointer;
      background-color: var(--quaternary);
      box-shadow: inset 2px -7px 11px rgba(80, 92, 51, 0.17);
    }
`
