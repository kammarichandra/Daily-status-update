import { useState } from "react";


function FormValidation() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
    gender: "",
    hobbies: [],
    file: null,
  });

  let [errors, setErrors] = useState({});

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

  let validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (formData.hobbies.length === 0) {
      newErrors.hobbies = "Select at least one hobby";
    }

    if (!formData.file) {
      newErrors.file = "Please upload a file";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");

      console.log(formData);

      setFormData({
        name: "",
        email: "",
        message: "",
        country: "",
        gender: "",
        hobbies: [],
        file: null,
      });

      setErrors({});
    }
  };

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">Contact Form</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error">{errors.name}</span>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span className="error">{errors.message}</span>
        </div>

        {/* Country */}
        <div className="form-group">
          <label>Country</label>
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
          <span className="error">{errors.country}</span>
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>

          <div className="options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <span className="error">{errors.gender}</span>
        </div>

        {/* Hobbies */}
        <div className="form-group">
          <label>Hobbies</label>

          <div className="options">
            <label>
              <input
                type="checkbox"
                value="Reading"
                checked={formData.hobbies.includes("Reading")}
                onChange={handleChange}
              />
              Reading
            </label>

            <label>
              <input
                type="checkbox"
                value="Sports"
                checked={formData.hobbies.includes("Sports")}
                onChange={handleChange}
              />
              Sports
            </label>

            <label>
              <input
                type="checkbox"
                value="Music"
                checked={formData.hobbies.includes("Music")}
                onChange={handleChange}
              />
              Music
            </label>
          </div>

          <span className="error">{errors.hobbies}</span>
        </div>

        {/* File */}
        <div className="form-group">
          <label>Upload File</label>

          <input
            type="file"
            name="file"
            onChange={handleChange}
          />

          <span className="error">{errors.file}</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;