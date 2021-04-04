'use strict';

let times = ['6am','7pm','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// console.log(times.length);


//first object:
let Seattle={
    minmumCustomer: 23,
    maximumCustomer: 65,
    AvgCookie: 6.3,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    customerPerHour:function randomNumber(min, max) {
        let count =  Math.floor(Math.random() * (max - min)) + min;
    
        return count ;
    },
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            let count =Math.floor(this.customerPerHour(this.minmumCustomer,this.maximumCustomer));
            
            // let count = this.customerPerHour(this.minmumCustomer,this.maximumCustomer);
           
           this.custPerHour[i] = count;
            
        }
        // console.log(Seattle.custPerHour );

    },
    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
            let count = this.custPerHour[i] * this.AvgCookie ;
            
            this.avgCookiePurchased.push(Math.floor(count));
           this.Total = this.Total + this.avgCookiePurchased[i] ;
            // console.log(this.Total);     
         }
        //  console.log(Seattle.avgCookiePurchased );
        

    }
    

}

Seattle.calculateCustPerHr();
Seattle.calculateAvgCookiePur();


// second object:
let Tokyo={
    minmumCustomer: 3,
    maximumCustomer: 24,
    AvgCookie: 1.2,
    custPerHour: [],
    avgCookiePurchased: [],
    Total : 0,

    customerPerHour:function randomNumber(min, max) {
        let count =  Math.floor(Math.random() * (max - min)) + min;
    
        return count ;
    },
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            let count =Math.floor(this.customerPerHour(this.minmumCustomer,this.maximumCustomer));
            
            // let count = this.customerPerHour(this.minmumCustomer,this.maximumCustomer);
           
           this.custPerHour[i] = count;
            
        }
        // console.log(Seattle.custPerHour );

    },
    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
            let count = this.custPerHour[i] * this.AvgCookie ;
            
            this.avgCookiePurchased.push(Math.floor(count));
            this.Total = this.Total + this.avgCookiePurchased[i] ;
             
         }
         console.log(Seattle.avgCookiePurchased );

    }


}

Tokyo.calculateCustPerHr();
Tokyo.calculateAvgCookiePur();



// third object:

let Dubai={
    minmumCustomer: 11,
    maximumCustomer: 38,
    AvgCookie: 3.7,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    customerPerHour:function randomNumber(min, max) {
        let count =  Math.floor(Math.random() * (max - min)) + min;
    
        return count ;
    },
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            let count =Math.floor(this.customerPerHour(this.minmumCustomer,this.maximumCustomer));
            
            // let count = this.customerPerHour(this.minmumCustomer,this.maximumCustomer);
           
           this.custPerHour[i] = count;
            
        }
        // console.log(Seattle.custPerHour );

    },
    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
            let count = this.custPerHour[i] * this.AvgCookie ;
            
            this.avgCookiePurchased.push(Math.floor(count));
            this.Total = this.Total + this.avgCookiePurchased[i] ;
             
         }
         console.log(Seattle.avgCookiePurchased );

    }


}

Dubai.calculateCustPerHr();
Dubai.calculateAvgCookiePur();

//fourth object:
let Paris={
    minmumCustomer: 20,
    maximumCustomer: 38,
    AvgCookie: 2.3,
    custPerHour: [],
    avgCookiePurchased: [],
    Total: 0,

    customerPerHour:function randomNumber(min, max) {
        let count =  Math.floor(Math.random() * (max - min)) + min;
    
        return count ;
    },
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            let count =Math.floor(this.customerPerHour(this.minmumCustomer,this.maximumCustomer));
            
            // let count = this.customerPerHour(this.minmumCustomer,this.maximumCustomer);
           
           this.custPerHour[i] = count;
            
        }
        // console.log(Seattle.custPerHour );

    },
    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
            let count = this.custPerHour[i] * this.AvgCookie ;
            
            this.avgCookiePurchased.push(Math.floor(count));
            this.Total = this.Total + this.avgCookiePurchased[i] ;
             
         }
         console.log(Seattle.avgCookiePurchased );

    }


}

Paris.calculateCustPerHr();
Paris.calculateAvgCookiePur();


//fifth object:
let Lima={
    minmumCustomer: 2,
    maximumCustomer: 16,
    AvgCookie: 4.6,
    custPerHour: [],
    avgCookiePurchased: [],
    Total:0,

    customerPerHour:function randomNumber(min, max) {
        let count =  Math.floor(Math.random() * (max - min)) + min;
    
        return count ;
    },
    calculateCustPerHr: function(){
        for (let i = 0; i < times.length; i++) {

            let count =Math.floor(this.customerPerHour(this.minmumCustomer,this.maximumCustomer));
            
            // let count = this.customerPerHour(this.minmumCustomer,this.maximumCustomer);
           
           this.custPerHour[i] = count;
            
        }
        // console.log(Seattle.custPerHour );

    },
    calculateAvgCookiePur: function(){
        for (let i = 0; i < times.length; i++) {
            let count = this.custPerHour[i] * this.AvgCookie ;
            
            this.avgCookiePurchased.push(Math.floor(count));
            this.Total = this.Total + this.avgCookiePurchased[i] ;
             
         }
         console.log(Seattle.avgCookiePurchased );

    }


}

Lima.calculateCustPerHr();
Lima.calculateAvgCookiePur();


// parent element for all ul
let parent = document.getElementById('one');



// first list:

let h3seattle = document.createElement('h3');
let ulElement = document.createElement('ul');
 
parent.appendChild(h3seattle);
parent.appendChild(ulElement);

// console.log(ulElement);

h3seattle.textContent='Seattle'
for (let i = 0; i < Seattle.custPerHour.length; i++) {
    let liElement = document.createElement('li');

    ulElement.appendChild(liElement);

    liElement.textContent =  times[i] + ':   ' + Seattle.avgCookiePurchased[i] + '  cookies'
    if (i == 13) {
    liElement.textContent= 'Total ' + Seattle.Total + '   cookies';
    }
}

// second list:

let h3tokyo = document.createElement('h3');
let ulElement1 = document.createElement('ul');
 
parent.appendChild(h3tokyo);
parent.appendChild(ulElement1);

// console.log(ulElement);

h3tokyo.textContent= 'Tokyo'

for (let i = 0; i < Tokyo.custPerHour.length; i++) {
    let liElement = document.createElement('li');

    ulElement1.appendChild(liElement);

    liElement.textContent =  times[i] + ':   ' + Tokyo.avgCookiePurchased[i] + '  cookies' 
   if (i == 13) {
        liElement.textContent= 'Total ' + Tokyo.Total + '   cookies';
        }
}

// third list:

let h3dubai = document.createElement('h3');
let ulElement2 = document.createElement('ul');
 
parent.appendChild(h3dubai);
parent.appendChild(ulElement2);

// console.log(ulElement);

h3dubai.textContent = 'Dubai'

for (let i = 0; i < Dubai.custPerHour.length; i++) {
    let liElement = document.createElement('li');

    ulElement2.appendChild(liElement);

    liElement.textContent =  times[i] + ':   ' + Dubai.avgCookiePurchased[i] + '  cookies' 
    if (i == 13){
        liElement.textContent= 'Total ' + Dubai.Total + '   cookies';
        }
}

// fourth list:

let h3paris = document.createElement('h3');
let ulElement3 = document.createElement('ul');
 
parent.appendChild(h3paris);
parent.appendChild(ulElement3);

// console.log(ulElement);

h3paris.textContent = 'Paris';

for (let i = 0; i < Paris.custPerHour.length; i++) {
    let liElement = document.createElement('li');

    ulElement3.appendChild(liElement);

    liElement.textContent =  times[i] + ':   ' + Paris.avgCookiePurchased[i] + '  cookies' 
    if (i == 13) {
        liElement.textContent= 'Total ' + Paris.Total + '   cookies';
        }
}

//fifth list:

let h3lima = document.createElement('h3');
let ulElement4 = document.createElement('ul');
 
parent.appendChild(h3lima);
parent.appendChild(ulElement4);

// console.log(ulElement);

h3lima.textContent = 'Lima';

for (let i = 0; i < Lima.custPerHour.length; i++) {
    let liElement = document.createElement('li');

    ulElement4.appendChild(liElement);

    liElement.textContent =  times[i] + ':   ' + Lima.avgCookiePurchased[i] + '  cookies' 
    if (i == 13) {
        liElement.textContent= 'Total ' + Lima.Total + '   cookies';
        }
}

