
import updateContacts from './updateContacts.js';
const removeAllSongs = async () => {
  await updateContacts([]);
};

removeAllSongs();
