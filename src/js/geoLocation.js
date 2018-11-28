const myIp = async () => {

  return fetch("https://api.ipify.org?format=json")
           .then(data =>  data.json())
           .then(res => res.ip)
           .catch(error => document.querySelector('.container').textContent = `Your client cannot get your ip`)
};

const showIp = async () => {
  let result = await myIp();
  
  return result;
}

const getLocationData = async () => { 

  let ip = await showIp();
  let access_key = 'at_pgHjmpUprixp5eH5NCqurwdWuFc3p';
  const url = `https://geo.ipify.org/api/v1?apiKey=${access_key}&ipAddress=${ip}`;
  
  return fetch(url)
           .then(data => data.json())
           .then(res => res.location.city)
           .catch(error => document.querySelector('.container').textContent = `Your client cannot get your location`)
}

export const getCity = async () => {
  let data = await getLocationData();
  return data;
};
