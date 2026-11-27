import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, MainTitle, SubTitle, EmptyMessage } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <EmptyMessage>Your phonebook is empty. Add your first contact!</EmptyMessage>
      )}
    </Container>
  );
};
