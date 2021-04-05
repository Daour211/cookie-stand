'use strict';

let times = ['6am', '7pm', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(times.length);

function randomNumber(min, max) {
    return  Math.floor(Math.random() * (max - min)) + min;

     
}


let states = [];

function Cities(city, minmumCustomer, maximumCustomer, avgCookie) {
    this.location = city,
    this.minmumCustomer = minmumCustomer,
    this.maximumCustomer = maximumCustomer,
    this.AvgCookie = avgCookie,
    this.custPerHour = [],
    this.avgCookiePurchased = [],
    this.Total = 0

    states.push(this)

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

Cities.prototype.render = function(){
    let elementRow = document.createElement('tr');
    tableElement.appendChild(elementRow);

    let tabelData = document.createElement('td');
    elementRow.appendChild(tabelData);
    tabelData.textContent = this.location;

    for (let i = 0; i < times.length; i++) {
       
        let tableData0 = document.createElement('td');
        elementRow.appendChild(tableData0);    
                        
        tableData0.textContent= this.avgCookiePurchased[i];
        
        
    }

    let tableData1 = document.createElement('td');
    elementRow.appendChild(tableData1);
    tableData1.textContent= this.Total;

}

// heading row
let heading = function(){
    let elementRowHead= document.createElement('tr');
    tableElement.appendChild(elementRowHead);
    for (let i = -1; i < 15; i++) {
        let tabelDataHead = document.createElement('th');
        elementRowHead.appendChild(tabelDataHead);
        if (i==-1){
            tabelDataHead.textContent= ' ';
        }else if (i >= 0 && i <=13){
            tabelDataHead.textContent= times[i]
        }else if (i==14){
            tabelDataHead.textContent= 'Daily location Total'
        }

        
    }
}

// footer row 
let footer = function(){
    let elementRowFoot= document.createElement('tr');
    tableElement.appendChild(elementRowFoot);

    let tabelDataFoot = document.createElement('th');
    elementRowFoot.appendChild(tabelDataFoot);
    tabelDataFoot.textContent = 'Totals'
    let totalofTotals = 0;
    for (let i = 0; i < 14; i++) {
         let totalPerHr = 0 ;
            for (let j = 0; j < states.length; j++) {
               totalPerHr += states[j].avgCookiePurchased[i]
               totalofTotals += states[j].avgCookiePurchased[i]; 
            }
            let dataFoot = document.createElement('th')
            elementRowFoot.appendChild(dataFoot)
            dataFoot.textContent = totalPerHr

              
    }
    let dataFootTotal = document.createElement('th')
            elementRowFoot.appendChild(dataFootTotal)
            dataFootTotal.textContent = totalofTotals

}




let Seattle = new Cities('Seattle', 23, 65, 6.3);
let Tokyo = new Cities('Tokyo', 3,24,1.2);
let Dubai = new Cities('Dubai',11,38,3.7);
let Paris = new Cities('Paris',20,38,2.3);
let Lima = new Cities('Lima',2,16,4.6);


// Seattle.calculateCustPerHr();
// Seattle.calculateAvgCookiePur();

// Tokyo.calculateCustPerHr();
// Tokyo.calculateAvgCookiePur();

// Dubai.calculateCustPerHr();
// Dubai.calculateAvgCookiePur();

// Paris.calculateCustPerHr();
// Paris.calculateAvgCookiePur();

// Lima.calculateCustPerHr();
// Lima.calculateAvgCookiePur();



heading();

for (let i = 0; i < states.length; i++) {
    states[i].calculateCustPerHr();
    states[i].calculateAvgCookiePur();
    states[i].render();
    
}

// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();
footer();


console.log(states);





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






