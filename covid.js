const APIURL = "https://corona.lmao.ninja/v2/countries/india";

async function getRecords(url){
    const response = await fetch(url);
    const resData = await response.json();
    //console.log(resData);
    showRecords(resData);
 }
getRecords(APIURL);

function showRecords(Records){
    console.log(Records)
    document.getElementById("main").innerHTML=
    `
    <h1>INDIA</h>
    <h2 class = "cases" >cases</h2>
    <div>
    <h3 class = "cases" >total cases<h/3>
    <div class = "run" >${Records.cases}</div>
    </div> <div>
    <h3 class = "cases">case-per-milion</h3>
    <div class = "run" >${Records.casesPerOneMillion}</div>
    </div>
    <div>
    <h3 class = "cases">today-cases<h/3>
    <div class = "run" >${Records.todayCases}</div>
    </div>
    <h2 class = "cases">recoverds</h2>
    <div>
    <h3 class = "cases">total recoverds<h/3>
    <div class = "run" >${Records.recovered}</div>
    </div> <div>
    <h3 class = "cases">recoverds-per-milion</h3>
    <div class = "run" >${Records.recoveredPerOneMillion}</div>
    </div>
    <div>
    <h3 class = "cases">today-recoverds<h/3>
    <div class = "run" >${Records.todayRecovered}</div>
    </div>
    <h2 class = "cases">deaths</h2>
    <div>
    <h3 class = "cases">total deaths<h/3>
    <div class = "run" >${Records.deaths}</div>
    </div> <div>
    <h3 class = "cases">deaths-per-milion</h3>
    <div class = "run" >${Records.deathsPerOneMillion}</div>
    </div>
    <div>
    <h3class = "cases">today-deaths<h/3>
    <div class = "run" >${Records.todayDeaths}</div>
    </div>
    <h2 class = "cases">test</h2>
    <div>
    <h3 class = "cases">total test<h/3>
    <div class = "run" >${Records.tests}</div>
    </div> 
    <div>
    <h3 class = "cases">One-case-per-pepole</h3>
    <div class = "run" >${Records.oneCasePerPeople}</div>
    </div>
    <div>
    <h3 class = "cases">One-test-per-pepole</h3>
    <div class = "run" >${Records.oneTestPerPeople}</div>
    </div>
    <div>
    <h3 class = "cases">One-death-per-pepole</h3>
    <div class = "run" >${Records.oneDeathPerPeople}</div>
    </div>
    `
}