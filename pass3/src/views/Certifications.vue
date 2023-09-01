<template>
    <section class="certifications">
      <h2>Certifications</h2>
      <div class="certification-list">
        <div class="certification-card" v-for="(certification, index) in certifications" :key="index">
          <h3>{{ certification.title }}</h3>
          <p class="organization">{{ certification.organization }}</p>
          <p class="date">{{ certification.date }}</p>
          <p>{{ certification.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        certifications: [
          {
            title: 'Member of Golden Key International Honour Society',
            organization: 'Golden Key International Honour Society',
            date: 'June 2022',
            description: 'Awarded to top 15% of students based on academic merit.'
          },
          {
            title: 'Vice-Chancellor 100 % Merit Scholarship',
            organization: 'Deakin University',
            date: 'July 2020',
            description: 'Awarded the 100% scholarship by the VCPEP and access to the excellence program'
          },
          // Add more certification details here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .certifications {
    margin-top: 40px;
  }
  
  .certifications h2 {
    margin-bottom: 20px;
  }
  
  .certification-list {
    display: flex;
    flex-direction: column;
  }
  
  .certification-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
  }
  
  .organization {
    font-weight: bold;
  }
  
  .date {
    color: #666;
    margin-top: 5px;
  }
  </style>
  