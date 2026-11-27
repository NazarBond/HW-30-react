import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, NotFoundText } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  if (visibleContacts.length === 0) {
    return <NotFoundText>No contacts match your search.</NotFoundText>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
