// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container, Position, Crown, ArtistPic, NameArtist, Genres } from './styles'
import CrownFirst from '../../assets/crown-first.svg'
import CrownSecond from '../../assets/crown-second.svg'
import CrownThird from '../../assets/crown-third.svg'
import Medal from '../../assets/medal.svg'
import Badge from '../../assets/badge.svg'

interface Props {
  name: string,
  image: string,
  content: any,
  position: number
};

// eslint-disable-next-line react/prop-types
const Card: React.FC<Props> = ({ name, image, content, position }) => {
  console.log({ name, image, content, position })
  return (
    <Container>
      <Position>
        <h3>{position}</h3>
      </Position>
      {
        position === 1 &&
        <Crown src={CrownFirst} />
      }
      {
        position === 2 &&
        <Crown src={CrownSecond} />
      }
      {
        position === 3 &&
        <Crown src={CrownThird} />
      }
      {
        position === 4 &&
        <Crown src={Medal} />
      }
      {
        position === 5 &&
        <Crown src={Badge} />
      }
      <ArtistPic src={image} />
      <NameArtist>
        <h3>{name}</h3>
      </NameArtist>
      <Genres>
        {
          content &&
          // eslint-disable-next-line react/prop-types
          content.slice(0, 2).map((item: Props) => {
            return <p key={content[0]}> {item}</p>
          })
        }
      </Genres>
    </Container>
  )
}

export default Card
