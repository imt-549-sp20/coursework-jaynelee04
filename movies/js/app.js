function renderMovies(movie_list) {
    // sort the movie_list by sales descending
    var tbody = document.querySelector(".movies tbody");
    movie_list.sort(function(record1, record2){
        return record2.revenue - record1.revenue
    });
    
    var tbody = document.querySelector(".movies tbody");
    tbody.textContent = "";

    // for each movie
    for (var i = 0; i < movie_list.length; i++){
        // render the movie row
       var row = renderMovie(movie_list [i]);
        //append it to the table
        tbody.appendChild(row);
    }
}

function renderMovie(movie) {
    var tr = document.createElement("tr");

    //create and append the <td> elements
    tr.appendChild(renderMovieProp(movie.title, true));
    tr.appendChild(renderMovieProp(movie.revenue));
    tr.appendChild(renderMovieProp(movie.rating));

    //return the table row itself
    return tr;

}

function renderMovieProp(content, nonNumeric) {

        //create the new <td> element
        var td = document.createElement("td");
    
        //set its text content to the provided value
        td.textContent = content;
    
        //if it should be formatted as numeric...
        if (nonNumeric) {
            //add the "numeric" style class
            td.classList.add("non-numeric");
        }
    
        //return the new element to the caller
        return td;
    }
var searchInput = document.getElementById("movie-filter");

function isMovieFound(movie) {
    // get the user input
     var userInput = searchInput.values;
    // make the input title tower case
    var lowercaseUserInput = userInput.toLowerCase();
    //Make the movie title lowercase
    var lowercaseTitle = movie.title.toLowerCase();
    // check if the user input is in the lowercase movie title
    if (lowercaseTitle.indexOf(lowercaseUserInput)>= 0){
        return true;
    } else {
        return false;
    }
}

    // listen for when a user types in the filter field
searchInput.addEventListener("input", function (){


    //find any movies that match the user input
    var filtered_movies = MOVIES.filter (isMovieFound)
    console.log(filtered_movies);
    //update the movie table with the new list
    renderMovies (filtered_movies);
});


    

