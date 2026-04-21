const express = require('express');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const client = new textToSpeech.TextToSpeechClient();

// POST /tts - Convert text to speech
app.post('/tts', async (req, res) => {
  const { text, languageCode = 'en-US', voiceName = 'en-US-Wavenet-D' } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const request = {
      input: { text },
      voice: { languageCode, name: voiceName },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    const outputFile = path.join(__dirname, '../output/speech.mp3');

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, response.audioContent, 'binary');

    res.setHeader('Content-Type', 'audio/mpeg');
    res.sendFile(path.resolve(outputFile));
  } catch (error) {
    console.error('TTS Error:', error);
    res.status(500).json({ error: 'Failed to synthesize speech' });
  }
});

// GET /voices - List available voices
app.get('/voices', async (req, res) => {
  try {
    const [result] = await client.listVoices({});
    res.json({ voices: result.voices });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch voices' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TTS Server running on port ${PORT}`));
