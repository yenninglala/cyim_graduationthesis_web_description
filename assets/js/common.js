$(document).ready(function(){

	// index fullpage
	var myFullpage = new fullpage('#indexFullpage', {
        verticalCentered: false
    });
    // page fullpage
    $('#pageFullpage').fullpage({
		autoScrolling: false,
		fitToSection: false
	});

    // how_we_do tab , article tab
    $('.tab_item').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active')
		$(this).parents('.tab_area')
		.find('.tab_content_block')
		.eq($(this).index())
		.addClass('active')
		.siblings()
		.removeClass('active')
	})

    // header menu bar 
    $(".nav_icon").click(function() {
		$('.nav_list').toggleClass('active');
	});

	// mobile what we do
	$('.mobile_what_we_do_content_area').slick({
		centerMode: true,
		centerPadding: '13%',
		dots: false,
		infinite: false,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	// mobile how we do
	$('.mobile_how_we_do_slider').slick();

	// case study
	$('.case_study_content_block').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1 ,
					arrows: false ,
				}
			}
		]
	});

	// article
	$('.mobile_article_feature_list').slick();
	$('.article_case_study_block').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1 ,
					arrows: false ,
					centerMode: true,
					centerPadding: '13%',
				}
			}
		]
	});

	//mobile menu
	var menuBtn = document.querySelector('.menu-btn');
	var nav = document.querySelector('.mobile_header_nav');
	var lineOne = document.querySelector('.mobile_menu .menu-btn .line--1');
	var lineTwo = document.querySelector('.mobile_menu .menu-btn .line--2');
	var lineThree = document.querySelector('.mobile_menu .menu-btn .line--3');
	var link = document.querySelector('.mobile_header_nav .nav-links');
	menuBtn.addEventListener('click', function() {
	    nav.classList.toggle('nav-open');
	    lineOne.classList.toggle('line-cross');
	    lineTwo.classList.toggle('line-fade-out');
	    lineThree.classList.toggle('line-cross');
	    link.classList.toggle('fade-in');
	})
	
});

// contact us

// $('#contact-form .contact_btn').on('click', e => {
//     document.getElementById('btn-send-mail').click();
//     return;
    
// })

let sendButton = document.querySelector('.contact_btn');
$(".contact_btn").click(function(){
    if($("#nameValue").val()==""){
        alert("你尚未填寫 名稱");
        eval("document.form['nameValue'].focus()");       
    }else if($("#emailValue").val()==""){
        alert("你尚未填寫 電子信箱");
        eval("document.form['emailValue'].focus()");       
    }else if($("#phoneValue").val()==""){
        alert("你尚未填寫 聯絡電話");
        eval("document.form['phoneValue'].focus()");       
    }else if($("#companyValue").val()==""){
        alert("你尚未填寫 公司或單位名稱");
        eval("document.form['companyValue'].focus()");       
    }else if($("#contentValue").val()==""){
        alert("你尚未填寫 聯絡內容");
        eval("document.form['contentValue'].focus()");     
    }else if($("#contentValue").val().length<20){
    	alert("聯絡內容字數要超過20字");
        eval("document.form['contentValue'].focus()");   
    }else{
        send();
        reset();
    }
})

function reset(){
	$('#contact-form')[0].reset();
}

function send() {
	let now = document.querySelector('#nowValue').value;
	let name = document.querySelector('#nameValue').value;
	let email = document.querySelector('#emailValue').value;
	let phone = document.querySelector('#phoneValue').value;
	let company = document.querySelector('#companyValue').value;
	let content = document.querySelector('#contentValue').value;
	$.ajax({
		url: "https://script.google.com/a/larvata.tw/macros/s/AKfycbwZGidpan__z24y7vRnLAjIso8Q8ZNjjPLR44XH/exec",
		data: {
			"now": now,
		    "name": name,
		    "email": email,
		    "phone": phone,
		    "company": company,
		    "content": content
		},
		success: function(response) {
  			if(response == "成功"){
    			alert("成功");
  			}
		},
	});

};






