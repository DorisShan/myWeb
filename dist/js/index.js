
$('.skill_logo span').on('mouseenter', function (e) {
    console.log(e);
    var id = $(e.target).attr('data-id');
    $('.skill_active').toggleClass('skill_active');
    $('#' + id).toggleClass('skill_active');
})











