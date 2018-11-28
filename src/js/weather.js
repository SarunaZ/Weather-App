import {getCity} from './geoLocation'

window.onload = function() {
  const aeris = new AerisWeather('yLtGPCLmSe6QRaok2PqYC', 'ULdbZ0pXCyb6AH62pSwZ7avqXb64KicPyBbyat6c');
  let city;
  const arrayOpt = document.querySelector('select[name="cities"]').onchange=toggleOpt;

  const getData = async () =>{
    let city = await getCity();

    return aeris.api().endpoint('observations')
      .place(`${city}, lt`)
      .get().then((result) => {
      let data = result.data.ob;
      document.querySelector('.container').textContent = `The current weather in ${city} is ${data.weatherPrimary.toLowerCase()} and ${data.tempC} degrees.`;
    });
  } 

  function toggleOpt(event) {
    city = event.target.value; 
    const getDatas = aeris.api().endpoint('observations')
      .place(`${city}, lt`)
      .get().then((result) => {
        let data = result.data.ob;
        document.querySelector('.container').textContent = `The current weather in ${city} ${data.weatherPrimary.toLowerCase()} and ${data.tempC} degrees.`;
    });
  }
  getData();
}


