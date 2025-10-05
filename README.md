# Bright-Portfolio-Client

A full-stack **personal portfolio website** built with **Next.js**, **Express.js**, and **Prisma**, featuring authentication, a private dashboard, and a blog/project management system.  
This project highlights modern **frontend + backend integration**, secure **JWT authentication**,


---
##  Live Links

- **Live Deployment:** [Bright-Portfolio-Client](https://bright-portfolio-client.vercel.app/)
  
  
- **Live Deployment:** [Bright-Portfolio-Server](https://bright-portfolio-server.vercel.app/)

##  Tech Stack

| Category | Technology Used |
|-----------|-----------------|
| **Frontend** | [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/), [Radix UI](https://www.radix-ui.com/) |
| **Backend** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) |
| **Database** | [PostgreSQL](https://www.postgresql.org/) + [Prisma ORM](https://www.prisma.io/) or [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) |
| **Auth** | [JWT](https://jwt.io/), [bcrypt](https://www.npmjs.com/package/bcrypt) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **UI Enhancements** | [Sonner](https://sonner.emilkowal.ski/) for toast notifications |
| **Version Control** | Git + GitHub |

---

##  Features Overview

###  Authentication & Authorization
- JWT-based secure login system for the **portfolio owner**.
- Passwords are hashed using **bcrypt**.
- **Owner-only access** to private dashboard routes.
- Admin user seeded in the backend for initial login.

###  Dashboard (Private)
- Manage **blogs**, **projects**, and personal content.
- CRUD functionality (Create, Read, Update, Delete) for blogs.
- Uses **react-hook-form + zod** for form validation.
- **Sonner** notifications for action feedback ( update, delete).

###  Blog Management
- Owner can **create**, **edit**, **delete**, and **view** blogs.
- Public users can view published blogs.
- **Incremental Static Regeneration (ISR)** used for performance optimization.


###  Projects Showcase
- Public-facing page displaying all projects.
- Dynamic fetching from backend (Prisma).
- Organized card layout with responsive grid.

###  About Me
- Display your bio, skills, and experience.
- Styled with Tailwind responsive classes for mobile-first design.

###  Toast Notifications
- Implemented using **Sonner** for actions like add, update, delete.

---

###  Installation & Setup
- git clone https://github.com/mohammaduzzal/bright-portfolio-client
- cd bright-portfolio-client


## Getting Started
Install dependencies:

```bash
# using npm
npm install

# using yarn
yarn install

# using pnpm
pnpm install
```
then-

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




