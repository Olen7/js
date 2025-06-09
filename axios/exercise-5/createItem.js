export const createItem = (el) =>
  `<li class="item">
  <div class="item-header">
    <p class="user-name">${el.name}</p>
    <p class="user-email">${el.email}</p>
    <button type="button" class="details-button">Переглянути деталі</button>
  </div>
  <div class="user-details hidden">
    <p><strong>Username:</strong> ${el.username}</p>
    <p><strong>Phone:</strong> ${el.phone}</p>
    <p><strong>Website:</strong> ${el.website}</p>
    <div class="address"><strong>Address</strong>
      <p><strong>Street:</strong> ${el.address.street}</p>
      <p><strong>Suite:</strong> ${el.address.suite}</p>
      <p><strong>City:</strong> ${el.address.city}</p>
    </div>
    <div class="company">
    <strong>Company</strong>
      <p><strong>Name:</strong> ${el.company.name}</p>
      <p><strong>Catch Phrase:</strong> ${el.company.catchPhrase}</p>
      <p><strong>bs:</strong> ${el.company.bs}</p>
    </div>
  </div>
</li>`;
