This bug occurs when using the Expo's `Image` component with a local URI that has special characters in the file name.  The image fails to load and throws an error in the console related to the URI not being found. For example:

```javascript
<Image source={{ uri: 'file:///path/to/my%20image.jpg' }} style={{ width: 100, height: 100 }} />
```

The `%20` in the URI represents a space, but Expo's `Image` component may not properly handle these encoded characters.

This is particularly problematic when dealing with images stored in the device's local storage or file system where file names might contain spaces or other special characters.