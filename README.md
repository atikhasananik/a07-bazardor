# বাজার দর · BazarDor

**প্রয়োজনীয় পণ্যের দাম এক নজরে।**

BazarDor is a Bengali-first marketplace price guide. Browse everyday products, see how their prices are changing, and compare market prices from one place.

## Key features

1. **Today’s price movements** — Explore products whose prices have increased or decreased.
2. **Product catalog** — Browse the full collection of everyday products and their current prices.
3. **Category browsing** — Find products by category and see how many items are available.
4. **Product and market details** — View price summaries, average, minimum and maximum prices, and market-by-market comparisons.
5. **Price sorting and accounts** — Sort products from low to high or high to low, and sign in or create an account with email, Google, or GitHub.

## Technologies

- **Next.js 16** (App Router) and **React 19**
- **TypeScript**
- **Tailwind CSS 4** and **DaisyUI**
- **Better Auth** with **MongoDB**
- **Lucide React**, **React Icons**, and **React Toastify**
- BazarDor product and category API

## Getting started

### Prerequisites

- Node.js
- npm
- A MongoDB connection string and OAuth credentials for the sign-in providers you want to enable

### Install and run

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Configure authentication

Create a `.env.local` file in the project root and provide the values used by Better Auth:

```dotenv
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

Configure OAuth applications with the local app as their development callback origin. Keep credentials private and never commit `.env.local`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |


## Live Demo : <a href = "https://a07-bazardor.vercel.app/">BazaDor - click here </a>
