# Blog Design: Structured Input in AI Coding Tools

## Overview

A short English blog post (~800-1000 words) introducing the concept of structured input collection in AI coding tools, sharing hands-on test findings, and pointing toward Google A2UI as the future direction.

**Audience:** AI developers and AI coding tool users
**Tone:** Concise, educational, opinionated
**Narrative arc:** Concept introduction → Demo & findings → Future outlook
**Findings style:** Narrative (progressive, woven into prose)

## File to create/modify

- `app/blog/structured-input-ai-coding-tools/page.mdx` (scaffold already exists, will be rewritten)
- `public/images/structured-input-ai-coding-tools/` (thumbnail directory already exists)

## Structure

### 1. Introduction (~100 words)

Open with the contrast: AI coding agents are great at writing code, but when they need to collect user preferences, most degrade to "Type 1 for A, 2 for B" chat patterns. A few tools now offer structured input — clickable options, multi-select, preview panes. This post introduces the concept, shares test findings from a benchmark project, and looks ahead to an open standard (A2UI).

### 2. What Is Structured Input? (~150 words)

Define structured input vs plain text chat. Why it matters: reduces parsing errors, speeds up interaction, type safety, supports multi-select. Introduce the three tools:

- Claude Code `AskUserQuestion` (Production)
- Codex CLI `ask_user_question` (Plan Mode only)
- Cursor `AskQuestion` (Plan Mode only)

Include a **minimal** 3-column comparison table with only 3 rows:

| | Claude Code | Codex CLI | Cursor |
|---|---|---|---|
| Status | Production | Plan Mode only | Plan Mode only |
| Multi-select | Yes | No | Unintuitive |
| Preview pane | Yes (Markdown) | No | No |

No full feature matrix — readers should visit the repo for details.

### 3. The Benchmark: A Text RPG Character Creator (~120 words)

Introduce the companion repo: a TypeScript RPG character creator that requires the AI agent to ask 12 questions before writing code. Questions are organized into 4 zones that progressively stress each tool — from basic single-select to multi-select, long content, and option overflow. Each IDE has its own config file (CLAUDE.md, AGENTS.md, .cursorrules). Encourage readers to fork and try. Link to repo.

No Zone table — keep it brief.

### 4. What I Learned (~300 words, core section)

Narrative prose with progressive revelations:

1. **LLMs rewrite your prompts** — Even with carefully designed questions and options in the prompt, the final UI is LLM-generated. Claude Code summarizes/abbreviates long descriptions; Codex strips question text down to keywords only.

2. **Codex's creative multi-select workaround** — Since Codex doesn't support multi-select, it cleverly follows instructions by repeating single-select questions to meet minimum selection counts. But this creates a bug: if a question asks "pick 2-4", users can only ever select exactly 2 (the minimum), because the agent stops asking once the floor is met. Subsequent questions also smartly filter out previous selections.

3. **Plan Mode restriction** — Both Codex and Cursor only support structured input in plan mode. Community members are already requesting default mode support.

4. **Overall assessment** — Claude Code is the most complete (multi-select, preview, batching up to 4 questions) but capped at 4 options per question. Codex is flexible on option count but lacks multi-select. Cursor's multi-select is counterintuitive. All three are ad-hoc tool-calling implementations with no shared standard.

### 5. The Future: A2UI and Open Standards (~200 words)

Introduce Google A2UI: a declarative, platform-agnostic protocol for agent-driven UIs. Instead of agents sending "pick 1/2/3" text, they send UI specifications (date pickers, checkboxes, forms) that clients render from a trusted component catalog. Key properties: security (declarative data, not executable code), LLM-friendly (incremental rendering), framework-agnostic (web, Flutter, React, SwiftUI).

Connect back to the structured input problem: A2UI is what the current ad-hoc implementations are groping toward. Structured input will become the standard because it's more efficient, more accurate, reduces LLM interactions, and saves tokens. Link to A2UI blog post.

### 6. References

- Companion repo: `https://github.com/jianliao/agentic-ask-user-question`
- Claude Code tools reference
- Claude Code AskUserQuestion discussion (#10346)
- Reddit discussion
- Codex CLI proposal (#9926)
- Cursor forum discussion
- Google A2UI blog post

## What is NOT included

- Full feature comparison matrix (readers visit repo)
- Per-zone detailed test results
- Code snippets (repo has full code)
- Screenshots beyond hero image

## Technical details

- Format: MDX (Next.js App Router)
- Components: BlogHeader, FeedbackFooter, Image (next/image)
- Metadata: title, description, openGraph, twitter
- Hero image: imported locally from `./heroimage.png`
- Date: 2026-04-03

## Verification

- `npm run dev` renders at `/blog/structured-input-ai-coding-tools`
- No MDX build errors
- BlogHeader and FeedbackFooter render correctly
- Metadata present in page source
