import React from 'react'
import {PageSubtitleStyled, PageTitleContainer, PageTitleStyled} from './PageTitle.style'

interface PageTitleProps{
    title: String | JSX.Element;
    subtitle?: String | JSX.Element;
}


const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}  
            </PageTitleStyled>
            <PageSubtitleStyled>
                {props.subtitle}
            </PageSubtitleStyled>
                ----------------
                {props.children}
        </PageTitleContainer>
    )
}

export default PageTitle;