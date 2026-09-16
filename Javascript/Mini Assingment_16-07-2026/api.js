const API_URL =
    "https://api.tvmaze.com/search/shows?q=";


// Search API

export async function searchMovies(searchText) {

    try {

        if (!searchText.trim()) {

            throw new Error(
                "Please enter a movie name"
            );

        }


        const response = await fetch(
            API_URL + encodeURIComponent(searchText)
        );


        if (!response.ok) {

            throw new Error(
                "API request failed"
            );

        }


        const data = await response.json();


        if (data.length === 0) {

            throw new Error(
                "No movies found"
            );

        }


        return data;


    } catch (error) {

        throw error;

    }

}