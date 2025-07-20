# Contact Book API (Node.js + Express + MongoDB)

Simple CRUD API for managing contacts (name, email, phone).

## Installation
```
git clone <repo-url>
cd contact-book-api
npm install
```
Rename `.env.example` to `.env` and add your MongoDB URI.

## Start the server
```
npm run dev
```
or
```
npm start
```

## API Routes
- `POST /api/contacts/` — Create contact
- `GET /api/contacts/` — List all contacts
- `PUT /api/contacts/:id` — Update contact
- `DELETE /api/contacts/:id` — Delete contact