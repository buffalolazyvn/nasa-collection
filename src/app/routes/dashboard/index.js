import React from 'react'
import { connect } from 'react-redux'

// Components
import Page from '../../components/Page'
import { CollectionItemDefault } from '../../components/CollectionItem'
import Button from '../../components/Button'
import { Text, IconFont } from '../../components/Typography'

// style component
import {
  DashboardWrapper,
  HeaderdWrapper,
  HeaderLeft,
  HeaderRight,
  ContentWrapper,
} from './style'

const GoToSearchPage = () => {
  window.location = '/search'
}

class Dashboard extends React.Component {
  render() {
    return (
      <Page
        title="NASA Collection"
        description="NASA Collection dashboard"
      >
        <DashboardWrapper>
          <HeaderdWrapper>
            <HeaderLeft>NASA Collection</HeaderLeft>
            <HeaderRight>
              <Button onClick={GoToSearchPage}>
                <Text><IconFont icon='plus' padding="0 10px 0 0"/>Add new item</Text>
              </Button>
            </HeaderRight>
          </HeaderdWrapper>
          <ContentWrapper>
            <CollectionItemDefault></CollectionItemDefault>
            <CollectionItemDefault></CollectionItemDefault>
            <CollectionItemDefault></CollectionItemDefault>
            <CollectionItemDefault></CollectionItemDefault>
            <CollectionItemDefault></CollectionItemDefault>
            <CollectionItemDefault></CollectionItemDefault>
            <CollectionItemDefault></CollectionItemDefault>
            <CollectionItemDefault></CollectionItemDefault>
          </ContentWrapper>
        </DashboardWrapper>
      </Page>
    )
  }
}

export default connect()(Dashboard)
