import React from "react";

interface IProps {
  name: string;
  email?: string;
}

function Contact({ name, email }: IProps) {
  return (
    <div className="card">
      <p>
        <strong>Name</strong>
        {name}
      </p>
      <p>
        <strong>Email</strong>
        {email}
      </p>
    </div>
  );
}

export default Contact;
