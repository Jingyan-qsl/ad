window.addEventListener('load', () => {
  AOS.init();
});

var backToTopBtn = document.querySelector('#backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// 点击按钮回到顶部
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('DOMContentLoaded', () => {
  var introduceItem = document.querySelectorAll('.introduce-item');
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  var platformsItem = document.querySelectorAll('.platforms-item');

  const totalSlides = introduceItem.length;
  let currentIndex = 0;
  let interval = null;

  // 自动轮播
  function showSlide(index) {
    const offset = -index * 100;
    swiperWrapper.style.transform = `translateX(${offset}%)`;

    // 添加active类
    platformsItem.forEach(el => el.classList.remove('active'));
    if (platformsItem[index]) {
      platformsItem[index].classList.add('active'); // 
    }
  }
  function startAutoSlide() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }, 1500);
  }
  console.log("index:", currentIndex, "introduceItem.length:", introduceItem.length);
  // 初始启动
  showSlide(currentIndex);
  startAutoSlide();

  // 点击文字切换
  platformsItem.forEach(textEl => {
    textEl.addEventListener('click', () => {
      clearInterval(interval); // 停止自动轮播
      currentIndex = parseInt(textEl.getAttribute('data-index'));
      showSlide(currentIndex);
    });
  });

  var stepsItem = document.querySelectorAll('.steps-item');
  var stepsContent = document.querySelector('.steps-swiper-content');
  var step = document.querySelectorAll('.step');

  const stepSlides = stepsItem.length;
  let stepIndex = 0;
  let interval1 = null;

  function showStepSlide(index) {
    const offset1 = -index * 100;
    stepsContent.style.transform = `translateX(${offset1}%)`;

    step.forEach(el => el.classList.remove('active'));
    if (step[index]) {
      step[index].classList.add('active');
    }
  }

  function startAutoSlide1() {
    interval1 = setInterval(() => {
      stepIndex = (stepIndex + 1) % stepSlides;
      showStepSlide(stepIndex);
    }, 1500);
  }

  showStepSlide(stepIndex);
  startAutoSlide1();

  step.forEach(textEl => {
    textEl.addEventListener('click', () => {
      clearInterval(interval1);
      stepIndex = parseInt(textEl.getAttribute('data-index'));
      showStepSlide(stepIndex);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const allModules = document.querySelectorAll('.content-box');

  allModules.forEach(box => {
    const winBtn = box.querySelector('.button-win');
    const macBtn = box.querySelector('.button-mac');
    const buttons = box.querySelectorAll('.banner-btn-box a');
    const toggleButtons = box.querySelectorAll('.change-button .button-item');

    function showButtons(os) {
      // 切换按钮显示
      buttons.forEach(btn => {
        btn.style.display = btn.dataset.agent === os ? 'flex' : 'none';
      });

      // 切换按钮高亮
      toggleButtons.forEach(item => {
        item.classList.toggle('action', item.classList.contains(`button-${os}`));
      });
    }

    // 绑定点击事件
    winBtn?.addEventListener('click', () => showButtons('win'));
    macBtn?.addEventListener('click', () => showButtons('mac'));

    // 初始化默认平台
    const isMac = navigator.userAgent.toLowerCase().includes('mac');
    showButtons(isMac ? 'mac' : 'win');
  });
});


// function showButtons(os) {
//   // 1. 显示对应系统的按钮
//   document.querySelectorAll('.banner-btn-box a').forEach(btn => {
//     btn.style.display = btn.dataset.agent === os ? 'flex' : 'none';
//   });

//   // 2. 高亮当前按钮
//   document.querySelectorAll('.change-button .button-item').forEach(btn => {
//     btn.classList.toggle('action', btn.classList.contains(`button-${os}`));
//   });

//   // 3. 切换对应系统的内容
//   document.querySelectorAll('.content-box > div').forEach(div => {
//     div.style.display = div.classList.contains(`content-${os}`) ? 'block' : 'none';
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('.button-win')?.addEventListener('click', () => {
//     showButtons('win');
//   });

//   document.querySelector('.button-mac')?.addEventListener('click', () => {
//     showButtons('mac');
//   });

//   const isMac = navigator.userAgent.toLowerCase().includes('mac');
//   showButtons(isMac ? 'mac' : 'win');
// });  