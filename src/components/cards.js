import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ExternalLink from './externalLink';
import Masonry from './Masonry/Masonry';
import ResponsiveMasonry from './Masonry/ResponsiveMasonry';

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
      <ExternalLink
        href={post.href.href}
        className={`caption ${stylesheet.link}`}
      >
        Shop {post.name}
      </ExternalLink>
    </>
  );
};

const Cards = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) {
    posts = [posts];
  }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="60px" as="ul">
        {posts.map((post) => {
          return (
            <li key={post.name} className={stylesheet.listItem}>
              <Card post={post} />
            </li>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export { Cards, Card };
