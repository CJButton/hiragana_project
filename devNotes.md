

- ran into an error causing the entire page to refresh. it would only
 occur after the user submitted a form. had me stumped for a while, as I
 had never run into something like this before. After doing some searching,
 I came to the realization that I forgot to add a e.preventDefault()! So simple!

- an issue with getting the index page to disappear entirely so that we could
  start quizzing. The CSS was hiding either everything or nothing! The answer
  to this was more divs! By restructuring what the css hider affected, I was
  able to remove the index page, and then JUST have the quiz page appear.