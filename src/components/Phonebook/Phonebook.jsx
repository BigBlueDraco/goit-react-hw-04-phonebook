import React from 'react';
import nextId from 'react-id-generator';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const searcheHandler = ({ target: { value } }) => {
    setFilter(value.toLowerCase());
  };
  const onSubmit = data => {
    if (contacts.findIndex(elem => elem.name === data.name) !== -1) {
      alert('Contact already exists');
      return;
    }
    setContacts([
      ...contacts,
      { id: nextId(), name: data.name, number: data.number },
    ]);
  };

  const deleteContact = e => {
    const index = contacts.findIndex(elem => elem.id === e.target.dataset.id);
    contacts.splice(index, 1);
    setContacts([...contacts]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contacts'));
    if (data) {
      setContacts([...data]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('DidUpdate' + contacts);
  }, [contacts]);

  return (
    <>
      <ContactForm inputFunc={searcheHandler} submitFunc={onSubmit} />
      <Section title="Contacts">
        <Filter searcheFunc={searcheHandler} />
        <ContactsList
          contacts={contacts}
          filter={filter}
          deletFunc={deleteContact}
        />
      </Section>
    </>
  );
};
