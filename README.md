
# Invicta

An archived frontend project for a gift-card and digital-product marketplace, built with Nuxt 2 and Vue 2.

**Live demo:** https://invicta.oleksiireznichenko.com/

I worked on the frontend, implementing multiple pages, interactive components, responsive layouts and animated 3D visuals. The project also involved application state, product data and account-related functionality.

I've recently restored the project as a standalone frontend demo, updated some of its older dependencies and fixed several issues that prevented it from running on modern environments.

## Tech stack

- Nuxt 2 and Vue 2
- JavaScript
- SCSS
- Vuex
- Three.js
- Chart.js

## Features

- Marketplace with product listings, categories and filtering
- Interactive 3D visuals and animations
- User profiles and account management interfaces
- Seller dashboard with statistics and charts
- Product and advertising campaign management
- Sample orders and order-detail pages
- Client-side state management with Vuex
- Responsive layouts

## Explore the demo

The website includes a one-click demo login, allowing visitors to explore the logged-in interface without registering.

1. Open the [live demo](https://invicta.oleksiireznichenko.com/).
2. Go to the **Login** page.
3. Click **Explore demo** to access a sample account.

You can explore the profile, dashboard, orders and other account-related pages using mock data.

**Note:** This is a frontend demonstration, not an active marketplace. Accounts, products and orders use sample data. There are no real purchases, payments or production authentication services.

## Running locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/OleksiiReznichenko/Invicta.git
cd Invicta
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Legacy build compatibility

The project uses Nuxt 2 and an older Webpack setup. On newer Node.js versions, you may need to enable the legacy OpenSSL provider.

For Windows PowerShell:

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm run dev
```

To generate the static production version:

```bash
npm run generate -- --force-build
```

The generated website is placed in the `dist/` directory.

## Project status

This is an older client project that I've restored for my portfolio.

The original backend services are no longer available, so the current version focuses on showcasing the frontend implementation using local mock data.

Some functionality is limited to demonstration purposes, but the main goal is to make the interface and application structure accessible for exploration.
