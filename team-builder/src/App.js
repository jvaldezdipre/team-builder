import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TeamMember from './components/TeamMember';
import TeamMemberForm from './components/TeamMemberForm';

import './App.css';

const initialMemberList = [
  {
    id: uuid(),
    membername: 'Bob',
    email: 'bob@bob.com',
    role: 'Team Leader',
  },
];

const initialFormValues = {
  membername: '',
  email: '',
  role: '',
};

function App() {
  const [members, setMembers] = useState(initialMemberList); //[
  //{
  //id: uuid(),
  // membername: 'Bob',
  //email: 'bob@bob.com',
  //role: 'Team Leader',
  //},
  //]

  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const newMember = {
      id: uuid(),
      membername: formValues.membername,
      email: formValues.email,
      role: formValues.role,
    };

    //copies the old list of members and add another member
    setMembers([...members, newMember]);
    setFormValues(initialFormValues);
  };

  return (
    <div className='App'>
      <h1>Best Team</h1>
      {members.map(member => {
        return <TeamMember key={member.id} details={member} />;
      })}
      <TeamMemberForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
