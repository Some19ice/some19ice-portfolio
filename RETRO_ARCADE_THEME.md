# Retro Arcade Theme for shadcn/ui

This project now includes the **Retro Arcade Theme** - a vibrant theme inspired by classic arcade games with Solarized color palette.

## 🎨 Theme Features

- **Solarized Color Palette**: Based on the popular Solarized color scheme
- **Retro Arcade Aesthetics**: Vibrant colors reminiscent of classic arcade games
- **Dark/Light Mode Support**: Full support for both light and dark themes
- **Custom Typography**: Outfit and Space Mono fonts for a modern retro feel
- **shadcn/ui Integration**: Fully compatible with all shadcn/ui components

## 🚀 Installation

The theme has been installed and configured in this project. Here's what was done:

1. **shadcn/ui Setup**:
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add https://tweakcn.com/r/themes/retro-arcade.json
   ```

2. **Font Integration**: Added Outfit and Space Mono fonts via Google Fonts

3. **Configuration Files Updated**:
   - `styles/globals.css` - Theme CSS variables
   - `tailwind.config.js` - Tailwind configuration
   - `components.json` - shadcn/ui configuration
   - `jsconfig.json` - Import aliases
   - `pages/_document.js` - Font loading

## 🎯 Color Palette

### Light Mode
- **Background**: `#fdf6e3` (Solarized Base3)
- **Foreground**: `#073642` (Solarized Base02)
- **Primary**: `#d33682` (Solarized Magenta)
- **Secondary**: `#2aa198` (Solarized Cyan)
- **Accent**: `#cb4b16` (Solarized Orange)
- **Destructive**: `#dc322f` (Solarized Red)

### Dark Mode
- **Background**: `#002b36` (Solarized Base03)
- **Foreground**: `#93a1a1` (Solarized Base1)
- **Primary**: `#d33682` (Solarized Magenta)
- **Secondary**: `#2aa198` (Solarized Cyan)
- **Accent**: `#cb4b16` (Solarized Orange)
- **Destructive**: `#dc322f` (Solarized Red)

## 📝 Usage

### Basic Components
```jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Retro Arcade Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </CardContent>
    </Card>
  )
}
```

### Dark Mode Toggle
```jsx
function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  
  return (
    <Button onClick={toggleDarkMode} variant="outline">
      Toggle Dark Mode
    </Button>
  )
}
```

## 🔧 Available Components

The following shadcn/ui components have been installed and themed:
- Button (`components/ui/button.jsx`)
- Card (`components/ui/card.jsx`)

To add more components:
```bash
npx shadcn@latest add [component-name]
```

## 🎮 Demo

Visit `/theme-demo` to see the theme in action with various components and color combinations.

## 🎨 Customization

To customize the theme colors, edit the CSS variables in `styles/globals.css`:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* ... other variables */
}
```

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Retro Arcade Theme Source](https://tweakcn.com/r/themes/retro-arcade.json)
- [Solarized Color Scheme](https://ethanschoonover.com/solarized/)
- [Outfit Font](https://fonts.google.com/specimen/Outfit)
- [Space Mono Font](https://fonts.google.com/specimen/Space+Mono)
