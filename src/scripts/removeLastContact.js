import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';

const removeLastContact = async () => {
  const contactsList = await getAllContacts();
  contactsList.pop();
  await updateContacts(contactsList);
};

removeLastContact();
