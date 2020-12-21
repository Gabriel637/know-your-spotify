// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  useLocation
} from 'react-router-dom'
import { Container, Header, TextBox, ButtonBox, Button } from './styles'
import Card from '../../components/Card'
import api from '../../utils/api'
import queryString from 'query-string'

const Home: React.FC = () => {
  const { hash } = useLocation()
  // eslint-disable-next-line camelcase
  const { access_token } = queryString.parse(hash)

  const getTopArtists = () => {
    console.log(hash)
    const headers = {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`
    }
    let params
    api.get('/me/top/artists', { headers, params })
      .then((response: any) => {
        console.log(response, 'resultado')
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <Header>
        <TextBox>
          <h1>Know your own data on spotify </h1>
        </TextBox>
        <ButtonBox>
          <Button onClick={() => getTopArtists()} > Artists </Button>
          <Button> Songs </Button>
        </ButtonBox>
      </Header>
      <Card />
    </Container>
  )
}

export default Home
