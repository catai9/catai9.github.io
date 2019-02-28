// When the user clicks on box, opens the popup
$(function(){

    var $interest = $('.popupGrouping').find('li');
    var $popup = $interest.find('.popuptext');
    
    $($interest).on('click', function(){
        $popup.removeClass("show");
        $(event.target).children().toggleClass("show");
    })

});


