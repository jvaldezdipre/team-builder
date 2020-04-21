import React from 'react';

function TeamMemberForm(props) {
  return (
    <form>
      <h2>Team Member Form</h2>
      <label>
        Name:
        <input
          value={props.values.membername}
          onChange={props.onInputChange}
          name='name'
          type='text'
        />
      </label>
      <label>
        Email:
        <input
          value={props.values.email}
          onChange={props.onInputChange}
          name='email'
          type='text'
        />
      </label>
      <label>
        Role:
        <input
          value={props.values.role}
          onChange={props.onInputChange}
          name='role'
          type='text'
        />
      </label>
      <button onClick={props.onSubmit}>Submit</button>
    </form>
  );
}

export default TeamMemberForm;
