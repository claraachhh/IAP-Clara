function searchMovie() {
    $.ajax({
        url: 'https://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'b7bc50d1',
            's': $('#search-input').val().trim()
        },
        success: function (result) {
            if (result.Response === "True") {
                let movie = result.Search;
                $('#movie-list').html('');

                $.each(movie, function (i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
                                <div class="card-body">
                                    <h5 class="card-title">${data.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                                    <a href="#" class="btn btn-primary see-detail" data-id="${data.imdbID}" data-toggle="modal" data-target="#exampleModal">See Details</a>
                                </div>
                            </div>
                        </div>
                    `);
                });

                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">${result.Error}</h1>
                    </div>
                `);
            }
        },
        error: function () {
            $('#movie-list').html(`
                <div class="col">
                    <h1 class="text-center text-danger">Terjadi kesalahan saat memuat data</h1>
                </div>
            `);
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
});


$('#movie-list').on('click', '.see-detail', function () {
  const imdbID = $(this).data('id');

  $.ajax({
    url: 'https://www.omdbapi.com/',
    dataType: 'json',
    type: 'get',
    data: {
      'apikey': 'b7bc50d1',
      'i': imdbID
    },
    success: function (movie) {
      if (movie.Response === "True") {
        $('#exampleModalLabel').html(movie.Title);

        $('.modal-body').html(`
          <div class="row">
            <div class="col-md-4">
              <img src="${movie.Poster}" class="img-fluid" alt="${movie.Title}">
            </div>
            <div class="col-md-8">
              <ul class="list-group">
                <li class="list-group-item"><strong>Title :</strong> ${movie.Title}</li>
                <li class="list-group-item"><strong>Released :</strong> ${movie.Released}</li>
                <li class="list-group-item"><strong>Genre :</strong> ${movie.Genre}</li>
                <li class="list-group-item"><strong>Director :</strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Actors :</strong> ${movie.Actors}</li>
                <li class="list-group-item"><strong>Plot :</strong> ${movie.Plot}</li>
              </ul>
            </div>
          </div>
        `);
      }
    }
  });
});
