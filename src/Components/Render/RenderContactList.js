import React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import * as operations from '../../redux/Contacts/operations'
import style from './Style.module.css'
import * as selectors from '../../redux/Contacts/contacts-selectors'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Render = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getVisibalContacts);
  const onDeleteContact=(id)=>dispatch(operations.deleteContact(id))

    return (
         <ul className={style.list_render}>
        {value.map((contact) => {
            return <li className={style.contact_item} key={contact.id}>{contact.name}: {contact.number} <Button type='button' className={style.btn_del} onClick={()=>onDeleteContact(contact.id) }variant="danger">delete</Button></li>
          })}
        </ul>
    )
}


export default Render;