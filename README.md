# REMWaste: Skip Hire Selection App

A modern web application for selecting and managing skip (waste container) hire, built with React, TypeScript, and Vite.

## Work Done

- **Updated ESLint and TypeScript configurations** for improved code quality.
- **Added core UI components**, including a loading state for better user experience.
- **Implemented Axios service** for robust API calls and data fetching.
- **Structured the codebase** with new features and services directories.
- **Updated project dependencies** and configuration files.

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

---

Feel free to contribute or open issues for improvements!
