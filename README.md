# Ticketon Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Official documentation for **Ticketon** - A powerful Discord bot for ticket management and support systems.

🌐 **Live Docs**: [docs.ticketon.app](https://docs.ticketon.app)  
🤖 **Bot Website**: [ticketon.app](https://ticketon.app)

## 📖 About

This repository contains the documentation site for Ticketon, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). The documentation provides comprehensive guides, API references, and tutorials for using the Ticketon Discord bot.

## 🚀 Project Structure

```tree
.
├── public/            # Static assets (favicons, logos - served as-is)
├── src/
│   ├── assets/        # Images and media files (used in docs - processed)
│   ├── content/
│   │   └── docs/      # Documentation pages (.mdx)
│   └── content.config.ts
├── astro.config.mjs   # Astro configuration
├── package.json
└── tsconfig.json
```

Documentation pages are written in Markdown/MDX and placed in `src/content/docs/`. Each file becomes a route based on its filename.

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🤝 Contributing

We welcome contributions to improve the Ticketon documentation!

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed instructions on how to contribute, including:

- How to fork and clone the repository
- Making changes on the web or locally
- Code formatting requirements with Prettier
- How to submit a pull request

**Quick Start for Contributors**:

1. Fork the repository
2. Make your changes (web or locally)
3. Format with Prettier
4. Open a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

## 📝 Writing Documentation

- Documentation files are Markdown (`.md`) or MDX (`.mdx`)
- Place new pages in `src/content/docs/`
- Add frontmatter for page metadata (title, description, etc.)
- Use relative links for internal navigation
- Store images in `src/assets/` or `public/`

## 📚 Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Ticketon Website](https://ticketon.app)

## 📄 License

MIT License Copyright (c) 2026 The-LukeZ