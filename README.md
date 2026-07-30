# Resolve AI

Resolve AI is an AI-powered customer support workspace designed to help support teams understand, prioritize, and respond to customer requests more efficiently.

The application combines a modern support dashboard with AI-assisted ticket analysis. It is being developed as a portfolio project using React, TypeScript, SCSS, Python, and Flask.

> This project is currently under development.

## Project Goals

Resolve AI is designed to demonstrate how artificial intelligence can support, rather than replace, customer support professionals.

The application will help users:

- Review and manage customer support tickets
- Search and filter conversations
- Identify ticket category and priority
- Detect customer sentiment
- Generate concise ticket summaries
- Suggest the next best action
- Create editable response suggestions
- Ask ticket-specific questions through an AI assistant

## Planned Interface

The workspace will include four main areas:

- Navigation sidebar
- Ticket inbox
- Conversation and ticket details
- AI assistant panel

## Technology

### Frontend

- React
- TypeScript
- SCSS
- Vite
- ESLint

### Backend

The backend will be developed in a separate repository using:

- Python
- Flask
- REST API

## Architecture

The frontend and backend are maintained as separate applications and communicate through an HTTP API.

```text
React + TypeScript frontend
            ↓
         HTTP API
            ↓
    Python + Flask backend

Environment variables will be used for API configuration. Secrets and private credentials will never be stored in frontend code.

Project Status

Current phase:

 Product concept
 Initial UX/UI direction
 Design tokens and desktop layout foundation
 React and TypeScript project setup
 Component architecture
 Ticket inbox interface
 Conversation interface
 AI assistant interface
 Flask API
 AI analysis logic
 Frontend and backend integration
 Testing and deployment
Design Direction

Resolve AI uses a dark, modern support workspace with purple accents. The interface is designed to remain clear and structured while displaying ticket information, conversation history, and AI-generated analysis in the same workspace.

Portfolio Project

This repository is published for portfolio review, technical evaluation, and demonstration purposes.

The source code and project materials may be viewed, but they may not be copied, reused, modified, redistributed, republished, or used in another portfolio or commercial project without written permission.

See LICENSE.md for full usage terms.

Author

Açelya Lejeune

UX/UI Designer & Frontend Developer
