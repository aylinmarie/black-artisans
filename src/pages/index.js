import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import { Layout, Button, Block, Cards, Card } from '@components';

import { Container, Row, Col } from 'shards-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import '../styles/global.css';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulCreators.nodes');

    return (
      <Layout location={this.props.location}>
        <Container className="borderBottom">
          <Row>
            <Col
              sm="12"
              lg="3"
              className="paddingNone"
              style={{ overflow: 'hidden' }}
            >
              <Block className="borderBottom borderRight">
                <h2>blackartisans</h2>
                <p className="caption">handmade work by black creators</p>
                <p>
                  Creating something by hand is so personal. Appreciation of
                  tangible art and crafted products have matured in our digital
                  age. This project was created to collect and celebrate the
                  talent that lives within the black community.
                </p>
              </Block>
              <Block className="borderRight" style={{ height: '100%' }}>
                <h3>know someone?</h3>
                <p>
                  If you know of a black creator you would like to see featured
                  here, let us know!
                </p>
                <Button
                  type="tertiary"
                  href="mailto:hello@blackartisans.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send a note
                </Button>
              </Block>
            </Col>
            <Col sm="12" lg="9">
              {/* Single creator view */}
              <section>
                <Card post={posts[0]} />
              </section>
            </Col>
          </Row>
        </Container>

        {/* List of creators */}
        <section>
          <Cards posts={posts.slice(1)} />
        </section>
      </Layout>
    );
  }
}

export default RootIndex;

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
          title
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
`;
