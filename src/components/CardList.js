import React from "react";
import ContactCard from "./ContactCard";

const CardList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });
  return <div className=" ">{renderContactList}</div>;
};

export default CardList;
