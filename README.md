# Tweeter Project

Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS, and jQuery in order to become familiar with front-end development and technologies. It uses a database of users and profile images to simulate random users for each tweet submitted to the server.

On Desktop:
![Screenshot](/docs/Tweeter-Desktop.png)

On Mobile or Tablet:
![Screenshot](/docs/Tweeter-Mobile_or_Tablet.png)

Example tweet input:

!["Normal input"](/docs/Tweet_Example.png)
!["No input"](/docs/Tweet_Empty_Message.png)
!["Over limit"](/docs/Tweet_Over_Limit.png)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- md5

## Features

- fully functional text box dynamically counts characters and displays an error message if a tweet has zero or more than 140 characters on submission.
- immune to cross-site scripting.
- uses AJAX to post and display tweets on page without needing to refresh.
- "write a tweet" and return to top of page buttons scroll to the text box and auto focus.
- page automatically adjusts content to various viewport sizes, providing optimum user experience.
- tweet boxes and icons provide visual feedback on mouseover.