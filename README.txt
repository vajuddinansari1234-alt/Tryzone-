# TRYZONE — Men's Clothing Storefront

This is a mobile-friendly static storefront designed for GitHub Pages.

## Files
- `index.html` — website structure
- `style.css` — responsive black/white streetwear design
- `script.js` — product filters, shopping bag and WhatsApp order flow
- `assets/tryzone-logo.png` — your supplied TRYZONE logo

## Publish with GitHub Pages (phone-friendly)
1. Sign in at https://github.com
2. Tap **+** → **New repository**.
3. Repository name: `tryzone-store`. Set it to **Public** and create it.
4. Open the repository → **Add file** → **Upload files**.
5. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder (with `tryzone-logo.png` inside). If mobile upload does not allow a folder, create `assets` using Add file → Create new file and upload the logo separately, or use GitHub's web upload flow in Chrome desktop mode.
6. Commit the files.
7. Open **Settings** → **Pages** → under Build and deployment choose **Deploy from a branch** → Branch `main`, folder `/ (root)` → **Save**.
8. Wait for GitHub Pages to publish. Your public address will look like `https://YOUR-USERNAME.github.io/tryzone-store/`.

## Important before launch
- Replace `91XXXXXXXXXX` in `script.js` with your business WhatsApp number including country code, digits only (India: 91 followed by your 10-digit number).
- Replace sample product names/prices with your actual products. Product images in this starter are CSS mockups, not real product photos.
- This static version supports browsing, category filters, a shopping bag, and WhatsApp order enquiry. It does **not** yet collect/store orders or process online payments. For real online payments (UPI/cards) and confirmed COD orders, connect a payment gateway such as Razorpay and a secure backend/order database. Never put secret payment keys in GitHub files.
- Add your real contact details, shipping/return policy, privacy policy, GST/business details as applicable before taking customer orders.
