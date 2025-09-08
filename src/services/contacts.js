import { ContactsCollection } from '../db/models/contact.js';

export async function getContacts() {
  const contacts = await ContactsCollection.find();
  return contacts;
}

export async function getContactById(contactId) {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
}

export const createContacts = async (payload) => {
const contact = await ContactsCollection.create(payload);
return contact;
};

export const updateContact = async (contactId, payload) => {
const contact = await ContactsCollection.findOneAndUpdate(
  contactId,
  payload,
  { new: true },
);
return contact;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete(contactId);
  return contact;
};