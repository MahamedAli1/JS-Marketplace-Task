// Sample data for advertisements
const advertisementsData = [
    { title: 'Ad 1', description: 'This is the first advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact1@example.com' },
    { title: 'Ad 2', description: 'This is the second advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact2@example.com' },
    { title: 'Ad 3', description: 'This is the third advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact3@example.com' },
    { title: 'Ad 4', description: 'This is the fourth advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact4@example.com' },
    { title: 'Ad 5', description: 'This is the fifth advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact5@example.com' },
    { title: 'Ad 6', description: 'This is the sixth advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact6@example.com' }
  ];
  
  const adsContainer = document.getElementById('advertisements');
  const filterInput = document.getElementById('filterTitle');
  
  // Function to render advertisements on the page
  function renderAds(ads) {
    adsContainer.innerHTML = ''; // Clear previous ads
  
    ads.forEach(ad => {
      const adCard = document.createElement('div');
      adCard.classList.add('col-md-4');
  
      adCard.innerHTML = `
        <div class="card h-100">
          <img src="${ad.image}" class="card-img-top" alt="Advertisement Image">
          <div class="card-body">
            <h5 class="card-title">${ad.title}</h5>
            <p class="card-text">${ad.description}</p>
            <p class="card-text">
              <strong>Contact:</strong> <span class="contact-info">***</span>
            </p>
            <button class="btn btn-secondary btn-block toggle-contact">Toggle Contact</button>
            <button class="btn btn-info btn-block mt-2 details">Details</button>
          </div>
        </div>
      `;
  
      adsContainer.appendChild(adCard);
  
      // Toggle contact information visibility
      adCard.querySelector('.toggle-contact').addEventListener('click', function () {
        const contactSpan = adCard.querySelector('.contact-info');
        contactSpan.textContent = contactSpan.textContent === '***' ? ad.contact : '***';
      });
  
      // Show contact information in alert on "Details" button click
      adCard.querySelector('.details').addEventListener('click', function () {
        alert(`Contact Information: ${ad.contact}`);
      });
    });
  }
  
  // Event listener for filter input
  filterInput.addEventListener('input', function () {
    const searchText = filterInput.value.toLowerCase();
    const filteredAds = advertisementsData.filter(ad => ad.title.toLowerCase().includes(searchText));
    renderAds(filteredAds);
  });
  
  // Initial render of all advertisements
  renderAds(advertisementsData);
  