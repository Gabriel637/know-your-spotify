import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  height: ${px2vw(450, 1440)};
  width: ${px2vw(300, 1440)};
  background: linear-gradient(0deg, rgba(22,251,103,1) 47%, rgba(65,65,65,1) 100%);  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  transform-style: preserve-3d;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

export const Position = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    transition: all 0.75s ease-out;
    font-size: 36px;
  }
`

export const ArtistPic = styled.div`
  display: flex;
  justify-self: flex-end;
  height: ${px2vw(200, 1440)};
  width: ${px2vw(200, 1440)};
  background-color: white;
  border-radius: 200px;
  margin: 50px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

export const NameArtist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    transition: all 0.75s ease-out;
    font-size: 36px;
  }
`
