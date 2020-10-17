
let container = document.createElement('div');
container.classList.add('container')
let  navdiv=document.createElement('div');
navdiv.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Fresh Desk</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link" href="./index.html">Home </a>
      <a class="nav-link" href="./create_ticket.html">Create </a>
      <a class="nav-link active" href="./contactlist.html">Lists <span class="sr-only">(current)</span></a>
      
    </div>
  </div>
</nav>`

container.append(navdiv);
let display= document.createElement('form');
display.classList.add('row');
display.id='display'
let header= document.createElement('header');
header.classList.add('header','display-4','col-12', )
header.style.textAlign="center"
header.innerText='CREATE A TICKET';
display.append(header);
let name= document.createElement('input');
name.id='name';
name.classList.add('col-12','ml-5','mr-5','mt-5')
name.type='text';
name.requried=true;
name.placeholder='Full Name';
display.append(name);
let mobileNumber= document.createElement('input');
mobileNumber.id='mobileNumber';
mobileNumber.classList.add('col-12','ml-5','mr-5','mt-5')
mobileNumber.type='text';
mobileNumber.placeholder='Mobile Number';
display.append(mobileNumber);
let querymsg = document.createElement('input');
querymsg.classList.add('col-12','ml-5','mr-5','mt-5')
querymsg.type='text';
querymsg.id = 'query';
querymsg.placeholder='Query';
display.append(querymsg);
let emil= document.createElement('input');
emil.id='emil';
emil.classList.add('col-12','ml-5','mr-5','mt-5')
emil.type='email';

emil.placeholder='Email';
display.append(emil);
let namebtn= document.createElement('submit');
namebtn.id='submit';
namebtn.classList.add('btn','btn-primary','col-4','ml-5','mr-5','mt-5');
namebtn.type='submit'
namebtn.innerText='CREATE'
namebtn.style.textAlign='center'
display.append(namebtn);
container.append(display);
document.body.append(container);




async function postdata(){
    await fetch('https://newaccount1602961416959.freshdesk.com/helpdesk/tickets.json',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "name": document.getElementById('name').value,
          "mobile_number": document.getElementById( 'mobileNumber').value,
         "querymsg":document.getElementById( 'querymsg').value,
          "email":document.getElementById('emil').value
      })
    })
    alert('Ticket created');
    location.reload();
    }
    
    
    document.getElementById('submit').addEventListener('click',()=>{
    postdata();
    
    });

/*-------------- Create Contacts----------*/

let display2= document.createElement('form');
display2.classList.add('row');
display2.id='display2'
let header2= document.createElement('header');
header2.classList.add('header','display-4','col-12', )
header2.style.textAlign="center"
header2.innerText='CREATE A CONTACT';
display2.append(header2);
let name2= document.createElement('input');
name2.id='name2';
name2.classList.add('col-12','ml-5','mr-5','mt-5')
name2.type='text';
name2.requried=true;
name2.placeholder='Full Name';
display2.append(name2);
let mobileNumber2= document.createElement('input');
mobileNumber2.id='mobileNumber2';
mobileNumber2.classList.add('col-12','ml-5','mr-5','mt-5')
mobileNumber2.type='text';
mobileNumber2.placeholder='Mobile Number';
display2.append(mobileNumber2);
let emil2= document.createElement('input');
emil2.id='emil2';
emil2.classList.add('col-12','ml-5','mr-5','mt-5')
emil2.type='email';
emil2.placeholder='Email';
display2.append(emil2);
let namebtn2= document.createElement('submit');
namebtn2.id='submit';
namebtn2.classList.add('btn','btn-primary','col-4','ml-5','mr-5','mt-5');
namebtn2.type='submit'
namebtn2.innerText='CREATE'
namebtn2.style.textAlign='center'
display2.append(namebtn2);
container.append(display2);
document.body.append(container);

async function postdata2(){
  await fetch('https://domain.freshdesk.com/path/to/3fyBysoB2VDPcLN4E3ib.json',{
  method:'POST',
  headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": document.getElementById('name2').value,
        "mobile_number": document.getElementById( 'mobileNumber2').value,
        "email":document.getElementById('emil2').value
    })
  })
  alert('Contact created');
  location.reload();
  }
  
  
  document.getElementById('submit').addEventListener('click',()=>{
  postdata2();
  
  });
