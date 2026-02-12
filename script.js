// REGISTER
function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Fill all fields");
    return;
  }

  const user = { name, email, password, orders: [] };
  localStorage.setItem("user_" + email, JSON.stringify(user));
  alert("Registered Successfully!");
  window.location.href = "login.html";
}

// LOGIN
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user_" + email));

  if (!user || user.password !== password) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("loggedInUser", email);
  window.location.href = "dashboard.html";
}

// DASHBOARD LOAD
if (window.location.pathname.includes("dashboard.html")) {
  const loggedIn = localStorage.getItem("loggedInUser");

  if (!loggedIn) {
    window.location.href = "login.html";
  } else {
    const user = JSON.parse(localStorage.getItem("user_" + loggedIn));
    document.getElementById("welcomeText").innerText =
      "Welcome, " + user.name;
    renderOrders(user);
  }
}

// CREATE ORDER
function createOrder() {
  const email = localStorage.getItem("loggedInUser");
  const user = JSON.parse(localStorage.getItem("user_" + email));

  const newOrder = {
    id: Math.random().toString(36).substring(2, 8),
    date: new Date().toLocaleDateString()
  };

  user.orders.push(newOrder);
  localStorage.setItem("user_" + email, JSON.stringify(user));

  renderOrders(user);
}

// RENDER ORDERS
function renderOrders(user) {
  const container = document.getElementById("ordersContainer");
  container.innerHTML = "";

  user.orders.forEach(order => {
    container.innerHTML += `
      <div class="bg-[#111] p-4 rounded mb-4">
        Order #${order.id} - ${order.date}
      </div>
    `;
  });
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}