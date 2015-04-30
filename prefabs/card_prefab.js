var ani_card = OS.A.Add("Default Card", 48, 64, 1, 1, 0, 0, 0);
var pr_Card = OS.P.Add("Card", 0, 0, "images/debug_card.png", "images/debug_card.png", [ani_card]);

pr_Card.dragOffset = { x: 0, y: 0 }
pr_Card.isSelected = false;
pr_Card.isDragging = false;

pr_Card.cardDetails = { type: "none" }

pr_Card.ShowDetails = function () {
    var detailsString = "";

    detailsString += "Card Type: " + this.cardType;
}

pr_Card.Drag = function () {
    this.isDragging = false;

    if (this.Clicked(OS.mouse.leftDown)) {
        this.dragOffset.x = this.x - OS.mouse.x;
        this.dragOffset.y = this.y - OS.mouse.y;
        this.isSelected = true;
    }

    if (this.Clicked(OS.mouse.left) && this.isSelected) {
        this.isDragging = true;
        this.x = OS.mouse.x + this.dragOffset.x;
        this.y = OS.mouse.y + this.dragOffset.y;
    }

    if (OS.mouse.leftUp) {
        this.isDragging = false;
        this.isSelected = false;
    }
}

pr_Card.IfOverlappingThenMove = function () {
	var overlappingObject = this.IsOverlapping();
	
	if (overlappingObject != false)
	{
		if (this.x < overlappingObject.x)
		this.x--;
		if (this.x >= overlappingObject.x)
			this.x++;
		if (this.y < overlappingObject.y)
			this.y--;
		if (this.y >= overlappingObject.y)
			this.y++;
	}
}

pr_Card.Click = function () {
    if (!this.isDragging)
    {
        if (this.Clicked(OS.mouse.leftDown))
        {

        }
    }
}


pr_Card.Do = function () {
    this.Drag();
    this.Click();
}
pr_Card.AfterDo = function () {
	this.IfOverlappingThenMove();
	this.KeepInsideRoom();
}

function card_prefab () {}