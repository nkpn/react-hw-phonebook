import React, { Component } from "react";
import shortid from "shortid";
import './App.css';
import ContactList from "./Components/ContactList/ContactList";
import Container from "./Components/Container/Container";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";
import Modal from "./Components/Modal/Modal";

class App extends Component {
  state = {
    contacts: [],
      filter: '',
      showModal: false
  };

  componentDidMount(){
    console.log('ComponentDidMount')
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts){
      this.setState({contacts: contacts})
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts){
     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onAdd = (name, number) => {
    const newContact = {
      name: name, 
      number : number,
      id : shortid.generate()
    }

    this.setState(({contacts}) => ({
      contacts: [ ...contacts, newContact ]
    }))
  }

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=> contact.id !== contactId)
    }))
  }

  onFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleFilter = () =>{
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();
    // return normalizedFilter;
    
    return contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter))
  }

  toggleShowModal= () =>{
    this.setState(({showModal})=> ({
      showModal: !showModal
    }))
  }

  render() {
    const {filter , showModal} = this.state;
    const {onAdd, onDelete, onFilter, toggleShowModal} = this;
    const filteredContacts = this.getVisibleFilter();
    
    return (
      
      <Container>
      <h1>PhoneBook</h1>
        <Filter value={filter}  onChange = {onFilter}/>
        <ContactList contactList={filteredContacts} deleteContact={onDelete}/>
      
       {showModal && <Modal onClose={toggleShowModal}>
        <Form onSubmit = {onAdd} />
        <button type="button" onClick={toggleShowModal}>Close Modal</button>
       </Modal>}
       <button type="button" onClick={toggleShowModal}>Add new contact</button>
      </Container>
    );
  }
}

export default App;
