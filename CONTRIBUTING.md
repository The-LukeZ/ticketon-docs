# Contributing to Ticketon Documentation

Thank you for your interest in contributing to the Ticketon documentation! We welcome contributions from the community to help make our docs better.

## 📋 Prerequisites

Before you start contributing, make sure you have:

- A GitHub account
- [pnpm](https://pnpm.io/) installed (if contributing locally)
- [Prettier](https://prettier.io/) extension for your code editor (Will be available via a command in the future)
- Basic knowledge of Markdown/MDX

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top right of the [Ticketon repository](https://github.com/YOUR_ORG/ticketon) to create your own copy of the project.

### 2. Make Your Changes

You can contribute either directly on GitHub or by working locally on your computer.

#### Option A: Edit on GitHub (Web)

Perfect for quick fixes and small changes:

1. Navigate to the file you want to edit in your fork
2. Click the pencil icon (✏️) to edit
3. Make your changes directly in the browser editor
4. Scroll up to commit your changes

#### Option B: Edit Locally (PC)

Recommended for larger changes or new pages:

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ticketon-docs.git
cd ticketon-docs

# Install dependencies
pnpm install

# Create a new branch for your changes
git checkout -b docs/your-feature-name

# Start the development server
pnpm dev
```

The dev server will start at `http://localhost:4321`. You can now make changes and see them live!

### 3. Format Your Code

**⚠️ Important**: All code must be formatted with Prettier before submitting (Unless you only made a minor change in the web).

- Install the Prettier extension in your code editor (VS Code, etc.)
- Configure your editor to format on save (recommended)
<!-- - Or manually format all files: `npx prettier --write .` -->

### 4. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "docs: add guide for setting up ticket categories"
git push origin docs/your-feature-name
```

**Commit Message Format**:

- `docs: <description>` - Documentation changes
- `fix: <description>` - Bug fixes in docs
- `chore: <description>` - Maintenance tasks

### 5. Open a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template with:
   - A descriptive title (e.g., "docs: add guide for setting up ticket categories")
   - Clear description of your changes (what, why, how)
   - Why the changes are needed
   - Screenshots of the thing running locally (if applicable and not from the web)
4. Submit the PR and wait for review

## 📝 Writing Guidelines

### Documentation Style

- **Be Clear**: Write in simple, easy-to-understand language (Use [DeepL Write](https://www.deepl.com/write) if needed)
- **Be Concise**: Get to the point quickly, but don't skip important details
- **Be Consistent**: Follow the style and formatting of existing docs
- **Use Examples**: Include code examples and screenshots where helpful

### File Structure

- Place new pages in `src/content/docs/` and its subdirectories
- Use descriptive filenames: `setting-up-tickets.mdx` not `page1.mdx` because the filenames are the URL path (e.g. `src/content/docs/setting-up-tickets` becomes `https://docs.ticketon.app/setting-up-tickets`)
- Organize related pages in subdirectories

### Frontmatter

Every documentation page should include frontmatter:

```yaml
---
title: Page Title
description: Brief description of the page content
---
```

[See the official Astro Starlight docs for more on frontmatter](https://starlight.astro.build/reference/frontmatter/)

### Internal Links

For linking to other documentation pages, use relative path links:

```mdx
[Link Text](../../relative-path-to-page)
```

You might find absolute links to other pages like `[Blabla](/page1)` to link to page `/page1` path in existing docs. If you come across them, please change them to relative links when you edit those pages.

### External Links

For external links, import the `Link` astro component and use it like this:

```mdx
import Link from "../../../components/Link.astro"; // Relative filepath

<Link href="https://external-site.com">External Site</Link>
```

### Image embedding

Import the `ImageWrapper` component and use it like this:

```mdx
import ImageWrapper from "../../../components/ImageWrapper.astro"; // Relative filepath

<ImageWrapper>
  ![Alt text for the image](../../assets/docs/path-to-image.webp)
</ImageWrapper>
```

### Markdown Tips

- Use proper heading hierarchy (h1 → h2 → h3)
- Add code blocks with language identifiers: ` ```javascript `
- Use relative links for internal pages: `[Guide](./guide)`
- Store images in `src/assets/` and reference them in docs
- Use public/ for static assets like logos

### Code Examples

When adding code examples:

- Keep them realistic and functional
- Add comments to explain complex parts
- Use syntax highlighting with language tags
- Test your examples before submitting

## 🧪 Testing Your Changes

Before submitting a PR:

1. **Build the site**: Run `pnpm build` to ensure no errors
2. **Check links**: Verify all internal links work correctly
3. **Preview**: Use `pnpm preview` to see the production build
4. **Proofread**: Check for typos and grammar issues

## 🎯 What to Contribute

Not sure where to start? Here are some ideas:

- Fix typos or grammatical errors
- Improve existing explanations
- Add missing documentation
- Create tutorials and guides
- Add code examples
- Improve navigation and organization
- Translate documentation (if supported)

## ❓ Questions?

If you have questions about contributing:

- Check existing documentation and issues
- Join our [Discord community](https://discord.gg/ticketon)
- Open a discussion on GitHub

## 📜 Code of Conduct

Be respectful and constructive in all interactions. We're all here to make Ticketon better!

---

Thank you for contributing to Ticketon! 🎉
