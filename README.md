# YouTube Curator

A modern web application that allows users to curate and organize collections of YouTube videos. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Video Discovery**: Search for YouTube videos using the YouTube API
- **Curated Collections**: Create and manage custom collections of videos
- **Video Previews**: Display video thumbnails and metadata with links to YouTube
- **Modern UI**: Beautiful and responsive design using Tailwind CSS
- **Tagging and Organization**: Organize videos with custom tags
- **Filtering and Sorting**: Find specific videos within collections
- **Sharing**: Share collections via URLs

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/youtube-curator.git
cd youtube-curator
```

2. Install dependencies:
```
npm install
```

3. Create a `.env.local` file in the root directory and add your YouTube API key:
```
YOUTUBE_API_KEY=your_youtube_api_key
```
   You can obtain a YouTube API key from the [Google Cloud Console](https://console.cloud.google.com/).

4. Start the development server:
```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Search for Videos**: Use the search bar to find YouTube videos by keywords
2. **Create Collections**: Create named collections to organize videos
3. **Add Videos to Collections**: Add videos from search results to your collections
4. **View Collections**: Browse through your saved collections
5. **Share Collections**: Copy collection URLs to share with others

## Technology Stack

- **Frontend**: React, TypeScript, Next.js
- **Styling**: Tailwind CSS
- **API Integration**: YouTube Data API v3
- **State Management**: React Hooks
- **Storage**: Local Storage (browser)

## Development

### Project Structure

```
src/
  ├── components/     # React components
  ├── pages/          # Next.js pages
  ├── services/       # API services
  ├── hooks/          # Custom React hooks
  ├── utils/          # Utility functions
  └── styles/         # CSS styles
```

### Adding API Integration

To integrate with the YouTube API:

1. Update the `YouTubeService.ts` file with your API key
2. Uncomment the actual API calls that are currently using mock data

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- YouTube Data API v3
- Tailwind CSS
- Next.js
- React

## Notes

This application does not host or download any videos. All content remains on YouTube and is viewed through the official YouTube player. 