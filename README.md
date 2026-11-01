# OPIM639 Exam Prep (revision slides app)

131 revision slides for OPIM639 (Prof LIM Yun Fong), built from Revision Deck v3. Each slide is rendered for phone and laptop, with Prof Lim's original figures you can tap to zoom.

## Features
- **Progress tracking.** A slide is marked revised ✓ when you move past it; tap ✓ to undo. Each topic tile shows a progress bar, and the top bar shows overall progress. "Continue" and "Next unrevised" take you straight to where you need to be.
- **Stars ⭐.** Earmark important slides, then review them as a list or step through them.
- **Quick filters.** All exam traps, 60-second recaps, or Prof Lim's figures only.
- **Search.** Searches every slide, including the class notes.
- **Notes.** Each slide has "Class notes & detail" plus your own note, which is saved on the device.
- **🔄 Sync phone ⇄ laptop with no account.** Open the sync link or scan the QR code on the other device. Revised marks and stars from both devices are merged. Personal notes stay on each device.
- **Navigation.** Swipe on a phone; use ← → (and S to star) on a laptop.
- **App-like use.** "Add to Home Screen" installs it like an app, and it works offline after the first visit. Dark mode follows your device setting.

## Deploy on Vercel via GitHub (about 5 minutes)
1. Unzip. On GitHub, create a new repo, e.g. `opim639-exam-prep` (**Private** is recommended).
2. Click **Add file → Upload files**. Drag in EVERYTHING from the unzipped folder, including the `img` folder, then click **Commit**.
3. On vercel.com, choose **Add New → Project**. Import the repo, pick the **Other** preset, leave the build command empty and keep the output directory as the root. Then click **Deploy**.
4. Open the link on your laptop. On your phone, use 🔄 Sync to scan the QR code, then choose **Add to Home Screen**.

## Note
The site contains images of Prof Lim's lecture slides for personal revision. It is set to `noindex`, so search engines will not list it. Share the link only with your classmates. If you have Vercel Pro, you can also turn on password protection.
