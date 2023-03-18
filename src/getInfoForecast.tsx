const serverUrlGeo:string = "https://api.openweathermap.org/geo/1.0/direct"
const serverUrlForecast:string = "https://api.openweathermap.org/data/2.5/forecast";
const apiKey:string = "111836d36d452866f627599b193d2401";
export function getInfoForecast(city:string):Promise<any>{
    const urlGeo = `${serverUrlGeo}?q=${city}&appid=${apiKey}&units=metric`
    let responseGeo = fetch(urlGeo);
    return responseGeo
            .then((response) => response.json())
            .then((result) => {
                const url = `${serverUrlForecast}?lat=${result[0].lat}&lon=${result[0].lon}&appid=${apiKey}&units=metric`;
                let response = fetch(url);
                return response;
            })
            .catch(console.warn);
}