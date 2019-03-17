import styled from 'styled-components'

const CollectionItemWrapper = styled.div`
  min-height: 180px;
  width: auto;
`

const VideoThumnailWrapper = styled.div`
  .thumnail {
    border-radius: 3px;
    width: 300px;
    height: 168px;
    box-shadow: -1px 44px 20px -33px rgba(0,0,0,0.34);
  }
`;

const ItemSummary = styled.div`
  width: 100%;
  display: inline-grid;
  margin-top: 29px;
  grid-template-columns: 65% auto;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.09px;
  line-height: 21px;
  opacity: 0.6000000238418579;
`

const ItemSummaryLeft = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const ItemSummaryRight = styled.div`
  text-align: right;
`

const ItemContentWrapper = styled.div`
  margin-top: 8px;
  color: #000000;
`

const ItemTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.58px;
  line-height: 29px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const ItemContent = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.11px;
  opacity: 0.6000000238418579;  
  height: 60px;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
`

const ItemActionWrapper = styled.div`
  margin-top: 11px;
  width: 100%;
  display: inline-grid;
  height: 44px;
  grid-template-columns: repeat(3, 44px [col-start]);
  grid-column-gap: 15px;
  align-items: center;
  justify-items: center;
` 

const ItemAction = styled.div`
  border: 1px solid #CECED2;
  border-radius: 3px;
  opacity: 0.4000000059604645;
  width: 44px;
  height: 44px;
  text-align: center;

  :hover{
    opacity: 1;
  }
`

const ItemActionNewWrapper = styled.div`
  margin-top: 11px;

  button {
    border: 1px solid #CECED2;
    border-radius: 3px;
    opacity: 0.5;
    width: 100%;
    color: #000;

    :hover{
      opacity: 1 !important;
      border: 1px solid #CECED2 !important;
      color: #000 !important;
    }

    div{
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.09px;
      line-height: 14px;
      
      span{
        position: absolute;
        margin-left: -65px;
        margin-top: 6px;
      }
    }
  }
`

export {
  CollectionItemWrapper,
  VideoThumnailWrapper,
  ItemSummary,
  ItemSummaryLeft,
  ItemSummaryRight,
  ItemContentWrapper,
  ItemTitle,
  ItemContent,
  ItemActionWrapper,
  ItemAction,
  ItemActionNewWrapper,
}
