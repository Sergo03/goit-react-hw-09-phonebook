import React, { useState } from 'react';
// import PropsTypes from 'prop-types';
import {useDispatch,useSelector} from 'react-redux'
import * as operations from '../../redux/Contacts/operations'
import * as selectors from '../../redux/Contacts/contacts-selectors'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Style.module.css'


const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('');

  const value = useSelector(selectors.getItems);

  const dispatch = useDispatch();
  const onSubmit=(data)=>dispatch(operations.addContact(data))

  const handleinput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.log(`Поле ${name} не обрабатываются `);
    };
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    const isIncludeName = !!value.find(contact => contact.name === name)
    isIncludeName && alert(`${name} is already in contacts`)
    !isIncludeName && onSubmit({ name, number })
 
     setName('');
     setNumber('');

  }


  return ( 
      <form onSubmit={handleSubmit} className='from_contact'>
        
        <label className={style.label_name}> Name
          <input
            className={style.input_name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleinput}
            value={name}
          />
        </label> 
        <label className={style.label_number}>Number
          <input
            className='input_tel'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleinput}
            value={number}
          />
        </label>
         
        <Button type="submit" variant="success" className={style.input_btn}>Add contact</Button>
      </form> );
}
 
export default Form;
