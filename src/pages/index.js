import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulCreators.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        {/* <Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio.shortBio}
        /> */}
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
query IndexQuery {
  allSitePage {
    nodes {
      path
    }
  }
  allContentfulCreators {
    nodes {
      id
      name
      image {
        gatsbyImageData
      }
      description {
        description
      }
      href {
        href
      }
    }
  }
}
`
