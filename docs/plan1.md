# Plan 1 — Add and complete .gitignore

## Goal

Add a `.gitignore` file to the project so Git excludes unnecessary/generated/local-only files (e.g., node_modules/, OS files, IDE configs).

## Why

- Keeps the repository clean and professional
- Prevents committing large dependency folders like `node_modules/`
- Avoids OS/editor junk files (Windows + VS Code)

## Scope

Create or update the following files:

- `./.gitignore` (new or updated)

## Items to ignore

1. Node dependencies
   - `node_modules/`
2. Logs created by package managers / tooling
   - `npm-debug.log*`, `yarn-debug.log*`, `pnpm-debug.log*`
3. Windows OS junk files
   - `Thumbs.db`
4. VS Code workspace settings (IDE configs)
   - `.vscode/`
5. Environment variable files (if used)
   - `.env`

## Acceptance criteria

- A `.gitignore` file exists at project root
- The patterns above are included
- Running `git status` does not show ignored files as untracked (when they exist)

## Risks / Notes

- If any ignored files were committed before, `.gitignore` won’t remove them automatically.
  In that case, remove them from Git tracking with:
  `git rm -r --cached <path>`
