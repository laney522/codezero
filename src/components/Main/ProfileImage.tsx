import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// person settings
const PROFILE_IMAGE_LINK = 
  '<https://avatars.githubusercontent.com/u/62184014?s=400&v=4>'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50px;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
