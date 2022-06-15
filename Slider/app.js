const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const quote = document.getElementById('quote');
const name = document.getElementById('name');
const title = document.getElementById('title');
const slideImage = document.getElementById('slide-image');

const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      
      node.removeEventListener('animationend', handleAnimationEnd);
      
      resolve('Animation ended');
    }
    
    node.addEventListener('animationend', handleAnimationEnd);
});

let currentTestimonial = 0;

btnPrev.onclick = () => {
  swapContent();
}

btnNext.onclick = () => {
  swapContent();
}

function swapContent() {
  if (currentTestimonial != 1) {
    animateCSS('#quote', 'fadeOut').then(() => {
      quote.textContent = `“Se você deseja estabelecer a melhor base possível, recomendo fazer este curso. A profundidade dos instrutores é incrível. Agora eu me sinto tão confiante sobre começando como um desenvolvedor profissional.”`;
    }).then(() => {
      animateCSS('#quote', 'fadeInUp');
    });
    animateCSS('#name', 'fadeOut').then(() => {
      name.textContent = `John Tarkpor`;
    }).then(() => {
      animateCSS('#name', 'fadeInDown');
    });
    animateCSS('#title', 'fadeOut').then(() => {
      title.textContent = `Desenvolvedor Front-end Junior`;
    }).then(() => {
      animateCSS('#title', 'fadeInUp');
    });
    animateCSS('#slide-image', 'fadeOut').then(() => {
      slideImage.src = `./images/image-john.jpg`;
    }).then(() => {
      animateCSS('#slide-image', 'fadeIn');
    });
    currentTestimonial++;
  } else {
    animateCSS('#quote', 'fadeOut').then(() => {
      quote.textContent = `“Estou interessado em codificação há algum tempo, mas nunca dei o salto, até agora. Eu não poderia recomendar este curso o suficiente. Agora estou no emprego dos meus sonhos e assim animado com o futuro.”`;
    }).then(() => {
      animateCSS('#quote', 'fadeInUp');
    });
    animateCSS('#name', 'fadeOut').then(() => {
      name.textContent = `Tanya Sinclair`;
    }).then(() => {
      animateCSS('#name', 'fadeInDown');
    });
    animateCSS('#title', 'fadeOut').then(() => {
      title.textContent = `UX Engineer`;
    }).then(() => {
      animateCSS('#title', 'fadeInUp');
    });
    animateCSS('#slide-image', 'fadeOut').then(() => {
      slideImage.src = `./images/image-tanya.jpg`;
    }).then(() => {
      animateCSS('#slide-image', 'fadeIn');
    });
    currentTestimonial--;
  }
}