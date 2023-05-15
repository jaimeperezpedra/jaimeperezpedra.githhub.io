new Vue({
  el: "#projects-list",
  data: {
    projects: [
      {
        title: 'AI Fitness',
        description: "AI Fitness it's a project done as a example in order to test some ideas about fitness and diets using AI.",
        technologies: [
          {
            src: 'https://img.icons8.com/color/64/html-5--v1.png',
            alt: 'HTML',
            id: 'html'
          },
          {
            src: 'https://img.icons8.com/color/64/react-native.png',
            alt: 'React',
            id: 'React'
          },
          {
            src: 'https://img.icons8.com/color/64/css3.png',
            alt: 'CCS3',
            id: 'CCS3'
          },
          {
            src: 'https://img.icons8.com/color/64/nextjs.png',
            alt: 'Next.js',
            id: 'Next.js'
          },
          {
            src: 'https://img.icons8.com/color/64/tailwindcss.png',
            alt: 'tailwindcss',
            id: 'tailwindcss'
          },
          {
            src: 'https://img.icons8.com/color/64/firebase.png',
            alt: 'firebase',
            id: 'firebase'
          }
        ],
        img: 'public/web-ai-fitness.webp'
      },

      {
        title: 'Angel Perez Portfolio',
        description: "Portfolio made for an arquitect",
        technologies: [
          {
            src: 'https://img.icons8.com/color/64/html-5--v1.png',
            alt: 'HTML',
            id: 'html'
          },
          {
            src: 'https://img.icons8.com/color/64/vue-js.png',
            alt: 'Vue.js',
            id: 'Vue.js'
          },
          {
            src: 'https://img.icons8.com/color/64/css3.png',
            alt: 'CCS3',
            id: 'CCS3'
          },
          {
            src: 'https://img.icons8.com/color/64/tailwindcss.png',
            alt: 'tailwindcss',
            id: 'tailwindcss'
          },
        ],
        img: 'public/portolio-arq.mp4',
        video: 'public/portolio-arq.mp4'
      }
    ],
  },
})