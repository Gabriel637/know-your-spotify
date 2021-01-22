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
  align-items: center;
  @media(max-width: 1025px){
    flex-direction: column;
  }
`

export const ImageLogo = styled.img`
  align-self: center;
  height: 50px;
`

export const TextBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 20px;
  > h1{
    color: var(--primary);
    font-size: 38px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  @media(max-width: 1025px){
    flex-direction: column;
  }
`

export const ContainerStandBy = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 1025px){
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    @media(max-width: 1024px){
      div {
        margin-top: 0 !important;
      }  
    }
`

export const Button = styled.button`
    width: 150px;
    background-color: var(--primary);
    font-size: 18px;
    padding: 10px;
    border-radius: 20px;
    border: 0;
    margin: 20px;
    :hover{
      cursor: pointer;
      background-color: var(--quaternary);
      box-shadow: inset 2px -7px 11px rgba(80, 92, 51, 0.17);
    }
`
export const CardContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, 20%);
  transition-delay: 1s;
  transition: opacity 2s;
  opacity: 0;
  @media(max-width: 540px){
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
      width: 80%;
    }
  }
  @media(max-width: 1025px){
    grid-template-columns: repeat(auto-fit, 33%);
  }
`
