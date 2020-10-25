import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
    padding: 10px;
    margin: 15px;
/*     border: 0;
    margin: 20px 30px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(255,255,255,1);
    box-shadow: 0px 0px 15px 0px rgba(255,255,255,1); */
`

export const BarBox = styled.div`
  width: 90%;
  height: ${px2vw(350, 1440)};
  margin: 15px 0;
  position: relative;
`
export const BarProgress = styled.div`
  background: linear-gradient(90deg, rgba(29,185,84,1) 0%, rgba(30,215,96,1) 86%);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: height 2s;
  position: absolute;
  bottom: 0;
`

export const ArtistPic = styled.div`
  display: flex;
  justify-self: flex-end;
  height: ${px2vw(200, 1440)};
  width: ${px2vw(200, 1440)};
  background-color: white;
  border-radius: 200px;
`
