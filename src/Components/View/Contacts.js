import React, { useEffect } from 'react';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import Render from '../Render/RenderContactList';
import { useDispatch,useSelector } from 'react-redux'
import * as operations from '../../redux/Contacts/operations'
import * as selectors from '../../redux/Contacts/contacts-selectors';



const Contacts = () => {
    const dispatch = useDispatch();
    const isLoadingContacts = useSelector(selectors.getIsLoadingContacts);
    const error = useSelector(selectors.getError) 


    useEffect(() => {
        dispatch(operations.fetchContact())
    },[dispatch])


    return ( 
            <div className='contact'>
                {error && <h1>{error}</h1>}
                {isLoadingContacts && <h1>Loading...</h1>}
                <h1 className='contact_text'>Phonebook</h1>
                <Form />
                <h2 className='contact_text'>Contacts</h2>
                <Filter />
                <Render />
            </div> );
}
 
export default Contacts;
