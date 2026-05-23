const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const cards = document.querySelectorAll(".card");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let current = 0;

function showSlide(index) {
  cards.forEach(card => {
    card.classList.remove("active");
  });

  cards[index].classList.add("active");
}

if (next) {
  next.addEventListener("click", () => {
    current++;

    if (current >= cards.length) {
      current = 0;
    }

    showSlide(current);
  });
}

if (prev) {
  prev.addEventListener("click", () => {
    current--;

    if (current < 0) {
      current = cards.length - 1;
    }

    showSlide(current);
  });
}

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

if (openModal) {
  openModal.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    tabBtns.forEach(item => {
      item.classList.remove("active");
    });

    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    btn.classList.add("active");

    document
      .getElementById(`tab-${btn.dataset.tab}`)
      .classList.add("active");
  });
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {

    const content = header.nextElementSibling;

    content.classList.toggle("open");
  });
});

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("formMessage");

    if (name === "" || email === "") {
      message.textContent = "Заполните все поля";
      return;
    }

    if (!email.includes("@")) {
      message.textContent = "Некорректный email";
      return;
    }

    message.textContent = "Регистрация успешна";
  });
}

const likeBtns = document.querySelectorAll(".like-btn");

likeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

const chatForm = document.getElementById("chatForm");

if (chatForm) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("messageInput");
    const messages = document.getElementById("messages");

    if (input.value.trim() === "") {
      return;
    }

    const div = document.createElement("div");

    div.classList.add("message");

    div.textContent = input.value;

    messages.append(div);

    input.value = "";
  });
}