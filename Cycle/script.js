const toggleBtn = document.getElementById('loginToggleBtn');
  const popover = document.getElementById('loginPopover');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showLoginTab = document.getElementById('showLoginTab');
  const showRegisterTab = document.getElementById('showRegisterTab');

  toggleBtn.addEventListener('click', () => {
    popover.classList.toggle('d-none');
  });

  showLoginTab.addEventListener('click', () => {
    loginForm.classList.remove('d-none');
    registerForm.classList.add('d-none');
    showLoginTab.classList.add('active');
    showRegisterTab.classList.remove('active');
  });

  showRegisterTab.addEventListener('click', () => {
    loginForm.classList.add('d-none');
    registerForm.classList.remove('d-none');
    showLoginTab.classList.remove('active');
    showRegisterTab.classList.add('active');
  });

  // Optional: Click outside to close
  document.addEventListener('click', function (e) {
    if (!toggleBtn.contains(e.target) && !popover.contains(e.target)) {
      popover.classList.add('d-none');
    }
  });

// Search
  const searchBtn = document.getElementById('searchBtn');
  const searchBox = document.getElementById('searchBox');

  // Toggle the visibility of the search box
  searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('d-none');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
      searchBox.classList.add('d-none');
    }
  });


  function updateCartCount(newCount) {
    const cartCount = document.getElementById("cartCount");
    cartCount.textContent = newCount;
  }
