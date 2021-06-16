import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/Contacts/action'
import * as selectors from '../../redux/Contacts/contacts-selectors'


const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onChange=e=>dispatch(actions.changeFilter(e.currentTarget.value));

  return (
    <label className='label}'> Find contacts by name
      <input type="text" value={value} onChange={onChange} className='input' />
    </label>
            
  )
}

export default Filter;