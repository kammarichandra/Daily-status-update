import { useState } from "react";

function DynamicForm() {
  let [formData, setFormData] = useState({
    name: "",
    message: "",
    country: "",
    gender: "",
    hobbies: [],
    file: null,
  });

  let handleChange = (e) => {

    let { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((item) => item !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

    return (
    <div className="container">
      <h2>Dynamic Form</h2>

      <div className="radio-group"> 

      {/* Text Field */}
      <label>Name:</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      {/* Text Area */}
      <label>Message:</label><br />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <br /><br />

      {/* Dropdown */}
      <label>Country:</label><br />
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      <br /><br />

      {/* Radio Buttons */}
      <label>Gender:</label><br />
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      />
      Male

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      />
      Female
      <br /><br /><br />

      {/* Checkboxes */}
      <label>Hobbies:</label><br />
      <input
        type="checkbox"
        name="hobbies"
        value="Reading"
        checked={formData.hobbies.includes("Reading")}
        onChange={handleChange}
      />
      Reading

      <input
        type="checkbox"
        name="hobbies"
        value="Sports"
        checked={formData.hobbies.includes("Sports")}
        onChange={handleChange}
      />
      Sports

      <input
        type="checkbox"
        name="hobbies"
        value="Music"
        checked={formData.hobbies.includes("Music")}
        onChange={handleChange}
      />
      Music
      <br /><br />

      {/* File Input */}
      <label>Upload File:</label><br />
      <input
        type="file"
        name="file"
        onChange={handleChange}
      />
      <br /><br />

      <h3>Form Data</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default DynamicForm;