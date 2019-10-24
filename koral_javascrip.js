var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function() { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var header = document.querySelector('.header')
    var hellomain_js = document.querySelector('.hellomain')
    if (st > lastScrollTop) {
        header.classList.remove('scroll_header')
        hellomain_js.classList.add('scroll_main1')
        hellomain_js.classList.remove('hellomain_js')
    } else {
        header.classList.add('scroll_header')
        hellomain_js.classList.add('hellomain_js')
        hellomain_js.classList.remove('scroll_main1') // upscroll code
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}, false);
var nut = document.querySelectorAll('.number');
var slides = document.querySelectorAll('.wekoral');
var color = document.querySelectorAll('.number span')
for (var i = 0; i < nut.length; i++) {
    nut[i].addEventListener('click', function() {
        slides[0].classList.remove('slides1');
        color[0].classList.remove('tap01');
        for (var i = 0; i < nut.length; i++) {
            slides[i].classList.remove('koralTap');
            color[i].classList.remove('color')
        }
        var x = this.getAttribute('data-tap');
        var y = document.getElementById(x);
        var z = this.querySelector('span')
        y.classList.add('koralTap');
        z.classList.add('color')
    })
}


function next() {
    var mainSpan = document.querySelectorAll('.main4 span')
    var current = document.querySelector('.mainSpan');
    var current_index = current.getAttribute('data-index');
    var next_index = parseInt(current_index) + 1;
    if (next_index > 3) {
        next_index = 0;
    }
    var elementNext = document.querySelector(`.main4 span[data-index="${next_index}"]`);
    for (i = 0; i < mainSpan.length; i++) {
        mainSpan[i].classList.remove('mainSpan');
    }
    elementNext.classList.add('mainSpan');

}
auto();

function auto() {
    var time = setInterval(function() {
        next()
    }, 2000)
}

// function feedback() {
//     var buttons = document.querySelectorAll('.feedback-button ul li');
//     var slideMain6 = document.querySelectorAll('.feedback');
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function() {
//             slideMain6[0].classList.remove('fb00');
//             for (var i = 0; i < buttons.length; i++) {
//                 slideMain6[i].classList.remove('feedback-js');
//             }
//             var m = this.getAttribute('data-fb');
//             var n = document.getElementById(m);
//             n.classList.add('feedback-js');
//         })
//     }
// }
function feedback() {
    var buttons = document.querySelectorAll('.feedback-button ul li');
    var slideMain6 = document.querySelectorAll('.feedback');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            document.querySelector(".totalFeedback").style.transform = `translateX(${parseInt(index) * (-820)}px)`;
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('button-js')
            }
            this.classList.add('button-js')
        })
    }
}
feedback();