let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,relative_humidity_2m,wind_speed_10m");
p.then((value)=>{
    console.log(value.status);
    console.log(value.ok);
    console.log(value.headers);
    return value.json();
}).then((value1)=>{
    console.log(value1);
});

p.catch(()=>{
    return new Error("Hii");
})

