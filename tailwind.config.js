// tailwind.config.js
module.exports = {
    content: [
      "./index.html", // 這是你的 HTML 檔案
      "./src/**/*.{js,ts,jsx,tsx}", // 這是你的 React 組件檔案，Tailwind 要掃描它們
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  