import { supabase } from '../superbase';

/**
 * Checks if any of the form input is empty
 * Checks if email is valid
 *
 * @param name string - visitor's name
 * @param email string - visitor's email
 * @param message string - visitor's message
 * @returns boolean true || false
 */

const validateDetails = (
  name: string,
  email: string,
  message: string,
): boolean => {
  if (name === '' || email === '' || message === '') {
    return false;
  }
  return /\S+@\S+\.\S+/.test(email);
};

/**
 * Takes in form data and saves it to database
 *
 * @param uuid any - form's unique Id
 * @param name string - visitor's name
 * @param email string - visitor's email
 * @param message string - visitor's message
 * @returns boolean - true || false
 */

const addFormToDB = async (
  uuid: any,
  name: string,
  email: string,
  message: string,
) => {
  let result = await supabase.from('form').insert({
    uuid: uuid,
    name: name,
    email: email,
    message: message,
  });

  const { error } = result;

  return error === null;
};

export { validateDetails, addFormToDB };
