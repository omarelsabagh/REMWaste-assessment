# REMWaste: Skip Hire Selection App

A modern web application for selecting and managing skip (waste container) hire, built with React, TypeScript, and Vite.

## Project Setup & Approach

1. **Initial Setup**
   - Created a new React project using Vite for fast development and optimal performance
   - Integrated Tailwind CSS for modern, utility-first styling
   - Configured TypeScript for type safety and better development experience

2. **Project Structure**
   - Organized codebase using feature-based architecture
   - Created dedicated directories for features, components, and services
   - Implemented clean separation of concerns for better maintainability

3. **Implementation Details**
   - **Skips Feature**
     - Implemented skip selection page with interactive UI
     - Created skip-related components and hooks
     - Added skip data management and state handling
   
   - **Reusable Components**
     - Developed shared UI components for consistent design
     - Created loading states and error boundaries
     - Implemented responsive layouts

   - **API Integration**
     - Set up Axios service for API communication
     - Implemented robust error handling
     - Created type-safe API interfaces

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
2. **Run the app locally**:
   ```bash
   npm run dev
   ```
3. **Lint and check code**:
   ```bash
   npm run lint
   ```
4. **Format code**:
   ```bash
   npm run format
   ```

