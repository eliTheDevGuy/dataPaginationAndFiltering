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
   for ( i = 0 ; i >= startIndex && i < endIndex ; i++ ) {
      const li = document.createElement('LI');
      li.className = 'student-item cf';
      ul.appendChild(li);
      const studentDiv = document.createElement('DIV');
      studentDiv.className = 'student-details';
      li.appendChild(studentDiv);
      const img = document.createElement('IMG');
      img.className = 'avatar';
      img.src = `${data[i].picture.medium}`;
        /* <li class="student-item cf">
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


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
