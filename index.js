var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  const navbar = document.getElementsByTagName('nav')[0];

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
    navbar.classList.add('shadow');
  } else {
    document.getElementsByTagName('nav')[0].style.top = '-80px';
  }
  prevScrollpos = currentScrollPos;

  if (window.pageYOffset === 0) {
    navbar.classList.remove('shadow');
  }
};

$(() => {
  $('#name').slideDown('slow', () => {
    $('#landing > p').slideDown('slow', () => {
      $('#name').slideDown('slow', () => {
        $('#landing > p').slideDown('slow', () => {});
      });
    });
  });
});

setTimeout(() => {
  var typed = new Typed('#typed', {
    strings: [
      '_',
      ' I am a Recent Computer Science Grad.',
      ' I am a Math and Physics Grad.',
      ' I am a Aspiring Software Engineer.',
    ],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true,
    showCursor: true,
    smartBackspace: true,
  });
}, 1000);

function openSideBar(x) {
  x.classList.toggle('change');

  const sideBar = document.getElementById('side-bar');
  const body = document.getElementsByTagName('body')[0];
  const main = document.getElementsByTagName('main')[0];

  console.log(body);
  sideBar.classList.toggle('open-nav');
  body.classList.toggle('no-scroll');
  main.classList.toggle('blur');
}

function closeSideBar() {
  const sideBar = document.getElementById('side-bar');
  const body = document.getElementsByTagName('body')[0];
  const main = document.getElementsByTagName('main')[0];
  const button = document.getElementsByClassName('change')[0];
  sideBar.classList.remove('open-nav');
  body.classList.remove('no-scroll');
  main.classList.remove('blur');
  button.classList.remove('change');
}
