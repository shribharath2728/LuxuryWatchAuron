# Requirements Document

## Introduction

This specification defines requirements for improving the AURON luxury watch website's visual design and interaction patterns. The improvements include modernizing the color palette from a gold/obsidian scheme to a more contemporary aesthetic, removing the cursor-tracking spotlight effect to allow natural video playback, fixing scroll-based video behavior to display full-screen videos instead of scaled miniatures, and correcting various alignment inconsistencies. The project targets the hero section, showcase section, and global design tokens built with Next.js, React, Framer Motion, and Tailwind CSS.

## Glossary

- **Color Token**: A CSS custom property defined in globals.css that represents a specific color value used consistently throughout the design system
- **Cursor Spotlight Effect**: The visual effect where a radial gradient mask follows the cursor, revealing a bright video layer through the spotlight while keeping the background dark
- **RevealLayer**: React component that implements the cursor-tracking spotlight mask using Canvas API and CSS masking
- **Showcase Section**: The middle section of the homepage displaying featured watch with video background, title, and statistics
- **ShowcaseSection**: React component implementing scroll-based parallax and scale animations on the showcase video
- **Hero Section**: The full-viewport header section featuring the main headline, spotlight effect, and call-to-action buttons
- **Video Scroll Behavior**: The animation applied to videos when the user scrolls past them, including scale transformations and border-radius changes
- **Miniplayer Animation**: The visual effect where a video scales down from full-size to a smaller size while scroll position increases
- **Alignment Inconsistency**: Misalignment between text, buttons, or elements across different viewport sizes or sections
- **Global Color Scheme**: The set of all color tokens used throughout the entire website
- **Design Token**: Configuration value that defines visual properties like spacing, sizing, colors, and typography

## Requirements

### Requirement 1: Color Scheme Modernization

**User Story:** As a design-conscious visitor, I want the website to feature a contemporary color palette, so that the luxury brand feels current and refined rather than heavily gold-focused.

#### Acceptance Criteria

1. THE Color_System SHALL define a primary color palette that replaces the current heavy gold scheme (#c9a84c, #e4cc7a, #a68835)
2. WHEN the color tokens are updated in globals.css, THE primary accent color SHALL be chosen from a contemporary luxury palette (examples: deep navy, slate, refined charcoal with subtle accents)
3. THE Color_System SHALL retain at least one accent color for interactive elements and highlights
4. WHERE the gold color was previously used for text, buttons, borders, or accents, THE Color_System SHALL substitute it with the new primary palette while maintaining visual hierarchy
5. WHILE colors are being applied throughout components, THE Color_System SHALL ensure sufficient contrast ratios between text and backgrounds for accessibility (minimum WCAG AA standard)
6. THE Color_System SHALL define secondary and neutral colors that work cohesively with the new primary palette
7. WHEN components reference the old color tokens, THE Color_System SHALL make them use the new tokens from the updated globals.css

#### Implementation Notes

- The new color palette should maintain the luxury positioning of the brand
- All gold references (#c9a84c) should be systematically replaced
- The updated palette should work across light text on dark backgrounds (current design pattern)
- Consider defining new CSS custom properties for better semantic naming (e.g., --color-primary-accent instead of --color-gold)

---

### Requirement 2: Remove Cursor Spotlight Effect from Hero Section

**User Story:** As a developer maintaining the codebase, I want the Hero section to remove the complex cursor-tracking spotlight effect, so that the code is simpler and videos play naturally without interactive masking.

#### Acceptance Criteria

1. WHEN the Hero component is rendered, THE RevealLayer component SHALL be completely removed and no longer used
2. THE Hero section SHALL no longer track cursor position or calculate spotlight radius
3. WHEN the Hero loads, THE video SHALL display without a cursor-tracking mask or radial gradient effect
4. THE Video Layer (dark, desaturated video) SHALL display as the single video source instead of being masked by the spotlight
5. IF the cursor moves anywhere on the page, THE video SHALL remain unaffected and display the same appearance
6. THE useEffect hook for cursor position tracking in Hero.tsx SHALL be removed or disabled
7. WHERE RevealLayer.tsx was previously imported and used in Hero.tsx, THE import statement and component usage SHALL be removed

#### Implementation Notes

- This simplifies the Hero section significantly by removing the RevealLayer component
- The base video layer with brightness(0.2) and saturate(0.3) will become the primary visual
- Removes the Canvas masking logic entirely
- The grain overlay and vignette effects can remain as they enhance the aesthetic without being interactive

---

### Requirement 3: Fix Video Scroll Behavior in Showcase Section

**User Story:** As a visitor scrolling through the website, I want videos to display at full-screen when scrolled to, so that I can view watch demonstrations in their full glory rather than as scaled-down miniatures.

#### Acceptance Criteria

1. WHEN the user scrolls to the Showcase section, THE video SHALL display at full dimensions without scale transformations
2. THE scale animation that transforms the video from 0.92 to 1 based on scrollYProgress SHALL be removed
3. THE borderRadius animation that transforms from 40px to 0px based on scrollYProgress SHALL be removed
4. WHILE the user scrolls past the Showcase section, THE video SHALL maintain its full-size appearance
5. THE video container SHALL have borderRadius set to 0 (no rounded corners) to display as a standard rectangular video element
6. IF media queries indicate a mobile viewport (sm breakpoint or smaller), THE video SHALL still display at full dimensions
7. WHEN the showcase video is visible in the viewport, THE video SHALL play its loop without any scale or size-related scroll animations

#### Implementation Notes

- Remove the `useTransform` hooks for `scale` and `borderRadius` from ShowcaseSection.tsx
- Remove the `style={{ scale, borderRadius }}` from the motion.div wrapper
- Keep other animations like `textY` and `videoY` parallax effects if desired for visual interest
- The video will appear more prominent and professional when not shrinking as users scroll

---

### Requirement 4: Correct Alignment Issues Across Components

**User Story:** As a designer reviewing the website, I want all text, buttons, and elements to be properly aligned across different screen sizes, so that the design appears polished and professional on all devices.

#### Acceptance Criteria

1. THE Hero Section heading (h1 with "Precision meets performance") SHALL be centered horizontally and positioned consistently across mobile, tablet, and desktop viewports
2. THE Hero Section call-to-action button ("Explore Collection") at the bottom-right SHALL maintain proper spacing from viewport edges on all screen sizes
3. THE Showcase Section heading ("Born from the art of speed") SHALL be centered and aligned identically to the Hero heading
4. THE Showcase Section video overlay text and "View Details" button SHALL be properly aligned within the video container without overlap or misalignment
5. WHEN the viewport is mobile (less than 640px), THE bottom-right CTA block in Hero SHALL stack properly without horizontal overflow
6. THE Stats grid in the Showcase Section (120m Water Resistance, etc.) SHALL be properly distributed across columns with consistent spacing on all breakpoints
7. WHERE padding or margins are inconsistent between sections, THE alignment utility classes (flex, justify-center, items-center, etc.) SHALL be applied consistently

#### Implementation Notes

- Review all responsive breakpoints (sm:, md:, lg:, xl:)
- Ensure margin and padding values are proportional across breakpoints
- Verify text centering and element positioning with flexbox utilities
- Check for overflow issues on constrained viewports
- Validate that z-index layering doesn't cause alignment visual issues

---

### Requirement 5: Update Design Tokens in globals.css

**User Story:** As a developer, I want the color tokens in globals.css to be updated to match the new design system, so that all components automatically use the contemporary color palette.

#### Acceptance Criteria

1. THE globals.css file SHALL define new CSS custom properties that replace the gold-centric tokens
2. WHERE --color-gold is currently defined as #c9a84c, THE globals.css SHALL update this variable (or define a new one) with the new primary accent color
3. WHERE --color-gold-light (#e4cc7a) and --color-gold-dark (#a68835) are used, THE globals.css SHALL update these variants for the new color
4. THE globals.css file SHALL ensure all existing color tokens are accounted for and aligned with the new palette
5. IF any components hardcode color values instead of using tokens, THEN those hardcoded values SHALL be identified for migration to token-based colors
6. THE animation definitions in globals.css that reference gold colors (shimmer, pulse-gold gradients) SHALL use the new token colors

#### Implementation Notes

- Consider backwards compatibility or deprecation comments for old tokens
- Ensure the new palette is complete (primary, secondary, neutrals, accents)
- Test that the shimmer and gradient effects work well with the new colors
- Update all CSS custom property references

---

### Requirement 6: Ensure Component Color References Use Updated Tokens

**User Story:** As a maintainer of the codebase, I want all component files to consistently reference the updated color tokens, so that the design system is coherent and maintainable.

#### Acceptance Criteria

1. WHEN Hero.tsx uses colors for text, buttons, or accents, THE component SHALL reference the updated color tokens from globals.css
2. WHERE Hero.tsx currently hardcodes #c9a84c in className text-[#c9a84c] patterns, THE component SHALL use the new token from the updated color system
3. THE Showcase Section button and text colors SHALL use the new primary accent token instead of the old gold value
4. IF any component uses inline styles with hardcoded hex colors, THEN those SHALL be migrated to Tailwind classes that reference the updated tokens
5. WHEN components render, THE color values SHALL visually display the new contemporary palette rather than the previous gold scheme

#### Implementation Notes

- Search for all instances of #c9a84c, #e4cc7a, #a68835 in component files
- Convert inline hex colors to Tailwind utility classes where possible
- Leverage Tailwind's color system configuration if defined in tailwind.config file
- Test each component after color updates to ensure visual consistency

---

### Requirement 7: Verify Video Playback Quality After Removing Spotlight Effect

**User Story:** As a site visitor, I want videos to play smoothly and appear visually compelling after the spotlight effect is removed, so that the visual presentation remains professional.

#### Acceptance Criteria

1. WHEN the Hero video is displayed without the spotlight mask, THE video SHALL play without visual artifacts or rendering issues
2. THE video filters (brightness and saturation adjustments) SHALL be applied correctly to maintain visual cohesion
3. IF the video requires additional contrast or saturation adjustments to compensate for the removed spotlight effect, THEN the video styling SHALL be updated accordingly
4. WHEN testing across different browsers and devices, THE video playback SHALL be smooth and responsive
5. THE video SHALL loop continuously without interruption or visual glitches

#### Implementation Notes

- Test video playback on major browsers (Chrome, Firefox, Safari, Edge)
- Verify mobile video playback performance
- Consider if the removal of the spotlight effect requires brightening or adjusting the video filters
- Check for any performance improvements from removing the Canvas masking logic

---

### Requirement 8: Accessibility Compliance for Color and Contrast

**User Story:** As an inclusive design practitioner, I want the updated color scheme to meet accessibility standards, so that all users including those with color vision deficiency can use the website effectively.

#### Acceptance Criteria

1. WHEN text is displayed against background colors, THE Color_System SHALL maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (WCAG AA)
2. THE new color palette SHALL not rely solely on color to convey information (e.g., error states shall use icons or text in addition to color)
3. WHERE interactive elements use color to indicate state (hover, active, disabled), THE Color_System SHALL provide visual feedback through multiple channels (color, text, icons)
4. IF the website uses color-coded information, THEN alternative visual indicators SHALL also be present

#### Implementation Notes

- Use WCAG color contrast checker tools to validate ratios
- Test with color blindness simulators
- Ensure sufficient luminance contrast in the new palette
- Document color accessibility compliance in design tokens

