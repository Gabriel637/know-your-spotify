/* eslint-disable indent */
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import {
  useLocation
} from 'react-router-dom'
import Lottie from 'react-lottie'
import { Container, Header, ImageLogo, TextBox, ButtonBox, Button, CardContainer, ContainerStandBy, FirstAnimation, SecondAnimation, ThirdAnimation, FourthAnimation } from './styles'
import Card from '../../components/Card'
import api from '../../utils/api'
import queryString from 'query-string'
import Logo from '../../assets/spotify.png'
import MexicanMusic from '../../assets/mexican-music.json'
import Monster from '../../assets/monster.json'
import MusicDisc from '../../assets/music-disc.json'
import PianoBox from '../../assets/piano-box.json'

const Home: React.FC = () => {
  interface IArtist {
    id: string,
    name: string,
    image: string,
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
  const [standby, setStandby] = useState(true)
  // eslint-disable-next-line camelcase
  const { access_token } = queryString.parse(hash)

  const getTopArtists = () => {
    const headers = {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`
    }
    const params = {
      limit: 50
    }
    api.get('/me/top/artists', { headers, params })
      .then((response: any) => {
        const artists: any = []
        const { items } = response.data
        items.forEach((item: any) => {
          const artist = { id: item.id, name: item.name, genres: item.genres, position: items.indexOf(item) + 1, image: item.images[0].url }
          artists.push(artist)
        })
        setArtists(artists)
        setSongs([])
        setStandby(false)
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
    const params = {
      limit: 50
    }
    api.get('/me/top/tracks', { headers, params })
      .then((response: any) => {
        const tracks: any = []
        const { items } = response.data
        items.forEach((item: any) => {
          const track = { id: item.id, name: item.name, artists: [item.artists[0].name], album: item.album.name, position: items.indexOf(item) + 1, image: item.album.images[0].url }
          tracks.push(track)
        })
        setSongs(tracks)
        setStandby(false)
        setArtists([])
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <Header>
        <TextBox>
          <ImageLogo src={Logo} />
        </TextBox>
        <ButtonBox>
          <Button onClick={() => getTopArtists()} > Artists </Button>
          <Button onClick={() => getTopSongs()}> Songs </Button>
        </ButtonBox>
      </Header>
      {
        standby
          ? <>
            <ContainerStandBy>
              <FirstAnimation style={{ order: Math.floor(Math.random() * 4) + 1 }}>
                <Lottie options={{
                  loop: true,
                  autoplay: true,
                  animationData: MexicanMusic,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                  height={300}
                  width={300}
                />
              </FirstAnimation>
              <SecondAnimation style={{ order: Math.floor(Math.random() * 4) + 1 }}>
                <Lottie options={{
                  loop: true,
                  autoplay: true,
                  animationData: Monster,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                  height={300}
                  width={300}
                />
              </SecondAnimation>
              <ThirdAnimation style={{ order: Math.floor(Math.random() * 4) + 1 }}>
                <Lottie options={{
                  loop: true,
                  autoplay: true,
                  animationData: PianoBox,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                  height={300}
                  width={300}
                />
              </ThirdAnimation>
              <FourthAnimation style={{ order: Math.floor(Math.random() * 4) + 1 }}>
                <Lottie options={{
                  loop: true,
                  autoplay: true,
                  animationData: MusicDisc,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                  height={300}
                  width={300}
                />
              </FourthAnimation>
            </ContainerStandBy>
          </>
          : <>
            <CardContainer style={{ opacity: artists[0] || songs[0] ? '1' : 0 }}>
              {
                artists &&
                artists.map((artist: IArtist) => {
                  return <Card key={artist.id} name={artist.name} image={artist.image} content={artist.genres} position={artists.indexOf(artist) + 1} />
                })
              }
              {
                songs &&
                songs.map((song: ISong) => {
                  return <Card key={song.id} name={song.name} image={song.image} content={song.artists} position={song.position} />
                })
              }
            </CardContainer> </>
      }
    </Container>
  )
}

export default Home
