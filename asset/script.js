$('.tombol').click(function () {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function () {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function () {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.tombol2').click(function () {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function () {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function () {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.kehome').click(function () {
    setTimeout(function () {
        $('.home').addClass('fadeIn');
    }, 1100);

    PuterLagu();
});


$('.kehalaman2').click(function () {
    setTimeout(function () {
        $('.halaman2').addClass('fadeIn');
    }, 1100);

    JalaninTeks();
    PuterLagu();
    Ambilnama();
});

var i = 0;
var txt = "Ngày Valentine vui vẻ nhó, tớ muốn nói là ... ... thôi không viết ở đây đâu 🙆🙆🙆. Tận hưởng trọn vẹn mấy ngày nghỉ nữa nha! Nhưng mà t muốn gặp cậu quá 😂😂😂 ";
var speed = 160;

function JalaninTeks() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
    }
};


function PuterLagu() {
    var lagu = document.getElementById("lagu");
    return lagu.paused ? lagu.play() : lagu.pause();
};

function Ambilnama() {
    var x = document.getElementById("nama").value;
    document.getElementById("tampilnama").innerHTML = x;
};