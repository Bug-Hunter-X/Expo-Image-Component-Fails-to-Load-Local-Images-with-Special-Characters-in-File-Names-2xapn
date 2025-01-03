# Expo Image Component Issue: Special Characters in Local Image URIs

This repository demonstrates a bug in Expo's `Image` component where images with special characters (like spaces) in their file names fail to load when using a local URI.  The bug is reproduced and then a solution is proposed.

## Bug Reproduction

The `bug.js` file contains the code that reproduces the problem.  The code attempts to display an image using a local URI that contains a space (encoded as `%20`).

## Solution

The `bugSolution.js` file provides a working solution.  It uses a workaround to handle the encoding issue in the image path.  This is crucial to ensure images load correctly.   Specific fixes might depend on the source of the URI (e.g., local storage, filesystem library).

## How to Run

1. Clone this repository.
2. Navigate to the cloned directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Run the app using `expo start`.
5. Observe the behavior in `bug.js` (image not loading) and `bugSolution.js` (image loading correctly).

## Contributing

Feel free to contribute with bug fixes, enhancements, or other solutions.