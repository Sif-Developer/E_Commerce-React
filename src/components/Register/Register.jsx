import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Register.scss';

export const Register = () => {

    let navigate = useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState({
  
      name: "",
  
      email: "",
  
      password: "",

      birthday: "",
  
      address: "",

      phone: "",

      image: ""
  
    });
  
    const initialState = {
      name: "",
  
      email: "",
  
      password: "",

      birthday: "",
  
      address: "",

      phone: "",

      image: ""
    };
  
    const clearState = () => {
      setData({ ...initialState });
    };
  
    useEffect(() => {
  
      if (data.name.length < 3) {
        setMessage("Name must be at least 3 characters");
        setMessage(null);
        setBtnDisabled(false);
      } else {
        setMessage(null);
        setBtnDisabled(false);
      }
    }, [data]);
  
    const handleInputChange = (event) => {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      clearState();
      // setTimeout(() => {
      //   navigate('/list')
      // }, 3000);
      setVisible(false)
    };
  
  
    return (
      <div className="main">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="string"
              placeholder="Name"
              value={data.name}
              onChange={handleInputChange}
              name="name"
              required
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={handleInputChange}
              name="password"
              required
            />
            <br />
            <input
              type="text"
              placeholder="Address"
              value={data.address}
              onChange={handleInputChange}
              name="address"
              required
            />
            <br />
            <input
              type="tel"
              placeholder="Phone"
              value={data.phone}
              onChange={handleInputChange}
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
            />
            <br />
            <input
            type="date"
            value={data.birthday}
            onChange={handleInputChange}
            name="birthday"
            required
            />
            <button className="send-btn" type="submit" disabled={btnDisabled}>
              Register
            </button>
            <input className="reset-btn" type="reset">Reset</input>
          </form>
          <p>{visible ? message : 'Redirecting to Home...'}</p>
        </div>
      </div>
    );
  }
  
  export default Register;