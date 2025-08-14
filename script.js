(function () {
  var API_URL = 'https://jsonplaceholder.typicode.com/users';

  var usersEl   = document.getElementById('users');
  var statusEl  = document.getElementById('status');
  var reloadBtn = document.getElementById('reloadBtn');

  function setStatus(msg, type) {
    statusEl.textContent = msg || '';
    statusEl.className = 'status' + (type ? ' ' + type : '');
  }

  function formatAddress(a) {
    if (!a) return '';
    return a.street + ', ' + a.suite + ', ' + a.city + ' ' + a.zipcode;
  }

  function clearUsers() {
    while (usersEl.firstChild) usersEl.removeChild(usersEl.firstChild);
  }

  function renderUsers(users) {
    clearUsers();
    for (var i = 0; i < users.length; i++) {
      var u = users[i];

      var li = document.createElement('li');
      li.className = 'card';
      li.innerHTML =
        '<h3>' + escapeHTML(u.name) + '</h3>' +
        '<div class="meta"><strong>Email:</strong> ' + escapeHTML(u.email) + '</div>' +
        '<div class="meta"><strong>Address:</strong> ' + escapeHTML(formatAddress(u.address)) + '</div>';

      usersEl.appendChild(li);
    }
  }

  // basic HTML escaping to avoid issues with special chars
  function escapeHTML(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function fetchUsers() {
    if (!window.fetch) {
      setStatus('Your browser does not support fetch().', 'error');
      return;
    }
    if (!navigator.onLine) {
      setStatus('You appear to be offline. Please check your connection.', 'error');
      return;
    }

    setStatus('Loading users…');
    reloadBtn.disabled = true;

    fetch(API_URL, { headers: { 'Accept': 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        renderUsers(data);
        setStatus('Loaded ' + data.length + ' users.', 'ok');
      })
      .catch(function (err) {
        clearUsers();
        setStatus('Failed to load users: ' + err.message, 'error');
      })
      .finally(function () {
        reloadBtn.disabled = false;
      });
  }

  reloadBtn.addEventListener('click', fetchUsers);
  window.addEventListener('load', fetchUsers);
})();

