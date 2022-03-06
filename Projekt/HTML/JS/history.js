$('.infobox').each(function() {
    var $this = $(this);

    $this.click(function() {
        $this.toggleClass("big");
        $this.children(".flex").children(".arrow").toggleClass("rotate");
    });
});


$(document).ready(function() {
    $('.box:first').toggleClass("bigger");
    $('.box:first').children().fadeToggle();
    $('.infobox:first').toggleClass("big");
    $('.infobox:first').children(".flex").children(".arrow").toggleClass("rotate");
})

$('.box').each(function() {
    var x = $(this);
    x.children().hide();

    function active() {
        var y = $('.bigger');
        y.toggleClass('bigger');
        y.children().fadeToggle();
    }

    x.click(function() {
        if (!$(this).hasClass("bigger"))
        {
            active();
        }
        x.toggleClass("bigger");
        x.children().fadeToggle();
    });
});

    






