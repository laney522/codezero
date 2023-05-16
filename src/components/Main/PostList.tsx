import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugits rem temporibus! Maxime molestias, sumtrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    //'<https://e7.pngegg.com/pngimages/788/87/png-clipart-tropical-plants-green-leaves-tropical-plant-thumbnail.png>',
    //'<https://ji5485.github.io/static/e4f34c558ae8e8235ff53b0311085796/4d854/javascript-core-concept-summary-function-1.webp>',
    // '<https://lh3.googleusercontent.com/BCLrZSQ149dscBBnChfnOAFTzmT-T8EyV5Z4s2qRy2Mg_ySFwnnWIu_zZrO8XdsDMKBfdwSEU1YCCLCQbFyMBerfnuJYoeSGUyy6cGkDLw>',
    '..\images\pngegg.png',
  link: '<https://www.google.co.kr/>',
}


const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
