import styled from 'styled-components'

const SearchWrapper = styled.form`
  display: grid;
  grid-template-columns: 940px;
  background-color: #fff;
  justify-content: center;
`
const BackAction = styled.div`
`
const SearchTitle = styled.div`
  color: #000000;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -0.96px;
  line-height: 48px;
  opacity: 0.75;
  padding: 45px 0;
`
const SearchInput = styled.div`
  input{
    font-size:30px
  }
`
const SeachResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  align-self: center;
`
const SearchResultSummary=styled.div`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.09px;
  line-height: 14px;
  margin: 35px 0px;
`
export {
  SearchWrapper,
  BackAction,
  SearchTitle,
  SearchInput,
  SeachResultWrapper,
  SearchResultSummary,
}
