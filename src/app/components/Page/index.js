import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Helmet from 'react-helmet'
import {
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION
} from '../../config'

class Page extends Component {
  getMetaTags(
    {
      title,
      description,
      image,
      noCrawl,
    },
  ) {
    const theTitle = title ? title : DEFAULT_TITLE

    const theDescription = description
      ? description.substring(0, 155)
      : DEFAULT_DESCRIPTION

    const theImage = image ? `${SITE_URL}${image}` : null

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription }
    ]

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' })
    }

    return metaTags
  }

  render() {
    const {
      children,
      id,
      className,
      ...rest
    } = this.props

    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`
          }}
          title={
            rest.title ? rest.title : DEFAULT_TITLE
          }
          link={[
            {
              rel: 'canonical',
              href: SITE_URL + this.props.location.pathname
            }
          ]}
          meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        {children}
      </div>
    );
  }
}

export default withRouter(Page);
