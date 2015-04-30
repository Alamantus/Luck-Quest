// rm_TitleScreen

function default_room () {
	rm_TitleScreen.dice = [];
    
    var die;
    for (var i = 0; i < 50; i++)
    {
        die = rm_TitleScreen.AddObject(pr_Die);
        die.x = Math.randomRange(OS.camera.hBorder + 5, OS.camera.width - OS.camera.hBorder - 5);
        die.y = Math.randomRange(OS.camera.vBorder + 5, OS.camera.height - OS.camera.vBorder - 5);
        rm_TitleScreen.dice.push(die);
    }
    
    rm_TitleScreen.Do = function ()
    {
        for (var i = 0; i < this.dice.length; i++)
        {
            if (ax_roll.direction > 0)
            {
                if (!this.dice[i].hasRolled)
                    this.dice[i].DoRoll();
            }
            else if (ax_roll.direction < 0)
                this.dice[i].ResetRoll();
        }
    }
	
	/* var card;
    for (var i = 0; i < 2; i++)
    {
        card = rm_TitleScreen.AddObject(pr_Card);
        card.x = Math.randomRange(OS.camera.hBorder + 5, OS.camera.width - OS.camera.hBorder - 5);
        card.y = Math.randomRange(OS.camera.vBorder + 5, OS.camera.height - OS.camera.vBorder - 5);
    } */
    
    // Redundant set room call to initiate the Start event after the objects are added.
    OS.SetRoom(rm_TitleScreen);
}