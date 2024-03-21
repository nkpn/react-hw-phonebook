import "./ContactList.scss";

const ContactList = ({ contactList, deleteContact }) => {
  return (
    <ul className="Contact__list">
      {contactList.map(contact => (
        <li className='Contact__item' key={contact.id}>
            <p className='Contact__content'>{contact.name}: <span className="Contact__number">{contact.number}</span></p> 
            <button className='Contact__button' type='button' onClick={()=> deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
