import { getContacts, getContactById } from '../services/contacts.js';

import createError from "http-errors";

export const getContactController = async (req, res) => {
    
      const data = await getContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts',
      data,
    });
    
  };

  export const getContactByIdController = async (req, res) => {
   
    const { id } = req.params;
    const data = await getContactById(id);

    if (!data) {

      throw createError(404 , `Contact with id=${id} not found` );
     
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id=${id}`,
      data,
    });
  };