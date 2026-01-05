# nestjs-backend-lean

Lean and structured backend REST API built with NestJS, designed with a clear separation of concerns, modular architecture, and explicit data validation.

## Overview

This project implements a REST API for managing domain entities with full CRUD operations.

It addresses common backend responsibilities such as request validation, separation of business logic, and consistent API responses. The API is designed to be consumed by a frontend application or external services, following patterns commonly used in production backend systems.

The goal of this project is to demonstrate a clean, maintainable NestJS backend that is easy to extend, test, and reason about.

This project can serve as a starting point for production-ready backend services or as a reference for structuring NestJS applications with clear responsibilities.

## Features

- RESTful CRUD endpoints
- Domain-oriented modular structure
- DTO-based validation at the API boundary
- Service-layer business logic separation
- Basic error handling and predictable responses


## Tech Stack

- Node.js — runtime environment
- TypeScript — static typing and safer code
- NestJS — application framework and architectural structure
- PostgreSQL — persistence layer
- class-validator — DTO-based request validation
- Jest — basic unit and integration tests


## Project Structure

- src/modules — domain-oriented modules
- src/controllers — HTTP layer (REST endpoints)
- src/services — business logic
- src/dto — data validation contracts
- test — unit and integration tests


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

- Readability over clever abstractions
- Explicit logic over implicit or magic behavior
- Architectural patterns commonly used in real backend teams

The implementation is intentionally kept lean to reflect production-oriented backend practices rather than academic examples.

This repository demonstrates how I approach backend development: clear boundaries between layers, explicit data contracts, and maintainable structure suitable for real-world teams.
