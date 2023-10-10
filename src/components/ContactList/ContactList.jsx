import { nanoid } from "nanoid";
import { List, ListItems } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactReducer';
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter)

    return (<ListItems>{
        contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase()))
            .map(contact => <List key={nanoid()}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
            </List>)
    }
</ListItems>)
}