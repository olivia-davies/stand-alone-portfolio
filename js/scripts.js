// YOUR SCRIPTS GO HERE

$('figure').lightGallery({
    thumbnail: true
});

$('#caption').lightGallery({
    subHtmlSelectorRelative: true
});


//$(function () {
//        $("#bio").typed({
//            stringsElement: document.getElementsById('#bio'),
//            typeSpeed: 30
//        });
//    });

$(function () {
        Typed.new('#typed', {
            stringsElement: document.getElementById('bio')
        });
    });