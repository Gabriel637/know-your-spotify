/* eslint-disable indent */
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import {
  useLocation
} from 'react-router-dom'
import Lottie from 'react-lottie'
import { Container, Header, ImageLogo, TextBox, ButtonBox, Button, CardContainer, ContainerStandBy } from './styles'
import Card from '../../components/Card'
import api from '../../utils/api'
import queryString from 'query-string'
import Logo from '../../assets/spotify.png'
import DefaultDisc from '../../assets/default-disc.png'
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
    position: number
  }
  interface IPlaylist {
    id: string,
    name: string,
    image: string,
    owner: string,
    position: number
  }

  const { hash } = useLocation()
  const [artists, setArtists] = useState<Array<IArtist>>([])
  const [songs, setSongs] = useState<Array<ISong>>([])
  const [playlists, setPlaylists] = useState<Array<IPlaylist>>([])
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
        setStandby(false)
        setSongs([])
        setPlaylists([])
      })
      .catch((error: any) => {
        if (error) {
          window.location.replace('http://localhost:8888/login')
        }
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
          const track = { id: item.id, name: item.name, artists: [item.artists[0].name], position: items.indexOf(item) + 1, image: item.album.images[0].url }
          tracks.push(track)
        })
        setSongs(tracks)
        setStandby(false)
        setArtists([])
        setPlaylists([])
      })
      .catch((error: any) => {
        if (error) {
          window.location.replace('http://localhost:8888/login')
        }
      })
  }

  const getPlaylists = () => {
    const headers = {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`
    }
    const params = {
      limit: 50
    }
    api.get('/me/playlists', { headers, params })
      .then((response: any) => {
        const playlists: any = []
        const { items } = response.data
        items.forEach((item: any) => {
          const playlist = { id: item.id, name: item.name, owner: [item.owner.display_name], image: item.images[0] ? item.images[0].url : DefaultDisc, position: items.indexOf(item) + 1 }
          console.log(playlist)
          playlists.push(playlist)
        })
        setPlaylists(playlists)
        setStandby(false)
        setArtists([])
        setSongs([])
      })
      .catch((error: any) => {
        if (error) {
          window.location.replace('http://localhost:8888/login')
        }
      })
  }

  const messages = ['Please, Justin Bieber no', 'I\'m praying that you do not listen to Lana del Rey', 'Awesome taste! I\'m kidding', 'Are you still living in the past? Refresh dude', 'Another Taylor Swift fan, meh', 'Call me, I\'show what is good music']

  return (
    <Container>
      <Header>
        <ImageLogo src={Logo} />
        <ButtonBox>
          <Button onClick={() => getTopArtists()} > My top artists </Button>
          <Button onClick={() => getTopSongs()}> My top songs </Button>
          <Button onClick={() => getPlaylists()}> My playlists </Button>
        </ButtonBox>
      </Header>
      <TextBox> <h1> {hash ? messages[(Math.floor(Math.random() * messages.length) + 1)] : 'Click in any button above to login'}</h1></TextBox>
      {
        standby
          ? <>
            <ContainerStandBy>
              <div style={{ order: Math.floor(Math.random() * 4) + 1, marginTop: Math.floor(Math.random() * 250) + 1 }}>
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
              </div>
              <div style={{ order: Math.floor(Math.random() * 4) + 1, marginTop: Math.floor(Math.random() * 250) + 1 }}>
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
              </div>
              <div style={{ order: Math.floor(Math.random() * 4) + 1, marginTop: Math.floor(Math.random() * 250) + 1 }}>
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
              </div>
              <div style={{ order: Math.floor(Math.random() * 4) + 1, marginTop: Math.floor(Math.random() * 250) + 1 }}>
                <Lottie options={{
                  loop: true,
                  autoplay: true,
                  animationData: MusicDisc,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                  height={200}
                  width={200}
                />
              </div>
            </ContainerStandBy>
          </>
          : <>
            <CardContainer style={{ opacity: !standby ? 1 : 0 }}>
              {
                artists &&
                artists.map((artist: IArtist) => {
                  return <Card key={artist.id} name={artist.name} image={artist.image} content={artist.genres} position={artist.position} />
                })
              }
              {
                songs &&
                songs.map((song: ISong) => {
                  return <Card key={song.id} name={song.name} image={song.image} content={song.artists} position={song.position} />
                })
              }
              {
                playlists &&
                playlists.map((playlist: IPlaylist) => {
                  return <Card key={playlist.id} name={playlist.name} image={playlist.image} content={playlist.owner} position={playlist.position} />
                })
              }
            </CardContainer> </>
      }
    </Container>
  )
}

export default Home
