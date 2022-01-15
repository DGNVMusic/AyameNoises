    let randomInt = Math.floor(Math.random() * 4);
    let audio = new Audio(`/media/sound/${randomInt}.mp3`);
    const text = [
        "eeeeeee. YADA!",
        "unintelligible",
        "*pain*",
        "n~",
        "yada, yada, YADAAA, *crying*"
    ];
    const quote = document.getElementById("quote")
    audio.play();
    quote.innerHTML = "&#8220; " + text[randomInt] + " &#8221;";