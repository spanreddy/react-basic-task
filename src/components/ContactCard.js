import React from "react";

const ContactCard = (props) => {
  const { id, name, Email } = props.contact;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ContactCard;
