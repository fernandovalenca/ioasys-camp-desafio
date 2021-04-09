import styled from 'styled-components';
import { rem } from 'polished';

export const ModalOverlay = styled.div`
position: fixed;

display: flex;
justify-content: center;
align-items: center;

top: 0;
left: 0;
bottom:0;
right: 0;

background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(2px);

overflow-y: auto;

::-webkit-scrollbar {
width: 4px;
height: 2em;
}

::-webkit-scrollbar-thumb {
-webkit-border-radius: 10px;
border-radius: 10px;

height: 2em;

background: #AB2680;
}

@media(min-width: 880px){
  overflow: hidden;
}
`

export const ModalContainer = styled.div`
position: absolute;

display: flex;
flex-direction: column;
align-items: center;

left: 16px;
top: 50px;

width: min(90vw);

padding: 24px;

background: white;
border-radius: 4px;

aside {

margin-bottom: 24px;

img {
position: relative;

width: 280px;
height: 400px;

filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));
}
}

@media(min-width:880px){
  position: relative;

  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 769px;
}
`

export const Description = styled.div`

header {
margin-bottom: 1rem;

h1 {

font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 40px;
/* or 143% */


color: #333333;
}

p {
width: 240px;
height: 20px;

font-family: Heebo;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 167% */


color: #AB2680;
}
}

`

export const Review = styled.section`

header {
margin-bottom: 1rem;

h2 {
font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 28px;
/* or 237% */

text-transform: uppercase;

color: #333333;
}
}

blockquote {

img {
margin-right: 5px;
}

font-family: Heebo;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
/* or 167% */

color: #999999;
}

`

export const About = styled.section`

margin: 20px 0;

header {

h2 {
font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 28px;
/* or 237% */

text-transform: uppercase;

color: #333333;
}
}

section {
display: grid;
grid-template-columns: 1fr 1fr;
height: 140px;
}
`
export const Label = styled.div`
width: 84px;
height: 175px;

font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;

color: #333333;
`

export const Info = styled.div`


font-family: Heebo;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
/* or 167% */

text-align: right;

color: #999999;
`

export const ButtonClose = styled.button`
position: absolute;

top: 7px;
right: 15px;

width: 32px;
height: 32px;
border-radius: 50%;
`