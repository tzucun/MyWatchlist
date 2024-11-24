function addToWatchlist(movieId) {
    // Kirim permintaan ke server
    fetch('/add-to-watchlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('You must be logged in to add movies to your watchlist.');
        }
        return response.json();
    })
    .then((data) => {
        alert(data.message); // Tampilkan pesan sukses
    })
    .catch((error) => {
        console.error(error);
        alert(error.message); // Tampilkan pesan error
    });
}
