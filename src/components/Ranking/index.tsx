// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container, ItemColumn, BarBox, BarProgress, ArtistPic } from './styles'

const Ranking: React.FC = () => {
  return (
    <Container>
      <ItemColumn>
        <ArtistPic>
        </ArtistPic>
        <BarBox>
          <BarProgress>
          </BarProgress>
        </BarBox>
      </ItemColumn>
      <ItemColumn>
        <ArtistPic>
        </ArtistPic>
        <BarBox>
          <BarProgress>
          </BarProgress>
        </BarBox>
      </ItemColumn>
      <ItemColumn>
        <ArtistPic>
        </ArtistPic>
        <BarBox>
          <BarProgress>
          </BarProgress>
        </BarBox>
      </ItemColumn>
    </Container>
  )
}

export default Ranking
