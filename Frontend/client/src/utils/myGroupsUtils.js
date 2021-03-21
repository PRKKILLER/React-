/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const handleClick = async (ID, accepted) => {
  const currentUser = localStorage.getItem('EmailId');
  console.log(currentUser);
  if (accepted) {
    // call leave group
    const leavegrp = await axios.post('http://localhost:3002/mygroup/leaveGroup', { GroupId: ID, UserId: currentUser });
    console.log('leave group res', leavegrp);
    alert(leavegrp.data);
    // call leave group
  } else {
    const acceptinvitation = await axios.post('http://localhost:3002/mygroup/acceptinvitation', { GroupId: ID, UserId: currentUser });
    console.log('accept res', acceptinvitation.data);
    // call accept invite
  }
};

const getDataForMyGroups = (data) => {
  const columns = [
    {
      label: 'Name',
      field: 'Name',
      sort: 'asc',
    },
    {
      label: 'Status',
      field: 'status',
      sort: 'asc',
    },
  ];
  const rows = [];
  data.forEach((groups) => {
    // eslint-disable-next-line max-len
    const button = groups.Flag ? <Button variant="outline-danger">Leave Group</Button> : <Button variant="outline-success">Group Invitation</Button>;
    rows.push({
      id: groups.GroupId,
      Name: groups.GroupName,
      status: button,
      clickEvent: () => handleClick(groups.GroupId, groups.Flag),
    });
  });
  return {
    columns,
    rows,
  };
};

export default getDataForMyGroups;
