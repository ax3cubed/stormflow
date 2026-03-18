# Product Canvas Experiment

A multiplayer collaborative canvas for product brainstorming

👉 [**Read the article**](https://labs.google/code/experiments/product-canvas)

## Building locally

1. Create a Firebase project with Realtime Database and Auth enabled

2. Make a `.env` file at the root, as a copy of [`.env.example`](./.env.example), filling out the necessary field(s)

3. Install dependencies and start the Vite server:
    ```bash
    $ npm install
    $ npm run dev
    ```

4. **Storage uploads (e.g. Nano Banana images)** – from `https://localhost:5174` the browser will block uploads until the Storage bucket allows CORS. Apply the project’s CORS config once (requires [Google Cloud SDK](https://cloud.google.com/sdk) and auth):
    ```bash
    gsutil cors set storage.cors.json gs://YOUR_PROJECT_ID.appspot.com
    ```
    Replace `YOUR_PROJECT_ID` with your Firebase project ID (e.g. `product-canvas-experimen-3eb7b`). Add production origins to `storage.cors.json` if you need uploads from your deployed URL.

## Technical components

- **Infinite canvas** - powered by the excellent [React Flow](http://reactflow.dev/).
- **Realtime multiplayer** - powered by [Firebase Realtime Database](https://firebase.google.com/docs/database) and Auth.
- **Realtime video collaboration** – powered by [WebRTC](https://webrtc.org/) and Firebase for handshake.
- **Assistive voice agent** - powered by the [Gemini Live API](https://ai.google.dev/gemini-api/docs/live)
  - There's also support for wake words (e.g. "Hey Gemini") to start new sessions, but as this is highly unstable and needs to be trained for each user's voice, it's hidden by default.
- **Concept sketch generation** - powered by [🍌 Nano Banana](https://gemini.google/overview/image-generation/)
- **On-the-fly prototype generation** - simplified coding agent powered by Gemini, along with an in-browser runtime powered by [`esbuild-wasm`](https://www.npmjs.com/package/esbuild-wasm) and inspired by [JSNotebook](https://github.com/tschoffelen/jsnotebook).
- **Wiki-style project knowledge editor** - powered by [Tiptap](https://tiptap.dev/)
- **Video calls** unobtrusive, flingable participant video bubbles
