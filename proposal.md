

We're gonna Hiragana!
-------------------------

**Background**

"We're gonna hiragana" is an application to help people learn the very basics of the Japanese writing system. The entire system compromises three writing scrips:

- katakana (カタカナ), which is generally used for words/names of foreign origin. There are 46 in total.
- kanji (漢字), which are characters borrowed from China over a thousand years ago. Today, there are roughly 2000 official characters one needs to learn to be considered fluent.
- hiragana (ひらがな) These characters represent the Japanese phonetic lettering system. There are 46 characters in total, representing the basic sounds. Many of these characters can then be combined (in a mostly logical fashion) to create more phonemes.

We will focus solely on 'hiragana', as this will allow visitors to Japan to more easily lookup signs/ words they find in their travels, and communicate at a basic level.

**Functionality and MVP**
In this learning application, users will be able to:
- Start the quiz, restart the entire quiz.
- Select an individual chapter to practice: For example, only choose characters starting with the 'k' sound.
- Display the characters for the chapter, the romaji spelling (what it would look like spelled in English), and the pronunciation guide.
- Displays a quiz section, where a character/word will be displayed, and the user will be asked to type in the correct spelling. (if they character く is displayed, they should write 'ku') in the answer box.

This project will also include:
- A modal describing the various Japanese scripts, and some short examples of how they would be used in everyday life.
- A production Readme

**Wireframes**

This application will be a single screen. At the top there will be a dropdown to go to a specific chapter (grouping of characters) to study, rather than studying in a specific order. The main screen will display one of two things: 1) The basic information on the characters' reading, pronunciation, and romaji, or 2) the quiz section, where the user will be asked to type the appropriate answer to the question. To the right side of the

![View Character Information](images/hiragana_meaning.png)

![View Quiz](images/hiragana_quiz.png)

**Architecture and Technologies**

This project will be implemented with the following technologies:

Vanilla JavaScript and jquery for overall structure and game logic,
React with HTML5 Canvas for DOM manipulation and rendering,
Webpack to bundle and serve up the various scripts.

Besides these, we will need a few scripts.

quizBody.js: This script handles logic for creating and updating elements and rendering them to the DOM.

quiz.js: This script will handle the user's input and check to see if it is the correct answer. Then displaying the correct one if they are mistaken. It should also allow the user to choose a specific group of characters to practice with.

Implementation Timeline:

Day 1: Setup Node modules and webpack. Create a webpack.config.js and package.json. Write the basic entry file and the skeleton for the two scripts.

- Get a green bundle with webpack.

Day 2: Create at least one basic quiz. This quiz should be able to display the basic information about the characters, and then, on the following pages, ask the user several questions to test their knowledge. One obstacle that we might run into is the user's browser not being able to display Japanese characters. We might be able to work around this using pictures, or perhaps another method.

- Create at least a basic quiz using React
- Figure out if accepting/displaying Japanese characters will be an issue for users

Day 3: Complete the rest of the quizzes for each chapter/group of characters. Make sure that they can be linked together smoothly. Add pictures if possible, so that they user can start linking words with objects, and won't translate in their head. Consider creating a results page after each grouping is completed, telling the user how they have done.

- Link all quizzes together smoothly.
- Create a results page for the user after completing a quiz.

Day 4: Create a dropdown menu that can be selected by the user, so they can jump to a section. Make the application look more professional. Consider creating a button to change background, if there is time for it.

- Get the dropdown bar to work properly.
- Styling to have a more professional look.

**Bonus Features**
- Creating a button that links to a page where random words/characters will be shown, to increase practice time and usefulness of the site to those that have completed the basics.
- Potentially, in the future, let the user be able to write the characters themselves, and have the application check for accuracy.
