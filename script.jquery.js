$(function () {

	//https://jsfiddle.net/7uxyrrkv/623/
    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');
    });

});