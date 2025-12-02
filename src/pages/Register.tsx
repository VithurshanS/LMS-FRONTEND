import { use, useState } from "react";
import type { RegistrationRequest } from "../models/UserDetailDto";
// import { useNavigate } from "react-router-dom";
import { registerUser, sampleTest } from "../api/authService";

const Register = () => {
  const [formdata, setFormdata] = useState<RegistrationRequest>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    role: 'student'
  });

  const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({    
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formdata);
      console.log('User registered successfully');
      setError('User registered successfully!');
    } catch (err: any) {
      console.error('Registration error:', err);
      if (err.response) {
        setError(`Registration failed: ${err.response.status} - ${err.response.data?.message || err.response.data || 'Unknown error'}`);
      } else if (err.request) {
        setError('Registration failed: No response from server');
      } else {
        setError(`Registration failed: ${err.message}`);
      }
    }
  };

  const handleSampleTest = async () => {
    try {
      const result = await sampleTest();
      console.log('Sample test successful:', result);
      setError(`Sample test successful: ${result}`);
    } catch (err) {
      console.error('Sample test failed:', err);
      setError('Sample test failed: ' + err);
    }
  };
  return (
    <div className="container">
        <h2>Register</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formdata.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formdata.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formdata.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formdata.role}
              onChange={handleChange}
              required
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
        <button type="button" onClick={handleSampleTest} style={{marginTop: '10px'}}>Test Sample API</button>
    </div>
  );

}

export default Register;