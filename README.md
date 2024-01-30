This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Objective: Build a login page using NextJS and Typescript. Implement Google Facebook SSO login authentication.

1. OAuth authentication - Google and Facebook
2. Custom Credentials-based login (Email + Password): - Cookie based authentication

Database

1. MongoDB

.env file
MONGODB_CONNECTION_URL =

MONGODB_USERNAME =
MONGODB_PASSWORD =

NEXTAUTH_SECRET =
NEXTAUTH_URL=

FACEBOOK_APP_SECRET =
FACEBOOK_APP_ID =

GOOGLE_ID =
GOOGLE_SECRET =

TO FIX

1. Facebook login requires HTTPS at localhost. Need to reconfigure next js localhost with https.
2. Google login does not route the user to the home page ("/") after successful login.
