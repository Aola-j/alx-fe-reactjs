import { useState } from 'react'
import React from 'react';
import formikForm from './components/formikForm';
import RegistrationForm from './components/RegistrationForm';

function App() {

  return (
     <div>
      <h1>Welcome to Our Registration Page</h1>
      <formikForm />
      <RegistrationForm />
    </div>
  )
}

export default App
