import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selectors';
import { Form, Label, Input, SubmitButton } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${trimmedName} is already in contacts.`);
      return;
    }

    dispatch(addContact(trimmedName, trimmedNumber));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
