# Implementation Plan: Remove Replit Branding

## Overview

This plan systematically removes all Replit platform branding, credits, and dependencies from the romantic proposal website across four layers: HTML meta tags, source code comments, npm dependencies, and build configuration. Each task is designed to preserve website functionality while eliminating platform-specific references.

## Tasks

- [-] 1. Update HTML meta descriptions
  - Remove "built on Replit" from all meta description tags in `artifacts/girlfriend-proposal/index.html`
  - Replace with romantic proposal description: "A heartfelt romantic proposal expressing love and commitment through an interactive digital experience."
  - Update three meta tags: standard `description`, `og:description`, and `twitter:description`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 2. Remove Replit comments from UI components
  - [-] 2.1 Remove `@replit` comments from badge component
    - Remove all 5 instances of `// @replit` comment lines from `artifacts/girlfriend-proposal/src/components/ui/badge.tsx`
    - Preserve all explanatory comments that follow the `@replit` line
    - Maintain code indentation and formatting
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_
  
  - [ ] 2.2 Remove `@replit` comments from button component
    - Remove all 4 instances of `// @replit` comment lines from `artifacts/girlfriend-proposal/src/components/ui/button.tsx`
    - Preserve all explanatory comments that follow the `@replit` line
    - Maintain code indentation and formatting
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 3. Remove Replit packages from website dependencies
  - [~] 3.1 Remove Replit Vite plugins from website package.json
    - Remove `@replit/vite-plugin-cartographer` from devDependencies in `artifacts/girlfriend-proposal/package.json`
    - Remove `@replit/vite-plugin-dev-banner` from devDependencies
    - Remove `@replit/vite-plugin-runtime-error-modal` from devDependencies
    - Ensure valid JSON syntax is maintained
    - _Requirements: 3.1, 3.2, 3.3_

- [ ] 4. Update Vite configuration
  - [~] 4.1 Remove Replit plugin imports and usage from Vite config
    - Remove import statement: `import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';` from `artifacts/girlfriend-proposal/vite.config.ts`
    - Remove `runtimeErrorOverlay()` call from plugins array
    - Remove entire conditional block checking `process.env.REPL_ID` that includes cartographer and devBanner imports
    - Simplify plugins array to only contain `react()` and `tailwindcss()`
    - Preserve all other configuration options (base, resolve, root, build, server, preview)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_

- [ ] 5. Remove Replit SDK from root workspace
  - [~] 5.1 Remove Replit connectors SDK from root package.json
    - Remove `@replit/connectors-sdk` dependency from `package.json` at workspace root
    - Ensure valid JSON syntax is maintained
    - _Requirements: 5.1, 5.2_

- [~] 6. Checkpoint - Verify configuration changes
  - Ensure all configuration files have valid syntax
  - Ask the user if questions arise

- [ ] 7. Reinstall dependencies and verify
  - [~] 7.1 Clean and reinstall dependencies
    - Delete `pnpm-lock.yaml` if it exists at workspace root
    - Delete `package-lock.json` if it exists at workspace root
    - Run `pnpm install` from workspace root to regenerate lock files
    - Verify no `@replit/` packages exist in `node_modules`
    - _Requirements: 7.1, 7.2, 7.3, 7.4_
  
  - [~] 7.2 Verify TypeScript compilation
    - Run `pnpm run typecheck` from workspace root to ensure no TypeScript errors
    - Verify removed imports don't break type resolution
    - _Requirements: 6.3_
  
  - [~] 7.3 Verify production build
    - Run `pnpm run build` from `artifacts/girlfriend-proposal` directory
    - Ensure build completes successfully without errors
    - Verify removed plugins don't break build process
    - _Requirements: 4.9, 5.3, 6.3_
  
  - [~] 7.4 Verify development server
    - Run `pnpm run dev` from `artifacts/girlfriend-proposal` directory
    - Ensure development server starts successfully
    - Verify website renders all pages correctly
    - Verify all animations and interactive elements work
    - _Requirements: 6.1, 6.2, 6.4, 6.5_

- [~] 8. Final checkpoint - Confirm branding removal complete
  - Ensure all tests pass, ask the user if questions arise

## Notes

- All tasks involve direct code modifications and automated verification steps
- No property-based tests are included as the requirements involve static configuration checks and one-time procedural changes
- Tasks are ordered to minimize risk: HTML/comments first, then dependencies, then verification
- The development server verification (task 7.4) should be run manually by the user to confirm visual elements work correctly
- All file modifications preserve existing functionality while removing platform-specific references
- TypeScript and JSON syntax validation occurs at each modification step

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1", "2.1", "2.2"] },
    { "id": 1, "tasks": ["3.1", "5.1"] },
    { "id": 2, "tasks": ["4.1"] },
    { "id": 3, "tasks": ["7.1"] },
    { "id": 4, "tasks": ["7.2", "7.3"] },
    { "id": 5, "tasks": ["7.4"] }
  ]
}
```
