import PropTypes from 'prop-types';
import { GrContactInfo } from 'react-icons/gr';
import { BiPhone } from 'react-icons/bi';
import { ContactInfo, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <ContactInfo>
        <span>
          <GrContactInfo />
          {name}
        </span>
        <span>
          <BiPhone />
          {number}
        </span>
      </ContactInfo>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
