$('.has-sub').on('click', function(e) { // Get all dropdown menu toggles
    $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide all other dropdown menus
    $('.has-sub').not($(this)).removeClass('active'); // Remove the active selector from the other dropdown toggles
    $(this).children('.dropdown-menu').toggleClass('dropdown-shown'); // Show/hide the dropdown menu associated with the toggle being clicked
    $(this).toggleClass('active'); // Toggle the active selector on the nav-item
});
// Show dropdown when clicked
// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('active');
    $('.nav-btn').toggleClass('active');
});

// Hide menu after clicking menu item
$('.dropdown-menu li').on('click', function(e) {
     $('#heaeder-menu').removeClass('active');
     $('.nav-btn').removeClass('active');
});
