const films = document.querySelector('.guides');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setUpUi = user => {
  if(user){
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }else{
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

const setUpGuides = data => {
  if(data.length){
    let html = '';
    data.forEach(doc => {
      const film = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">${film.title}</div>
          <div class="collapsible-body white">${film.content}</div>
        </li>
      `;
      html += li;
    });
    films.innerHTML = html;
  } else {
    films.innerHTML = '<h5 class="center-align">Please login first!</h5>'
  }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});