import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../elements/Button'
import TextInput from '../elements/TextInput'

const HeaderForm = ({inputPlaceholder, buttonLabel}) => {
    return (
        <Form >
            <TextInput placeholder={inputPlaceholder}></TextInput>
            <Button>{buttonLabel}</Button>
        </Form>
    )

}

HeaderForm.propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
}

const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

export default HeaderForm;