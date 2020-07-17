import React from 'react'
import getThemeColor from '../../utils/getThemeColor'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, description }
        }
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    title
                    description
                    position
                }
            }
        }
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/">
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
                <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileLink>
        </S.ProfileWrapper>
    )
}

export default Profile