class form {
    constructor() {

    }

    display() {
        var title = createElement("h2")
        title.html("Car Racing Game");
        title.position(390, 0);

        var input = createInput("Name");
        var button = createButton("Play");

        var greeting = createElement("h3");
        input.position(380, 240);
        button.position(440, 200);

        button.mousePressed(function () {
            input.hide();
            button.hide();

            var name = input.val();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello "+ name);
            greeting.position(400,260);

        })

    }
}
