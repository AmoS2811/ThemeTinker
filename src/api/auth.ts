
export const login = async (email: string, passwword: string) => {
    const response = await fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username: email,
            password: passwword,
        }),
    });

    if(!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    return data.access_token;
};

export const register = async (email: string, password: string) => {
    const response = await fetch('http://127.0.0.1:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Registration failed');
    }
  
    return response.json();
  };