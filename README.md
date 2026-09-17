# Modern Netflix Clone using React, Vite, and TypeScript

![Modern Netflix Clone using React JS](https://user-images.githubusercontent.com/71302066/200040519-7bc1cc78-9371-4a2e-b4f6-b86a3663e60b.png "Modern Netflix Clone using React JS")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/sanidhyy/netflix-clone)](https://github.com/sanidhyy/netflix-clone/blob/main/LICENSE.md "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sanidhyy/netflix-clone/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/sanidhyy/netflix-clone?max-age=2592000)](https://github.com/sanidhyy/netflix-clone/branches "GitHub branches")
[![Github commits](https://badgen.net/github/commits/sanidhyy/netflix-clone/main?max-age=2592000)](https://github.com/sanidhyy/netflix-clone/commits "Github commits")
[![Netlify Status](https://api.netlify.com/api/v1/badges/02fdf92c-0e3e-44bc-b5f0-71ac6a064286/deploy-status)](https://clone-netflixapp.netlify.app/ "Netlify Status")
[![GitHub issues](https://img.shields.io/github/issues/sanidhyy/netflix-clone)](https://github.com/sanidhyy/netflix-clone/issues "GitHub issues")
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sanidhyy/netflix-clone)](https://github.com/sanidhyy/netflix-clone/pulls "GitHub pull requests")

## ⚠️ Before you start

1. Make sure **Git**, **Node.js**, and **pnpm** are installed.
2. Create a `.env` file in the project root.
3. Contents of **.env**

```
TMDB_API_KEY=XXXXXXXXXXXXXXXXX
```

4. To get an API key, go to the [TMDB website](https://www.themoviedb.org) and create an account.
5. Open **API / API Key** and copy your key.

![Copy API Key](https://user-images.githubusercontent.com/71302066/200039610-0ea69082-96a4-4606-b2e8-369c2a085dfc.png "Copy API Key")

6. Paste the key into `.env` as `TMDB_API_KEY`. Do **not** prefix it with `VITE_` or `REACT_APP_` — the key is used only by a Netlify Function, not the browser bundle.

If this site is already deployed on Netlify, delete the old `REACT_APP_TMDB_API_KEY` variable and add `TMDB_API_KEY` with Functions runtime scope.

**NOTE:** Make sure you don't share these keys publicaly.

## :pushpin: How to use this App?

1. Clone this **repository** to your local computer.
2. Open **terminal** in root directory.
3. Type and Run `pnpm install`.
4. Once packages are installed, start the app with `pnpm dev` or `pnpm start`.
5. Open [http://localhost:5173](http://localhost:5173) in your browser.
6. Now app is fully configured and you can start using this app :+1:.

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/netflix-clone/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## :camera: Screenshots:

![Modern UI/UX](https://user-images.githubusercontent.com/71302066/200040519-7bc1cc78-9371-4a2e-b4f6-b86a3663e60b.png "Modern UI/UX")

![Movie Categories](https://user-images.githubusercontent.com/71302066/200040677-728e3ba9-15ef-4bf6-ab54-314c5e6421a7.png "Movie Categories")

![Watch Movie Trailers](https://user-images.githubusercontent.com/71302066/200041545-f6e8bdf8-b771-4a51-893f-cc9f68d03ef0.png "Watch Movie Trailers")

## :gear: Built with

[<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" width="150" height="40" />](https://www.typescriptlang.org/ "TypeScript")

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://react.dev/ "React")

[<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" width="150" />](https://vite.dev/ "Vite")

[<img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Built with Love">](https://github.com/sanidhyy/ "Built with Love")

## :wrench: Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/195340258-01f5635d-fb2c-4dd2-877e-1785a270780a.svg "Stats for this App")

## :exclamation: Known Issues

Some movie trailers are not able to opened and some movies are not fetched. This is not the app fault and is caused by API. However, it will be solved in future.

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :books: Available Scripts

In the project directory, you can run:

### `pnpm dev` / `pnpm start`

Runs the app in development mode with Vite.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

Netlify Functions (including the TMDB proxy) are emulated in this dev server via `@netlify/vite-plugin`.

The page will reload when you make changes.

### `pnpm lint`

Lints the project with oxlint.

### `pnpm build`

Type-checks with TypeScript and builds the app for production to the `dist` folder.

### `pnpm preview`

Serves the production build locally for a final check.

## :page_with_curl: Learn More

- [Vite documentation](https://vite.dev/)
- [React documentation](https://react.dev/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Netlify Functions](https://docs.netlify.com/build/functions/get-started/)
