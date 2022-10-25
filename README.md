
# AyameNoises
[![Chrome Status](https://img.shields.io/badge/Chrome%20Status-Published-19ba00?logo=google-chrome&style=for-the-badge&logoColor=white&labelColor=333333)](https://chrome.google.com/webstore/detail/ayame-noises/adjgpdjmlhloeacjfandkafohmcdhfpm)
<br>
![Manifest version](https://img.shields.io/badge/Chrome%20Manifest%20Version-v3-F0B6D5?logo=google-chrome&style=for-the-badge&logoColor=white&labelColor=333333) 
<br>
![Version](https://img.shields.io/badge/Version-v1.1-ef0000?style=for-the-badge&labelColor=333333) | ![Beta Version](https://img.shields.io/badge/Version%20BETA-v1.2-FCBA03?style=for-the-badge&labelColor=333333) 
<br>
![Cups of coffee](https://img.shields.io/badge/Cups%20of%20coffee%20wasted-45-900c3f?logo=ko-fi&style=for-the-badge&logoColor=white&labelColor=333333)<br>
<br>
Plays a random Nakiri Ayame sound in your browser tab
<br>
Current voice count: **58 unique voices**
<br>
# Special thanks
- [**@NakiriAyame**](https://twitter.com/NakiriAyame) for providing her amazing content. お嬢様、素晴らしいクリップをありがとう。(Sorry I'm not Japanese, so Google Translate it is)
- [**@Hololamp**](https://www.youtube.com/channel/UCTl2VUuIQ60jHUdHCHz7ZDA)
- [**@Nikerium**](https://www.youtube.com/c/Nikerium)

Did I miss someone? Please let me know by opening an issue or a pull request. <3

# How to use
## Method 1: Chrome Web Store (Recommended and easiest)
1. Install the extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/ayame-noises/adjgpdjmlhloeacjfandkafohmcdhfpm)
2. Click the Ayame icon in the top right corner of your browser
3. ???
4. Profit

## Method 2: Manual installation (Advanced)
1. Download the latest release from the [releases page](https://github.com/DGNVMusic/AyameNoises/releases)
2. Go to `chrome://extensions/` in your browser and enable developer mode
3. Click "Load unpacked" and select the folder you downloaded
4. Follow steps 2-4 from Method 1
5. Profit

# How to contribute
Contributing to this project is really easy. Just follow these steps:
1. Fork this repository
2. Clone your fork
3. Make your changes
   ### Adding a new voice
    1. Add the voice to the `media/sound` folder and name it `ayamenoise<number>.mp3` where `<number>` is the next available number (Look into the `media/sound` folder to see what I mean) - **Make sure the file is an MP3 file** You don't need to remove any metadata from the file, but you can if you want to.
    2. Give a small description of the voice in the `popup.js` file in the `text` array (ADD IT TO THE END OF THE ARRAY. PLEASE DO NOT CHANGE THE ORDER OF THE EXISTING VOICES)
4. Commit your changes
5. Push your changes
6. Open a pull request
7. Wait for me to review your changes

You'll be credited in the README.md file if your changes are accepted and you want to be credited (Please state in the pull request if you do NOT want to be credited. Your name will be stated as a random number).

# License
This project is licensed under the MIT License. See the LICENSE.md file for more information.

# Disclaimer
This project is not affiliated with Hololive, Cover Corp. or any other company related to Hololive. All content used in this project is owned by their respective owners. This project is for educational purposes only.