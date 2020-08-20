import React, { useState } from 'react';
import './App.css';
import Form from "./Form.js";
import * as yup from "yup";
import axios from "axios";
import formSchema from "./formSchema.js"


const initialFormValues = {
  name: "",
  email: "",
  password: "",
  position: "",
  title: "",
  termsOfService: false
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  position: "",
  title: "",
}

const initialUsers = []

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  const getUserData = () => {
    axios.get("https://reqres.in/api/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const postNewUsers = newUser => {
    console.log("Hi",newUser)
    axios.post("https://reqres.in/api/users", newUser)
      .then(response => {
        console.log(response)
        setUsers([...users, response.data])
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (key, value) => {
    console.log(key,value);
    yup
      .reach(formSchema, key)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [key]: ""
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [key]: error.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [key]: value
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      position: formValues.position,
      title: formValues.title,
      termsOfService: formValues.termsOfService
    }
    postNewUsers(newUser);
  }


  return (
    <div className="App">
      <Form 
      values={formValues}
      inputChange={inputChange}
      submit={submit}
      errors={formErrors}
      />
    </div>
  );
}

export default App;
