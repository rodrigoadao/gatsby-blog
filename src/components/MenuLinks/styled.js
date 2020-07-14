import styled from 'styled-components'
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.div`
    ${media.lessThan("large")`
        display: none;
    `}
`

export const MenuLinkList = styled.ul`
    font-size: 1.2rem;
    font-wight: 300;
`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;

    .active {
        color: #1afa1f2;
    }
`

export const MenuLinksLink = styled(AniLink)`
    color: var(--texts);;
    text-decoration: none;
    transition: color 0.5s;

    &:hover{
        color: var(--highlight);;
    }
`