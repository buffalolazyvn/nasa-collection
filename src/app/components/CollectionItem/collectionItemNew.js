import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import Button from '../../components/Button'
import { Text, IconFont } from '../../components/Typography'

// style component
import {
  CollectionItemWrapper,
  VideoThumnailWrapper,
  ItemSummary,
  ItemSummaryLeft,
  ItemSummaryRight,
  ItemContentWrapper,
  ItemTitle,
  ItemContent,
  ItemActionNewWrapper,
} from './style'

const CollectionItem = props => {
  const { item } = props
  const data = _.get(item, 'data[0]', {})
  const date_created = new Date(_.get(data, 'date_created', ''))
  const links = _.get(item, 'links', [])
  const thumnailSrc = _.get(links,"[0].href", "")

  return (
    item && (
      <CollectionItemWrapper>
        <VideoThumnailWrapper>
          <img
            className="thumnail"
            alt="thumnail"
            src={thumnailSrc}
          />
        </VideoThumnailWrapper>
        <ItemSummary>
          <ItemSummaryLeft title="{data.nasa_id}">{data.nasa_id}</ItemSummaryLeft>
          <ItemSummaryRight>{date_created.toLocaleDateString()}</ItemSummaryRight>
        </ItemSummary>
        <ItemContentWrapper>
          <ItemTitle title="{data.title}">{data.title}</ItemTitle>
          <ItemContent>{data.description}</ItemContent>
        </ItemContentWrapper>
        <ItemActionNewWrapper>
          <Button height="44px" bgColor="#FFF" className="add-button">
            <Text>
              <IconFont icon="plus" color="#000" padding="0" fontSize="24px" />
              Add to NASA collection
            </Text>
          </Button>
        </ItemActionNewWrapper>
      </CollectionItemWrapper>
    )
  )
}

CollectionItem.propTypes = {
  item: PropTypes.object,
}

CollectionItem.defaultProps = {
  item: {},
}

export default CollectionItem
