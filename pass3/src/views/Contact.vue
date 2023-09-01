<template>
  <section class="contact-me">
    <h2>Contact Me</h2>
    <div class="contact-content">
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>

          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>

          <button type="submit">Submit</button>
        </form>
        <p v-if="isSubmitted">Thank you for your message!</p>
      </div>
      <div class="contact-info">
        <p>If you'd like to get in touch, you can also reach me through the following channels:</p>
        <ul>
          <li><strong>Email:</strong> yadav.hoolash@yahoo.com</li>
          <li><strong>Phone:</strong> 0426803463</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karanveerhoolash/" target="_blank">LinkedIn Profile</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitted: false
    };
  },
  methods: {
    submitForm() {
 
      this.isSubmitted = true;
    }
  }
};
</script>

<style scoped>
.contact-me {
  margin-top: 40px;
}

.contact-me h2 {
  margin-bottom: 20px;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
}

.contact-form {
  flex: 1;
  padding-right: 20px;
  box-sizing: border-box;
}

.contact-info {
  flex: 1;
  font-size: 18px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
}

.contact-form label {
  display: block;
  margin-top: 10px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact-form p {
  margin-top: 10px;
}
</style>
