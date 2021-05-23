import React from 'react';
import UserItem from '../users/UserItem';
import Spinner from '../layout/Spinner';
import ProTypes from 'prop-types';

const User = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
User.ProTypes = {
  users: ProTypes.array.isRequired,
  loading: ProTypes.bool.isRequired,
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default User;
