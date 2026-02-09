# Swift Logistics - Shipping & Clearing Services Website

A modern, human-centered website for a shipping and logistics company in Kenya. Built with pure HTML, CSS, and JavaScript - no frameworks needed.

## 🎯 What Makes This Different

Instead of the typical "perfect AI design," this website focuses on:
- **Real conversations** - Chatbot talks like a human, not a robot
- **Authentic copy** - No corporate jargon, just honest communication
- **Practical design** - Clean and modern without being overly polished
- **Personal touch** - Features that reflect a real Kenyan business

## 📦 Features

### Core Functionality
- **Responsive Design** - Works perfectly on phones, tablets, and desktops
- **WhatsApp Integration** - Contact form and floating button send inquiries directly to WhatsApp
- **Smart Chatbot** - Conversational AI assistant with multiple response variations
- **Smooth Navigation** - Hamburger menu with slide-in panel
- **Scroll Animations** - Subtle reveal effects as you scroll

### Business Services Highlighted
1. **Ocean Freight** - FCL & LCL container shipping
2. **Air Freight** - Express and standard air cargo
3. **Customs Clearance** - Full documentation and KRA compliance
4. **Warehousing** - Secure storage and inventory management

## 🚀 How to Use

### Opening the Website
1. Navigate to the `SHIPPING AND CLEARING` folder
2. Double-click `index.html` to open in your browser
3. Or right-click → Open with → Choose your browser

### Testing Features

#### Navigation Menu
- Click the menu icon (☰) in the top right
- Menu slides in from the right
- Click any link to navigate smoothly
- Click X or outside the menu to close

#### Contact Form
1. Scroll to "Let's Talk" section
2. Fill in your details
3. Click "Send Message via WhatsApp"
4. Opens WhatsApp with your message pre-filled
5. Message goes to: **+254 759 159 881**

#### Chatbot
1. Click "Questions?" button at bottom right
2. Ask about services, pricing, hours, etc.
3. Gets conversational, human-like responses
4. Multiple response variations keep it natural
5. Click X to close

#### WhatsApp Direct
- Click the green WhatsApp icon (bottom right corner)
- Opens direct chat with +254 759 159 881

## 🎨 Customization

### Change Company Info
Edit `index.html`:
```html
<!-- Line 18-22: Logo and company name -->
<span class="company-name">Your Company</span>
<span class="company-tagline">Your Tagline</span>
```

### Update WhatsApp Number
Edit both files:

`index.html` (line 249):
```html
<a href="https://wa.me/YOUR_NUMBER" ...>
```

`script.js` (line 50):
```javascript
const whatsappNumber = 'YOUR_NUMBER';
```

### Modify Colors
Edit `style.css` (lines 2-10):
```css
:root {
    --blue: #2563eb;      /* Primary brand color */
    --teal: #14b8a6;      /* Accent color */
    --orange: #f97316;    /* Highlight color */
    /* ... more colors */
}
```

### Add Chatbot Responses
Edit `script.js` (starting line 82):
```javascript
const chatResponses = {
    yourCategory: [
        "Response option 1",
        "Response option 2",
    ],
    // ... more categories
};
```

Add corresponding keywords (line 143):
```javascript
const keywords = {
    yourCategory: ['keyword1', 'keyword2'],
    // ... more keywords
};
```

## 📱 Mobile Responsive

Fully optimized for:
- 📱 Phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1200px+)

## 🛠️ Tech Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox
  - CSS Variables for theming
  - Smooth transitions and animations
  - Mobile-first responsive design
- **Vanilla JavaScript** - No dependencies:
  - DOM manipulation
  - Event handling
  - Intersection Observer for scroll effects
  - Random response selection for natural conversations

## 🌟 Design Philosophy

### Why "More Human"?

Most AI-generated websites look... well, AI-generated. Perfect gradients, overly symmetrical layouts, corporate speak everywhere.

This website instead:
- **Uses casual language** - "We get it" instead of "We understand your requirements"
- **Shows personality** - Emojis, humor, honest communication
- **Feels real** - Like talking to actual people who run a business
- **Avoids perfection** - Some spacing variations, natural rhythm
- **Multiple responses** - Chatbot doesn't sound robotic with canned answers

### Real Business Details
- Operating hours that make sense for Kenya
- Local phone number format
- Kenyan context (mentions Nairobi, KRA)
- Services relevant to East African market
- Pricing transparency ("we'll give you an honest quote")

## 💡 Tips

1. **Update regularly** - Keep business hours and contact info current
2. **Test on mobile** - Use browser dev tools (F12) → Toggle device toolbar
3. **Add real images** - Replace the placeholder service backgrounds with actual photos
4. **Personalize copy** - Make the "About Us" story reflect your actual business
5. **Monitor WhatsApp** - Respond quickly to inquiries that come through

## 📞 Contact Configuration

Currently set to:
- **Phone**: +254 759 159 881
- **Email**: info@swiftlogistics.co.ke
- **Location**: Nairobi, Kenya
- **Hours**: Mon-Fri 8am-6pm, Sat 9am-2pm

Update these throughout the code to match your business.

## 🎉 What's Included

```
SHIPPING AND CLEARING/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🚦 Browser Support

Works on all modern browsers:
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 📝 Notes

- **No external dependencies** - Everything works offline
- **Fast loading** - Minimal code, optimized performance  
- **SEO ready** - Proper meta tags and semantic HTML
- **Accessibility** - ARIA labels and keyboard navigation
- **WhatsApp required** - Contact form needs WhatsApp installed

## 🔧 Troubleshooting

**WhatsApp button not working?**
- Make sure you have WhatsApp installed
- Check the phone number format (include country code)
- Try on mobile for best experience

**Chatbot not responding?**
- Check browser console for errors (F12)
- Make sure JavaScript is enabled
- Try refreshing the page

**Menu not opening?**
- Clear browser cache
- Check if JavaScript loaded properly
- Try a different browser

---

**Built with ❤️ for real businesses by real people**

Need changes? All the code is straightforward and well-commented. Dig in and make it yours!
