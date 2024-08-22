/*== jQuery==*/
$(document).ready(function(){

	// // exp 1
	// $('button').click(function(){
	// 	 alert("welcome");
	// });

	// exp-1
	$('#btn1').on('click', function (){
		alert('welcome');
	});

	// exp-2
    $('#btn2').on('click', function(){
        $('#hide_text').hide();
    });

	// exp-3
    $('#hide_show_btn').on('click', function(){
        $('#show_text').hide();
    });

    $('#show_btn').on('click', function(){
       $('#show_text').show();
    });

    // emp-4
    $('#hide_show_btn_click').on('click', function(){
        $('#show_text_dbl').hide();
    });

    $('#show_btn_click').on('click', function(){
        $('#show_text_dbl').show();
    });

    // emp-5
    $('#hide_show_btn_dbl').on('dblclick', function(){
        $('#show_text_dbl').hide();
    });

    $('#show_btn_dbl').on('dblclick', function(){
        $('#show_text_dbl').show();
    });

    // exp-6
    $('#hide_show_btn_mouseover').on('mouseover', function(){
        $('#show_text_mouseover').hide();
    });

    $('#show_btn_mouseover').on('mouseover', function(){
        $('#show_text_mouseover').show();
    });

    // exp-7
     $('#btn_toggle').on('click', function(){
        $(#toggle_text).toggle();
    });

    // exp-8
     $('p').on('click', function(){
        $(this).hide();
    });

    // exp-9
    $("#fadeIn_btn").on("click", function(){
         $('#fadeIn').fadeIn();
    });












    });