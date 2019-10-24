var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
$(function() {
    $(window).scroll(function() {
        var st = $("window").scrollTop() || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        var header = $('.header')
        var hellomain_js = $('.hellomain')
        if (st > lastScrollTop) {
            header.addClass('scroll_header')
            hellomain_js.addClass('scroll_main1')
            hellomain_js.removeClass('hellomain_js')
        } else {
            header.addClass('scroll_header')
            hellomain_js.addClass('hellomain_js')
            hellomain_js.removeClass('scroll_main1') // upscroll code
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    });
})

var nut = $('.number');
var slides = $('.wekoral');
var color = $('.number span')
nut.click(function() {
    slides.removeClass('koralTap');
    color.removeClass('color')

    var x = $(this).attr('data-tap');
    var y = $(`#${x}`);
    var z = $(this).find('span')
    console.log(z)
    y.addClass('koralTap');
    z.addClass('color')
})



function next() {
    var mainSpan = $('.main4 span')
    var current = $('.mainSpan');
    var current_index = $(current).attr('data-index');
    var next_index = parseInt(current_index) + 1;
    if (next_index > 3) {
        next_index = 0;
    }
    var elementNext = $(`.main4 span[data-index="${next_index}"]`);
    mainSpan.removeClass('mainSpan');

    elementNext.addClass('mainSpan');

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
    var buttons = $('.feedback-button ul li');
    var slideMain6 = $('.feedback');
        buttons.click(function() {
            var index = $(this).attr('data-index');
            $(".totalFeedback").css("transform" ,`translateX(${parseInt(index) * (-820)}px)`);
                buttons.removeClass('button-js')
            $(this).addClass('button-js')
        })
    
}
feedback();