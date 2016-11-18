








We're gonna Hiragana!

"We're gonna Hiragana" is a javascript application utilizing react, react-router, and
redux.

Features and Implementation

The main purpose of the site it to allow users to study and practice typing romaji. On
entry to the site, they are given a short introduction, and then asked to click a button
where the practice can begin.

There is a table filled out with three columns, displaying the hiragana character, the
romaji (spelling using a keyboard), and the pronunciation. Users are to spend a few minutes
studying this. When they feel comfortable, they click the button to begin practice.

When clicked, the page is hidden from view using CSS display: none, and is replaced with a child
component. This child component displays one character at a time, asking the user for the
correct romaji answer. When the user answers, the submission is checked against the state. The
state contains several objects, and within these objects is three key:value pairs. Only one object is
ever on display at a time, thus making checking answers relatively straightforward. The character
seen on screen has a sibling key pointing to the correct romaji. When the user inputs their answer,
it is compared against the romaji value. If they match, then the user was correct.

After successfully answering all of the questions, the user is directed to another list of characters
where they can continue studying. This cycle continues until the user feels confident in their
abilities.
