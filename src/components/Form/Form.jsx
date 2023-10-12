import { Formik, Field } from 'formik';
import { FormFlex, Box } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const checkingContact = contact => {
        return contacts.find(elem => elem.name.toLowerCase() === contact.name.toLowerCase())
    }

    const addThisContact = contact => {
        if (checkingContact(contact)) {
            return window.alert('Contact already exists.')
        } else {
            dispatch(addContact(contact))
        }
    }

return <Formik
    initialValues={{
        name: '',
        phone: ''
    }}
    onSubmit={addThisContact}>
    <FormFlex>
    <Box>
            Name
        <Field
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    >
            
        </Field>
        </Box>
    <Box>
            Number
            <Field
    type="tel"
    name="phone"
    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    >
            
        </Field>
        </Box>
        <button type='submit'>Add contact</button>
</FormFlex>
</Formik>
}