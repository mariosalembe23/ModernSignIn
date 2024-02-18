'use strict';

const formLogin = document.querySelector('.form__login');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const errors = [];
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const warningCard = document.querySelector('.warning__card');

  if (!email || !password) {
    errors.push({ message: 'Preencha todos os campos' });
  } else if (!regexEmail.test(email)) {
    errors.push({ message: 'Insira um e-mail válido' });
  } else if (password.length <= 8) {
    errors.push({ message: 'Senha muito Fraca' });
  }

  if (errors.length !== 0) {
    warningCard.classList.remove('warning__card__off');
    warningCard.classList.add('warning__card__on');

    setTimeout(() => {
      warningCard.classList.remove('warning__card__on');
      warningCard.classList.add('warning__card__off');
    }, 2500);
    document.querySelector('.info').textContent = errors[0].message;
  } else {
    location.href = './pages/welcome.html';
  }
});
