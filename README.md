# Fillify - Landing Page

Welcome to the **Fillify** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Vercel](https://fillify0.vercel.app/)

## About

**Fillify** is a modern, fast, and responsive web application built with Next.js and TypeScript. It provides powerful PDF editing and conversion tools, allowing users to make PDFs fillable, edit existing documents, and manage their PDF workflow with ease. The application features a sleek dark-themed UI, reusable components, and optimized performance.

## Features

- Hero Section
- About Section
- Features Section
- How It Works Section
- FAQ Section
- Contact Section
- CTA Section
- Responsive Design

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/woabu0/fillify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fillify
   ```

3. Install dependencies:

   ```bash
   npm i
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Structure

```
fillify/
├── public/
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── animations/
│   │   │   └── LightRays.tsx
│   │   ├── icons/
│   │   │   └── logo.tsx
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── CTA.tsx
│   │       ├── FAQ.tsx
│   │       ├── Features.tsx
│   │       ├── Footer.tsx
│   │       ├── Hero.tsx
│   │       ├── HowItWorks.tsx
│   │       └── Navbar.tsx
│   └── lib/
│       └── constants.ts
├── eslint.config.mjs
├── LICENSE
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Contributors

<p align="center">
  <a href="https://github.com/woabu0/fillify/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=woabu0/fillify" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add feature-name"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
