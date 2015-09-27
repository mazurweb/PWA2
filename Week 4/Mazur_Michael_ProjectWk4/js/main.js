/**
 * Created by mmazur on 9/25/2015.
 */


$(function() {
    /* Variable Creation */
    var todo_item, formSubmission,
        task = $("#task"),
        error = $(".error");

    /* Item Validation to make sure user entered a task */
    function itemValidation(x, min) {
        if (x.val().length < min) {
            x.addClass("ui-state-error");
            error.append('<p class="error-message">You must enter in a task greater than two characters!</p>');
            return false;
        } else {
            return true;
        }
    }

    /* Add Item Function */
    function addItem() {
        var hasItem = true;
        task.removeClass("ui-state-error");

        hasItem = hasItem && itemValidation(task, 2);

        if (hasItem) {
            $('.tasks').append(
                '<li class="list-item draggable"><input type="checkbox" class="done">' + task.val() +
                '<button id="delete" class="delete ui-button ui-widget"><span class="ui-icon ui-icon-circle-close"></span></button></li>'
            );
            todo_item.dialog("close");
            error.remove();
        } else {
            return hasItem;
        }

    }

    /* Delete Item Function */


    /* Modal Item Variable */
    todo_item = $('#add-todo-item').dialog({
        autoOpen: false,
        height: 250,
        width: 300,
        modal: true,
        buttons: {
            "Add Item to List": addItem,
            Cancel: function () {
                todo_item.dialog("close");
            }
        },
        close: function () {
            formSubmission[0].reset();
            task.removeClass("ui-state-error");
        }
    });

    /* Delete Item Modal */


    /* Form Submission */
    formSubmission = todo_item.find("form").on("submit", function (event) {
        event.preventDefault();
        addItem();
    });

    /*Draggable JQuery */
    $('.draggable').draggable();

    /*Droppable JQuery */
    $('ul.droptrue').sortable({
        connectWith: "ul",
        cursor: 'pointer',
        cancel: '.delete'
    });

    /* Marking Complete */
    $('.tasks').on('click', '.done', function () {
        var taskItem = $(this).parent('li');
        $('.complete').prepend(taskItem);
    });

    /* Marking back to the list */
    $('.complete').on('click', '.done', function () {
        var taskItem = $(this).parent('li');
        $('.tasks').prepend(taskItem);
    });

    /* Delete Item */
    $('.sortlist').on('click', '.delete', function(){
        $(this).parent('li').effect('puff', function () {
            $(this).remove();
        });
    });

    /*Add item button click */
   $('#add-item').button().on("click", function(){
       todo_item.dialog("open");
   });

});