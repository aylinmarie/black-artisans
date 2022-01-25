import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Container from './container';
import * as styles from './article-preview.module.css';

const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) {
    posts = [posts];
  }

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.name}>
              <GatsbyImage
                alt={post.image.title}
                image={post.image.gatsbyImageData}
              />
              <h2 className={styles.title}>{post.name}</h2>

              <div>{post.description.description}</div>
              <a
                href={post.href}
                className={`caption ${styles.link}`}
                target="_blank"
                rel="noreferrer"
              >
                Shop {post.name}
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ArticlePreview;
