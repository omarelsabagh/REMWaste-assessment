# REMWaste: Skip Hire Selection App

A modern web application for selecting and managing skip (waste container) hire, built with React, TypeScript, and Vite.

## Project Overview

This project provides a user-friendly interface for customers to:
- Enter their postcode and area
- Select the type of waste
- Choose from available skip sizes
- Check permit requirements
- Pick a hire date
- Proceed to payment

The app fetches available skips from an API and displays detailed information for each, including size, hire period, price, area, and special attributes (e.g., road-allowed, heavy waste allowed). The UI is responsive and includes loading and error states for a smooth user experience.

## Key Features
- **Multi-step selection process**: Guides users through all necessary steps for hiring a skip.
- **Dynamic skip listing**: Fetches skips by location and displays them with images and details.
- **Modern UI**: Built with React, Tailwind CSS, and component-based design.
- **API integration**: Uses Axios for robust API calls and data fetching.
- **Code quality**: Enhanced ESLint and TypeScript configurations for maintainability.
- **Project structure**: Organized into features and services for scalability.

## Project Structure
- `src/features/skips/` – Skip selection logic, UI components, and API hooks
- `src/features/ui/components/` – Shared UI components (e.g., Loading)
- `src/services/` – Axios service for API requests
- `src/App.tsx` – Main app entry, renders the skip selection flow

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Set up environment variables**:
   - Copy `.env.example` to `.env` and fill in the required values (e.g., API base URL, Supabase storage URL).
3. **Run the app locally**:
   ```bash
   npm run dev
   ```
4. **Lint and check code**:
   ```bash
   npm run lint
   ```

## Recent Work Done
- Updated ESLint and TypeScript configurations
- Added core UI components and loading state
- Implemented Axios service for API calls
- Structured codebase with features and services
- Updated dependencies and configuration files

---

Feel free to contribute or open issues for improvements!
