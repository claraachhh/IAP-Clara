$('#search-button').on('click', function () {
    $.ajax({
        url: 'https://omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'b7bc50d1',
            's': $('#search-input').val()
        },
        success: function (result) {
            console.log(result);
        }
    });
});
