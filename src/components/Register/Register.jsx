import React, { useState } from "react";

export const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange=(event)=>{
    console.log(event.target.name)
    setData({
      ...data,
      [event.target.name]:event.target.value
    
    })
  }

  return (
    <>
      <div>Register Form</div>
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
        />

        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default RegisterForm

{
  /* <input
type="text"
placeholder="name"
onChange={handleInputChange}
name="name"
/>

<input
type="email"
placeholder="email"
onChange={handleInputChange}
name="email"
/>

<input
type="text"
placeholder="address"
onChange={handleInputChange}
name="address"
/>

<input
type="password"
placeholder="password"
onChange={handleInputChange}
name="password"
/>

<input
type="file"
placeholder="image"
onChange={handleInputChange}
name="image"
/> */
}
