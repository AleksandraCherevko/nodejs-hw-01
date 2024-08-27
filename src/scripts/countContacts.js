import getAllContacts from './getAllContacts.js';

export const countContacts = async () => {
  const contacts = await getAllContacts();
  return contacts.length;
};

console.log(await countContacts());
