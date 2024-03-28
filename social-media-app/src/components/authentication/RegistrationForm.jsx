
import { useUserActions } from '../../hooks/user.actions';
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
//import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    bio: "",
  });
  const [error, setError] = useState(null);
  const userActions = useUserActions();

  const handleSubmit = (event) => {
    event.preventDefault();
    const registrarionForm = event.currentTarget;
    if (registrarionForm.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const data = {
      username: form.username,
      password: form.password,
      email: form.email,
      first_name: form.first_name,
      last_name: form.last_name,
      bio: form.bio,
    };

    userActions.register(data)
      .catch((err) => {
        if (err.message) {
          setError(err.request.response);
        }
      });
  };
  return (
    <Form
      id="registration-form"
      className="border p-4 rounded"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={form.first_name}
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
          required
          type="text"
          placeholder="Enter first name"
        />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          value={form.last_name}
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
          required
          type="text"
          placeholder="Enter last name"
        />
        <Form.Control.Feedback type="invalid">
          This file required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          type="text"
          placeholder="Enter username"
        />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          type="email"
          placeholder="Enter Email"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={form.password}
          minLength="8"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          type="password"
          placeholder="Enter Password"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid passwod
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
          as="textarea"
          rows={3}
          placeholder="A simple bio ...(Optional)"
        />
      </Form.Group>
      <div className="text-content text-danger">{error && <p>{error}</p>}</div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegistrationForm;
