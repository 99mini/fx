<div align="center">

![coverage](./badges/coverage.svg)
![branches](./badges/branches.svg)
![functions](./badges/functions.svg)
![lines](./badges/lines.svg)
![statements](./badges/statements.svg)

</div>

# Functional Extensions (Fx)

# File Structure

- `src/`
  - `lazy/`: Lazy evaluation functions
  - `evaluate/`: Eager evaluation functions
  - `Fx.ts`: Main entry point

# Export

- `Fx`: Fx class implements `Iterable<T>`
- `lazy`: Lazy evaluation pure functions
- `evaluate`: Eager evaluation pure functions

# Dev

## Install

```bash
pnpm install
```

## Test

```bash
pnpm run test:watch
pnpm run test:coverage
```

# Contribution

## Commit and Pull Request Conventional Commits

- see: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- refer to: [commitlint](https://commitlint.js.org/), `type-enum` in [commitlint.config.js](./commitlint.config.js)

## Branch Strategy

- `main`: production branch
- `dev`: development branch

1. `git checkout dev`
2. `git pull origin dev`
3. `git checkout -b feat/your-feature-name`
4. `git add .`
5. `git commit -m "feat: your feature name"`
6. `git push origin feat/your-feature-name`
7. `create pull request feat/your-feature-name -> dev`
8. `squash merge pull request feat/your-feature-name -> dev`
9. `create pull request dev -> main`
10. `rebase merge pull request dev -> main`
