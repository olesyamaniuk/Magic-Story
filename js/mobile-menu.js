document.addEventListener('DOMContentLoaded', () => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const navListRef = document.querySelector('.navigation__list');
  const headerRef = document.querySelector('.header');
  const navigationRef = document.querySelector('.navigation'); 

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    navListRef.classList.toggle('is-open');
    headerRef.classList.toggle('is-open');
    navigationRef.classList.toggle('is-open'); 
  });

  document.querySelectorAll('.navigation__link').forEach((n) =>
    n.addEventListener('click', () => {
      navListRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      headerRef.classList.remove('is-open');
      navigationRef.classList.remove('is-open'); 
    })
  );
});
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".toggle-button img"); 

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    buttonImg.src = "/image/how/icon-park-outline_right.png"; 
  } else {
    answer.style.display = "none";
    buttonImg.src = "/image/how/icon-park-outline_right.png"; 
  }
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const text1 = card.getAttribute("data-text1");
    const text2 = card.getAttribute("data-text2");
    const dataBg1 = card.getAttribute("data-bg1");
    const dataBg2 = card.getAttribute("data-bg2");


   
    if (card.textContent.trim() === text1) {
      card.textContent = text2;
      card.style.backgroundImage = `url(${dataBg2})`; 
      console.log("Changed background to:", dataBg2);
    } else {
      card.textContent = text1;
      card.style.backgroundImage = `url(${dataBg1})`; 
      console.log("Changed background to:", dataBg1);
    }

    card.classList.toggle("clicked");
  });
});




// function toggleAnswer(element) {
//   const answer = element.nextElementSibling;
//   const buttonImg = element.querySelector(".toggle-button img"); 

//   if (answer.style.display === "none" || answer.style.display === "") {
//     answer.style.display = "block";
//   buttonImg.src = "/image/faq/arrrow_up.png";
//   } else {
//     answer.style.display = "none";
//     buttonImg.src = "/image/faq/arrrow_down.png";
//   }
// }

// function toggleAnswer(element) {
//   const allAnswers = document.querySelectorAll(".how-answer");
//   const allButtons = document.querySelectorAll(".toggle-button img");
//   const answer = element.nextElementSibling;
//   const buttonImg = element.querySelector(".toggle-button img");

//   // Закриваємо всі відкриті відповіді
//   allAnswers.forEach((ans) => {
//     if (ans !== answer) {
//       ans.style.display = "none";
//     }
//   });

//   // Скидаємо всі кнопки до "arrow_down"
//   allButtons.forEach((img) => {
//     if (img !== buttonImg) {
//       img.src = "/image/faq/arrrow_down.png";
//     }
//   });

//   // Тоглуємо поточну відповідь
//   if (answer.style.display === "none" || answer.style.display === "") {
//     answer.style.display = "block";
//     buttonImg.src = "/image/faq/arrrow_up.png";
//   } else {
//     answer.style.display = "none";
//     buttonImg.src = "/image/faq/arrrow_down.png";
//   }
// }


function toggleAnswer(element) {
  const allAnswers = document.querySelectorAll(".how-answer");
  const allButtons = document.querySelectorAll(".toggle-button img");
  const howContainer = document.querySelector(".how"); // Контейнер, висоту якого будемо змінювати
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".toggle-button img");

  // Закриваємо всі відкриті відповіді
  allAnswers.forEach((ans) => {
    ans.style.display = "none";
  });

  // Скидаємо всі кнопки до "arrow_down"
  allButtons.forEach((img) => {
    img.src = "/image/faq/arrrow_down.png";
  });

  // Тоглуємо поточну відповідь
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    buttonImg.src = "/image/faq/arrrow_up.png";

    // Збільшуємо висоту .how, враховуючи висоту відкритої відповіді
    const answerHeight = answer.offsetHeight; // Висота блоку відповіді
    const currentHeight = howContainer.offsetHeight; // Поточна висота контейнера
    const newHeight = Math.max(currentHeight, 630 + answerHeight); // Розрахунок нової висоти

    howContainer.style.height = `${newHeight}px`;
  } else {
    answer.style.display = "none";
    buttonImg.src = "/image/faq/arrrow_down.png";

    // Якщо всі відповіді закриті, повертаємо стандартну висоту
    howContainer.style.height = "auto";
  }
}









