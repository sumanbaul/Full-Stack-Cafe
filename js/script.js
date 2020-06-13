var WindowHeight = window.innerHeight;
var HeaderHeight = document.getElementById("header").offsetHeight;

var SliderHeight = (WindowHeight - HeaderHeight);

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

if(isMobileDevice()){
    document.getElementById('slider').style.height = WindowHeight + 'px';
    document.querySelector("#slider div").style.height = WindowHeight + 'px';
    document.querySelector("#slider div div.row").style.height = WindowHeight + 'px';
} else {

    document.getElementById('slider').style.height = SliderHeight + 'px';
    document.querySelector("#slider div").style.height = SliderHeight + 'px';
    document.querySelector("#slider div div.row").style.height = SliderHeight + 'px';
    
}


// Cursor
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// document.addEventListener('click', () => {
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500)
// })
// End of Cursor
