import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Col, Row } from 'shards-react';

import * as stylesheet from './cards.module.css';

const Card = ({ post }) => {
  return (
    <>
      <GatsbyImage
        alt={post.image.title}
        image={post.image.gatsbyImageData}
        className={stylesheet.img}
      />
      <h3>{post.name}</h3>
      <p>{post.description.description}</p>
      <a
        href={post.href}
        className={`caption ${stylesheet.link}`}
        target="_blank"
        rel="noreferrer"
      >
        Shop {post.name}
      </a>
    </>
  );
};

const Cards = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) {
    posts = [posts];
  }

  return (
    <Row tag="ul" className={stylesheet.list}>
      {posts.map((post) => {
        return (
          <Col tag="li" sm="12" lg="4" key={post.name}>
            <Card post={post} />
          </Col>
        );
      })}
    </Row>
  );
};

export { Cards, Card };
