
        console.log('india fetching by API');

        let xhr=new XMLHttpRequest();
        // xhr.open("GET","https://restcountries.eu/rest/v2/name/india",true)
        xhr.open("GET","https://restcountries.eu/rest/v2/name/saudi arabia",true)
        xhr.send();

        xhr.addEventListener('load',function(){
            // console.log((this.responseText));

            // below uncomment for india
            // let [other,india]=JSON.parse(this.responseText)

            // for other countries 
            let [india]=JSON.parse(this.responseText)
            console.log(india);

            let container = document.querySelector(".container");
            
            console.log(container);
            container.innerHTML=`<div id="container">
            <div class="card">
                <img src="${india.flag}" alt="">
                <div><h1>${india.name}</h1><p>Capital:  ${india.capital}</p>
                </div>
            </div>
            <hr>
            <div class="car-footer">
                <div class="card-footer-items">
                    <h4>${india.population}</h4>
                    <p>population</p>
                </div>
                <div class="card-footer-items">
                    <h4 style="text-align:center">${india.nativeName}</h4><p>native name</p>
                </div>
                
                <div class="card-footer-items"><h4>${(india.languages)[0].nativeName}</h4><p>native language</p></div>
            </div>            
        </div> 

            `
        })