import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const FormSubtitle = ({text, linkURL, linkText}) => {
    return (
        <Span>
            {text}
            <FormLink to="/">{linkText}</FormLink>
        </Span>
    )
}

const Span = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`
export default FormSubtitle;