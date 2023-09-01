<template>
    <section class="education">
      <h2>Education</h2>
      <div class="education-list">
        <div class="education-card" v-for="(education, index) in educationList" :key="index">
          <h3>{{ education.degree }}</h3>
          <p class="institution">{{ education.institution }}</p>
          <p class="date">{{ education.date }}</p>
          <p>{{ education.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        educationList: [
          {
            degree: 'Bachelor of Computer Science',
            institution: 'Deakin University',
            date: 'July 2020 - November 2023',
            description: 'Relevant coursework: Web Development, Algorithms, Software Engineering.'
          },
          {
            degree: 'A-Levels ',
            institution: 'RTSS Mauritius',
            date: 'January 2013 - November 2019',
            description: 'Ranked as Laureate and ranked 3rd in Computer Science in Mauritius'
          },
          // Add more education details here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .education {
    margin-top: 40px;
  }
  
  .education h2 {
    margin-bottom: 20px;
  }
  
  .education-list {
    display: flex;
    flex-direction: column;
  }
  
  .education-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
  }
  
  .institution {
    font-weight: bold;
  }
  
  .date {
    color: #666;
    margin-top: 5px;
  }
  </style>
  