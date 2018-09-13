/*(function (){
    $(init);    

    function init () {
        var searchByTitleFld = $("#searchByTitleFld");
        var searchByTitleBtn = $("#searchByTitleBtn");

        searchByTitleBtn.click(searchByTitle);

        function searchByTitle () {
            var movieTitle = searchByTitleFld.val();

            var url = "http://www.omdbapi.com/?s="+movieTitle+"&apikey=4a1cb752";
            $.ajax({
                url: url,
                success: renderMovies,
                error: function (){
                    alert("oops");
                }
            });
        }

        function renderMovies(response){
            var table = $("<table>");
            table.addClass("table");

            for(var m in response.Search){
                var movie = response.Search[m];
                var tr = $("<tr>");
                var td = $("<td>");
                td.append(movie.Title);
                tr.append(td);

                var img = $("<img>");
                img.attr("src", movie.Poster);

                td = $("<td>");
                td.append(img);
                tr.append(td);

                table.append(tr);
            }

            $("#searchResults").append(table);
        }

    }

    <div class="container-fluid">
        <h1>OMDB</h1>
        <h2>Search By Title</h2>
        <input placeholder="Ievadi filmas nosaukumu" id="searchByTitleFld" class="form-control">
        <button id="searchByTitleBtn" class="btn btn-block btn-primary">Search</button>

        <div id="searchResults">            
        </div>
    </div>

})();*/

function apiCall() {

    var moviesID = ['tt0109830', 'tt0468569', 'tt0137523', 'tt1375666'];
    moviesID.sort();

    var filmas = moviesID;
    $.each(filmas, function (i, value) { 

        address = "http://www.omdbapi.com/?i=" + filmas[i] + "&apikey=4a1cb752";

        $.get(address, function (response) {

            var movie = ".movie" + i; 
            var title = response.Title;
            var language = response.Language;
            var genre = response.Genre;
            var poster = response.Poster;


            $(movie + " h3").append(title);
            console.log(response); 
            $(movie + " .language").append("Valoda: " + language);
            $(movie + " .genre").append("Žanrs: " + genre);
            $(movie + " .poster-frame").append('<img src="' + poster + '">');          
            
        });                
    });     
};

apiCall();


/* cookies */

if($('.cookie-banner').length) {
    $('.cookie-banner').slideDown(800);
}
$('.button').click(function () {
    Cookies.set('cookieCheck', '1', { expires: 1, path: '' });
      $('#banner').hide();
  });
