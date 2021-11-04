import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants.js';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <Info>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </Info>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: 'info avatar';


  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Info = styled.div`
  grid-area: info;
`
const Avatar = styled.img`
  grid-area: avatar;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
