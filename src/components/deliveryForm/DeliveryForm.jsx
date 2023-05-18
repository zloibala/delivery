import React, { useState } from "react";

import "./deliveryForm.style.css";

const DeliveryForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object to store the form data
    // const formData = {
    //   name: name,
    //   address: address,
    //   city: city,
    //   phone: phone,
    // };

    // Call the onSubmit function from the parent component and pass the form data
    // onSubmit(formData);

    // Reset the form
    setName("");
    setAddress("");
    setCity("");
    setPhone("");
  };

  return (
    <div className="Container">
      <div className="delivery-box">
        <h1>Delivery Confirmation Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <br />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
          <br />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
          <br />
          <label htmlFor="phone number">Phone number:</label>
          <input
            type="text"
            id="city"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
          <br />

          {/* <input className="button" type="submit" value="Submit" /> */}
          <button> Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
