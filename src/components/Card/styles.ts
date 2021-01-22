import styled from 'styled-components'

export const Container = styled.div`
  margin: 10px;
  background: linear-gradient(0deg, rgba(22,251,103,1) 47%, rgba(65,65,65,1) 100%);  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 95%;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

export const Position = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  h3{
    font-size: 26px;
  }
`

export const ArtistPic = styled.img`
  display: flex;
  align-self: center;
  height: 150px;
  width: 150px;
  background-color: white;
  border-radius: 200px;
  margin: 50px 50px 0 50px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

export const NameArtist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 120px;
  h3{
    margin: 10px;
    font-size: 26px;
    text-align: center;
  }
`

export const Genres = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  height: 30px;
  p{
    font-size: 16px;
    text-transform: capitalize;
    text-align: center;
  }
`

export const Crown = styled.img`
  position: absolute;
  align-self: center;
  height: 50px;
  top: 35px;
`
