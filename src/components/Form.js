import React from 'react';

const Form = ({ userInfo, handleChange }) => {
  return (
    <section
      style={{
        textAlign: 'center'
      }}
    >
      <h1>Form</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <article>
          <input type="text" name="name" placeholder="What's your name?" onChange={handleChange} />
          <p>{userInfo.name}</p>
        </article>
        <article>
          <input type="text" name="surname" placeholder="What's your surname?" onChange={handleChange} />
          <p>{userInfo.surname}</p>
        </article>
        <article>
          <input type="text" name="age" placeholder="What's your age?" onChange={handleChange} />
          <p>{userInfo.age}</p>
        </article>
      </div>
    </section>
  );
};

export default Form;
