/**
 * Created by Mikemaz2005 on 9/10/2015.
 */
/*Initiate script on load */
$(document).ready(function(){

    /* Drop Down Menu JQuery */
    $('.menu > li').on('mouseover', openSubMenu);           // On mouse over/hover the sub menu will open
    $('.menu > li').on('mouseout', closeSubMenu);           // On mouse out the sub menu will disappear

    function openSubMenu(){                                 //This is the function to open the submenu
        $(this).find('ul').css('visibility','visible');
    }

    function closeSubMenu(){                                //This is the function to close the submenu
        $(this).find('ul').css('visibility','hidden');
    }

    // End of Drop Down JQuery

    //Begin Modal JQuery
    $('.modalClick').on('click', function(e){
        e.preventDefault();
        $('#overlay')
            .fadeIn()
            .find('#popup')
            .fadeIn();
    });

    $('.close').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#popup')
            .fadeOut();
    });


    //End Modal JQuery


    //Begin Tooltip JQuery
    $('.masterToolTip').hover(function(){
       var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e){
        var mousex = e.pageX + 20;
        var mousey = e.pageY + 10;
        $('.tooltip')
            .css({top: mousey, left: mousex})
    });
});

    //Begin Tabs JQuery
    $('#tabs p').hide().eq(0).show();

    $('#tabs-nav li').click(function(e){
        e.preventDefault();
        $('#tabs p').hide();

        $('#tabs-nav .current').removeClass("current");
            $(this).addClass('current');
                var clicked = $(this).find('a:first').attr('href');
                    $('#tabs ' + clicked).fadeIn('fast');
    }).eq(0).addClass('current');


