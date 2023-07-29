const app = document.getElementById('app');
const key = document.getElementById('keys');
const data = document.getElementById('datas');
const price = document.getElementById('prices');
const type = document.getElementById('type');
const accessibility = document.getElementById('accessibilitys');
const typed = document.getElementById('typed');
const accessibilityd = document.getElementById('accessibilityd');

// Function to fetch data from Bored-API and render content
async function fetchDataAndRender(url, pageTitle) {
  const response = await fetch(url);
  const data = await response.json();

  const template1 = `
    <div>
      <h1>${pageTitle}</h1>
    </div>
  `;
  const template2 = `
    <div>
    <p><strong></strong> ${data.activity}</p>
    </div>
  `;
  const template3 = `
    <div>
    <p><strong></strong> ${data.key}</p>
    </div>
  `;
  const template4 = `
    <div>
    <p><strong></strong> ${data.type}</p>
    </div>
  `;
  const template5 = `
    <div>
    <p><strong></strong> ${data.price}</p>
    </div>
  `;
  const template6 = `
    <div>
    <p><strong></strong> ${data.accessibility}</p>
    </div>
  `;

  app.innerHTML = template2;
  key.innerHTML = template3;
  type.innerHTML = template4;
  price.innerHTML = template5;
  accessibility.innerHTML = template6;
  typed.innerHTML = template4;
  accessibilityd.innerHTML = template6;
}

// Fetch data for the home page
document.addEventListener('DOMContentLoaded', () => {
  fetchDataAndRender('https://www.boredapi.com/api/activity', 'Home');
});

// Fetch data for the dynamic pages
for (let i = 1; i <= 10; i++) {
  const url = `https://www.boredapi.com/api/activity`;
  const pageTitle = `Home ${i}`;

  // IIFE to preserve the value of 'i' for each iteration
  (function (i, url, pageTitle) {
    router.get(`/home${i}`, async () => {
      await fetchDataAndRender(url, pageTitle);
    });
  })(i, url, pageTitle);
}
