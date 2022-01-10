/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 9 ;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage ( list , page ) {
   const startIndex = ( page * itemsPerPage ) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const ul = document.querySelector('.student-list');
   ul.innerHTML = `` ;
   for ( i = startIndex ; i >= startIndex && i < endIndex ; i++ ) {
      if ( i < list.length ) {
         const li = document.createElement('LI');
         li.className = 'student-item cf';
         ul.appendChild(li);
         const studentDiv = document.createElement('DIV');
         studentDiv.className = 'student-details';
         li.appendChild(studentDiv);
         const img = document.createElement('IMG');
         let avatar = data[i].picture.large;
         img.className = 'avatar';
         img.src = `${avatar}`;
         img.alt = `Profile Picture`;
         studentDiv.appendChild(img);
         const h3 = document.createElement('H3');
         let fullName = data[i].name.title;
         fullName += ' ';
         fullName += data[i].name.first;
         fullName += ' ';
         fullName += data[i].name.last;
         h3.textContent = fullName;
         studentDiv.appendChild(h3);
         const emailSpan = document.createElement('SPAN');
         emailSpan.className = 'email';
         const emailAddr = data[i].email;
         emailSpan.textContent = emailAddr;
         studentDiv.appendChild(emailSpan);
         const joinedDiv = document.createElement('DIV');
         joinedDiv.className = 'date';
         let joinDate = data[i].registered.date;
         joinedDiv.textContent = `Joined ${joinDate}`;
         li.appendChild(joinedDiv);
         ul.insertAdjacentElement( "beforeend" , li );

         /* DYNAMICALLY CREATES THIS LI STRUCTURE ON USER DATA
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
                  <h3>Ethel Dean</h3>
                  <span class="email">ethel.dean@example.com</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined 12-15-2005</span>
               </div>
            </li>*/
      }
   } 
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {
   let numberOfPages = (list.length / 9)+1;
   const linkul = document.querySelector('.link-list');
   linkul.innerHTML = '';
   for ( i = 1 ; i < numberOfPages ; i++ ) {
      const pageLi = document.createElement('LI');
      const pageBtn = document.createElement('BUTTON');
      pageBtn.type = 'button';
      pageBtn.textContent = `${i}`;
      if ( i === 1 ) {
         pageBtn.className = 'active';
      }
      pageLi.appendChild(pageBtn);
      linkul.insertAdjacentElement( "beforeend" , pageLi );
   } 
   const liList = document.querySelectorAll('BUTTON');
   linkul.addEventListener( 'click' , () => {
      for ( i = 0 ; i < liList.length ; i++ ) {
         liList[i].className = '';
      }
      event.target.className = 'active';
      let activeButton = document.querySelector('.active');
      let buttonContent = activeButton.textContent;
      let buttonNum = parseInt(buttonContent);
      showPage(list,buttonNum);
   });
}


// Call functions

showPage (data,1);
addPagination (data);


//Creates search bar HTML structure

/* <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button class="submit" type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label> */

const header = document.querySelector('.header');
const searchLabel = document.createElement('LABEL');
searchLabel.for = 'search';
searchLabel.className = 'student-search';
header.insertAdjacentElement("beforeend",searchLabel)
const searchSpan = document.createElement('SPAN');
searchSpan.textContent = 'Search by name';
searchLabel.appendChild(searchSpan);
const searchInput = document.createElement('INPUT');
searchInput.id = 'search';
searchInput.placeholder = 'Search by name...';
searchLabel.appendChild(searchInput);
const searchButton = document.createElement('BUTTON');
searchButton.type = 'button';
const searchImg = document.createElement('IMG');
searchImg.src = 'img/icn-search.svg';
searchImg.alt = 'Search icon';
searchButton.appendChild(searchImg);
searchLabel.appendChild(searchButton);
searchButton.className = 'submit';

//Search bar functionality function
const li = document.getElementsByTagName('LI');
const ul = document.getElementsByClassName('.student-list');
const searchIpt = document.querySelector('#search');
const searchBar = document.querySelector('.submit');
let newList;
function search(userInput,list) {
   for ( i = 0 ; i < list.length; i++ ) { 
      li[i].id = '';
      newList = [];       
      let wholeName = list[i].name.title;
      wholeName += list[i].name.first;
      wholeName += list[i].name.last;
         if (wholeName.toLowerCase().includes(userInput.value.toLowerCase()) === true ) {
            li[i].id = 'match';
            li[i].style.display = '';
            newList += list[i];
         } else {
            li[i].id = '';
            li[i].style.display = 'none';
         }
   } 
   showPage (newList,1);
   addPagination (newList);
}


searchIpt.addEventListener('keyup', (event) => {
   event.preventDefault();
   search(searchIpt , data );
   console.log(newList);
})

searchBar.addEventListener('click', (event) => {
   event.preventDefault();

})