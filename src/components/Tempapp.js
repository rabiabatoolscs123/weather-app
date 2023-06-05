import React, {useEffect, useState} from "react"
import './css/style.css'
const Tempapp =() => {
    const key = '';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(()=> {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&APPID=' +key+ '&units=metric')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setFeelsLike(data.main.feels_like);
    setMainTemp(data.main.temp);
    setDescription(data.weather[0].description);
    setMain(data.weather[0].main);
    setIconID(data.weather[0].icon);
})
},[])
return (
    <>
    <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
    <h1>Feels like: {feels_like} Degrees Celsius</h1>
    <h1>Weather Parameter: {main}</h1>
    <h1>Description : {description}</h1>
    <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
    </>
)
}

//     const[city, setCity] =useState(null);
//     const[search, setSearch]= useState("Lahore");

//     useEffect(() => {
//         const fetchApi=async() => {
//             const url="http://api.openweathermap.org/data/2.5/weather?q=${}&appid=2c8c66ca75bb76fce0b3fe497b24759f"
//             const response = await fetch(url);
//             // console.log(response)
//             const resJson= await response.json();
//             console.log(resJson);
//             setCity(resJson);
//         }
//         fetchApi();
//     })
//     return(
//         <>
//         <div className="box">
//             <div className="inputData">
//                 <input type="search"
//                  className="inputField"
//                  onChange={(event)=>{

//                  }}/>
//             </div>
//         </div>
//         <div className="Info">
//             <h2 className="Loctaion">
//             <i className="fa fa-street-view">Lahore</i>
//             </h2>
//             <h1 className="temp"> 5.25 °C </h1>
//             <h3 className="tempmin_max">Min: 5.25 °C | Max:5.23 °C</h3>
//         </div>
//         <div className="wave -one"></div>
//         <div className="wave -two"></div>
//         <div className="wave -three"></div>
//         </>
//     )
// }
export default Tempapp
