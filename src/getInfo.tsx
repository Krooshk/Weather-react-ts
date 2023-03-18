
const apiKey:string = "111836d36d452866f627599b193d2401";
const serverUrl:string = "https://api.openweathermap.org/data/2.5/weather";

export async function getInfo(cityName:string){
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
        let response =await fetch(url);
        if (!response.ok){
                throw new Error(`Could not fetch ${url} /n received status ${response.status}`)
        }
        let json =await response.json();
        return json;
}