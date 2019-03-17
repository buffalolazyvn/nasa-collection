import styled from 'styled-components'

const DashboardWrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 60px;
  grid-template-columns: 300px 300px 300px;
  grid-template-areas:
    "header  header  header"
    "content content content";
  background-color: #fff;
  justify-content: center;
`

const HeaderdWrapper = styled.div`
  grid-area: header;
  height: 60px;
  align-self: center;
  display: grid;
  grid-template-columns: 600px auto;
  grid-column-gap: 0;
  align-content: center;
`

const HeaderLeft = styled.div`
  color: #000000;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -1.21px;
  line-height: 60px;
  opacity: 0.30327;
  text-align: left;
`

const HeaderRight = styled.div`
  justify-self: end;
  align-self: center;
`

const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  align-self: center;
`

export {
  DashboardWrapper,
  HeaderdWrapper,
  ContentWrapper,
  HeaderLeft,
  HeaderRight,
}
