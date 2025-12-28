# Kasparro Frontend Engineering Assignment

## Overview
This project is a frontend prototype for Kasparro, an AI-native SEO platform designed for the AI-first search era. The goal is to demonstrate product thinking, system design, and clean frontend architecture using Next.js App Router.

---

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Mocked JSON data (no backend)

---

## Application Structure

### Public Pages
- `/` – Marketing homepage introducing AI-native SEO
- `/platform` – Product overview and audit pipeline explanation
- `/about` – Mission, philosophy, and vision

### Product Pages
- `/dashboard` – High-level brand visibility overview (mocked)
- `/audit` – Core audit interface driven by structured JSON data
- `/architecture` – System architecture and data flow explanation

---

## Audit System Design
Audit modules are driven by structured mocked data located in `audit-data/modules.json`. Each module contains:
- Score
- Insights
- Issues
- Recommendations

The audit UI dynamically renders module content using React state, ensuring no hard-coded audit logic in components.

---

## Architectural Decisions
- App Router is used for clear route-based layout separation
- Data-driven UI to simulate real backend integration
- Clean separation of layout, feature, and UI components
- Focus on clarity and extensibility over visual polish

---

## Assumptions & Tradeoffs
- No authentication or backend integration (out of scope)
- Audit data is mocked to focus on frontend architecture
- Visual design kept minimal to emphasize system thinking

---

## Future Improvements
- API integration for live AI audit data
- User authentication and saved audits
- Advanced visualization for AI visibility metrics
