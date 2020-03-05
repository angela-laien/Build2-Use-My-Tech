import React from 'react';
import { useForm } from 'react-hook-form';
import {FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  padding: 13% 13% 100% 13%;
  background: #292C2D;
`;

const Div1 = styled.div`
  padding: 0% 0% 2% 0%;
  color: white;
`;

const Div2 = styled.div`
  padding: 0% 0% 2% 0%;
  color: white;
`;

const Section = styled.section`
  background: #550C18;
  border: 3px solid #9C9E9E;
  padding-bottom: 3%;
  width: 80%;
  margin-left: 10%;
`;

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  
  const history = useHistory();

  function submitHandler(values) {
  
  axios
    .post('https://save-the-animals-backend.herokuapp.com/api/users/login', values)
    .then(res => {
      console.log('this is login res',res)
      history.push('/UserPage')
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  function render() {
    return (
      <Div>
        <Section>
          <form onSubmit={handleSubmit(submitHandler)}>

            <Div1>
              <h1>Welcome</h1>
              <h3>Hello, Welcome back please log in.</h3>
              <h3>New user Register <Link to='/'>Here</Link></h3>
            </Div1>

            <FormGroup controlId='formBasicUsername'>
              <Div2>
                <FormLabel>Username: </FormLabel>
                <FormControl
                  ref={register({
                    required: 'Required',
                    minLength: 6,
                    pattern: {
                      value: /^[A-Z0-9._%+-]/i,
                      message: 'invalid username'
                    }
                  })}
                  type='text'
                  name='username'
                  placeholder='Enter username'
                />
                {errors.username && errors.username.message}
                {errors.password && errors.password.type === 'minLength' && (
                    <p>This is field required min length of 6</p>
                )}
              </Div2>
            </FormGroup>

            <FormGroup controlId='formBasicPassword'>
              <Div2>
                <FormLabel>Password: </FormLabel>
                <FormControl
                  ref={register({
                    required: 'Required',
                    minLength: 6,
                    pattern: {
                      value: /^[A-Z0-9._%+-]/i,
                      message: 'invalid username'
                    }
                  })}
                  type="password"
                  name="password"
                  required
                  placeholder='Enter password'
                />
                {errors.password && errors.password.message}
                {errors.password && errors.password.type === 'minLength' && (
                    <p>This is field required min length of 6</p>
                )}
              </Div2>
            </FormGroup>
      
            <button type="submit">Login</button>
          </form>
        </Section>
      </Div>
    );
  }
  return render();
};
