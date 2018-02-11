'use strict';
if (!global._babelPolyfill) {
    require('babel-polyfill');
 }
 
export const getMembers = (event, context, callback) => {
  let members = getBnkMembers();
  const response = {
    statusCode: 200,
    body: JSON.stringify(members)
  };

  callback(null, response);
};

function getBnkMembers() {
  return [
    {
      nickname: 'Cherprang',
      full_name: 'Cherprang Areekul'
    }, {
      nickname: 'Jennis',
      full_name: 'Jennis Oprasert'
    }, {
      nickname: 'Miori',
      full_name: 'Miori Ohkubo'
    }
  ]
}