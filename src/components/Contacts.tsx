import React, { useState } from "react";
import Contact from "./Contact";
function Contacts() {
  const [contacts, setContacts] = useState("");
  const [contactList, setContactList] = useState<String[]>([]);
  const onClick = () => {
    setContactList([...contactList, contacts]);
  };
  console.log(contacts);
  return (
    <div>
      <h1>Contace List</h1>
      <div className="form">
        <input
          value={contacts}
          onChange={(e) => setContacts(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <button>Add</button>
      </div>
      <Contact name="Naimur Rahman D" email="Naimur@gmail.com" />
    </div>
  );
}

export default Contacts;
