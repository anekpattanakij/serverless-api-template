function getBnkMembers() {
  return [
    {
      nickname: 'Cherprang',
      full_name: 'Cherprang Areekul',
    }, {
      nickname: 'Jennis',
      full_name: 'Jennis Oprasert',
    }, {
      nickname: 'Miori',
      full_name: 'Miori Ohkubo',
    },
  ];
}

module.exports.bnkMember = (event, context, callback) => {
  const members = getBnkMembers();
  const response = {
    statusCode: 200,
    body: JSON.stringify(members),
  };

  callback(null, response);
};
