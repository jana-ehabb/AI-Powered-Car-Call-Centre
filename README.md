# AI-Powered Car Call Centre

A real-time voice AI assistant for an automotive service centre. The application enables customers to speak with an AI agent, receive spoken responses, and interact with vehicle profile management workflows.

## Features

- **Real-time voice conversations** using LiveKit and Google Gemini.
- **Live conversation transcripts** displayed in the web interface.
- **Vehicle information lookup** using VIN-based records.
- **Car profile creation** for collecting vehicle information.
- **SQLite database** for storing vehicle records.
- **React web interface** built with Vite.
- **Flask token server** to provide access tokens for LiveKit connections.

## Tech Stack

| Technology | Purpose |
|---|---|
| Python | AI agent and backend logic |
| LiveKit Agents | Real-time voice sessions |
| Google Gemini | AI conversation and voice responses |
| React | Frontend user interface |
| Vite | Frontend development server |
| Flask | Backend token server |
| SQLite | Vehicle record storage |

## Architecture

1. The customer interacts with the React web application.
2. The Flask server generates a token for connecting to LiveKit.
3. LiveKit connects the web client to the Python AI agent.
4. Google Gemini powers the conversational voice experience.
5. The agent uses backend tools to look up vehicle information and create car profiles.
6. SQLite stores vehicle records.

## Getting Started

### Prerequisites

- Python 3.11
- Node.js and npm
- A LiveKit project with API credentials
- A Google Gemini API key

### 1. Clone the repository

```bash
git https://github.com/jana-ehabb/AI-Powered-Car-Call-Centre
cd LiveKit-AI-Car-Call-Centre-main
```

### 2. Configure environment variables

Create or update `backend/.env` with the credentials required by your project:

```env
GOOGLE_API_KEY=your_gemini_api_key
LIVEKIT_URL=your_livekit_url
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
```

Keep your actual credentials private. Never commit `.env` files or API keys to GitHub.

### 3. Install backend dependencies

From the project root, create a virtual environment if you do not already have one:

```bash
cd backend
python -m venv .venv
```

Activate it on Windows:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install the project dependencies using the repository's `requirements.txt`. Ensure the installed LiveKit packages include the Google plugin version required by the agent.

### 4. Start the AI agent

From the `backend` directory, run:

```powershell
.\.venv\Scripts\python.exe agent.py dev
```

Keep the agent running while testing the application.

### 5. Start the token server

Open a separate terminal and run the Flask token server using the backend environment and the project's existing configuration.

### 6. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Database

The application uses SQLite to store vehicle records. The database is located at:

`backend/auto_db.sqlite`

The `cars` table contains vehicle fields such as VIN, make, model, and year.

## Security

- Store API keys and LiveKit credentials in environment variables.
- Do not commit `.env` files, database credentials, or other secrets.
- Configure appropriate access controls before deploying publicly.
- Review the provider's API quotas and pricing before production use.

## Future Improvements

- Add automated tests for vehicle lookup and profile creation.
- Improve validation of VIN and vehicle details.
- Add error handling for unavailable AI services.
- Introduce authentication and access controls.
- Deploy the frontend and backend to production infrastructure.

## Author

Developed as a software engineering project exploring real-time voice AI, backend integration, and database-driven customer support workflows.
