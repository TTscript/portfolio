function backToTop() {
    const upBtn = document.querySelector('[data-btn="up-btn"]');

    if (!upBtn || upBtn === null) {
      return;
    } else {
      const footer = document.querySelector('footer').offsetHeight;
      const body = document.querySelector('body');
      const pageHeight = body.offsetHeight;
      const viewPortHeight = window.innerHeight;
      const border = pageHeight - viewPortHeight - footer;
      const header = document.querySelector('header').offsetHeight;
      const container = document.querySelector('.container');


      if (body.offsetWidth > container.offsetWidth) {
        const containerBodyDiff = body.offsetWidth - container.offsetWidth;
        const rightSpace = containerBodyDiff / 2 + 52;
        upBtn.style.right = `${rightSpace}px`;
        console.log(containerBodyDiff)
      }

      upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 250);
      });

      window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 350) {
          upBtn.classList.add('up-btn--appear');
          setTimeout(() => {
            upBtn.classList.add('up-btn--start-roll')
          }, 2000);
        } else {
          upBtn.classList.remove('up-btn--appear');
          upBtn.classList.remove('up-btn--start-roll');
          upBtn.blur();
        }
        if (window.pageYOffset >= border) {
          upBtn.style.bottom = 'unset';
          upBtn.style.top = `${body.offsetHeight - footer - header - upBtn.offsetHeight - 20}px`;
          upBtn.style.position = 'absolute';
        } else {
          upBtn.style.top = 'unset';
          upBtn.style.bottom = '20px';
          upBtn.style.position = 'fixed';
        }
      });
    }
  }

  backToTop();

  function timeoutWindow() {
    window.clearTimeout(timeoutWindow);
    setTimeout(() => {
      backToTop();
    }, 500);
  }

  window.addEventListener('resize', () => {
    clearTimeout(timeoutWindow);
    timeoutWindow();
  });

const pageBody = document.querySelector('body');
const burgerMenu = document.querySelector('.burger-menu');
const headerInner = document.querySelector('.page-header__inner');

burgerMenu.addEventListener('click', (e) => {
  e.preventDefault();
  burgerMenu.classList.toggle('burger-menu--active');
  headerInner.classList.toggle('page-header__inner--active');
  pageBody.classList.toggle('page-body--overflow');
});

