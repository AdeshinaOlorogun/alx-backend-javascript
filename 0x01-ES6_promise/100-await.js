// Importing functions from utils.js
import { uploadPhoto, createUser } from './utils.js';

// Async function to call uploadPhoto and createUser
export async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
