// NAVBAR ACTIVE
$('#sidebarMenu .nav-item a').on('click', function (e) {
    e.preventDefault();
    $('#sidebarMenu .nav-item a').removeClass('active');
    $(this).addClass('active');
    $("#sidebarMenu").collapse('hide');
})
