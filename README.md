# nestjs-backend-lean

Lean and structured backend API built with NestJS, focused on clean architecture, modularity, and data validation.

## Overview
This project implements a REST API for managing domain entities (such as users or similar resources) with full CRUD operations.

It handles common backend responsibilities including request validation, business logic separation, and consistent API responses. The API is designed to serve as a foundation for real-world applications where a frontend or external service needs to consume structured and validated data.

It showcases a clean, production-oriented backend service using NestJS, focusing on structure, clarity, and maintainability, making it easy to test and extend.

## Features
- REST API endpoints
- Modular architecture
- Data validation using DTOs
- Basic error handling
- Clear separation between controllers and services

## Tech Stack
- Node.js
- TypeScript
- NestJS
- PostgreSQL (or in-memory database)
- class-validator
- Jest (basic testing)

## Project Structure
- `src/modules` — domain-oriented modules
- `src/controllers` — HTTP layer (REST endpoints)
- `src/services` — business logic
- `src/dto` — data validation and contracts
- `test` — unit and integration tests

## Getting Started

### Installation
1. Clone the repository  
2. Install dependencies:
npm install
3. Configure environment variables (see `.env.example`)

### Running the app
npm run start:dev

### Running tests
npm test

## Design Decisions
This project prioritizes:
- readability over cleverness
- explicit logic over magic abstractions
- patterns commonly used in real backend teams

It is intentionally kept lean to reflect production-oriented backend practices.
