# Fetch Users — Public API with Fetch

A tiny, dependency-free web page that fetches user data from the
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) public API and displays
each user’s **name**, **email**, and **address**. Includes loading state,
reload button, and error handling.

---

## ✅ Objectives (from task)

- Use **JavaScript Fetch API** to get user data from a public API.
- Parse the **JSON** response and display it on the page.
- Handle errors with a `catch` block and offline checks.
- Style the output with **CSS**.
- Add a **Reload** button to refetch data.

---

## 🗂 Project Structure

fetch-users/
├─ index.html # Markup: container, status line, reload button, list
├─ styles.css # Styling for layout, cards, buttons, messages
└─ script.js # Fetch → JSON → render, errors, reload 

---

## 🚀 Getting Started (Local)

1. Open the folder in **VS Code** (or any editor).
2. Run locally:
   - Open `index.html` directly in your browser, or
   - Use the VS Code **Live Server** extension.

---

## 🌐 Live Demo (GitHub Pages)

Once your repo is pushed and Pages is enabled (see steps below), your site will be available at:
https://<Sonydivya>.github.io/<fetch-users>/

### Enable GitHub Pages

1. Push this project to GitHub.
2. In your repo, go to **Settings → Pages**.
3. **Source:** Deploy from a branch  
   **Branch:** `main` · **Folder:** `/(root)` → **Save**
4. Make a tiny commit to trigger a build (or add an empty file named `.nojekyll`) and push.
5. Check **Actions → “Pages build and deployment”** turns green.
6. Your live URL will appear in the **Deployments → github-pages** panel and will follow the pattern above.

**Troubleshooting**
- If the link doesn’t appear: confirm `index.html` is at repo **root**, Pages is set to **main / (root)**, and a Pages build ran successfully in **Actions**.

---

## ✨ Features

- **Fetch & display** each user’s:
  - Name
  - Email
  - Address (street, suite, city, zipcode)
- **Loading and status** messages
- **Reload** button to fetch again
- **Error handling** (offline and HTTP errors)
- **Basic HTML escaping** of API strings
- **Responsive layout** using flexbox cards

---

## 🧪 What to Test

- **Happy path**: users load, see “Loaded 10 users.”
- **Offline**: disable your network → see an offline message.
- **Server error**: temporarily break the URL to trigger an HTTP error.
- **Reload**: click **Reload** to refetch.

---

## 🔍 Key Code (high-level)

- `fetch(API_URL)` → `res.json()` → loop and render cards.
- `.catch()` for errors, plus `navigator.onLine` check.
- DOM updated via `innerHTML` on a list container.

---

## 🧩 Customization

- Show more fields (company/phone/website) by editing the card template in `renderUsers`.
- Swap the API for any public endpoint that returns a similar array.

---

## 🐞 Troubleshooting

- **Bullets/default fonts** → your CSS isn’t loading. Ensure `styles.css` is in the same folder and linked correctly. Hard-refresh (Ctrl/Cmd+Shift+R).
- **No users** → check DevTools (Console/Network) for request errors or CORS blocks.

---

## 📄 License

MIT — use it freely.