# Plan 2 - Create .gitignore appropriate for project stack

## Goal

Add a .gitignore file to exclude unnecessary, system-generated, and editor-specific files from version control.

## Why

- Prevent committing OS and IDE junk files
- Keep the repository clean and professional
- Follow Git best practices and course requirements

## Stack Considerations

- HTML / CSS / JavaScript
- Visual Studio Code
- Windows OS
- GitHub Pages deployment
- Optional future Node.js usage

## Files and Folders to Ignore

1. Dependency directories
   - node_modules/
2. Logs
   - npm-debug.log\*
   - yarn-debug.log\*
   - pnpm-debug.log\*
3. OS-generated files (Windows)
   - Thumbs.db
4. IDE configuration files
   - .vscode/
5. Environment variable files
   - .env

## Scope

- Create a new .gitignore file in the project root

## Acceptance Criteria

- .gitignore exists at the root of the repository
- Listed files/folders are excluded from Git tracking
- Git status does not show ignored files when present
