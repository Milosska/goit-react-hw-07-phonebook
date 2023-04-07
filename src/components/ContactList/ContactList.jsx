import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
import { ContactListElem } from '../ContactListElem/ContactListElem';

export const ContactList = () => {
  const contacts = useSelector(selectFiltredContacts);

  const makeList = arrey => {
    return arrey.map(({ id, name, phone }) => {
      return (
        <ContactListElem
          key={id}
          contactName={name}
          contactNumber={phone}
          contactId={id}
        />
      );
    });
  };

  return <ul>{makeList(contacts)}</ul>;
};
