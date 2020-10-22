import { createAction } from '@reduxjs/toolkit';
import ShortId from 'shortid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: ShortId.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/chengeFilter');

export default { addContact, deleteContact, changeFilter };
