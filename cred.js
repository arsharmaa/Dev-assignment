$('.carousel').carousel({
  interval: false
})

const tempHeight = document.getElementById('l1').getBoundingClientRect().bottom;

const gl1 = document.getElementById('l1')
const gl2 = document.getElementById('l2')
const gl3 = document.getElementById('l3')
const gl4 = document.getElementById('l4')

const gl1r = l1.getBoundingClientRect()
const gl2r = l2.getBoundingClientRect()
const gl3r =l3.getBoundingClientRect() 
const gl4r = l4.getBoundingClientRect()

const h = window.innerHeight;

function handleScroll(scrollPos) {

  const l1 = document.getElementById('l1')
  const l2 = document.getElementById('l2')
  const l3 = document.getElementById('l3')
  const l4 = document.getElementById('l4')

  const l1r = l1.getBoundingClientRect()
  const l2r = l2.getBoundingClientRect()
  const l3r =l3.getBoundingClientRect() 
  const l4r = l4.getBoundingClientRect()

  const l1h=l1r.bottom;
  const l2h=l2r.bottom;
  const l3h=l3r.bottom;
  const l4h=l4r.bottom;
  

  if (scrollPos > l4h) {
    $('.carousel').carousel(3)
    $('.carousel').carousel({
      interval: false
    })
  } else if (scrollPos > l3h) {
    $('.carousel').carousel(2)
    $('.carousel').carousel({
      interval: false
    })

  } else if (scrollPos > l2h) {
    $('.carousel').carousel(1)
    $('.carousel').carousel({
      interval: false
    })

  } else if (scrollPos > l1h) {
    $('.carousel').carousel(0)
    $('.carousel').carousel({
      interval: false
    })
  }


console.log("scrollPos: " + scrollPos);
console.log(gl1r.top, gl2r.top, gl3r.top, gl4r.top);
  if (scrollPos+l1r.height > gl1r.top && scrollPos + l1r.height < gl1r.bottom && l1r.bottom>0){
    // console.log(("one " + scrollPos));
    // console.log(l1r.bottom)
    // console.log(l1r.top);
    l1.style.opacity = (l1r.bottom-scrollPos)/l1r.height;
  }
  if (scrollPos + (h/3.5) > gl2r.top && scrollPos + (h/3.5) <gl2r.bottom && l2r.bottom>0){
    l2.style.opacity = (gl2r.bottom-scrollPos-(h/1.5))/l2r.height;
    // console.log((l2r.top));
    // console.log("second scrollY" + scrollPos)

  }
  if (scrollPos+(h/3.5) > gl3r.top && scrollPos+(h/3.5) < gl3r.bottom && l3r.bottom>0){
    l3.style.opacity = (gl3r.bottom-scrollPos-(h/1.5))/l3r.height;
    // console.log((l3r.bottom-scrollPos)/l3r.height);

  }
  if (scrollPos+(h/3.5)  > gl4r.top && scrollPos+(h/3.5)  < gl4r.bottom && l4r.bottom>0){
    l4.style.opacity = (gl4r.bottom-scrollPos-(h/1.5))/l4r.height;
    // console.log((l4r.bottom-scrollPos)/l4r.height);
  }
  
}

let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener('scroll', function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      handleScroll(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});





// let options1 = {
//   rootMargin: '0px',
//   threshold: 1.0
// }
// let options2 = {
//   rootMargin: '0px',
//   threshold: 1.0
// }
// let options3 = {
//   rootMargin: '0px',
//   threshold: 1.0
// }
// let options4 = {
//   rootMargin: '0px',
//   threshold: 1.0
// }


// let observer1 = new IntersectionObserver(left1, options1);
// function left1() {
//   $('#imgs').carousel('next');
//   console.log("carousel1 change");

// }
// let target = document.getElementById('obv1');
// observer1.observe(target);


// let observer2 = new IntersectionObserver(left2, options2);
// function left2() {
//   window.addEventListener('wheel', function (event) {
//     if (event.deltaY < 0) {
//       $('#imgs').carousel('prev');
//       console.log("scroll up");
//       console.log("carouse2 change");

//     }
//     else if (event.deltaY > 0) {
//       $('#imgs').carousel('next');
//       console.log("carouse2 change");
//       console.log("scroll down")

//     }
//   })

// }
// let target2 = document.querySelector('.heading2');
// observer2.observe(target2);

// let observer3 = new IntersectionObserver(left3, options3);
// function left3() {
//   $('#imgs').carousel('pause');
//   console.log("carouse3 change");
// }
// let target3 = document.querySelector('.heading3');
// observer3.observe(target3);

// let observer4 = new IntersectionObserver(left4, options4);
// function left4() {
//   $('#imgs').carousel('next');
//   console.log("carouse4 change");
// }
// let target4 = document.querySelector('.heading4');
// observer4.observe(target4);

