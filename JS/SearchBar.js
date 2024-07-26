function searchFunction() {
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var people = document.getElementById("people").value;
    var searchText = document.getElementById("search").value;

    console.log(date, time, people, searchText);

    // Ελέγχουμε αν όλα τα πεδία έχουν συμπληρωθεί και αν η τιμή του πεδίου αναζήτησης είναι "ForRestaurants1"
    if (date && time && people && searchText === "ForRestaurants1") {
        // Μεταφέρουμε τον χρήστη στη σελίδα ForRestaurants1.html
        window.location.href = "ForRestaurants1.html";

    }
}
