# Digital Services Studio

A responsive, premium-dark landing page built with React and Vite. It includes five service cards, a mobile navigation, Instagram profile link, and a project enquiry form that opens a prefilled WhatsApp message.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually http://localhost:5173.

## Publish with GitHub Pages

This project is configured to publish from the public GitHub repository digital-services-studio.

1. Upload the project files to the repository root, including the hidden .github folder and vite.config.js.
2. In the repository, open Settings → Pages and set the publishing source to GitHub Actions.
3. Open the Actions tab and wait for Deploy site to GitHub Pages to finish successfully.
4. Your site will be available at https://sonubist58-ctrl.github.io/digital-services-studio/.

Future pushes to the main branch automatically rebuild and publish the site. The Vite base path in vite.config.js is set for this repository name; if you rename the repository, update that path too.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site into dist/.

## Contact links

- WhatsApp: 916305259735 (international format without +)
- Instagram: @bistvlog_735 — https://www.instagram.com/bistvlog_735/

The enquiry form opens WhatsApp with the visitor's details prefilled. They choose whether to send it; the website does not store form data.
