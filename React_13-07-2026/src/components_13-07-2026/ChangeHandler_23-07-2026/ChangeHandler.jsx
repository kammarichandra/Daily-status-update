import { useState } from "react";

function ChangeHandler() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Single Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Form</h2>

      <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />

      <br />
      <br />

      <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />

      <br />
      <br />

      <input type="number" name="age" placeholder="Enter Age" value={formData.age} onChange={handleChange} />

      <hr />

      <h3>Entered Data</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
    </div>
  );
}

export default ChangeHandler;