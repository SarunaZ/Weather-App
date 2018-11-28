const myIp = () => {
return $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
 function(json) {
	return json.ip
 });
}

const showIp = async () => {
 let result = await myIp();
  return result.ip;
}

const getLocationData = async () => { 

  let ip = await showIp();
  let access_key = 'at_pgHjmpUprixp5eH5NCqurwdWuFc3p';

  return $.ajax({
    url: 'https://geo.ipify.org/api/v1?apiKey=' + access_key + '&ipAddress=' + ip ,   
    dataType: 'json',
    success: function(json) {
      return json;
    }
  });
}

export const getCity = async () => {
  let data = await getLocationData();
  return data.location.city;
};

