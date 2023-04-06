import React from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  padding: 1rem 2rem;
  h1{
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    input {
      outline: none;
      border: none;
      height: 2.4rem;
      padding: 0 1rem;
      border-radius: 4px;
      font-size: 1rem;
    }
    button{
      height: 2.4rem;
      margin-top: 1rem;
      border: none;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

const FormController = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

const Register = () => {
  return (
    <RegisterContainer>
      <h1>Register</h1>
      <form>
        <FormController>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="username" />
        </FormController>
        <FormController>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="fullName" />
        </FormController>
        <FormController>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="email" />
        </FormController>
        <FormController>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" />
        </FormController>

        <button>Register</button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
