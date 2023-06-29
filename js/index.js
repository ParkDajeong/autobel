// Main Visual
const swiper = new Swiper(".swiper", {
  simulateTouch: false,
  loop: true,
  autoplay: {
    delay: 7000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `<li class="${className}">
        <button type="button">
          <span class="blind">${index + 1}번 배너로 이동</span>
        </button>
      </li>`;
    },
  },
});