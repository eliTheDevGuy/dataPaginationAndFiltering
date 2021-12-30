/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 10 ;

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


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage (data,all);