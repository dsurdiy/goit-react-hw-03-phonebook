import { Component } from 'react';
import { nanoid } from 'nanoid';
import { IoMdContact } from 'react-icons/io';
import { BsFillPhoneFill } from 'react-icons/bs';
import { Form, FormInput, AddContactBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = this.createContact();

    this.props.onSubmit(newContact);
    this.reset();
  };

  createContact = () => {
    const { name, number } = this.state;
    return {
      id: nanoid(),
      name,
      number,
    };
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <IoMdContact size={20} fill="tomato" /> Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <BsFillPhoneFill size={18} fill="tomato" /> Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    );
  }
}
