# Auto-save

This is a proposed solution for the following **Project Waste Not, Inc** frontend coding challenge:

> We have a system where we need to implement auto-save when a user enters numeric quantities for an order and it should also indicate to the user when their data is saved.
>
> It should not save after every keystroke since that would be too many calls to our backend. It should only save after the user hasn’t typed any number for 2 seconds.
>
> For simulating the call to our server, it should simulate a 1 second delay.
>
> Create a page that will have an edit field where the user will enter the number. After 2 seconds if the user hasn’t pressed any keys it should display on the page “Auto-saving”. After the 1 additional second where it simulates calling our server it should display “Saved”.

## How it works?

- This project was constructed using `react` and `yarn` through the `yarn create react-app` command.
- It leverages on the `useState` and `useEffect` react's hooks to controls the input change, the timers of the actions happening in the background and the feedback to the user.
- A simple sass style was also applyied.

## Install and Run

To install just clone this repository and executes `yarn` or `yarn install` in the root of the cloned folder.

To run the project execute `yarn start`.

Go to this link, if you want to see this project [running live](https://dchiang.github.io/auto-save/ "https://dchiang.github.io/auto-save/").

## Deployment

This project was deployed to `github.io` using the `gh-pages` (GitHub pages) module. To deploy it on your own `github.io` domain do the following:

1. Modify the `home` attribute inside the `package.json` with the URL that points to your domain and name of the repository you want to use.
2. Modify the remote URL of your local copy of the repository.
3. Push your changes.
4. Run the command `yarn deploy` in the root of the repository. This will build the publish the project as a static page into your `gitbuh.io` domain.