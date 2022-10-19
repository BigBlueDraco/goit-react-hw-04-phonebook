import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, filter, deletFunc }) => {
  return (
    <>
      <ul>
        {contacts
          .filter(({ name }) => name.toLowerCase().includes(filter))
          .map(elem => (
            <ContactsItem
              key={elem.name}
              name={elem.name}
              number={elem.number}
              deletFunc={deletFunc}
            />
          ))}
      </ul>
    </>
  );
};

const ContactsItem = ({ id, name, number, deletFunc }) => {
  return (
    <li id={name}>
      {name}
      {number}
      <button data-id={name} onClick={e => deletFunc(e)}>
        Delete
      </button>
    </li>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  deletFunc: PropTypes.func.isRequired,
};
