---
sidebar_position: 7
---

# Changelog

## v2.1.0

### 🆕 Features

- Added Chat Widget Support inside the app with [Papercups](https://github.com/papercups-io/papercups)
- Now grade in education can be hidden by setting grade obtained as 0.
- Added a check for NaN number values in grade.
- Dates for a Project can be hidden with a "Hide Date" Checkbox. #75
- Compact Spacing profile now has horizontal margin matching the Normal Spacing Profile for better aesthetic #86

### ☑️ Patches

- GitHub Login has been (temporarily) removed.
- Body Text is being trimmed now. Extra spaces at the end of paragraph bodies are removed.
- Updated discord invites everywhere on the app to <https://discord.resuminator.in>
- Added Sponsor Us card on the Home Page Sidebar
- Added Help & Support Link to Home Page Sidebar
- Added Join Resuminator Discord Server CTA on the Sidebar

### 🐞 Bug Fixes

- Login Page Layout was fixed which was caused due to footer position
- Location Placeholder showed incorrect prompt
- Content overflow indication line was causing horizontal scroll
- Content was being replicated when a new card was created while one card was being edited.
- Body Text was hidden if too long.
- Additional Info for Projects was not being saved.

### 📁 Repository

- Added Bug Report Template
- Added Feature Request Template
- Added Sponsor Us Button
- Restricted Blank Issues

### 📦 Dependencies

- Upgraded to NextJS 11.1.1
- Webpack upgraded from v4 to v5 (with NextJS 11)
- Updated Typescript to v4.3.4
- Updated axios to v0.21.3
- Downgraded chrome-aws-lambda to v6

## v2.0.0 - Resuminator V2 🎉

A big major release for Resuminator introduces a ton of changes from the ground up. Rebuilt from scratch for improvement in performance and usability it fixes a lot of bugs from Version 1 (now legacy)

### 🆕 Features

- **Drag-n-Drop Layouts** - Each element inside your resume can be rearranged using simple drag and drop.
- **Easy Toggles** - Keep the data, but hide the content OR simply convert your single column resume into a two-column one with a click.
- **Enhanced Design Controls** - Add a colour that matches your personality. Alter spacing to fit more content.
- **Custom Sections** - Create your own custom section in few clicks and use it like any native section for your resume.
- **Multiple Resumes** - Multiple Resumes for a single account. Duplicate existing or create new.
- **One/Two Columns** - Toggle resume layout between one or two-column
- **Social Handles** - GitHub, GitLab, LinkedIn, Twitter, Youtube, Behance, Dribbble, etc. Or add your own custom section
- **Detailed Sections** - Researched sections to put in all the information you need.
- **Rich Text Editor** - With Markdown shortcuts and Grammarly Integration.
- **Profile Images** - All resumes come with native support to add photos
  And a lot more!

### 💯 Issues Fixed

- #11 Now you can toggle individual cards inside a particular section.
- #18 Drag and Drop now works with cards inside a section as well as on the cards.
- #45 A major update removes the friction of saving the resume as pdf but instead download the resume as a PDF.
- #50 Skill preview mode (Categories or Tags) are now being persisted.
- #56 Each action now has a visual feedback mechanism to notify of the saved changes
- #60 Setting 'Present' as the value in any date range caused a bug, which is now fixed.
- #64 Support for Custom Sections has been introduced to create multiple sections like About Me, Open Source Contributions etc.
- #66 Fixed with #60
- #43 Added Accessible Dark Mode by design

### 🙌🏼 Improvements

- #65 Option to remove sections is not present in front, and not inside any menu

- #61 Resuminator Landing Page gets a revamp with better descriptions

- #8 The name was not being saved which was provided during signup, which is now fixed by design

- #48 Flexible grading style options, out of 4, 10, 100

## Support

The software offers community support through a few mediums like Discord, Direct Messages, and Email. Refer to [this article](https://docs.resuminator.in/docs/support/) for more information.

## Legal

The software is licensed under GNU GPL-v3 and is GDPR & PCI-DSS 3.2 Compliant.

## v1 Releases

We do not track v1 releases anymore because version 2 was a complete rewrite after v1 and the previous code has been marked as legacy.

You can still find the previous release notices [here](https://github.com/resuminator/resuminator/tags)
