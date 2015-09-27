/**
 * Created by mmazur on 9/23/2015.
 */
$(function() {
    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function (dateText, inst) {
            $("input[name='date']").val(dateText);
        }
    });
    $(".draggable").draggable({revert: true});
    $("#droppable").droppable({
        drop: function( event, ui) {
            $("#dialog-confirm").dialog({
                resizable: false,
                height: 250,
                modal: true,
                buttons: {
                    "Add to Cart": function(){
                        $(this).dialog("close");
                    },
                    "Cancel": function(){
                        $(this).dialog("close");
                    }
                }
            }).css("visibility", "initial");
        }
    });
    $("#accordion").accordion();
});

