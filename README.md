# Portfolio Website

This is a simple, modular portfolio website designed for easy updates and deployment on GitHub Pages.

## How to Update Your Portfolio

The portfolio content is managed in the `js/data.js` file. You can edit this file to change the information displayed on the website.

### Editing `js/data.js`

Open `js/data.js` in a text editor. You will see a JavaScript object called `portfolio`.

- **`name`**: Your name.
- **`main_specialty`**: Your main specialty or title.
- **`description`**: The "About Me" section content.
- **`contact`**: Your contact information.
- **`projects`**: A list of your projects. To add a new project, copy one of the existing project blocks and modify the content.
- **`experience`**: A list of your work or research experiences.

## How to Deploy on GitHub Pages

1.  **Create a GitHub Repository**: Create a new repository on GitHub.
2.  **Upload Files**: Upload all the files from one of the prototype folders (e.g., `prototype1`) to your new repository. Make sure to also upload the `js` folder and its contents.
3.  **Enable GitHub Pages**:
    *   In your repository, go to `Settings` -> `Pages`.
    *   Under `Branch`, select `main` (or `master`).
    *   For the folder, select `/ (root)`.
    *   Click `Save`.
4.  **Your site is live!**: Your portfolio will be available at `https://<your-username>.github.io/<your-repository-name>/`.

## Choosing a Prototype

This repository contains two prototypes in the `prototype1` and `prototype2` folders.

- `prototype1`: A classic, professional design.
- `prototype2`: A modern, sleek design.

To use a prototype, copy the contents of its folder (including the `css` folder and `index.html`) into the root of your repository.
