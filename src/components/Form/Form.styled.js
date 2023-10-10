import styled from 'styled-components';
import { Form } from 'formik';

export const FormFlex = styled(Form)`
display: flex;
gap: 16px;
justify-content: center;
border: 1px solid black;
padding: 12px 16px;
width: 500px;
`

export const Box = styled.label`
display: flex;
flex-direction: column;
gap: 8px;
`