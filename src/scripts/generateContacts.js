import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
  const contactsList = await getAllContacts();
  const newContactsList = Array(number).fill(0).map(createFakeContact);
  contactsList.push(...newContactsList);
  await updateContacts(contactsList);
};

generateContacts(5);
