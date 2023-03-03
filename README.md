# 📧 Email Manager

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Supabase management

When adding a new table, or column, execute the SQL statement [locally](http://localhost:54323/), or by adding it manually.

Then generate the migration with `npx supabase db diff <migration_name> -f <migration_name>`. This will add a file `supabase/migrations/<timestamp>_<migration_name>.sql`.

Optionaly, you can modify the `seed.sql` for when you reset the db locally.

You can then commit and push the local migrations with `npx supabase db push`.

Don't forget to re-generate the types: `pnpm generate:types`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
