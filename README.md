# brijeshpal.github.io

Source code for my personal academic homepage.

**Live site:** [https://brijeshpal.github.io](https://brijeshpal.github.io)

---

## About Me

I am **Brijesh Kumar**, a PhD scholar in the Department of Information Technology at the **Indian Institute of Information Technology Allahabad (IIITA)**, supervised by Prof. S. Venkatesan and Prof. Krishna Pratap Singh.

My research applies **AI/ML to cybersecurity**, with a focus on **ransomware detection and defense**. I also build realistic behavioral datasets by running ransomware samples in controlled sandbox environments.

---

## What's on the Site

| Section | Contents |
|---------|----------|
| **About** | Short research summary |
| **Research Interests** | AI/ML for cybersecurity, LLMs and agentic AI for security, machine learning and deep learning |
| **Education** | PhD (IIIT Allahabad), M.Sc. (BHU), B.Sc. (Hons.) Computer Science (University of Delhi) |
| **Publications** | Conference papers with links |
| **Teaching** | Teaching Assistant courses at IIIT Allahabad |
| **Academic Service** | Reviewing and workshop roles |
| **Awards** | Qualifications and recognitions |

The sidebar shows my photo, affiliation, and links to email, LinkedIn, GitHub, ORCID and Google Scholar.

---

## Repository Structure

```
.
├── index.html        # The whole website (HTML + CSS in one file)
├── assets/
│   └── Profilee.jpg  # Profile photo
└── README.md
```

---

## Built With

- Plain **HTML** and **CSS**, with no frameworks or build step
- [Lato](https://fonts.google.com/specimen/Lato) font from Google Fonts
- [Font Awesome 6](https://fontawesome.com/) icons for contact links
- **Responsive layout:** two columns on desktop, single column on mobile (below 700px)
- Hosted free on **GitHub Pages**

---

## Run Locally

Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/brijeshpal/brijeshpal.github.io.git
cd brijeshpal.github.io
```

Or start a small local server so all paths behave exactly as on the live site:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

---

## Updating the Site

All content lives in `index.html`. To make a change:

1. Edit the relevant section in `index.html`. For example, add a new `<li>` under **Publications** or **Teaching**.
2. To change the profile photo, replace `assets/Profilee.jpg`, keeping the same name. GitHub Pages is case-sensitive, so the file name must match exactly.
3. Update the **"Last updated"** date in the footer.
4. Commit and push:

   ```bash
   git add .
   git commit -m "Update homepage"
   git push
   ```

GitHub Pages republishes the site automatically, usually within a minute or two.

---

## Deployment

The site is served by **GitHub Pages** from the `main` branch root. To check or change this, go to **Settings → Pages** in the repository.

---

## Contact

- Email: [brijeshpal8878@gmail.com](mailto:brijeshpal8878@gmail.com) · [rsi2025002@iiita.ac.in](mailto:rsi2025002@iiita.ac.in)
- LinkedIn: [brijeshkumar8878](https://www.linkedin.com/in/brijeshkumar8878)
- GitHub: [brijeshpal](https://github.com/brijeshpal)
- ORCID: [0009-0001-0954-9740](https://orcid.org/0009-0001-0954-9740)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=0o3dMi0AAAAJ&hl=en)
