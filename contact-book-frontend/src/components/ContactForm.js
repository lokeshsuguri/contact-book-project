import React, { useState, useEffect } from 'react';

function ContactForm({ onSubmit, editingContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
    } else {
      setName(''); setEmail(''); setPhone('');
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
    setName(''); setEmail(''); setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <button type="submit">{editingContact ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default ContactForm;