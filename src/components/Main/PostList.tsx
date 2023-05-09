import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugits rem temporibus! Maxime molestias, sumtrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    '<https://ji5485.github.io/static/>'
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
  return <PostListWrapper></PostListWrapper>
}

export default PostList
