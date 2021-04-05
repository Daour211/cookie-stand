'use strict';

let times = ['6am','7pm','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// console.log(times.length);

function randomNumber(min, max) {
    let count =  Math.floor(Math.random() * (max - min)) + min;

    return count ;
}

//first object:
let Seattle={
    location: 'Seattle',
    minmumCustomer: 23,
    maximumCustomer: 65,
    AvgCookie: 6.3,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));
                             
            
        }
    },

    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
                        
          this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
          this.Total +=  this.avgCookiePurchased[i] ;
            // console.log(this.Total);     
        }
        //  console.log(Seattle.avgCookiePurchased );       

    },

    render: function(){
        let parent = document.getElementById('one');

        let h3Element = document.createElement('h3');

        parent.appendChild(h3Element);

        h3Element.textContent= this.location;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < times.length; i++) {

        let liElement = document.createElement('li');

        ulElement.appendChild(liElement);

        liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`
            
        }

        let TotalLi = document.createElement('li');
        ulElement.appendChild(TotalLi);
        TotalLi.textContent = `Total:  ${this.Total}  cookies`

    }
    

}

Seattle.calculateCustPerHr();
Seattle.calculateAvgCookiePur();
Seattle.render();


//Second object:
let Tokyo={
    location: 'Tokyo',
    minmumCustomer: 3,
    maximumCustomer: 24,
    AvgCookie: 1.2,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));
                             
            
        }
    },

    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
                        
          this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
          this.Total +=  this.avgCookiePurchased[i] ;
            // console.log(this.Total);     
        }
        //  console.log(Seattle.avgCookiePurchased );       

    },

    render: function(){
        let parent = document.getElementById('one');

        let h3Element = document.createElement('h3');

        parent.appendChild(h3Element);

        h3Element.textContent= this.location;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < times.length; i++) {

        let liElement = document.createElement('li');

        ulElement.appendChild(liElement);

        liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`
            
        }

        let TotalLi = document.createElement('li');
        ulElement.appendChild(TotalLi);
        TotalLi.textContent = `Total:  ${this.Total}  cookies`

    }
    

}

Tokyo.calculateCustPerHr();
Tokyo.calculateAvgCookiePur();
Tokyo.render();


//Third object:
let Dubai={
    location: 'Dubai',
    minmumCustomer: 11,
    maximumCustomer: 38,
    AvgCookie: 3.7,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));
                             
            
        }
    },

    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
                        
          this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
          this.Total +=  this.avgCookiePurchased[i] ;
            // console.log(this.Total);     
        }
        //  console.log(Seattle.avgCookiePurchased );       

    },

    render: function(){
        let parent = document.getElementById('one');

        let h3Element = document.createElement('h3');

        parent.appendChild(h3Element);

        h3Element.textContent= this.location;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < times.length; i++) {

        let liElement = document.createElement('li');

        ulElement.appendChild(liElement);

        liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`
            
        }

        let TotalLi = document.createElement('li');
        ulElement.appendChild(TotalLi);
        TotalLi.textContent = `Total:  ${this.Total}  cookies`

    }
    

}

Dubai.calculateCustPerHr();
Dubai.calculateAvgCookiePur();
Dubai.render();


//fourth object:
let Paris={
    location: 'Paris',
    minmumCustomer: 20,
    maximumCustomer: 38,
    AvgCookie: 2.3,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));
                             
            
        }
    },

    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
                        
          this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
          this.Total +=  this.avgCookiePurchased[i] ;
            // console.log(this.Total);     
        }
        //  console.log(Seattle.avgCookiePurchased );       

    },

    render: function(){
        let parent = document.getElementById('one');

        let h3Element = document.createElement('h3');

        parent.appendChild(h3Element);

        h3Element.textContent= this.location;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < times.length; i++) {

        let liElement = document.createElement('li');

        ulElement.appendChild(liElement);

        liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`
            
        }

        let TotalLi = document.createElement('li');
        ulElement.appendChild(TotalLi);
        TotalLi.textContent = `Total:  ${this.Total}  cookies`

    }
    

}

Paris.calculateCustPerHr();
Paris.calculateAvgCookiePur();
Paris.render();




//fifth object:
let Lima={
    location: 'Lima',
    minmumCustomer: 2,
    maximumCustomer: 16,
    AvgCookie: 4.6,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));
                             
            
        }
    },

    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
                        
          this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
          this.Total +=  this.avgCookiePurchased[i] ;
            // console.log(this.Total);     
        }
        //  console.log(Seattle.avgCookiePurchased );       

    },

    render: function(){
        let parent = document.getElementById('one');

        let h3Element = document.createElement('h3');

        parent.appendChild(h3Element);

        h3Element.textContent= this.location;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < times.length; i++) {

        let liElement = document.createElement('li');

        ulElement.appendChild(liElement);

        liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`
            
        }

        let TotalLi = document.createElement('li');
        ulElement.appendChild(TotalLi);
        TotalLi.textContent = `Total:  ${this.Total}  cookies`

    }
    

}

Lima.calculateCustPerHr();
Lima.calculateAvgCookiePur();
Lima.render();






