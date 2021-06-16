import axios from 'axios'
import * as action from './action'



export const fetchContact = () => dispatch => {
    dispatch(action.fetchContactRequest());
    axios.get('/contacts').then(({ data }) => dispatch(action.fetchContactSuccsess(data)))
        .catch(error => dispatch(action.fetchContactError(error.message)));
};

export const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number
    };
    dispatch(action.addContactRequest());
    axios.post('/contacts', contact).then(({ data }) => dispatch(action.addContactSuccsess(data)),
    ).catch(error => dispatch(action.addContactError(error.message)));
};

export const deleteContact = id => dispatch => {
    dispatch(action.deleteContactRequest())
    
    axios.delete(`/contacts/${id}`).then(() => dispatch(action.deleteContactSuccsess(id)))
        .catch(error => dispatch(action.deleteContactError(error.message)));
};