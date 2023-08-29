const surfSpots = [
    { name: 'Shipstern Bluff', country: 'Australia', img: 'https://4.bp.blogspot.com/-KyfB1YN5sFU/TeR9m6ceYEI/AAAAAAAABME/dH93wrRH75k/w1200-h630-p-k-no-nu/Australias+biggest+surf+breaks.jpg' },
    { name: 'Nazare', country: 'Portugal', img: 'https://images.squarespace-cdn.com/content/v1/53586ae3e4b0c3b862d91325/d8242a5a-17d2-4d86-aeb1-465c0f9ff8e9/nazare-big-waves-scaled.jpg' },
    { name: "Maverick's", country: 'United States', img: 'https://www.adventurekeys.com/wp-content/uploads/2022/06/klein_mavericks_january2017_004617-768x512.jpg' },
    { name: 'Jaws', country: 'United States', img: 'https://www.surfertoday.com/images/stories/laird-hamilton-jaws.jpg' },
]

module.exports = {
    getAll: function () {
        return surfSpots;
    }
}