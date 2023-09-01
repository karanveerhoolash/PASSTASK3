<template>
  <section class="about-me">
    <h2>About Me</h2>
    <div class="about-content">
      <div class="profile-image">
        <img src="/src/assets/a.jpg" alt="Profile Image">
      </div>
      <div class="bio">
        <p>
          Hi there! I'm Karanveer Hoolash. I'm in my third-year Bachelor of Computer Science student with great optimism and, 
          willingness to learn and adapt to a fast-paced environment. 
          High commitment to goals evidenced through listed achievements. 
          Currently seeking graduate roles and job opportunities to apply and enrich existing skill sets.
        </p>
        <p>
          I wish to highlight that I form part of the Golden Key International Honour Society, 
          which is eligible to the top 15% of students based on academic merit. 
          Being a member of this society has allowed me to participate in numerous leadership webinars with world leaders sharing their 
          life experiences and success stories. 
          Additionally, I am a Deakin Vice-Chancellor scholar which makes me form part of the Vice-Chancellor’s Professional Excellence Program (VCPEP). Through the VCPEP, I have been able to upskill myself through personal challenges, which include indoor skydiving and surfing. Professional challenges in the program enabled me to work collaboratively with other scholars on real-world projects with companies such as Deloitte Australia and PwC Australia. 
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about-me {
  margin-top: 40px;
}

.about-me h2 {
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bio {
  flex: 1;
}

.bio p {
  margin-bottom: 15px;
}
</style>
