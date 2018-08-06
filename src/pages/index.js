import React from 'react'
import Link from 'gatsby-link'
import img1 from './gallery/20180611-2.jpg'
import img2 from './gallery/20180611.jpg'
import img3 from './gallery/20180617.jpg'
import img4 from './gallery/20180617-2.jpg'

const IndexPage = () => (
  <div className="gallery">
    <img src={img1} />
    <img src={img2} />
    <img src={img3} />
    <img src={img4} />
  </div>
)

//<Link to="/page-2/">Go to page 2</Link>

export default IndexPage
