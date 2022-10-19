import { Button } from 'components/Button/Button';
import { Section } from 'components/Section/Section';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { useState } from 'react';

const INITIAL_FORM_DATA = {
  name: '',
  number: '',
};

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };
  const handleNumberChange = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.submitFunc({ name, number });
    reset();
  };

  const reset = () => {
    setName(INITIAL_FORM_DATA.name);
    setNumber(INITIAL_FORM_DATA.number);
  };
  return (
    <>
      <Section title="Add contact">
        <form action="" onSubmit={e => handleSubmit(e)}>
          <label htmlFor="">
            <span>Name</span>
            <input
              value={name}
              onInput={e => handleNameChange(e)}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label htmlFor="">
            <span>Number</span>
            <input
              value={number}
              onChange={e => handleNumberChange(e)}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <Button type="submit" text="submit"></Button>
        </form>
      </Section>
    </>
  );
};

ContactForm.propTypes = {
  submitFunc: PropTypes.func.isRequired,
};
