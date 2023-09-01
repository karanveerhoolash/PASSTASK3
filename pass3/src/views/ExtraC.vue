<template>
    <section class="extracurricular">
      <h2>Extracurricular Activities</h2>
      <div class="activity-list">
        <div class="activity-card" v-for="(activity, index) in activities" :key="index">
          <h3>{{ activity.title }}</h3>
          <p class="organization">{{ activity.organization }}</p>
          <p class="date">{{ activity.date }}</p>
          <p>{{ activity.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activities: [
          {
            title: 'Volunteer Teaching Assistant',
            organization: 'Community Education Center',
            date: 'September 2021 - December 2021',
            description: 'Assisted teachers in classroom activities and provided support to students in need. Organized educational events for local youth.'
          },
          {
            title: 'Hackathon Participant',
            organization: 'Tech Innovators Club',
            date: 'March 2022',
            description: 'Collaborated in a team to create a web application that addresses a social issue. Demonstrated problem-solving skills and teamwork during the event.'
          },
          // Add more extracurricular activities here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .extracurricular {
    margin-top: 40px;
  }
  
  .extracurricular h2 {
    margin-bottom: 20px;
  }
  
  .activity-list {
    display: flex;
    flex-direction: column;
  }
  
  .activity-card {
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
  