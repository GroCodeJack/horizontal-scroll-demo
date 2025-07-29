# Build a Horizontal Scrolling Navigation Component

## Objective
Create a responsive horizontal scrolling navigation bar similar to Amazon's mobile navigation, with smooth scrolling behavior and modern UX patterns.

## Technical Requirements

### Core Functionality
- **Horizontal scrolling**: Navigation items should scroll horizontally when they exceed viewport width
- **Touch/swipe support**: Enable smooth touch scrolling on mobile devices
- **Keyboard navigation**: Support arrow key navigation for accessibility
- **Responsive design**: Adapt gracefully from mobile to desktop viewports
- **Smooth scrolling**: Implement momentum scrolling and smooth transitions

### Visual Specifications
- **Container**: Black background (#000000)
- **Navigation items**: White text (#FFFFFF), adequate padding, hover states
- **Scroll indicators**: Subtle fade/shadow effects at edges to indicate more content
- **Active state**: Visual indicator for current/active navigation item
- **Minimum item width**: Ensure nav items don't become too narrow on small screens

### Navigation Items (Required Data)
```
["Option1", "Option2", "Option3", "Option4", "Option5", "Option6", "Option7", "Option8", "Option9", "Option10"]
```

### Technical Implementation Details
- Use semantic HTML (`<nav>`, `<ul>`, `<li>`)
- Implement with modern CSS (Flexbox/Grid, CSS custom properties)
- Add JavaScript for enhanced interactions (optional scroll buttons, keyboard nav)
- Ensure WCAG accessibility compliance
- Support both mouse wheel and touch scrolling
- Add smooth scroll behavior with CSS `scroll-behavior: smooth`


## Deliverables
1. **HTML file**: Complete working example with semantic markup
2. **CSS**: Modern, responsive styling with smooth interactions
3. **JavaScript**: Enhanced functionality and accessibility features
4. **Documentation**: Brief comments explaining key implementation decisions

## Design Inspiration
Black background with clean white text, similar to Amazon's navigation but with a pure black theme for high contrast and modern appearance.

## Browser Support
Target modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+) with graceful degradation for older browsers.

## Testing Considerations
- Test on various screen sizes (320px to 1920px width)
- Verify touch scrolling on mobile devices
- Ensure keyboard accessibility
- Check performance with long lists of navigation items
- Validate HTML and CSS
- Test with screen readers for accessibility

Please implement this as a single HTML file with embedded CSS and JavaScript for easy testing and deployment.
