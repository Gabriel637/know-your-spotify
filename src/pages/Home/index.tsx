// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container, Header, TextBox, ButtonBox, Button } from './styles'
import Ranking from '../../components/Ranking'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <TextBox>
          <h1>Know your own data on spotify </h1>
        </TextBox>
        <ButtonBox>
          <Button> Artists </Button>
          <Button> Songs </Button>
        </ButtonBox>
      </Header>
      <Ranking />
    </Container>
  )
}

export default Home
