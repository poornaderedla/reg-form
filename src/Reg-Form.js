import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setPopupMessage('Error: Passwords do not match!');
      setShowPopup(true);
      return;
    }

    // If validation passes
    setPopupMessage(`Registration successful! Welcome ${formData.name}`);
    setShowPopup(true);
    // You can add your API call here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    // Reset form if registration was successful
    if (popupMessage.includes('successful')) {
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Registration Form</h2>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>

      {showPopup && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>{popupMessage}</h3>
            <button 
              style={styles.modalButton}
              onClick={closePopup}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '30px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
  },
  heading: {
    textAlign: 'center',
    margin: '0 0 20px 0',
    color: '#333',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '14px',
    color: '#555',
    marginLeft: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '300px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  },
  modalButton: {
    padding: '8px 20px',
    marginTop: '15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default RegistrationForm;