import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  margin: 20px;
`

export const Header = styled.div`
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextBox = styled.div`
  text-align: center;
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
    width: 150px;
    background-color: var(--primary);
    font-size: 18px;
    padding: 10px;
    border-radius: 20px;
    border: 0;
    margin: 20px 30px;
    :hover{
      cursor: pointer;
      background-color: var(--quaternary);
      box-shadow: inset 2px -7px 11px rgba(80, 92, 51, 0.17);
    }
`
export const CardContainer = styled.div`
  display: grid;
  margin: 5px;
  grid-template-columns: repeat(auto-fit, 20%);
  transition-delay: 1s;
  transition: opacity 2s;
  opacity: 0;
`
