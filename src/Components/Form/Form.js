import React, { Component } from "react";
import './Form.scss';
import shortid from "shortid";

class Form extends Component{
    state = {
        name : '',
        number : ''
    }

    generateNameInputId = shortid.generate();
    generatePhoneInputId = shortid.generate();

    handleChange = e =>{
        const {name, value} = e.currentTarget;
        this.setState({ [name] : value })
    }

    

    handleSubmit = e =>{
        e.preventDefault();

        this.props.onSubmit(this.state.name, this.state.number, this.state.id)

        this.reset();
    }

    reset = (e) => {
        this.setState({name: '', number : ''})
    }


    render(){
        const {handleSubmit, handleChange , generateNameInputId, generatePhoneInputId} = this;
        return (
            <>
            <h2>Add new contact</h2>
            <form onSubmit ={handleSubmit} className='Form'>
                <label htmlFor={generateNameInputId}>  Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        id = { generateNameInputId}
                        value={this.state.name}
                    />
                </label>
               <label htmlFor= { generatePhoneInputId}>Number
                <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        id = { generatePhoneInputId}
                        value={this.state.number}
                    />
               </label>
              
                <button type="submit" className="Form__button">Submit</button>
            </form>
            </>
        )
    }
   
}

export default Form;