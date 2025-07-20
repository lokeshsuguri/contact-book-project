import React from 'react';

function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <div className="list">
      {contacts.map(contact => (
        <div key={contact._id} className="contact-item">
          <div>
            <strong>{contact.name}</strong><br />
            📧 {contact.email}<br />
            📞 {contact.phone}
          </div>
          <div>
            <button onClick={() => onEdit(contact)}>Edit</button>
            <button onClick={() => onDelete(contact._id)} className="delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;