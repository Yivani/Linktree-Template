# 🌟 Free Modern Linktree Template

Preview [Yivani's Linktree Template](https://yivani.github.io/Linktree-Template/)

A feature-rich, customizable Linktree alternative with dark/light mode, animations, and interactive elements.

## 🎥 Theme Preview

### Dark Mode

https://i.imgur.com/jGONGMr.mp4

### Light Mode

https://i.imgur.com/bsYvxMb.mp4

> Note: Videos showcase the smooth transitions and interactive elements in both themes.

## ✨ Features

### Core Features

- 🌓 Dark/Light mode with localStorage persistence
- 🎯 Custom animated cursor
- 🎨 Particle.js background
- ⚡ Loading animation
- 📊 Progress bar
- 📱 Fully responsive design

### Interactive Elements

- 🔄 Breathing border animation on profile
- 🎵 Music player (customizable)
- ⌨️ Typing animation for bio
- 💫 Click effects on links
- 📋 Share & copy buttons
- 👁️ View counter
- ⬇️ Dropdown menu

## 🛠️ Customization

### Colors

```css
:root {
  --background-color: #1a1a1a;
  --text-color: #f0f0f0;
  --accent-color: #535030;
  --card-bg: #252525;
}
```

### Removable Components

You can easily remove these components if not needed:

- Music Player (`<div class="music-player">`)
- Particle background (`<div id="particles-js">`)
- Custom cursor (`<div class="custom-cursor">`)
- View counter (`<div class="view-counter">`)
- Share buttons (`<div class="share-buttons">`)

### Profile Customization

```html
<div class="profile">
  <img src="YOUR_IMAGE_URL" alt="Profile Picture" />
  <h1>@your_username</h1>
  <p>Your Bio Here</p>
</div>
```

## 🎨 Theme Examples

### Default Dark Theme

![Dark Theme](https://i.imgur.com/tszaKMF.png)

```css
--background-color: #1a1a1a;
--text-color: #f0f0f0;
--accent-color: #535030;
```

### Light Theme

![Light Theme](https://i.imgur.com/pm7uy2V.png)

```css
--background-color: #f5f5f5;
--text-color: #1a1a1a;
--accent-color: #847c4d;
```

## 🔧 Adding New Links

```html
<a href="#" class="link-card">
  <i class="fab fa-your-icon"></i> Your Link Text
</a>
```

### Disabled Link Example

```html
<a href="#" class="link-card disabled">
  <span class="coming-soon">Coming Soon!</span>
  <i class="fab fa-your-icon"></i> Link Text
</a>
```

## 📱 Mobile Responsiveness

- Automatically adapts to screen size
- Custom breakpoints for optimal viewing
- Touch-friendly interactions

![Mobile Preview](https://i.imgur.com/wvR9zDB.png)

## ⚡ Performance

- Optimized animations
- Lazy loading images
- Minimal dependencies
- Hardware acceleration enabled

## 📦 Dependencies

- Font Awesome 6.0.0
- Particles.js
- Google Fonts (Montserrat)

## 🚀 Getting Started

1. Clone the repository
2. Customize the colors in `styles.css`
3. Update links in `index.html`
4. Add your profile image
5. Modify the bio text
6. Deploy!

## 💡 Tips

- Use high-quality profile images
- Keep bio text concise
- Test on multiple devices
- Optimize your images
- Use relevant icons

## 📄 License

Feel free to use for personal or commercial projects!

---

Made with ❤️ by Yivani
