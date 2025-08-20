// Array med hobbyer, tekstbeskrivelse og bilder

const hobbies = [
  {
    navn: "Matlaging",
    emoji: "🍳",
    beskrivelse:
      "Utforsk matens magi og prøv nye oppskrifter, enten du baker, steker eller eksperimenterer med smaker.",
    bilde:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    navn: "Løping",
    emoji: "🏃‍♂️",
    beskrivelse:
      "Hold deg i form, få frisk luft og utfordre deg selv med forskjellige løperuter.",
    bilde:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    navn: "Gaming",
    emoji: "🎮",
    beskrivelse:
      "Bli med i virtuelle verdener, konkurrer eller samarbeid med andre spillere på nett.",
    bilde:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
  },
  {
    navn: "Lesing",
    emoji: "📚",
    beskrivelse:
      "Fordyp deg i bøker, utvikle språk og fantasi, enten du liker romaner, fakta eller tegneserier.",
    bilde:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    navn: "Fotografering",
    emoji: "📸",
    beskrivelse:
      "Fang øyeblikk og uttrykk kreativitet gjennom bilder – mobilkamera eller profesjonelt utstyr.",
    bilde:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    navn: "Tegning",
    emoji: "🎨",
    beskrivelse:
      "Lag din egen kunst med blyant, tusj eller digitale verktøy og slipp fantasien fri.",
    bilde:
      "https://images.unsplash.com/photo-1608804375369-498a4b601e42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    navn: "Hagearbeid",
    emoji: "🌱",
    beskrivelse:
      "Se ting gro! Plant blomster, urter eller grønnsaker – perfekt for mental avkobling.",
    bilde:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhcmRlbmluZ3xlbnwwfHwwfHx8MA%3D%3D=",
  },
];

// Fyller dropdown med hobbyer:<option>tag for hver hobby som legges i <select>elementet;
// henter og opretter elementer i DOM (getElementById,createElement,appendChild)

const hobbySelect = document.getElementById("hobbySelect");
hobbies.forEach((hobby, idx) => {
  const option = document.createElement("option");
  option.value = idx;
  option.textContent = hobby.emoji + " " + hobby.navn;
  hobbySelect.appendChild(option);
});

// Funksjonen henter valgt hobby,innholdet oppdateres i "hobbyInfo";
// "getElementById" henter elementet; "innerHtml" endrer innholdet

function visHobby() {
  const valgtIdx = hobbySelect.value;
  const hobby = hobbies[valgtIdx];
  const hobbyInfo = document.getElementById("hobbyInfo");
  hobbyInfo.innerHTML = `
    <strong>${hobby.emoji} ${hobby.navn}</strong>
    <p>${hobby.beskrivelse}</p>
    <img src="${hobby.bilde}" alt="Bilde av hobby: ${hobby.navn}" class="hobby-bilde">`;
}

// Ved klikk på "visBtn" kjøres "visHobby()" og DOM oppdateres med ny info
// "addEventListener" kobler JS til DOM-events
// "window.onload": ved innlasting vises første hobby i listen, DOM-instrukser kjøres

document.getElementById("visBtn").addEventListener("click", visHobby);
window.onload = visHobby;
