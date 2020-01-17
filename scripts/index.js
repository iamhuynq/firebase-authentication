const films = document.querySelector('.guides');

const setUpGuides = data => {
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
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});