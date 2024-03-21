import './ContactItem.css';

const ContactItem = ({ id, name, number, onDeleteContact}) =>{
    return(
        <li className='Contact__item'>
            <p className='Contact__name'>{name}</p> 
            <p className='Contact__number'>{number}</p>
            <button className='Contact__button' type='button' onClick={onDeleteContact}>Delete</button>
        </li>
    )
}

export default ContactItem;