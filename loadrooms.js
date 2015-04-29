var rm_TitleScreen = new OS.R.Add("Default", OS.camera.width, OS.camera.height, "");
var rm_GameBoard = new OS.R.Add("Game Board", 2000, OS.camera.height, "");

function loadrooms() {
    // var card;
    // card = rm_TitleScreen.AddObject(pr_Card);
    // card.x = rm_TitleScreen.width / 2;
    // card.y = rm_TitleScreen.height / 2;
    
    var die;
    for (var i = 0; i < 2; i++)
    {
        die = rm_TitleScreen.AddObject(pr_Die);
        die.x = Math.randomRange(OS.camera.hBorder + 5, OS.camera.width - OS.camera.hBorder - 5);
        die.y = Math.randomRange(OS.camera.vBorder + 5, OS.camera.height - OS.camera.vBorder - 5);
    }
    
    OS.SetRoom(rm_TitleScreen);
}