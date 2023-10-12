import { List, ListItems } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from "redux/selectors";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "redux/operations";

export const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectVisibleContacts);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (<ListItems>{
        filteredContacts.map(contact => <List key={contact.id}>
            {contact.name}: {contact.phone}
            <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </List>)
    }
</ListItems>)
}