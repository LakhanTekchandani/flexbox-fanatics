# India Unveiled

Build the first complete visual prototype of a premium, highly polished website called:

THE INDIA ATLAS

Core Concept

The India Atlas is an immersive digital atlas that allows users to visually explore India through its states, culture, heritage, landscapes, traditions, people, and unique regional identity.

This is NOT a government portal, tourism booking website, generic India information website, or dashboard.

The primary goal is to create a premium UI/UX competition-level visual experience where the website itself feels like an interactive digital atlas.

The project will later be heavily refined manually, so establish a strong, clean, scalable design foundation rather than filling the website with excessive features.

DESIGN GOAL

The website should feel:

Premium

Editorial

Cinematic

Modern

Interactive

Sophisticated

Indian without being cliché

Visually memorable

Competition-level

The visual quality should feel closer to a premium creative agency / award-style website than a typical college project.

DO NOT create a generic SaaS landing page.

DO NOT use the standard:
Hero → 3 cards → statistics → testimonials → CTA
pattern unless it genuinely fits the experience.

The design should feel like a digital exhibition / interactive atlas.

IMPORTANT DESIGN REFERENCES

Use the following references for inspiration and implementation direction:

MotionSites.ai

Study the quality of motion, visual transitions, cinematic presentation, and modern web composition.

Take inspiration from the sophistication of interactions.

Do NOT copy any specific website.

UI UX Pro Max Skill

If the environment supports installing/using skills, install and use the UI UX Pro Max skill before designing.

Use its design-system, UX, typography, color, spacing, accessibility, and anti-pattern guidance.

Avoid random AI-generated design decisions.

Generate a coherent design system first.

tweakcn

Use it as inspiration/reference for creating a refined theme and consistent design tokens.

Do not blindly copy an existing theme.

shadcn/ui

Use shadcn/ui principles and components where appropriate.

Components should remain highly customizable and visually integrated with our design system.

Do not make the website look like an untouched shadcn template.

21st.dev

Use it as inspiration for premium modern React components and interactions.

Only use components that genuinely improve the experience.

Do not add random fancy components just because they look impressive.

The references are sources of inspiration and component quality—not templates to copy.

DESIGN SYSTEM

Create a coherent design system before implementing the pages.

Color Direction

Primary background:

Warm ivory / premium off-white

Deep charcoal / near-black for contrast

Accent:

Refined saffron/orange

Deep Indian green as a secondary accent

Use the Indian tricolor very subtly.

IMPORTANT:
Do NOT make the entire website orange, white and green.

Avoid:

excessive flags

Ashoka Chakra decorations everywhere

patriotic poster aesthetics

cheap gradients

excessive glassmorphism

The Indian identity should come through imagery, typography, composition, subtle color accents, patterns, and storytelling.

TYPOGRAPHY

Use a premium editorial typography system.

Headings should be:

Large

Bold

Elegant

Highly readable

Strong visual hierarchy

Use a modern sans-serif/editorial combination where appropriate.

Typography should feel intentional rather than default.

Do not use excessive font variations.

VISUAL LANGUAGE

Use:

Large typography

Strong whitespace

Editorial layouts

Asymmetrical compositions where appropriate

High-quality imagery

Large immersive sections

Subtle borders

Refined cards

Image overlays

Smooth transitions

Carefully controlled motion

Avoid:

overcrowded layouts

excessive cards

excessive rounded containers

random gradients

generic AI aesthetics

excessive shadows

excessive glassmorphism

unnecessary icons

WEBSITE STRUCTURE

Create the first prototype with these major sections:

01 — NAVBAR

Minimal premium navigation.

Brand:

THE INDIA ATLAS

Navigation:

Explore
States
Culture
Heritage

Primary CTA:

Explore Atlas

Navbar should be clean and elegant.

On scroll, it may transform subtly rather than remaining visually identical.

02 — HERO

This is the most important first impression.

Create a cinematic hero.

Main headline:

THE INDIA ATLAS

Supporting statement:

28 States. 8 Union Territories. Countless Stories.

Short supporting copy:

A visual journey through the places, people, cultures and stories that make India extraordinary.

Primary CTA:

Explore the Atlas

Secondary interaction:

Scroll / Discover

The hero should visually establish the concept immediately.

Consider a large India silhouette/map or carefully composed Indian landscape imagery.

Do NOT create a generic centered SaaS hero.

Use strong editorial composition.

The hero should feel impressive when viewed on a laptop/projector during a competition presentation.

03 — INDIA OVERVIEW

Introduce India as a visual entity.

Possible heading:

ONE LAND.
MANY WORLDS.

Create an editorial composition combining:

India map/silhouette

short introduction

geographic/cultural visual cues

subtle statistics

Do not turn this into a boring statistics dashboard.

The section should transition naturally from the hero into exploration.

04 — INTERACTIVE INDIA MAP

This is the signature feature of the website.

Create a large interactive India map.

Requirements:

Display India as a visually prominent map

States should be individually distinguishable

Hovering a state should create a clear but elegant visual response

Selected state should receive a strong visual highlight

Display state information in a nearby panel

Smooth transitions

Avoid clutter

Example state panel:

RAJASTHAN

Region:
North-West India

Known for:
Heritage · Desert · Crafts · Folk Culture

CTA:

Explore Rajasthan

The map should feel like a premium interactive atlas rather than a political infographic.

IMPORTANT:
The map interaction should be architected cleanly so it can later be improved with more detailed state data.

05 — STATE EXPLORER

Create a visually rich state exploration section.

Instead of displaying 28 boring cards, create an editorial discovery layout.

Show selected/featured states with:

state name

region

signature visual

cultural highlights

short description

Explore button

Use an elegant grid or asymmetric editorial layout.

The section should encourage exploration.

06 — CULTURE

Create a visually immersive cultural section.

Heading direction:

CULTURE HAS MANY LANGUAGES.

Show selected aspects such as:

Dance

Music

Art

Craft

Festivals

Traditions

Use large imagery and editorial composition.

Do not create six identical cards.

Each item should feel like part of a visual story.

07 — HERITAGE / LANDSCAPES

Create a large image-driven section showcasing India's visual diversity.

Potential categories:

Himalayas
Deserts
Coasts
Forests
Historic Architecture

Use strong image composition and subtle motion.

The objective is to make the user want to continue scrolling.

08 — INDIA THROUGH NUMBERS

Create a refined data visualization section.

Possible information:

28 States
8 Union Territories
22+ Officially Recognized Scheduled Languages
7000+ km Coastline

Use only appropriate/static illustrative information.

This section should feel editorial, not like an analytics dashboard.

Use typography and animation rather than a collection of generic statistic cards.

09 — FINAL EXPERIENCE / CTA

End the website emotionally.

Possible headline:

EXPLORE INDIA.
ONE STORY AT A TIME.

Supporting copy:

Every state has a story.
Every region has an identity.
Every journey reveals something new.

CTA:

Explore the Atlas

The ending should feel like the completion of a visual journey.

MOTION & INTERACTION

Use motion carefully.

The animation language should be:

Smooth

Cinematic

Purposeful

Fast enough for usability

Premium

Use animations for:

hero entrance

typography reveal

image reveal

section transitions

map hover

state selection

card hover

number counters

subtle parallax where appropriate

Avoid:

excessive bouncing

random animations

animation on every element

long loading animations

distracting effects

Motion should improve storytelling, not show off the library.

RESPONSIVENESS

Design desktop-first because the website will primarily be presented on a laptop/projector.

But make it fully responsive for:

Desktop

Laptop

Tablet

Mobile

The interactive map must have a carefully designed mobile fallback.

Do NOT simply stack every desktop element vertically.

TECHNICAL DIRECTION

Use:

React

Tailwind CSS

shadcn/ui where appropriate

Framer Motion or an appropriate motion library

SVG for the India map where possible

Keep the architecture modular.

Use reusable components.

Keep content/data separated from UI components.

Do not introduce unnecessary backend functionality.

This is primarily a frontend visual experience.

COMPONENT PHILOSOPHY

IMPORTANT:

Do NOT invent dozens of components.

We will manually review the website later and selectively replace/refine components using shadcn/ui, 21st.dev, custom components, and other references.

Therefore:

Keep components modular

Keep styling consistent

Avoid duplicated code

Make sections easy to modify

Keep design tokens centralized

Avoid hardcoding styles everywhere

The first prototype should provide a strong foundation for later refinement.

IMAGE DIRECTION

Use high-quality Indian imagery.

Prioritize:

landscapes

architecture

culture

crafts

people

regional environments

Images should feel cinematic/editorial.

Avoid obvious low-quality stock photography.

Avoid excessive images.

Each image should have a purpose.

If temporary image placeholders are required, structure the component so the final images can easily be replaced later.

ACCESSIBILITY & QUALITY

Maintain:

readable contrast

semantic HTML

keyboard-friendly interactions

meaningful hover/focus states

responsive typography

accessible buttons

sensible alt text

Do not sacrifice usability for visual effects.

IMPORTANT ANTI-PATTERNS

Absolutely avoid:

❌ Generic AI-generated landing page
❌ Generic SaaS UI
❌ Government portal appearance
❌ Tourism booking website
❌ Excessive tricolor usage
❌ Excessive glassmorphism
❌ Excessive rounded cards
❌ Random gradients
❌ Huge number of cards
❌ Fake testimonials
❌ Fake user reviews
❌ Fake login/signup
❌ Unnecessary dashboard
❌ Unnecessary backend
❌ Unnecessary forms
❌ Excessive text
❌ Stock-template feeling

The website should look intentionally designed.

FINAL CREATIVE DIRECTION

Think:

Interactive digital atlas + premium editorial magazine + modern creative agency website + Indian cultural identity.

The user should feel like they are exploring India, not reading about India.

The first prototype should prioritize:

Visual impact

Strong typography

Excellent spacing

Image quality

Interactive India map

Smooth transitions

Clear storytelling

Consistent design system

Do not overbuild functionality.

Build a polished foundation that we can later refine section-by-section.

Before implementation, establish the design system and maintain it consistently across the entire website.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
