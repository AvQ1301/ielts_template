# Anki Deck Template

A beautiful and modern Anki deck template that can be tested in a browser before importing to Anki.

## Features

- 🎨 Modern, gradient-based design
- 📱 Responsive layout
- 🔄 Card flip animation
- 🌐 Browser testing before Anki import
- 📝 Multiple field support (Question, Example, Answer, Explanation, Notes)

## Browser Testing

1. Open `index.html` in your web browser
2. Use the controls to:
   - **Flip Card**: See the back side of the card
   - **Next Card**: Navigate to the next sample card
   - **Previous Card**: Navigate to the previous sample card
   - **Sample Data**: Select different sample cards from the dropdown

## Importing to Anki

### Step 1: Create a New Note Type

1. Open Anki
2. Go to **Tools** → **Manage Note Types**
3. Click **Add** → **Add: Basic**
4. Name it (e.g., "IELTS Template")

### Step 2: Add Fields

Add the following fields to your note type:
- `Question`
- `Example`
- `Answer`
- `Explanation`
- `Notes`

### Step 3: Copy Templates

1. **Front Template**: Copy content from `anki-template-front.html`
2. **Back Template**: Copy content from `anki-template-back.html`
3. **Styling**: Copy content from `anki-styling.css`

### Step 4: Test

Create a test card with sample data to verify everything works correctly.

## File Structure

```
.
├── index.html              # Browser test file
├── styles.css              # CSS for browser testing
├── script.js               # JavaScript for browser testing
├── anki-template-front.html # Anki front template
├── anki-template-back.html  # Anki back template
├── anki-styling.css        # Anki styling
└── README.md               # This file
```

## Customization

You can customize the template by:
- Modifying colors in `anki-styling.css`
- Adding/removing fields in the template files
- Adjusting font sizes and spacing
- Adding new CSS classes for special formatting

## Sample Data

The template includes three sample cards:
1. Vocabulary card
2. Grammar card
3. Reading comprehension card

## License

Feel free to use and modify this template for your personal use.
