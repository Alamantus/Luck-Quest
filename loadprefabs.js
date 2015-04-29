//#region Card Prefab
var pr_Card = OS.P.Add("Card", 0, 0, "debug_card.png", "debug_card.png");

pr_Card.dragOffset = { x: 0, y: 0 }
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
    }

    if (this.Clicked(OS.mouse.left)) {
        this.isDragging = true;
        this.x = OS.mouse.x + this.dragOffset.x;
        this.y = OS.mouse.y + this.dragOffset.y;
    }

    if (OS.mouse.leftUp) {
        this.isDragging = false;
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
//#endregion

//#region Die Prefab
var ani_dieRoll = OS.A.Add("Roll Die", 150, 150, 6, 1, 0.075, 0, 0);
var ani_die1 = OS.A.Add("Die Side 1", 150, 150, 1, 1, 0, 150 * 0, 0);
var ani_die2 = OS.A.Add("Die Side 2", 150, 150, 1, 1, 0, 150 * 1, 0);
var ani_die3 = OS.A.Add("Die Side 3", 150, 150, 1, 1, 0, 150 * 2, 0);
var ani_die4 = OS.A.Add("Die Side 4", 150, 150, 1, 1, 0, 150 * 3, 0);
var ani_die5 = OS.A.Add("Die Side 5", 150, 150, 1, 1, 0, 150 * 4, 0);
var ani_die6 = OS.A.Add("Die Side 6", 150, 150, 1, 1, 0, 150 * 5, 0);

var pr_Die = OS.P.Add("Die", 0, 0, "images/sheet_die.png", "images/mask_die.png", [ani_dieRoll, ani_die1, ani_die2, ani_die3, ani_die4, ani_die5, ani_die6]);
pr_Die.solid = true;

pr_Die.hasRolled = false;
pr_Die.isRolling = false;
pr_Die.rollTime = 0;
pr_Die.speed = 0;
pr_Die.forward = { x: Math.getCos(0), y: Math.getSin(0) };

pr_Die.side = 0;

pr_Die.DoRoll = function ()
{
    this.hasRolled = true;
    this.rollTime = Math.randomRange(1, 3) / OS.S.defaultStep;
    
    this.speed = Math.randomRange(2, 5);
    this.forward.x = Math.getCos(Math.randomRange(0, 364));
    this.forward.y = Math.getSin(Math.randomRange(0, 364));
}
pr_Die.CheckRoll = function ()
{
    if (this.rollTime > 0)
    {
        this.isRolling = true;
        this.rollTime--;
    }
    if (this.rollTime <= 0)
    {
        if (this.isRolling == true)
        {
            this.FinishRoll();
        }
        this.isRolling = false;
    }
    
    if (Math.abs(this.speed) > 0)
    {
        this.speed -= this.speed * OS.S.defaultStep;
    }
}
pr_Die.FinishRoll = function ()
{
    this.side = Math.round(Math.randomRange(1, 6));
    //console.log(this.side);
}

pr_Die.ResetRoll = function ()
{
    this.hasRolled = false;
    this.isRolling = false;
    this.rollTime = 0;
    this.speed = 0;
    this.forward = { x: Math.getCos(0), y: Math.getSin(0) };
    this.SetImageRotation(0);
    this.side = 0;
}

pr_Die.SetSideImage = function ()
{
    var animationName = "Die Side ";
    if (this.side == 0)
    {
        animationName = "Roll Die";
    }
    else
    {
        animationName += this.side.toString();
    }
    
    if (this.image.currentAnimation != animationName)
    {
        this.SetAnimation(animationName);
        //console.log(this.image.currentAnimation);
    }
}

pr_Die.KeepInsideCamera = function ()
{
    if (this.x < OS.camera.x + OS.camera.hBorder || this.x > OS.camera.x + OS.camera.width - OS.camera.hBorder)
    {
        this.forward.x *= -1;
    }
    if (this.y < OS.camera.y + OS.camera.vBorder || this.y > OS.camera.y + OS.camera.height - OS.camera.vBorder)
    {
        this.forward.y *= -1;
    }
}

pr_Die.DoFirst = function ()
{
    this.ResetRoll();
}
pr_Die.BeforeDo = function ()
{
    this.CheckRoll();
    this.KeepInsideCamera();
}

pr_Die.Do = function ()
{
    if (this.Clicked(OS.mouse.rightDown))
    {
        this.ResetRoll();
    }
    
    if (!this.hasRolled)
    {
        if (this.Clicked(OS.mouse.leftDown))
        {
            this.DoRoll();
        }
    }
    if (this.isRolling)
    {
        this.RotateImage(this.speed * 2);
    }
    
    this.SimpleMove(this.speed * this.forward.x, this.speed * this.forward.y);
}

pr_Die.AfterDo = function ()
{
    this.SetSideImage();
}
//#endregion

function loadprefabs() {

}