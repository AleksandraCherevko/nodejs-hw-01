import updateContacts from './updateContacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';

const addOneContact = async () => {
  const contactsList = await getAllContacts();
  const newContact = createFakeContact();
  contactsList.push(newContact);
  await updateContacts();
};
addOneContact();
