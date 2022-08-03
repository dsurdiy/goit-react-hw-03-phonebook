import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, AppTitle, ContactsTitle } from './App.styled';
import { FcContacts } from 'react-icons/fc';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = newContact => {
    const { contacts } = this.state;
    const normalizedNewContactsName = newContact.name.toLowerCase();

    const existingСontact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedNewContactsName
    );

    if (existingСontact) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(({ contacts }) => {
      return { contacts: [newContact, ...contacts] };
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <AppTitle>
          Phonebook <FcContacts size={30} />
        </AppTitle>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
