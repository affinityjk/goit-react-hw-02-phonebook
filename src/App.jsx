import { Component } from "react";
import { Container } from "components/Container/Container";
import { ContactsForm } from "components/Form/ContactsForm";
import { ContactsList } from "components/Contacts/ContactsList";
import { Section } from "components/Section/Section";
import { Filter } from "components/Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (newContact) => {
    this.state.contacts.some(({ name }) => name === newContact.name)
      ? alert(`Contact ${newContact.name} already exists`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.includes(normalizeFilter)
    );
  };

  render() {
    const filtered = this.filteredContacts();
    return (
      <Container>
        <Section title="Phonebook">
          <ContactsForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter
            filter={this.state.filter}
            onChange={this.handleFilterChange}
          />
          <ContactsList
            contacts={filtered}
            onDeleteClick={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
