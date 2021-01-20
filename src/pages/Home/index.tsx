// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import {
  useLocation
} from 'react-router-dom'
import { Container, Header, TextBox, ButtonBox, Button, CardContainer } from './styles'
import Card from '../../components/Card'
import api from '../../utils/api'
import queryString from 'query-string'

const Home: React.FC = () => {
  interface IArtist {
    id: string,
    name: string,
    images: any,
    genres: any,
    position: number
  }
  interface ISong {
    id: string,
    name: string,
    image: string,
    artists: any,
    album: string,
    position: number
  }

  const { hash } = useLocation()
  const [artists, setArtists] = useState<Array<IArtist>>([])
  const [songs, setSongs] = useState<Array<ISong>>([])
  // const [artist, setArtist] = useState<IArtist>({ id: 1, name: 'gabriel' })
  // eslint-disable-next-line camelcase
  const { access_token } = queryString.parse(hash)

  const getTopArtists = () => {
    const headers = {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`
    }
    const params = {
      limit: 100
    }
    api.get('/me/top/artists', { headers, params })
      .then((response: any) => {
        console.log(response.data.items)
        setArtists(response.data.items)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  const getTopSongs = () => {
    const headers = {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`
    }
    let params
    api.get('/me/top/tracks', { headers, params })
      .then((response: any) => {
        const tracks: any = []
        const { items } = response.data
        items.forEach((item: any) => {
          const track = { id: item.id, name: item.name, artists: [item.artists[0].name], album: item.album.name, position: items.indexOf(item) + 1, image: item.album.images[0].url }
          tracks.push(track)
        })
        console.log(tracks)
        setSongs(tracks)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  useEffect(() => {
    console.log(songs)
  })

  return (
    <Container>
      <Header>
        <TextBox>
          <h1>Know your own data on spotify </h1>
        </TextBox>
        <ButtonBox>
          <Button onClick={() => getTopArtists()} > Artists </Button>
          <Button onClick={() => getTopSongs()}> Songs </Button>
        </ButtonBox>
      </Header>
      <CardContainer style={{ opacity: artists[0] || songs[0] ? '1' : 0 }}>
        {
          artists &&
          artists.map((artist: IArtist) => {
            return <Card key={artist.id} name={artist.name} image={artist.images[0].url} content={artist.genres} position={artists.indexOf(artist) + 1} />
          })
        }
        {
          songs &&
          songs.map((song: ISong) => {
            return <Card key={song.id} name={song.name} image={song.image} content={song.artists} position={song.position} />
          })
        }
      </CardContainer>
    </Container>
  )
}

export default Home
