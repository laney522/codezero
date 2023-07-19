import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';

/*
const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugits rem temporibus! Maxime molestias, sumtrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  link: '<https://www.google.co.kr/>',
}
*/

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-colums: 1fr; 
    width: 100%; 
    padding: 50px 20px; 
  }
`

const PostList: FunctionComponent = function () {
  return <PostListWrapper></PostListWrapper>;
}

export default PostList 
 