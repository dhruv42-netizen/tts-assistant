# 🔊 Text-to-Speech Assistant

A Node.js + Express backend that converts text to speech using **Google Cloud Text-to-Speech API**.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **TTS Engine:** Google Cloud Text-to-Speech

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Google Cloud Credentials
```bash
export GOOGLE_APPLICATION_CREDENTIALS="path/to/your-service-account-key.json"
```

### 3. Run the Server
```bash
npm start
# or for development with hot-reload:
npm run dev
```

## API Endpoints

### `POST /tts`
Convert text to speech and receive an MP3 file.

**Request Body:**
```json
{
  "text": "Hello, world!",
  "languageCode": "en-US",
  "voiceName": "en-US-Wavenet-D"
}
```

**Response:** MP3 audio file (audio/mpeg)

---

### `GET /voices`
List all available Google TTS voices.

**Response:**
```json
{
  "voices": [ ... ]
}
```

## Project Structure
```
tts-assistant/
├── src/
│   └── index.js       # Main Express server
├── output/            # Generated MP3 files (gitignored)
├── package.json
├── .env.example
└── README.md
```
