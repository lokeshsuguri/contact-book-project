import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const fetchContacts = async () => {
    const res = await axios.get('http://localhost:5000/api/contacts');
    setContacts(res.data);
  };

  useEffect(() => { fetchContacts(); }, []);

  const addContact = async (contact) => {
    await axios.post('http://localhost:5000/api/contacts', contact);
    fetchContacts();
  };

  const updateContact = async (id, updatedContact) => {
    await axios.put(`http://localhost:5000/api/contacts/${id}`, updatedContact);
    fetchContacts();
    setEditingContact(null);
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div className="container">
      <h1>📇 Contact Book</h1>
      <ContactForm onSubmit={editingContact ? (contact) => updateContact(editingContact._id, contact) : addContact} editingContact={editingContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} onEdit={setEditingContact} />
    </div>
  );
}

export default App;