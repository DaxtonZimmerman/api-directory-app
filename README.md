# Day 7 - API Directory App

This is a React app that loads users from JSONPlaceholder. You can search by name and see each user's email and company.

## How to run it

```bash
npm install
npm run dev
```

Open the localhost link that shows up in the terminal.

## Features

- Loads users with `fetch` when the page opens.
- Shows each user's name, email, and company on a card.
- Filters the list as you type a name. Capital letters work too.
- Shows a message while the data loads, if the request fails, or if there are no matches.

## Reflection

1. **Why is data fetching a side effect?** The app has to make a request outside of React to get the users. When the data comes back, I update the state and React shows the list.
2. **Why do we need a loading state?** It lets people know the app is still getting the users, especially if the request takes a second.
3. **Why do we need an error state?** If the request fails, the app can tell you what happened instead of leaving you looking at an empty page.
4. **Why is filtering usually done without `useEffect`?** I already have the users and whatever's typed in the search box. I can use `.filter()` when React renders, and it runs again when I type something new.
5. **What was the hardest part?** I got stuck when localhost wouldn't connect. Once I restarted Vite, I could test the search. I learned to leave the server running in one terminal tab and use another tab for Git.
