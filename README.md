# Day 7 - API Directory App

A React app that fetches users from the JSONPlaceholder API and displays them in a searchable directory.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Features

- Fetches users when the app loads using `useEffect`, `fetch`, and `async/await`.
- Displays each user's name, email, and company using `UserList` and `UserCard`.
- Filters users by name as you type in `SearchBar`, regardless of capitalization.
- Shows loading, error, and no-results messages.

## Reflection

1. **Why is data fetching considered a side effect?** Fetching makes a network request outside React's rendering process. The response arrives later and updates state, which causes React to render again.
2. **Why do we need a loading state?** It tells the user the request is still in progress so they know why the list has yet to appear.
3. **Why do we need an error state?** It tells the user when the request failed and distinguishes a failed request from an empty search.
4. **Why is filtering usually done during render?** The filtered list can be calculated directly from the users and the current search term. React renders again when either changes, so there's no need for an effect or a separate state variable.
5. **What was the hardest part of this project?** One snag was getting localhost working again. I learned that the Vite dev server has to stay running while I use the app, and that I can use another terminal tab for Git commands.
