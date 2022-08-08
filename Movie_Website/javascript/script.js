const Movie1 = {
  Name: "Avengers: Endgame",
  image: "./images/Movie1/Movie_1(EndGame).png",
  genre: "Action,Adventure,Drama,Sci-fi",
  desc: "After the devastating events of Avengers: Infinity War (2018),the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  actor: [
    [
      "./images/Movie1/Movie1_Actor_1.jpg",
      "Name: Chris Hemsworth",
      "Role Played: Thor",
    ],
    [
      "./images/Movie1/Movie1_Actor_2.png",
      "Name:Robert Downey Jr.",
      "Role Played: Iron Man",
    ],
    [
      "./images/Movie1/movie_1_actor_3.jpg",
      "Name: Chris Evans",
      "Role Played: Captain America",
    ],
    [
      "./images/Movie1/movie_1_actor_4.jpg",
      "JName: Jeremy Renner",
      "Role Played: Clint Barton",
    ],
  ],
};

const Movie2 = {
  Name: "Shang-Chi and the Legend of the Ten Rings",
  image: "./images/Movie2/Movie_2(Shang_Chi_Legend_of_ten_rings).jpg",
  genre: "Action,Adventure,Drama,Fantasy",
  desc: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.There are two charismatic heroes with Simu Liu as the eponymous Shang-Chi...",
  actor: [
    [
      "./images/Movie2/Movie_2_Actor_1.jpg",
      "Name: Simu Liu",
      "Role Played: Shang-Chi",
    ],
    [
      "./images/Movie2/Movie_2_Actor_2.jpg",
      "Name: Tony Leung",
      "Role Played: Chiu-wai",
    ],
    [
      "./images/Movie2/movie_2_actor_3.jpg",
      "Name: Awkwafina",
      "Role Played: Katy",
    ],
    [
      "./images/Movie2/movie_2_actor_4.jpg",
      "JName: Jeremy Renner",
      "Role Played: Clint Barton",
    ],
  ],
};

//Movie 1
var img = document.createElement('img');
img.src = Movie1.image;
document.getElementById('movieImg').appendChild(img);

const genre = Movie1.genre.toString().split(",");
for (let i = 0; i < genre.length; i++) {
  const p = document.createElement("p");
  p.innerText = genre[i];
  p.className = "tag";
  document.getElementById("genre").appendChild(p);
}

document.getElementById("description").innerText = Movie1.desc;

for (let j = 0; j < Movie1.actor.length; j++) {
  var div = document.createElement("div");
  div.innerHTML =
    '<div class="character">' +
    '<img src= "' +
    Movie1.actor[j][0] +
    '"/>' +
    '<div class="characterDesc" >' +
    "<p>" +
    Movie1.actor[j][1] +
    "</p>" +
    "<p>" +
    Movie1.actor[j][2] +
    "</p>" +
    "</div>" +
    "</div>";
  document.getElementById("actors").appendChild(div);
}

//MOvie 2
var img = document.createElement('img');
img.src = Movie1.image;
document.getElementById('movieImg_1').appendChild(img);

const genre_1 = Movie2.genre.toString().split(",");
for (let i = 0; i < genre_1.length; i++) {
  const p = document.createElement("p");
  p.innerText = genre_1[i];
  p.className = "tag";
  document.getElementById("genre1").appendChild(p);
}

document.getElementById("description_1").innerText = Movie2.desc;

for (let j = 0; j < Movie2.actor.length; j++) {
  var div = document.createElement("div");
  div.innerHTML =
    '<div class="character">' +
    '<img src= "' +
    Movie2.actor[j][0] +
    '"/>' +
    '<div class="characterDesc" >' +
    "<p>" +
    Movie2.actor[j][1] +
    "</p>" +
    "<p>" +
    Movie2.actor[j][2] +
    "</p>" +
    "</div>" +
    "</div>";
  document.getElementById("actors_1").appendChild(div);
}
