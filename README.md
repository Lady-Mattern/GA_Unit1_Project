# GA_Unit1_Project
This repository contains all of the bits and pieces of my Unit One Project from my General Assembly Course


The title of my Unit One Project will be "Matching With Mozart"

The basic outline is this;

    1. The first screen will be a modal that will invite the user to play the game and briefly explain the rules.

    2. If the user chooses to play, the modal will disappear.
    
    3. Computer "Mozart" begins the game

    4. Once the computer finishes the sequence the user will be prompted to play back the sequence.

    5. If user plays back the sequence in the correct order, the next level initiates.

    6. If user does not play back the correct sequence, a modal will pup up stating that the game is over and prompt to play again.

******** MY JOURNEY **********

I started by creating the piano as I figured that would be the best place to start. I quickly found that creating a piano would be harder than I ever thought.

While researching on the internet, I found that one can crete a piano many ways. It can be made of buttons, lists/list items, and from divs. I attempted to make a piano from an unordered list at first, but did not care for the functionality of it, so I switched to my original idea to make it from many small divs within a larger div.

I spent a very long time leaning how to shape the white keys as they are not a normal rectangle shape, and they do not all face the same direction. Further still, I had to learn how to use the z-index property to make sure the black keys appeared to be on top of the white keys. 

Once I was reasonably happy with my piano, I added a cartoon image of Mozart and a new div to count out the levels and to contain my reset button.

I decided that the next step would be to figure out how to create onClick events to every piano div so that I could have the user click on any key to produce a sound. This too proved to be more challenging that I had originally thought. I asked the question at the office hours I attended, and the advice I was given made sense at the time, but I just could not get my click function to work. Finally, on Friday, I got help adding sound to key clicks. This worked in my onLoad function. I thought I had finally found the information that I needed. 

Unfortunately, these techniques did not transfer well to making the computer play audio over the given array of keyCodes or id's that I had laid out. I just could not factor things correctly. I was also behind in getting the rest of my code to work because I was so focused on getting the audio to work as I considered it the most important part of the game.

As I fussed over my broken code I again reached out to the internet for help and was pretty disappointed. I read articles and watched tutorials, and it seems that no one really attempts this sort of game and now I am beginning to understand why. 

It is now 6:00 am on Saturday morning. Class is due to start in about 4 hours, and I have a neat looking webpage with cool modals and I can press the piano keys and get sound. Nothing. Else. Works.

Feeling like a failure. Kinda hating games right now. Also very tired. 