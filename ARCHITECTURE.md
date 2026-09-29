# Application Architecture

## Structure

The application follows a layered structure to separate responsibilities.

## Layers

### Presentation

Contains the React Native screens and user interaction.

Examples:
- UserScreen
- ProductScreen
- PersonScreen

### Application

Contains the use cases and validation logic.

Examples:
- createUser
- createProduct
- createPerson

### Domain

Contains the main entities of the application.

Examples:
- User
- Product
- Person

### Infrastructure

Contains external resources.

Responsibilities:
- SQLite database configuration.
- Repository implementations.

## Data flow

Presentation
↓
Application
↓
Repository
↓
SQLite Database

## Database

SQLite was selected because it provides local persistence, is lightweight and integrates easily with React Native applications.