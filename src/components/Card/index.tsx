// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Container, Position, ArtistPic, NameArtist } from './styles'

const Card: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
    <Container /*  onMouseEnter={() => {
      setMouseEnter(true)
    }} */
    >
      <Position>
        <h3>1</h3>
      </Position>
      <ArtistPic />
      <NameArtist>
        <h3>Frank Ocean</h3>
      </NameArtist>
    </Container>
  )
}

export default Card
