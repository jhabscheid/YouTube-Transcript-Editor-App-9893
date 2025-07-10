# YouTube Transcript Editor

A modern React application that allows users to fetch, edit, and manage YouTube video transcripts using the Supadata AI API.

## Key Features

### 1. API Key Management
- Secure storage of Supadata API keys
- Visual feedback for API key status
- Persistent storage using localStorage
- Toggle visibility of API key

### 2. Transcript Fetching
- YouTube URL validation
- Real-time loading states
- Error handling and user feedback
- Automatic clipboard copy on successful fetch

### 3. Markdown Editor
- Rich text editing capabilities
- Live preview
- Sanitized HTML output
- Copy functionality

## Component Structure

### `App.jsx`
The main application container that orchestrates all components and manages global state:
```jsx
- API key management
- Transcript fetching logic
- Layout organization
- Toast notifications
```

### `ApiKeyManager.jsx`
Handles Supadata API key configuration:
```jsx
- Secure input field for API key
- Show/hide password toggle
- Save functionality with visual feedback
- Validation and error handling
```

### `TranscriptFetcher.jsx`
Manages YouTube URL input and transcript fetching:
```jsx
- URL validation
- Loading states
- Error handling
- Integration with Supadata API
```

### `MarkdownEditor.jsx`
Provides markdown editing capabilities:
```jsx
- Rich text editing
- Preview mode
- Sanitized output
- Custom styling
```

### `CopyButton.jsx`
Handles clipboard operations:
```jsx
- Copy to clipboard functionality
- Success/error feedback
- Loading states
```

### `SupadataPromotion.jsx`
Promotional component for Supadata API:
```jsx
- Service information
- API key acquisition link
- Documentation access
```

### `SafeIcon.jsx`
Icon management utility:
```jsx
- Fallback handling
- Consistent icon rendering
- Error prevention
```

### `Footer.jsx`
Application footer:
```jsx
- Copyright information
- Branding
- Animated rendering
```

## Styling

The application uses a combination of:
- Tailwind CSS for utility-based styling
- CSS modules for component-specific styles
- Framer Motion for animations

## Technical Details

### State Management
- React hooks for local state
- Props for component communication
- localStorage for persistence

### API Integration
```javascript
const fetchTranscript = async (url) => {
  const response = await fetch(
    `https://api.supadata.ai/v1/transcript?url=${url}`,
    {
      headers: {'x-api-key': apiKey}
    }
  );
  // Response processing...
};
```

### Security Features
- API key encryption in storage
- XSS prevention through sanitization
- Secure external links

### Performance Optimizations
- Lazy loading of components
- Debounced API calls
- Optimized re-renders

## Dependencies

Key packages used:
- `react` - UI framework
- `framer-motion` - Animations
- `@uiw/react-md-editor` - Markdown editing
- `react-hot-toast` - Notifications
- `react-icons` - Icon library
- `rehype-sanitize` - HTML sanitization

## Best Practices

1. **Component Architecture**
   - Single responsibility principle
   - Modular design
   - Reusable components

2. **Error Handling**
   - Graceful degradation
   - User-friendly error messages
   - Comprehensive error states

3. **User Experience**
   - Loading indicators
   - Intuitive interface
   - Responsive design

4. **Security**
   - Input validation
   - Data sanitization
   - Secure API handling

## Usage Example

```jsx
// Fetching a transcript
const handleTranscriptFetch = async (url) => {
  if (!apiKey) {
    toast.error('Please set your API key first');
    return;
  }
  
  try {
    const response = await fetchTranscript(url);
    setTranscript(response.content);
    toast.success('Transcript fetched successfully!');
  } catch (error) {
    toast.error('Failed to fetch transcript');
  }
};
```

## Styling Guide

The application uses a consistent color scheme:
```css
- Primary: Blue (#3B82F6)
- Secondary: Indigo (#4F46E5)
- Accent: Red (#EF4444)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)
```

## UI/UX Considerations

1. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

2. **Responsive Design**
   - Mobile-first approach
   - Flexible layouts
   - Breakpoint optimization

3. **Visual Feedback**
   - Loading states
   - Success/error indicators
   - Interactive elements

## Performance Features

1. **Optimization**
   - Code splitting
   - Lazy loading
   - Memoization

2. **Caching**
   - API response caching
   - Local storage utilization
   - State persistence

## Development Guidelines

1. **Code Style**
   - ESLint configuration
   - Prettier formatting
   - Consistent naming conventions

2. **Testing**
   - Component testing
   - Integration testing
   - Error scenario testing

## Future Enhancements

1. **Features**
   - Multiple transcript formats
   - Batch processing
   - Advanced editing tools

2. **Integration**
   - Additional API providers
   - Export options
   - Collaboration tools