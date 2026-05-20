# EK MMD 4. Sem Eksamen - Argilla
- Group name: 404 Not Found

- Group members names:
  - Bjørn Sanboli
  - Jonathan Skadhauge-Jensen

### Running dev server

In order to run the development server, do:

```bash
npm run dev
```
Then:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

**Language throughout project:**

- English

### Branching Strategy:

**Branches:**

- Branches will aim to stay focused on their intended scope and avoid unrelated changes.

- In cases where merge conflicts cannot be resolved individually, they will be reviewed as a team.

### Naming Conventions:

| Category | Convention | Example |
| -------- | ---------- | ------- |
| App folders (`app/*` or `app/src/(pages)/page`) | lowercase | `app/hooks` |
| Component folders | kebab-case | `/components/hero-banner` |
| Component files | PascalCase | `HeroBanner.jsx` |
| Component functions | PascalCase | `HeroBanner()` |
| Helper functions | camelCase | `formatDate()` |
| Hooks | `use` + camelCase | `useAuth()` |
| Props / variables | camelCase | `productName` |
| Constants | UPPER_SNAKE_CASE | `API_URL`, `ENV_KEY` |


## Commit + Branch Naming

Will aim to be kept as brief as possible, first part of each will include:

- add - `text`
- remove - `text`
- change - `text`
- fix - `text`

### Commit Messages

> **Example:** _<br>"change - `Footer.jsx` location"<br>"add - Footer, HeaderNav, globals styling"_

### Branch Naming

**Convention:** snake-case

> **Example:** _<br>"add-`layout-elem`"<br>"add-`globals-styling`"_

## Folder Structure:

**Layout Example:**
```bash
├── app
│   ├── components
│      ├── hero-banner
│      │   └── HeroBanner.jsx
│      │
│      ├── layouts
│      │   ├── HeaderNav.jsx
│      │   └── Footer.jsx
│      │
│      ├── ui
│      │   ├── btns
│      │   │   ├── ActionBtn.jsx
│      │   │   └── LinkBtn.jsx
│      │   ├── filter
│      │       └── FilterElem.jsx
│      │ 
```
