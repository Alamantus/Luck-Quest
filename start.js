OS.S.defaultStep = 1 / 120;
OS.S.SetCamera(500, 500);

var Game = {};
G = Game;
G.player = {
    HP: 10,
    maxHP: 10,
    attack: 1,
    defense: 1,
    skill : ""
};

G.Skills = {};
G.S = G.Skills;

function start()
{
    OS.AddScript("loadprefabs.js");
    OS.AddScript("loadrooms.js");
}