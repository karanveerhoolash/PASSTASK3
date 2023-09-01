<template>
    <section class="experience">
      <h2>Work Experience</h2>
      <div class="experience-list">
        <div class="experience-card" v-for="(experience, index) in experiences" :key="index">
          <h3>{{ experience.title }}</h3>
          <p class="company">{{ experience.company }}</p>
          <p class="date">{{ experience.date }}</p>
          <ul>
            <li v-for="(task, taskIndex) in experience.tasks" :key="taskIndex">{{ task }}</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            title: 'Web Developer',
            company: 'A Solutions Inc.',
            date: 'January 2022 - Present',
            tasks: [
              'Developed and maintained client websites using HTML, CSS, and JavaScript.',
              'Implemented responsive design to ensure optimal user experience across devices.',
              'Collaborated with design and marketing teams to bring concepts to life.',
              'Integrated third-party APIs for enhanced website functionality.'
            ]
          },
          {
            title: 'Front-end Developer Intern',
            company: 'XYZ Agency',
            date: 'May 2021 - August 2021',
            tasks: [
              'Assisted in building responsive and visually appealing user interfaces.',
              'Worked with Vue.js to create interactive components for client projects.',
              'Optimized website performance by minimizing loading times.',
              'Collaborated with senior developers to troubleshoot and solve issues.'
            ]
          },
          // Add more work experiences here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .experience {
    margin-top: 40px;
  }
  
  .experience h2 {
    margin-bottom: 20px;
  }
  
  .experience-list {
    display: flex;
    flex-direction: column;
  }
  
  .experience-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
  }
  
  .company {
    font-weight: bold;
  }
  
  .date {
    color: #666;
    margin-top: 5px;
  }
  
  ul {
    margin-top: 10px;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  