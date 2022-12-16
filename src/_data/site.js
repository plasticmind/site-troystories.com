module.exports = {
  url: process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:8080' : 'https://troystories.com',
  title: process.env.ELEVENTY_ENV === 'development' ? '🔴 Troy Stories (DEV)' : 'Troy Stories',
  description: "Stories from the people of Troy, NY"
};