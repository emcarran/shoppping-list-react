//var html = '<div class="freeze"></div>' +
//'<div class="parent">' +
//'<div class="loadimg"></div>' +
//'<div class="header"></div>' +
//'<div class="msg"></div>' +
//'</div>';
//$(document.body).append(html);

function addItems() {
    //alert('add items upon clicking submit');
    var itemValue = $('#add-items').val();
    //alert(itemValue);
    if (itemValue.length == 0) {
        alert('you must enter a value');
    } else {


        // alert('the value is greater than 1');

        var line1 = '<li class="items">';
        var line2 = '<div class="checkbox"></div>';
        var line3 = '<span> ' + itemValue + '</span>';
        var line4 = '<img class="delete-box" src="trash-can-web-icon_small.jpg">';
        var line5 = '</li>';


        var html = line1 + line2 + line3 + line4 + line5;
        $('#list').append(html);
    }
}

function tickItem() {
    //alert("I've just activated the tickItem() function");
    $(this).toggleClass('ticked');
}

function deleteItem() {
    console.log("deleteItem clicked");
    //alert("I've just activated the deleteItem() function");

    //$(this).parent().remove();
    var itemToBeDeleted = $(this).parent();

    setTimeout(function () {
        console.log("remove item in setTimeout function");
        // $(this).parent().remove();
        $(itemToBeDeleted).remove();
    }, 1000);
}

$(document).ready(function () {

    //add list items

    $('#submit').on('click', function () {
        addItems();
    });

    //add item on enter

    $('#add-items').keypress(function (event) {
        if (event.which == 13) {
            addItems();
            $(this).val("");
        }
    });

});

// $('.delete-box').on('click', '.hide');

$(document).on('click', '.delete-box', deleteItem);

$(document).on('click', '.checkbox', tickItem);
