'use strict';

let times = ['6am', '7pm', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(times.length);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;


}


let stores = [];

function Cities(city, minmumCustomer, maximumCustomer, avgCookie) {
    this.location = city,
        this.minmumCustomer = minmumCustomer,
        this.maximumCustomer = maximumCustomer,
        this.AvgCookie = avgCookie,
        this.custPerHour = [],
        this.avgCookiePurchased = [],
        this.Total = 0

    stores.push(this)

}



Cities.prototype.calculateCustPerHr = function () {
    for (let i = 0; i < times.length; i++) {

        this.custPerHour.push(randomNumber(this.minmumCustomer, this.maximumCustomer));


    }
    // console.log('this is an array');
    // console.log(this.custPerHour);
}

Cities.prototype.calculateAvgCookiePur = function () {
    for (let i = 0; i < times.length; i++) {

        this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
        this.Total += this.avgCookiePurchased[i];

    }

    // console.log(this.avgCookiePurchased);
}


let parent = document.getElementById('one');

let tableElement = document.createElement('table');
parent.appendChild(tableElement);

Cities.prototype.render = function () {
    let storeRow = document.createElement('tr');
    tableElement.appendChild(storeRow);

    let storeName = document.createElement('td');
    storeRow.appendChild(storeName);
    storeName.textContent = this.location;

    for (let i = 0; i < times.length; i++) {

        let avgCookie = document.createElement('td');
        storeRow.appendChild(avgCookie);

        avgCookie.textContent = this.avgCookiePurchased[i];


    }

    let totalOfEachStore = document.createElement('td');
    storeRow.appendChild(totalOfEachStore);
    totalOfEachStore.textContent = this.Total;

}

// heading row

let heading = function () {
    let rowHeading = document.createElement('tr');
    tableElement.appendChild(rowHeading);

    let firstTh = document.createElement('th');
    rowHeading.appendChild(firstTh);
    firstTh.textContent = ' ';

    for (let i = 0; i < times.length; i++) {
        
        let timeTh = document.createElement('th');
        rowHeading.appendChild(timeTh);
        timeTh.textContent = times[i]


    }
    let lastTh = document.createElement('th');
    rowHeading.appendChild(lastTh);
    lastTh.textContent = 'Daily location Total';
}

// footer row 
let footer = function () {
    let rowFooter = document.createElement('tr');
    tableElement.appendChild(rowFooter);

    let firstThFooter = document.createElement('th');
    rowFooter.appendChild(firstThFooter);
    firstThFooter.textContent = 'Totals'

    let totalofTotals = 0;
    for (let i = 0; i < 14; i++) {
        let totalPerHr = 0;
        for (let j = 0; j < stores.length; j++) {
            totalPerHr += stores[j].avgCookiePurchased[i]
            totalofTotals += stores[j].avgCookiePurchased[i];
        }
        let totalPerHrTh = document.createElement('th')
        rowFooter.appendChild(totalPerHrTh)
        totalPerHrTh.textContent = totalPerHr


    }
    let lastThFooter = document.createElement('th')
    rowFooter.appendChild(lastThFooter)
    lastThFooter.textContent = totalofTotals

}




let Seattle = new Cities('Seattle', 23, 65, 6.3);
let Tokyo = new Cities('Tokyo', 3, 24, 1.2);
let Dubai = new Cities('Dubai', 11, 38, 3.7);
let Paris = new Cities('Paris', 20, 38, 2.3);
let Lima = new Cities('Lima', 2, 16, 4.6);


heading();

//loop for calling the prototype functions
for (let i = 0; i < stores.length; i++) {
    stores[i].calculateCustPerHr();
    stores[i].calculateAvgCookiePur();
    stores[i].render();

}

footer();






// Lab06  solution

// //first object:
// let Seattle={
//     location: 'Seattle',
//     minmumCustomer: 23,
//     maximumCustomer: 65,
//     AvgCookie: 6.3,
//     custPerHour: [],
//     avgCookiePurchased: [],
//     Total: 0,


//     calculateCustPerHr: function(){
//         for (let i = 0; i < times.length; i++) {

//             this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));


//         }
//     },

//     calculateAvgCookiePur: function(){
//         for (let i = 0; i < times.length; i++) {

//           this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
//           this.Total +=  this.avgCookiePurchased[i] ;
//             // console.log(this.Total);     
//         }
//         //  console.log(Seattle.avgCookiePurchased );       

//     },

//     render: function(){
//         let parent = document.getElementById('one');

//         let h3Element = document.createElement('h3');

//         parent.appendChild(h3Element);

//         h3Element.textContent= this.location;

//         let ulElement = document.createElement('ul');

//         parent.appendChild(ulElement);

//         for (let i = 0; i < times.length; i++) {

//         let liElement = document.createElement('li');

//         ulElement.appendChild(liElement);

//         liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`

//         }

//         let TotalLi = document.createElement('li');
//         ulElement.appendChild(TotalLi);
//         TotalLi.textContent = `Total:  ${this.Total}  cookies`

//     }


// }

// Seattle.calculateCustPerHr();
// Seattle.calculateAvgCookiePur();
// Seattle.render();


// //Second object:
// let Tokyo={
//     location: 'Tokyo',
//     minmumCustomer: 3,
//     maximumCustomer: 24,
//     AvgCookie: 1.2,
//     custPerHour: [],
//     avgCookiePurchased: [],
//     Total: 0,


//     calculateCustPerHr: function(){
//         for (let i = 0; i < times.length; i++) {

//             this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));


//         }
//     },

//     calculateAvgCookiePur: function(){
//         for (let i = 0; i < times.length; i++) {

//           this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
//           this.Total +=  this.avgCookiePurchased[i] ;
//             // console.log(this.Total);     
//         }
//         //  console.log(Seattle.avgCookiePurchased );       

//     },

//     render: function(){
//         let parent = document.getElementById('one');

//         let h3Element = document.createElement('h3');

//         parent.appendChild(h3Element);

//         h3Element.textContent= this.location;

//         let ulElement = document.createElement('ul');

//         parent.appendChild(ulElement);

//         for (let i = 0; i < times.length; i++) {

//         let liElement = document.createElement('li');

//         ulElement.appendChild(liElement);

//         liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`

//         }

//         let TotalLi = document.createElement('li');
//         ulElement.appendChild(TotalLi);
//         TotalLi.textContent = `Total:  ${this.Total}  cookies`

//     }


// }

// Tokyo.calculateCustPerHr();
// Tokyo.calculateAvgCookiePur();
// Tokyo.render();


// //Third object:
// let Dubai={
//     location: 'Dubai',
//     minmumCustomer: 11,
//     maximumCustomer: 38,
//     AvgCookie: 3.7,
//     custPerHour: [],
//     avgCookiePurchased: [],
//     Total: 0,


//     calculateCustPerHr: function(){
//         for (let i = 0; i < times.length; i++) {

//             this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));


//         }
//     },

//     calculateAvgCookiePur: function(){
//         for (let i = 0; i < times.length; i++) {

//           this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
//           this.Total +=  this.avgCookiePurchased[i] ;
//             // console.log(this.Total);     
//         }
//         //  console.log(Seattle.avgCookiePurchased );       

//     },

//     render: function(){
//         let parent = document.getElementById('one');

//         let h3Element = document.createElement('h3');

//         parent.appendChild(h3Element);

//         h3Element.textContent= this.location;

//         let ulElement = document.createElement('ul');

//         parent.appendChild(ulElement);

//         for (let i = 0; i < times.length; i++) {

//         let liElement = document.createElement('li');

//         ulElement.appendChild(liElement);

//         liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`

//         }

//         let TotalLi = document.createElement('li');
//         ulElement.appendChild(TotalLi);
//         TotalLi.textContent = `Total:  ${this.Total}  cookies`

//     }


// }

// Dubai.calculateCustPerHr();
// Dubai.calculateAvgCookiePur();
// Dubai.render();


// //fourth object:
// let Paris={
//     location: 'Paris',
//     minmumCustomer: 20,
//     maximumCustomer: 38,
//     AvgCookie: 2.3,
//     custPerHour: [],
//     avgCookiePurchased: [],
//     Total: 0,


//     calculateCustPerHr: function(){
//         for (let i = 0; i < times.length; i++) {

//             this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));


//         }
//     },

//     calculateAvgCookiePur: function(){
//         for (let i = 0; i < times.length; i++) {

//           this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
//           this.Total +=  this.avgCookiePurchased[i] ;
//             // console.log(this.Total);     
//         }
//         //  console.log(Seattle.avgCookiePurchased );       

//     },

//     render: function(){
//         let parent = document.getElementById('one');

//         let h3Element = document.createElement('h3');

//         parent.appendChild(h3Element);

//         h3Element.textContent= this.location;

//         let ulElement = document.createElement('ul');

//         parent.appendChild(ulElement);

//         for (let i = 0; i < times.length; i++) {

//         let liElement = document.createElement('li');

//         ulElement.appendChild(liElement);

//         liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`

//         }

//         let TotalLi = document.createElement('li');
//         ulElement.appendChild(TotalLi);
//         TotalLi.textContent = `Total:  ${this.Total}  cookies`

//     }


// }

// Paris.calculateCustPerHr();
// Paris.calculateAvgCookiePur();
// Paris.render();




// //fifth object:
// let Lima={
//     location: 'Lima',
//     minmumCustomer: 2,
//     maximumCustomer: 16,
//     AvgCookie: 4.6,
//     custPerHour: [],
//     avgCookiePurchased: [],
//     Total: 0,


//     calculateCustPerHr: function(){
//         for (let i = 0; i < times.length; i++) {

//             this.custPerHour.push(Math.floor(randomNumber(this.minmumCustomer,this.maximumCustomer)));


//         }
//     },

//     calculateAvgCookiePur: function(){
//         for (let i = 0; i < times.length; i++) {

//           this.avgCookiePurchased.push(Math.floor(this.custPerHour[i] * this.AvgCookie));
//           this.Total +=  this.avgCookiePurchased[i] ;
//             // console.log(this.Total);     
//         }
//         //  console.log(Seattle.avgCookiePurchased );       

//     },

//     render: function(){
//         let parent = document.getElementById('one');

//         let h3Element = document.createElement('h3');

//         parent.appendChild(h3Element);

//         h3Element.textContent= this.location;

//         let ulElement = document.createElement('ul');

//         parent.appendChild(ulElement);

//         for (let i = 0; i < times.length; i++) {

//         let liElement = document.createElement('li');

//         ulElement.appendChild(liElement);

//         liElement.textContent = `${times[i]}:  ${this.avgCookiePurchased[i]} cookies`

//         }

//         let TotalLi = document.createElement('li');
//         ulElement.appendChild(TotalLi);
//         TotalLi.textContent = `Total:  ${this.Total}  cookies`

//     }


// }

// Lima.calculateCustPerHr();
// Lima.calculateAvgCookiePur();
// Lima.render();






