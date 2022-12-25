$(document).ready(function () {
    // NAVBAR
    $('.menu .items').removeClass('on');
    $('.menu .home').addClass('on');
    $('.dropdown-menu li').removeClass('active');

    //FACILITIES (HOMEPAGE)
    $('.facilities a').removeClass('active');
    $('.facilities .item-1').addClass('active');

    //GALLERY
    $('.gallery .gallery-menu li').removeClass('click')
    $('.gallery .gallery-menu li:eq(0)').addClass('click')

    $('.gallery .gallery-row .content').isotope({
        itemSelector: 'img'
    });
    $('.gallery .gallery-menu li').click(function (event) {
        var type = $(this).data('type');
        type = '.' + type;
        $('.gallery .gallery-row .content').isotope({
            filter: type
        });
    });

    //SCROLLTOP
    $('#topbtn').css("display", "none");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#topbtn').css("display", "block");
        } else {
            $('#topbtn').css("display", "none");
        }
    });
    $('#topbtn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

//HOMEPAGE FACILITIES EVENTS
$(function () {
    $('.facilities a').mouseover(function () {
        $('.facilities a').removeClass('active');
        $(this).addClass('active');
    });
});
$(function () {
    $('.facilities .item-1').mouseover(function () {
        $('.facilities img').attr('src', 'image/indoor/TRI8986_mini_mini.jpg');
    });
});
$(function () {
    $('.facilities .item-2').mouseover(function () {
        $('.facilities img').attr('src', 'image/outdoor/sport2.jpg');
    });
});
$(function () {
    $('.facilities .item-3').mouseover(function () {
        $('.facilities img').attr('src', 'image/recreation/skydiving_lajn.jpg');
    });
});

//GALLERY ITEMS EVENTS
$(function () {
    $('.gallery .gallery-menu li').click(function () {
        $('.gallery .gallery-menu li').removeClass('click');
        $(this).addClass('click');
    });
});

//FOOTER FORM CHECK
function check() {
    var name = document.getElementById('name');
    var strname = name.value;
    strname = strname.split(" ").join("");
    var char = strname.length;
    var mail = document.getElementById('mail');
    var mail_pattern = /^[a-zA-Z]\w*(\.\w+)*\@\w+(\.\w{2,3})+$/;
    var address = document.getElementById('address');
    var straddress = address.value;
    straddress = straddress.split(" ").join("");
    var addressChar = straddress.length;
    if (name.value != '' && char < 4) {
        alert("Your Name must be at least 4 characters");
        name.value = '';
        name.focus();
        return false;
    }
    if (mail.value != '' && mail_pattern.test(mail.value) == false) {
        alert("Please match the requested format for E-Mail: info1234@gmail.com");
        mail.value = '';
        mail.focus();
        return false;
    }
    if (address.value != '' && addressChar < 20) {
        alert("Address must be at least 20 characters");
        address.value = '';
        address.focus();
        return false;
    }
    alert('You have successfully submitted!');
}

// BLOG CATEGORIES ITEMS
$(function () {
    $('.block-col .content ul li').removeClass('active')
    $('.block-col .content ul li:eq(0)').addClass('active')
    $('.blogs .category .content ul li').click(function () {
        $('.blogs .category .content ul li').removeClass('active');
        $(this).addClass('active');
        if ($(this).data('type') == 'nutrition') {
            $('.blogs .blogs-row .blog .blog-row').css('display', 'none');
            $('.blogs .blogs-row .blog .nutrition').css('display', 'table');
        }
        if ($(this).data('type') == 'training') {
            $('.blogs .blogs-row .blog .blog-row').css('display', 'none');
            $('.blogs .blogs-row .blog .training').css('display', 'table');
        }
        if ($(this).data('type') == 'muscle') {
            $('.blogs .blogs-row .blog .blog-row').css('display', 'none');
            $('.blogs .blogs-row .blog .muscle').css('display', 'table');
        }
        if ($(this).data('type') == 'weight') {
            $('.blogs .blogs-row .blog .blog-row').css('display', 'none');
            $('.blogs .blogs-row .blog .weight').css('display', 'table');
        }
        if ($(this).data('type') == 'beauty') {
            $('.blogs .blogs-row .blog .blog-row').css('display', 'none');
            $('.blogs .blogs-row .blog .beauty').css('display', 'table');
        }
    });
});

//CONTACT US FORM CHECK
function contactformCheck() {
    var name = document.getElementById('name1');
    var strname = name.value;
    strname = strname.split(" ").join("");
    var char = strname.length;
    if (name.value != '' && char < 4) {
        alert("Your Name must be at least 4 characters");
        name.value = '';
        name.focus();
        return false;
    }

    var mail = document.getElementById('mail1');
    var mail_pattern = /^[a-zA-Z]\w*(\.\w+)*\@\w+(\.\w{2,3})+$/;
    if (mail.value != '' && mail_pattern.test(mail.value) == false) {
        alert("Please match the requested format for E-Mail: info1234@gmail.com");
        mail.value = '';
        mail.focus();
        return false;
    }
    alert('You have successfully submitted!');
}

//MAP
$(function () {
    function initialize() {
        var myLocation = new google.maps.LatLng(10.740023, 106.729812);
        var mapOptions = {
            zoom: 16,
            center: myLocation
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLocation,
            map: map,
            title: "RYAN Sports Club"
        });
        // marker.setMap(map);
    }
    initialize();
});

//FEEDBACK FORM  CHECK
function feedbackformCheck() {
    var name = document.getElementById('name1');
    var strname = name.value;
    strname = strname.split(" ").join("");
    var nameChar = strname.length;
    if (name.value != '' && nameChar < 4) {
        alert("Your Full Name must be at least 4 characters");
        name.value = '';
        name.focus();
        return false;
    }

    var age = document.getElementById('age');
    var agePattern = /^\d{1,2}$/
    if (age.value != '' && agePattern.test(age.value) == false) {
        alert("Please match the requested format for Age: Must contain at least 1 digit and at most 2 digits");
        age.value = '';
        age.focus();
        return false
    } else if (age.value < 10) {
        alert("Your age must be 10 or more!");
        age.value == '';
        age.focus();
        return false
    }
    alert('You have successfully submitted!');
}

//GET SPORTS INFORMATION FROM detailSport.js file
$(function () {
    $('.sportimg').click(function () {
        var findID = $(this).attr('id');
        var index = -1;
        for (var i = 0; i < sportDetail.length; i++) {
            if (findID == sportDetail[i].ID) {
                index = i;
            }
        }
        $('.sport .name').html(sportDetail[index].Name);
        $('.sport .info').html(sportDetail[index].Info);
        $('.sport .img').attr('src', sportDetail[index].Img);
        $('.sport .rule ul').empty();
        for (var j = 0; j < sportDetail[index].Rule.length; j++) {
            $('.sport .rule ul').append('<li></li>');
            $('.sport .rule ul li').last().html(sportDetail[index].Rule[j]);
        }
        $('.sport .img1').attr('src', sportDetail[index].Img1);
        $('.sport .link1').attr('href', sportDetail[index].Img1);
        $('.sport .img2').attr('src', sportDetail[index].Img2);
        $('.sport .link2').attr('href', sportDetail[index].Img2);
        $('.sport .img3').attr('src', sportDetail[index].Img3);
        $('.sport .link3').attr('href', sportDetail[index].Img3);
        $('.sport .player ul').empty();
        for (var n = 0; n < sportDetail[index].Player.length; n++) {
            $('.sport .player ul').append('<li><a></a></li>');
            $('.sport .player ul li a').last().html(sportDetail[index].Player[n]);
            $('.sport .player ul li a').last().attr("href", "https://www.facebook.com/");
            $('.sport .player ul li a').last().attr("target", "_blank");
            $('.sport .player ul li a').last().attr("data-toggle", "popover");
            $('.sport .player ul li a').last().attr("data-html", "true");
            $('.sport .player ul li a').last().attr("data-content", sportDetail[index].Title[n]);
            $('.sport .player ul li a').last().attr("data-trigger", "hover");
            $('[data-toggle="popover"]').popover();
        }
        $('.sport .time ul').empty();
        for (var k = 0; k < sportDetail[index].Time.length; k++) {
            $('.sport .time ul').append('<li></li>');
            $('.sport .time ul li').last().html(sportDetail[index].Time[k]);
        }
    });
});

//MEMBERSHIP FORM CHECK
function registrationformCheck() {
    var name = document.getElementById('name1');
    var strname = name.value;
    strname = strname.split(" ").join("");
    var nameChar = strname.length;
    if (name.value != '' && nameChar < 4) {
        alert("Your Name must be at least 4 characters");
        name.value = '';
        name.focus();
        return false;
    }

    var age = document.getElementById('age');
    var agePattern = /^\d{1,2}$/
    if (age.value != '' && agePattern.test(age.value) == false) {
        alert("Please match the requested format for Age: Must contain at least 1 digit and at most 2 digits");
        age.value = '';
        age.focus();
        return false
    } else if (age.value < 10) {
        alert("Your age must be 10 or more!");
        age.value == '';
        age.focus();
        return false
    }

    var gender = document.getElementById('gender');
    if (gender.value == '') {
        alert('Please select Gender box!');
        gender.focus();
        return false
    }

    var address = document.getElementById('address1');
    var straddress = address.value;
    straddress = straddress.split(" ").join("");
    var addressChar = straddress.length;
    if (address.value != '' && addressChar < 20) {
        alert("Address must be at least 20 characters");
        address.value = '';
        address.focus();
        return false;
    }

    var mail = document.getElementById('mail1');
    var mail_pattern = /^[a-zA-Z]\w*(\.\w+)*\@\w+(\.\w{2,3})+$/;
    if (mail.value != '' && mail_pattern.test(mail.value) == false) {
        alert("Please match the requested format for E-Mail: info1234@gmail.com");
        mail.value = '';
        mail.focus();
        return false;
    }

    var phone = document.getElementById('phone');
    var phone_pattern = /^\d{10,11}$/;
    if (phone.value != '' && phone_pattern.test(phone.value) == false) {
        alert("Please match the requested format for Phone Number: Must be a 10 to 11 digit number");
        phone.value = '';
        phone.focus();
        return false;
    }

    var card = document.getElementById('card');
    if (card.value == '') {
        alert('Please select Card Option box!');
        card.focus();
        return false
    }

    var yoga = document.getElementById('yoga');
    var dancesport = document.getElementById('dancesport');
    var pingpong = document.getElementById('pingpong');
    var badminton = document.getElementById('badminton');
    var swimming = document.getElementById('swimming');
    var basketball = document.getElementById('basketball');
    var billiard = document.getElementById('billiard');
    var football = document.getElementById('football');
    var volleyball = document.getElementById('volleyball');
    var sprinting = document.getElementById('sprinting');
    var tennis = document.getElementById('tennis');
    var baseball = document.getElementById('baseball');
    var rugby = document.getElementById('rugby');
    var frisbeethrowing = document.getElementById('frisbeethrowing');
    var javelin = document.getElementById('javelin');
    var shotput = document.getElementById('shotput');
    if (yoga.checked == false && dancesport.checked == false && pingpong.checked == false && badminton.checked == false && 
        swimming.checked == false && basketball.checked == false && billiard.checked == false && football.checked ==false && 
        volleyball.checked == false && sprinting.checked == false && tennis.checked == false && baseball.checked == false && 
        rugby.checked == false && frisbeethrowing.checked == false && javelin.checked == false && shotput.checked == false) {
        alert('Please check at least 1 sport!');
        return false;
    }
    alert('You have successfully registered!');
}

function cardPrice() {
    var x = document.getElementById("card").value;
    document.getElementById("price").value = x;
}