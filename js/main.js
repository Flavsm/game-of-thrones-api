//Example fetch using pokemonapi.co
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getFetch();
  }
});

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const charNum = {
    daenerys: 0,
    danny: 0,
    samwell: 1,
    sam: 1,
    jon: 2,
    arya: 3,
    sansa: 4,
    brandon: 5,
    ned: 6,
    robert: 7,
    jamie: 8,
    cersei: 9,
    catelyn: 10,
    robb: 11,
    theon: 12,
    joffrey: 13,
    tyrion: 14,
    sandor: 15,
    petyr: 16,
    littlefinger: 16,
    davos: 17,
    stannis: 18,
    varys: 19,
    khal: 20,
    margaery: 21,
    ygritte: 22,
    brienne: 23,
    missandei: 24,
    gilly: 25,
    viserys: 26,
    rickon: 27,
    roose: 28,
    daario: 29,
    shae: 30,
    tommen: 31,
    gendry: 32,
    jorah: 33,
    ramsey: 35,
    talisa: 36,
    jeor: 37,
    "high sparrow": 38,
    "the high sparrow": 38,
    sparrow: 38,
    oberyn: 39,
    melisandre: 40,
    jaqen: 41,
    tywin: 42,
    ellaria: 43,
    tormund: 44,
    yara: 45,
    euron: 46,
    hodor: 47,
    wylis: 47,
    pycelle: 48,
    "grey worm": 49,
    olenna: 50,
  };

  const url = `https://thronesapi.com/api/v2/characters/${charNum[choice]}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.querySelector(".fullName").innerText = data.fullName;
      document.querySelector(".family").innerText = data.family;
      document.querySelector(".title").innerText = data.title;
      document.querySelector("img").src = data.imageUrl;
    })
    .catch((err) => {
      console.log(`error ${err}`);
      alert(
        "Sorry, couldn't find that character. Try a different one or check your spelling."
      );
    });
}
