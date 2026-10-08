# Sudhagar & Renuka wedding invitation

Local React + Vite project with Tailwind CSS. No publishing is needed.

```sh
npm install
npm run dev
```

Open the localhost URL printed by Vite. The existing intro video and floral artwork are already included in `public/assets/`.

- Edit names, date, venue, wording, and gallery entries in `src/data/wedding.js`.
- Replace `public/assets/intro-wedding.mp4` to change the opening video.
- Optionally add `public/assets/wedding-music.mp3` and reload the page. The play/pause control appears only when that file exists. Music starts only after a guest taps it.
- Add your photos to `public/assets/`, then set each gallery entry's `src` to its path (for example `/assets/photo-1.jpg`). Until then, the gallery displays botanical monogram placeholders. Photos open in an accessible full-size dialog.
- Run `npm run build` for a production build in `build/`; `npm run preview` previews it locally.

Fonts are bundled locally, so the invitation does not need Google Fonts at runtime. The intro plays once per page load, stays uncropped, and has an Enter Invitation fallback. Motion respects the visitor's reduced-motion preference. The countdown uses Chennai time.
