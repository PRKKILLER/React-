// columns: [
//     {
//       label: 'Group Name',
//       field: 'Name',
//       sort: 'asc',
//     },
//     {
//       label: 'Recent Activity',
//       field: 'status',
//       sort: 'asc',
//     },
//   ],
//   rows: [
//     {
//       id: '1',
//       Name: ' Harry ',
//       status: <Button variant="outline-danger">Leave Group</Button>,
//     }

const getDataForRecentActivity = (data) => {
  const columns = [
    {
      label: 'Group Name',
      field: 'Name',
      sort: 'asc',
    },
    {
      label: 'Recent Activity',
      field: 'status',
      sort: 'asc',
    },
  ];
  const rows = [];
  data.forEach((activity) => {
    rows.push({ Name: activity.GroupName, status: activity.OperationType });
  });
  return {
    columns,
    rows,
  };
};

export default getDataForRecentActivity;
