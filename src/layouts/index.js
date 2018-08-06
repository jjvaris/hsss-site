import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Nav from '../components/nav'
import './index.css'
//<Header siteTitle={data.site.siteMetadata.title} />
const Layout = ({ children, data }) => (
  <div className="main">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'HSSS' },
        { name: 'keywords', content: 'surf, skate, surfskate' },
      ]}
    />
    <Header />
    <Nav />
    <div className="content">{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
