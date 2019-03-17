import React from 'react'
// import PropTypes from 'prop-types'

import { IconAction } from '../Typography'

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
  ItemActionWrapper,
  ItemAction,
} from './style'

const CollectionItem = () => {
  // const { type, ...rest } = props
  return (
    <CollectionItemWrapper>
      <VideoThumnailWrapper>
        <img
          className="thumnail"
          alt="thumnail"
          src="https://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~thumb.jpg"
        />
      </VideoThumnailWrapper>
      <ItemSummary>
        <ItemSummaryLeft title="Test demo">Test demo</ItemSummaryLeft>
        <ItemSummaryRight>12 Feb, 2018</ItemSummaryRight>
      </ItemSummary>
      <ItemContentWrapper>
        <ItemTitle title="Eclipse over the Gulf of Poets">
          Eclipse over the Gulf of Poets
        </ItemTitle>
        <ItemContent>
          The total phase of the July 27 lunar eclipse lasted for an impressive
          103 minutes. That makes it the longest total lunar eclipse of the The
          total phase of the July 27 lunar eclipse lasted for an impressive 103
          minutes. That makes it the longest total lunar eclipse of the The
          total phase of the July 27 lunar eclipse lasted for an impressive 103
          minutes. That makes it the longest total lunar eclipse of the The
          total phase of the July 27 lunar eclipse lasted for an impressive 103
          minutes. That makes it the longest total lunar eclipse of the The
          total phase of the July 27 lunar eclipse lasted for an impressive 103
          minutes. That makes it the longest total lunar eclipse of the The
          total phase of the July 27 lunar eclipse lasted for an impressive 103
          minutes. That makes it the longest total lunar eclipse of the
        </ItemContent>
      </ItemContentWrapper>
      <ItemActionWrapper>
        <ItemAction>
          <IconAction icon="heart" color="#E54D42" type="fa" />
        </ItemAction>
        <ItemAction>
          <IconAction icon="trash-alt" type="far" />
        </ItemAction>
        <ItemAction>
          <IconAction icon="pen" type="fa" />
        </ItemAction>
      </ItemActionWrapper>
    </CollectionItemWrapper>
  )
}

CollectionItem.propTypes = {
}

CollectionItem.defaultProps = {
}

export default CollectionItem
