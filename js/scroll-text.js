window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.log(delta);
    var section = document.getElementById('section').innerHTML;
    console.log(section);
    if (delta < 0 && section == 1) {
        console.log('next');
        var main = document.getElementsByClassName('main-container')[0];
        console.log(main);
        var elements = `
        <p hidden id="section">0</p>
        <div><span> a </span></div>
        <a href="place.html"><div id="place"><span> place </span></div></a>
        <div><span> to </span></div>
        <a href="explore.html"><div id="explore"><span> explore </span></div></a>
        <a href=""><div id="ideas"><span> ideas </span></div></a>
        <div><span> by </span></div>
        <a href="https://instagram.com/techedlaksh"><div id="name"><span> @techedlaksh </span></div></a>
        `;
        main.innerHTML = elements;
    } if (delta > 0 && section == 0) {
        console.log('previous');
        var main = document.getElementsByClassName('main-container')[0];
        console.log(main);
        var elements = `
        <p hidden id="section">1</p>
        <div><span> Currently  </span></div>
        <a href="place.html"><div id="place"><span> experimenting </span></div></a>
        <div><span> with </span></div>
        <a href="explore.html"><div id="explore"><span> blah </span></div></a>
        <a href=""><div id="ideas"><span> blah </span></div></a>
        <div><span> blah </span></div>
        <a href="https://instagram.com/techedlaksh"><div id="name"><span> blah </span></div></a>
        `;
        main.innerHTML = elements;
    }
});

// window.addEventListener("touchstart", touchStart, false);
// window.addEventListener("touchmove", touchMove, false);
//
// var start = {x:0, y:0};
//
// function touchStart(event) {
//     start.x = event.touches[0].pageX;
//     start.y = event.touches[0].pageY;
// }
//
// function touchMove(event) {
//     offset = {};
//
//     offset.x = start.x - event.touches[0].pageX;
//     offset.y = start.y - event.touches[0].pageY;
//
//     // window.alert(offset.x);
//     var section = document.getElementById('section').innerHTML;
//     console.log(section);
//     if (offset.x > 0 && section == 1) {
//         console.log('next');
//         var main = document.getElementsByClassName('main-container')[0];
//         console.log(main);
//         var elements = `
//         <p hidden id="section">0</p>
//         <div><span> a </span></div>
//         <a href="place.html"><div id="place"><span> place </span></div></a>
//         <div><span> to </span></div>
//         <a href="explore.html"><div id="explore"><span> explore </span></div></a>
//         <a href=""><div id="ideas"><span> ideas </span></div></a>
//         <div><span> by </span></div>
//         <a href="https://instagram.com/techedlaksh"><div id="name"><span> @techedlaksh </span></div></a>
//         `;
//         main.innerHTML = elements;
//     } if (offset.x < -10  && section == 0) {
//         console.log('previous');
//         var main = document.getElementsByClassName('main-container')[0];
//         console.log(main);
//         var elements = `
//         <p hidden id="section">1</p>
//         <div><span> Currently  </span></div>
//         <a href="place.html"><div id="place"><span> experimenting </span></div></a>
//         <div><span> with </span></div>
//         <a href="explore.html"><div id="explore"><span> blah </span></div></a>
//         <a href=""><div id="ideas"><span> blah </span></div></a>
//         <div><span> blah </span></div>
//         <a href="https://instagram.com/techedlaksh"><div id="name"><span> blah </span></div></a>
//         `;
//         main.innerHTML = elements;
//     }
// }
