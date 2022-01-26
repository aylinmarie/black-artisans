import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import { Seo, Layout } from '@components';
class AccessibilityIndex extends React.Component {
  render() {
    // Refactor to create page templates from contentful. This is only pulling the accessibility page
    const page = get(this, 'props.data.allContentfulPage.nodes[0]');
    return (
      // Refactor styling for contentful page types
      <Layout
        location={this.props.location}
        style={{ margin: 'auto', padding: '10%', maxWidth: '1600px' }}
      >
        <Seo title={page.title} />
        <div
          dangerouslySetInnerHTML={{
            __html: page.body?.childMarkdownRemark?.html,
          }}
        />
      </Layout>
    );
  }
}

export default AccessibilityIndex;

export const pageQuery = graphql`
  query AccessibilityIndexQuery {
    allSitePage {
      nodes {
        path
      }
    }
    allContentfulPage {
      nodes {
        description {
          description
        }
        slug
        title
        updatedAt(formatString: "")
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
