# GitHub Access Instructions
## Project: Text-to-Speech Assistant
**Document Type:** Repository Access & Write Permissions Guide  
**Prepared for:** Trainer / Reviewer  
**Date:** April 21, 2026

---

## 1. Repository Overview

| Field | Details |
|---|---|
| **Project Name** | tts-assistant |
| **Tech Stack** | Node.js, Express, Google Cloud TTS |
| **Repository URL** | `https://github.com/<your-username>/tts-assistant` |
| **Default Branch** | `main` |
| **Visibility** | Private |

---

## 2. Uploading the Project to GitHub

Follow these steps to push the project from your local machine:

### Step 1 — Initialize Git
```bash
cd tts-assistant
git init
git add .
git commit -m "Initial commit: TTS Assistant project"
```

### Step 2 — Create GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Enter repository name: `tts-assistant`
3. Set visibility to **Private**
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

### Step 3 — Push to GitHub
```bash
git remote add origin https://github.com/<your-username>/tts-assistant.git
git branch -M main
git push -u origin main
```

---

## 3. Granting Write Access to Trainer

Follow these steps to give your trainer **Write** access to the private repository:

### Step 1 — Open Repository Settings
1. Go to your repository on GitHub
2. Click the **Settings** tab (top menu)
3. In the left sidebar, click **Collaborators and teams**

### Step 2 — Add Collaborator
1. Click **Add people** button
2. Search for your trainer's **GitHub username** or email address
3. Select their account from the dropdown

### Step 3 — Set Permission Level
Choose the appropriate access level:

| Role | Permissions | Recommended? |
|---|---|---|
| **Read** | View code only | ❌ |
| **Triage** | Manage issues/PRs | ❌ |
| **Write** | Push code, manage branches | ✅ Yes |
| **Maintain** | Manage settings (no admin) | Optional |
| **Admin** | Full control | ❌ Avoid |

> ✅ Select **Write** access for your trainer.

### Step 4 — Send Invitation
1. Click **Add <username> to this repository**
2. GitHub sends an invitation email to the trainer
3. The trainer must **accept the invitation** to gain access

---

## 4. Branch Protection (Recommended)

To protect the `main` branch from accidental overwrites:

1. Go to **Settings → Branches**
2. Click **Add branch ruleset** (or **Add rule**)
3. Enter branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require at least 1 approval
   - ✅ Do not allow force pushes
5. Click **Save changes**

---

## 5. Sharing Repository Link with Trainer

Send the following details to your trainer:

```
Repository:   https://github.com/<your-username>/tts-assistant
Branch:       main
Access Level: Write
Stack:        Node.js + Express + Google Cloud TTS
```

---

## 6. Verifying Access

Your trainer can verify Write access by:
1. Accepting the GitHub invitation (check email)
2. Visiting the repository URL
3. Attempting to create a branch or push a small change

---

## 7. Revoking Access (After Review)

Once the project review is complete:
1. Go to **Settings → Collaborators and teams**
2. Find the trainer's username
3. Click the **⚙ gear icon → Remove**

---

*End of Document*
