import React, { useRef, useState } from 'react';

function EmpForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        department: '',
        gender: '',
        skills: [''],
    });

    const profileRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSkillChange = (index, value) => {
        const updatedSkills = [...formData.skills];
        updatedSkills[index] = value;

        setFormData((prev) => ({
            ...prev,
            skills: updatedSkills,
        }));
    };

    const addSkill = () => {
        setFormData((prev) => ({
            ...prev,
            skills: [...prev.skills, ''],
        }));
    };

    const removeSkill = (index) => {
        if (formData.skills.length === 1) {
            setFormData((prev) => ({
                ...prev,
                skills: [''],
            }));
            return;
        }

        const updatedSkills = formData.skills.filter((_, i) => i !== index);
        setFormData((prev) => ({
            ...prev,
            skills: updatedSkills,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.age === '') {
            newErrors.age = 'Age is required';
        } else if (Number(formData.age) < 18) {
            newErrors.age = 'Employee must be 18 or older';
        }

        if (formData.department === '') {
            newErrors.department = 'Select a department';
        }

        if (formData.gender === '') {
            newErrors.gender = 'Select gender';
        }

        if (formData.skills.every((skill) => skill.trim() === '')) {
            newErrors.skills = 'Add at least one skill';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmittedData(null);
            return;
        }

        setErrors({});

        const profilePicture = profileRef.current?.files[0];
        const finalData = {
            ...formData,
            skills: formData.skills.filter((skill) => skill.trim() !== ''),
            profilePicture: profilePicture?.name || 'No file selected',
        };

        console.log('Employee Data:', finalData);
        setSubmittedData(finalData);
    };

    return (
        <div style={styles.container}>
            <h1>Employee Registration</h1>

            <form onSubmit={handleSubmit}>
                <div style={styles.field}>
                    <label>Employee Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                    {errors.name && <p style={styles.error}>{errors.name}</p>}
                </div>

                <div style={styles.field}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                </div>

                <div style={styles.field}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />
                    {errors.password && <p style={styles.error}>{errors.password}</p>}
                </div>

                <div style={styles.field}>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                    />
                    {errors.age && <p style={styles.error}>{errors.age}</p>}
                </div>

                <div style={styles.field}>
                    <label>Department</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    {errors.department && <p style={styles.error}>{errors.department}</p>}
                </div>

                <div style={styles.field}>
                    <label>Gender</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                    {errors.gender && <p style={styles.error}>{errors.gender}</p>}
                </div>

                <div style={styles.field}>
                    <label>Profile Picture</label>
                    <input type="file" ref={profileRef} />
                </div>

                <div style={styles.field}>
                    <label>Skills</label>

                    {formData.skills.map((skill, index) => (
                        <div key={index} style={styles.skillRow}>
                            <input
                                type="text"
                                value={skill}
                                placeholder={`Skill ${index + 1}`}
                                onChange={(e) => handleSkillChange(index, e.target.value)}
                            />
                            <button type="button" onClick={() => removeSkill(index)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <button type="button" onClick={addSkill}>
                        + Add Skill
                    </button>

                    {errors.skills && <p style={styles.error}>{errors.skills}</p>}
                </div>

                <button type="submit">Register Employee</button>
            </form>

            {submittedData && (
                <div style={styles.result}>
                    <h2>Registration Successful 🎉</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Age:</strong> {submittedData.age}</p>
                    <p><strong>Department:</strong> {submittedData.department}</p>
                    <p><strong>Gender:</strong> {submittedData.gender}</p>
                    <p><strong>Profile:</strong> {submittedData.profilePicture}</p>
                    <p>
                        <strong>Skills:</strong>{' '}
                        {submittedData.skills.join(', ')}
                    </p>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '24px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '18px',
        gap: '8px',
    },
    skillRow: {
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
    },
    error: {
        margin: 0,
        color: 'red',
        fontSize: '14px',
    },
    result: {
        marginTop: '24px',
        padding: '16px',
        backgroundColor: '#eafaf1',
        borderRadius: '10px',
    },
};

export default EmpForm;