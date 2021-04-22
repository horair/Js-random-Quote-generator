var quotes = ['“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash',
'“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey',
'“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman',
'“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ― Helen Keller',
'“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates',
'“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt',
'“So. Monday. We meet again. We will never be friends—but maybe we can move past our mutual enmity toward a more-positive partnership.” ― Julio-Alexi Genao',
'“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah',
'“Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.” ― K’wan',
'“If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.” – Vincent Van Gogh'
];



function newQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote").innerHTML = quotes[randomNum];
}
