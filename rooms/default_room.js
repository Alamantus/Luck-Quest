function default_room () {
	var die;
    for (var i = 0; i < 2; i++)
    {
        die = rm_TitleScreen.AddObject(pr_Die);
        die.x = Math.randomRange(OS.camera.hBorder + 5, OS.camera.width - OS.camera.hBorder - 5);
        die.y = Math.randomRange(OS.camera.vBorder + 5, OS.camera.height - OS.camera.vBorder - 5);
    }
	
	var card;
    for (var i = 0; i < 2; i++)
    {
        card = rm_TitleScreen.AddObject(pr_Card);
        card.x = Math.randomRange(OS.camera.hBorder + 5, OS.camera.width - OS.camera.hBorder - 5);
        card.y = Math.randomRange(OS.camera.vBorder + 5, OS.camera.height - OS.camera.vBorder - 5);
    }
}