import React from 'react';
import { Card, Button, CardHeader, CardTitle } from 'reactstrap';

function TeamMember({ details }) {
  return (
    <div className='member-container'>
      <Card>
        <CardHeader tag='h3'>{details.membername}</CardHeader>
        <CardTitle>Email: {details.email}</CardTitle>
        <CardTitle>Role: {details.role}</CardTitle>
      </Card>
    </div>
  );
}

export default TeamMember;
