export const createUser = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
  name: FormDataEntryValue | null
) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.REACT_APP_PORT}/register`,
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password, name }),
      }
    );
    const data = await response.json();
    console.log('Data returned from register: ', data);
    return data;
  } catch (err) {
    console.log('SignUp CreateUser error:', err);
    return new Error('Failed to create user');
  }
};
