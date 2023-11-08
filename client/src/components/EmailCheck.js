import React, { useState } from 'react';

function EmailCheck(email) {
  const [userEmail, setUserEmail] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (email) => {
    const value = email.target.value;
    setUserEmail(value);
  };

  const handleEmailSubmit = (email) => {
    email.preventDefault();
    if (isEmailValid(userEmail)) {
      alert('올바른 이메일 형식입니다.');
    } else {
      alert('올바른 이메일 형식이 아닙니다.');
    }
  };

  return isEmailValid(), handleEmailChange(), handleEmailSubmit();
}

export default EmailCheck;
