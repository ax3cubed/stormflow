# Stormflow

A collaborative brainstorming canvas for [Accelory.net](https://accelory.net), with realtime multiplayer and AI-assisted workflows.

**Upstream:** This project is based on [ProductCanvas-Experiment](https://github.com/romannurik/ProductCanvas-Experiment) (Apache License 2.0 — see [LICENSE](./LICENSE)), originally described in [Google Labs: Product Canvas](https://labs.google/code/experiments/product-canvas). It is maintained by Accelory and is not endorsed by Google LLC or the upstream authors.

👉 [**Read the article**](https://labs.google/code/experiments/product-canvas) (original experiment)

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
    Replace `YOUR_PROJECT_ID` with your Firebase project ID. Add production origins (e.g. your Vercel or Accelory.net URL) to [`storage.cors.json`](./storage.cors.json) before applying.

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

## License and credits

Stormflow is licensed under the [Apache License 2.0](./LICENSE).

This software is a modified version of **ProductCanvas-Experiment** ([Roman Nurik](https://github.com/romannurik) / [Google Labs Product Canvas](https://labs.google/code/experiments/product-canvas)). Original copyrights in the source headers belong to Google LLC where indicated; see [NOTICE](./NOTICE) for derivative-work attribution.
