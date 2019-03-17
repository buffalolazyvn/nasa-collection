import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { formValueSelector, reduxForm, Field } from 'redux-form'

import _ from 'lodash'

// Components
import Page from '../../components/Page'
import { CollectionItemNew } from '../../components/CollectionItem'
import Button from '../../components/Button'
import { Text, IconFont } from '../../components/Typography'

import { Input } from '../../components/Form'
import { required } from '../../helpers/validation'

// style component
import {
  SearchWrapper,
  BackAction,
  SearchTitle,
  SearchInput,
  SeachResultWrapper,
  SearchResultSummary,
} from './style'

// Actions
import { searchRequest } from './actions'

const GoToHomePage = () => {
  window.location = '/'
}

class Search extends React.Component {
  handleSubmitSearchRequest = e => {
    const { searchRequest } = this.props

    searchRequest({ searchText: this.props.searchCondition })
    e.preventDefault && e.preventDefault()
  }

  render() {
    const { items, searchCondition } = this.props
    const collectionItems = _.castArray(_.get(items, 'collection.items'))
    const hasResult = _.get(items,"collection.metadata")
    const totalItem = _.get(items,"collection.metadata.total_hits", 0)

    return (
      <Page
        title="Search from NASA"
        description="Type something to search from NASA"
      >
        <SearchWrapper onSubmit={this.handleSubmitSearchRequest}>
          <BackAction>
            <Button onClick={GoToHomePage} bgColor="#FFF">
              <Text color="#784CC0">
                <IconFont
                  icon="chevron-left"
                  padding="0 10px 0 0"
                  color="#784CC0"
                />
                Back to Collection
              </Text>
            </Button>
          </BackAction>
          <SearchTitle>Search from NASA</SearchTitle>
          <SearchInput>
            <Field
              name="searchText"
              component={Input}
              type="text"
              validate={[required]}
              placeholder=""
            />
          </SearchInput>
          {hasResult && (
            <SearchResultSummary>{totalItem} result for "{searchCondition}"</SearchResultSummary>
          )}
          <SeachResultWrapper>
            {collectionItems && collectionItems.length> 0 && collectionItems.map((item, key) => item && (
              <CollectionItemNew item={item} key={key}/>
            ))}
          </SeachResultWrapper>
        </SearchWrapper>
      </Page>
    )
  }
}

Search.defaultProps = {
  searchCondition: '',
  items: {},
}

Search.propTypes = {
  searchRequest: PropTypes.func.isRequired,
  searchCondition: PropTypes.string,
  items: PropTypes.object,
}

const selector = formValueSelector('search')

const mapStateToProps = state => ({
  searchCondition: selector(state, 'searchText'),
  items: state.search.get('items'),
})

const mapDispatchToProps = dispatch => ({
  searchRequest: searchText => dispatch(searchRequest(searchText)),
})

Search = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)

export default reduxForm({
  form: 'search',
  touchOnBlur: false,
})(Search)
