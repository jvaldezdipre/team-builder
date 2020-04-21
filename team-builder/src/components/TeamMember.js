import React from 'react';

function TeamMember({ details }) {
  return (
    <div className='member-container'>
      <h2>{details.membername}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}

export default TeamMember;
