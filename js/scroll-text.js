var scrollPos = 0;
window.addEventListener('scroll', function(){
    var section = document.getElementById('section');
    var value = window.scrollY;
    // var value = (document.body.getBoundingClientRect()).top;
    if (value < scrollPos && section.innerHTML == 1) {
        window.scrollTo(0, 0);
        section.innerHTML = 0;
        document.getElementsByClassName('scroll')[1].setAttribute("hidden", "");
        document.getElementsByClassName('scroll')[0].removeAttribute("hidden", "");
    } else if (value > scrollPos && section.innerHTML == 0) {
        var s2 = document.getElementsByClassName('item-container2')[0].scrollHeight;
        window.scrollTo(0, s2);
        section.innerHTML = 1;
        document.getElementsByClassName('scroll')[0].setAttribute("hidden", "");
        document.getElementsByClassName('scroll')[1].removeAttribute("hidden", "");
    }
    // scrollPos = (document.body.getBoundingClientRect()).top;
    scrollPos = window.scrollY;
});

document.getElementById('first')
    .addEventListener("click", function(event) {
        document.getElementsByClassName('scroll')[0].setAttribute("hidden", "");
        document.getElementsByClassName('scroll')[1].removeAttribute("hidden", "");
    });

document.getElementById('second')
    .addEventListener("click", function(event) {
        document.getElementsByClassName('scroll')[1].setAttribute("hidden", "");
        document.getElementsByClassName('scroll')[0].removeAttribute("hidden", "");
    });
