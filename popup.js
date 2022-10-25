    const text = [
        "Eeeeeee.YADA!",
        "Yo Dayo",
        "Banana",
        "Ojou Giggles",
        "最近、寒くなってきたな!",
        "Docchi Docchi",
        "Daijoubu Desu ka",
        "Ojou laughter",
        "Ja iranai",
        "Wife Noises",
        "1st voice tweet",
        "Oyasumi",
        "Arimasu",
        "1,2,3,4,5 x3",
        "Kore wa",
        "Ojou kicks you",
        "Baka!!",
        "Hentai",
        "Urusai",
        "Mou shiranai",
        "Konnakiri",
        "Hai",
        "Suki",
        "Na",
        "何故え!?",
        "天然ものだぞ",
        "う〜ん、仕方ない",
        "Tongue Twister",
        "Arigato",
        "Ano Ne",
        "Ojou Blessing",
        "みんなチョコもらた?",
        "Ojou Cries",
        "Onee san voice",
        "Un!!!",
        "Yeeeei!!!",
        "Won't forgive you",
        "Pikan!",
        "FU! x3",
        "Eh?!",
        "もういい",
        "Oni Noises",
        "Angry cat noises",
        "Oni Giggles",
        "早く起きる",
        "困っちゃうよね",
        "unintelligible,",
        "*pain*",
        "n~",
        "yada, yada, YADAAA, *crying*",
        "I love you~ I need you~",
        "AAAAAAA *crying*",
        "Aaiiiooo",
        "*attacking you*",
        "GAOOO",
        "Magical Banana",
        "Pacman Mode",
        "UWA x3",
        "WAHHH"
    ]; // construct the array with text
    const randomInt = Math.floor(Math.random() * text.length); //Get a random integer 0 - 50 (51 files)
    const audio = new Audio(`/media/sound/ayamenoise${randomInt}.mp3`); // Load the sound file based on the randomInt variable
    const quote = document.getElementById("quote") // get quote element
    const audioElement = document.getElementById("audio");
    //set audio src into audio element
    audioElement.src = `/media/sound/ayamenoise${randomInt}.mp3`;
    //play audioElement at 85% volume
    audioElement.volume = 0.85;
    audioElement.play();
    //set preload to metadata to load the audio file metadata
    audioElement.preload = "metadata";
    //Get the audio duration
    audioElement.addEventListener("loadedmetadata", function () {
        //prepare the quote to be displayed back to the user
        quote.innerHTML = "&#8220; " + text[randomInt] + " &#8221;"; // inject text to output element
        const duration = audioElement.duration;
        console.group("RNG Details"); // Start a console group
        console.log("Random Number: " + randomInt); // Log the random number
        console.log("Text: " + text[randomInt]); // Log the text
        console.groupEnd(); // End the console group
        console.group("Audio Details"); // Start a console group
        console.log(`Played sound ${randomInt}!`);
        console.log("Volume: " + audioElement.volume * 100 + "%");
        console.log("Duration: " + audioElement.duration + " seconds");
        console.groupEnd(); // End the console group
        console.group("A message from the developer"); // Start a group in the console
        console.log("Thank you for using this extension!"); // Log a message to the console
        console.log("If you have any suggestions, please let me know! on GitHub. @ https://github.com/DGNVMusic/AyameNoises"); // Log a message to the console
        console.log("If you like this extension, please consider leaving a review on the Chrome Web Store!"); // Log a message to the console
        console.groupEnd(); // End the group in the console
    });
    //if the audioelement fails to render the audio file throw me an error in the console
    audioElement.addEventListener("error", function () {
        console.error("Failed to load audio file!");
        console.error("Error: " + audioElement.error);
        console.error("This is NOT a chrome issue. This has to do something with the code. Please report this issue on GitHub.");
        quote.innerHTML = `🛑 Failed to load audio file! This is probably bug. Report it on <a href="https://github.com/DGNVMusic/AyameNoises">GitHub</a>`; // Set the quote to the error message
    });