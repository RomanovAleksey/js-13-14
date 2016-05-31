'use strict'

var data = {
		title : 'Тест по программированию',
		button : 'Проверить мои результаты',
		question : [
			{
				title : '1. Вопрос №1',
				answers : [
					{
						title : 'Вариант ответа №1'
					},
					{
						title : 'Вариант ответа №2'
					},
					{
						title : 'Вариант ответа №3'
					}
				]
			},
			{
				title : '2. Вопрос №2',
				answers : [
					{
						title : 'Вариант ответа №1'
					},
					{
						title : 'Вариант ответа №2'
					},
					{
						title : 'Вариант ответа №3'
					}
				]
			},
			{
				title : '3. Вопрос №3',
				answers : [
					{
						title : 'Вариант ответа №1'
					},
					{
						title : 'Вариант ответа №2'
					},
					{
						title : 'Вариант ответа №3'
					}
				]
			}
		]
	};

localStorage.setItem('dataTest', JSON.stringify(data));
var dataLoc = localStorage.getItem('dataTest');


$(function(){
	var html = $('#test').html();
	dataLoc = JSON.parse(dataLoc);

	var content = tmpl(html,{
		data:dataLoc
		});

	$('body').append(content);
});
$(".modal_test").fadeOut();
$(window).ready(function(){
	$('.btn').on('click', function(){

		var ansArr = [];

		$("input:checked").each(function(indx, element){
		  ansArr.push($(element).attr('id'));
		});

	if(ansArr[0] == 'answer_1_1' && ansArr[1] == 'answer_2_1' && ansArr[2] == 'answer_3_1'){
        $(function(){
        	$(".modal_test").fadeIn();
        	$('.modal_test h3').text('Тест пройден!!');
        })       
    }else{
        $(function(){
        	$(".modal_test").fadeIn();
        	$('.modal_test h3').text('Тест НЕ пройден!!');
        })
    }
    $('.btn_test').on('click',function(){
        	$('.modal_test').fadeOut();
        	$("input:checked").prop('checked', false);
        })

		console.log(ansArr);
		console.log(trueAnswer);
	})
})

