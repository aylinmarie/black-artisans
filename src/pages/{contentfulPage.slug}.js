import React from 'react';
import { graphql } from 'gatsby';

import { Seo, Layout } from '@components';

import * as stylesheet from './page.module.css';

const Page = ({ data }) => {
  const _DATA = data.contentfulPage;
  const date = new Date(_DATA.updatedAt).toDateString();
  return (
    <Layout>
      <div className={stylesheet.root}>
        <Seo title={_DATA.title} description={_DATA.description.description} />
        <h2>{_DATA.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: _DATA.body?.childMarkdownRemark?.html,
          }}
        />
        <p className={stylesheet.meta}>
          <strong>Last updated:</strong> {date}
        </p>
      </div>
    </Layout>
  );
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      title
      description {
        description
      }
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      updatedAt
    }
  }
`;

export default Page;
