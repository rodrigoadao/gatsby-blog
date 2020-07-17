import React from 'react'
import links from './content'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'
const MenuLinks = () => (
    <S.MenuLinksWrapper>
        <S.MenuLinkList>
            {links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink cover direction="left" bg={getThemeColor()} duration={0.6} to={link.url} className="active">{link.label}</S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinkList>
    </S.MenuLinksWrapper>
)

export default MenuLinks