let container = document.createElement('div');
container.classList.add('container')

let display= document.createElement('div');
display.classList.add('row');
let ticketdisplay= document.createElement('div');
ticketdisplay.classList.add('col-12',);
ticketdisplay.id='ticketdisplay';
let header= document.createElement('header');
header.classList.add('header','display-4')
header.style.textAlign="center"
header.innerText='TICKETS';
ticketdisplay.append(header);
display.append(ticketdisplay);
let contactdisplay= document.createElement('div');
contactdisplay.classList.add('col-12');
contactdisplay.id='contactdisplay';
let header1= document.createElement('header');
header1.classList.add('header','display-4')
header1.style.textAlign="center"
header1.innerText='CONTACT';
contactdisplay.append(header1);
display.append(contactdisplay);
container.append(display);
document.body.append(container);



 async function fetchdata(){
  let stringdata= await fetch('https://newaccount1602961416959.freshdesk.com/helpdesk/tickets.json');
  let data= await stringdata.json();
  console.log(data);
  let card= document.createElement('div');
  card.classList.add('row','border');
  data.forEach(element => {
    let carddiv= document.createElement('div');
    carddiv.classList.add('col-3',)
     carddiv.innerHTML =`<div class="card text-white bg-primary mb-2" style="max-width: 12rem;">
     <div class="card-header">${element._id}</div>
      <div class="card-body"  id="${element._id}">
        <h5 class="card-title">${element.name} </h5>
      </div>
    </div>`
    if(element.contactId){
      let contactId= document.createElement('p');
      contactId.classList.add('mt-1','row','border','rounded','bg-success');
      contactId.style.maxWidth=13+'rem';
      contactId.innerText='contactID:'+' '+''+element.contactId+'';
      carddiv.append(contactId);
    }
  card.append(carddiv);

  });
    
  document.getElementById('ticketdisplay').append(card);


  let stringdata1= await fetch('https://newaccount1602961416959.freshdesk.com/helpdesk/contacts.json');
  let data1= await stringdata1.json();
  console.log(data1);
  let card1= document.createElement('div');
  card1.classList.add('row','border');
  data1.forEach(element => {
    let carddiv1= document.createElement('div');
    carddiv1.classList.add('col-3',)
    
     carddiv1.innerHTML =`<div class="card text-white bg-success mb-2" style="max-width: 14rem;">
     <div class="card-header">${element._id}</div>
      <div class="card-body"  id="${element._id}">
      <h5 class="card-title mt-3"> ${element.name} </h5>
      <p class="card-title mt-3"> ${element.mobile_number} </p>
      <p class="card-title mt-1"> ${element.email} </p>
      </div>
    </div>`

    if(element.tickets != undefined){
      element.tickets.forEach((ele) => {
        let ticketid= document.createElement('p');
        ticketid.classList.add('mt-1','row','border','rounded','bg-primary');
        ticketid.style.maxWidth=14+'rem'
        ticketid.innerText='ticketid:'+'  '+''+ele+'';
        carddiv1.append(ticketid);
      });
  card1.append(carddiv1);

 

  }
  });
    
  document.getElementById('contactdisplay').append(card1);
}


fetchdata();