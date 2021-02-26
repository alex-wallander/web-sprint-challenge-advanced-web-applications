import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialLogin = {
    username: 'Lambda School',
    password: 'i<3Lambd4',
  }

  const [form, setForm] = useState(initialLogin);
  const { push } = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', form )
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      push('/bubbles');
    })
    .catch(err => {
      console.log(err)
    })
  }

  

  useEffect(() => {  
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route at the path "/bubbles"
  })

  return (
    <>
      <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
          <label>Username: </label>
          <input 
          type='text'
          name= 'username'
          value={form.username}
          onChange={handleChange}
          />
          </div>
          <div>
          <label>Password: </label>
          <input 
          type='text'
          name= 'password'
          value={form.password}
          onChange={handleChange}
          />
          </div>
        <div>
          <button className='loginSubmit'>Login</button>
        </div>
        </form>
      </div>
      
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.