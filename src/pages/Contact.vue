<template>
  <section class="contact" id="contact">
    <h2 class="heading">Contact <span>Me!</span></h2>
    <form action="#" @submit.prevent="sendEmail">
      <div class="input-box">
        <div class="input-field">
          <input type="text" placeholder="Full Name" required v-model="payload.fullName">
          <span class="focus"></span>
        </div>
        <div class="input-field">
          <input type="email" placeholder="Email Address" required v-model="payload.email">
          <span class="focus"></span>
        </div>
      </div>
      <div class="input-box">
        <div class="input-field">
          <input type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" required v-model="payload.mobileNumber">
          <span class="focus"></span>
        </div>
        <div class="input-field">
          <input type="text" placeholder="Email Subject" required v-model="payload.emailSubject">
          <span class="focus"></span>
        </div>
      </div>
      <div class="textarea-field">
        <textarea placeholder="Your Message" required v-model="payload.message"></textarea>
        <span class="focus"></span>
      </div>
      <div v-if="showMessage" class="message-box">
        <p v-if="isEmailSent" class="success-message">The Email was sent successfully!</p>
        <p v-else class="error-message">There was an error sending the Email. Please try again later.</p>
      </div>
      <div class="btn-box btns">
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </section>
  <footer class="footer">
    <div class="footer-text">
      <p>Adir Yed &copy; 2023 by Ofek | All Rights Reserved</p>
    </div>
    <div class="footer-iconTop">
      <a href="#"><i class='bx bx-up-arrow-alt'></i></a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const payload = ref({
  fullName: '',
  email: '',
  mobileNumber: '',
  emailSubject: '',
  message: ''
});
const isEmailSent = ref(false);
const showMessage = ref(false);

const sendEmail = async () => {
  try {
    if (
      payload.value.fullName.trim() === '' ||
      payload.value.email.trim() === '' ||
      payload.value.mobileNumber.trim() === '' ||
      payload.value.emailSubject.trim() === '' ||
      payload.value.message.trim() === ''
    ) {
      showMessage.value = true;
      return;
    }
    
    const response = await axios.post('https://formspree.io/f/xdovrkjb', payload.value);
    console.log(response.data);

    if (response.status === 200) {
      isEmailSent.value = true;
      resetForm();
    } else {
      isEmailSent.value = false;
    }


  } catch (error) {
    console.error(error);
    isEmailSent.value = false;
  } finally {
    showMessage.value = true;
  }
};

const resetForm = () => {
  payload.value.fullName = '';
  payload.value.email = '';
  payload.value.mobileNumber = '';
  payload.value.emailSubject = '';
  payload.value.message = '';
};
</script>

<style scoped>
.message-box {
  font-size: 15px;
  position: relative;
  top: -15px;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    color: white;
    background-color: var(--bg-color);
    z-index: 1;
}

:root {
    --bg-color: #081b29;
    --second-bg-color: #112e42;
    --text-color: #ededed;
    --main-color: #00abf0;
}

#menu-icon {
    font-size: 5.6rem;
    color: var(--text-color);
    cursor: pointer;
    display: block;
 }

 .heading {
    font-size: 5rem;
    margin-bottom: 23px;
    text-align: center;
    position: relative;
    bottom: 80px;
  }


.logo {
    font-size: 2.5rem;
    color: #ededed;
    text-decoration: none;
    font-weight: 600;
}

#menu-icon {
    font-size: 5.6rem;
    color: var(--text-color);
    cursor: pointer;
    display: block;
 }

section {
   max-height: 100vh;
   padding: 23.4rem 9% 2rem;
   background-image: url("../../public/photo\ 7.webp");
   background-size: 350px;
   background-position: 30px 210px;
   background-repeat: no-repeat;
}

 .btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    background: var(--main-color);
    border: 2px solid var(--main-color);
    border-radius: 8px;
    font-size: 19px;
    font-weight: 600;
    color: var(--bg-color);
    text-decoration: none;
    font-weight: 600;
    letter-spacing: .1rem;
    z-index: 1;
    overflow: hidden;
    transition: .5s;
    cursor: pointer;
    color: var(--text-color);
}

.btn a:hover {
    color: var(--text-color);
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--bg-color);
    z-index: -1;
    transition: .5s;
}

.btn-box .btn:hover::before {
    width: 100%;
}

.home-sci {
    position: absolute;
    bottom: 40px;
    width: 170px;
    display: flex;
    justify-content: space-between;
}

.home-sci a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #00abf0;
    border-radius: 50%;
    font-size: 20px;
    color: #00abf0;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    transition: .5s;
}

.home-sci a:hover {
    color:#081b29;
}

.home-sci a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #00abf0;
    z-index: -1;
    transition: .5s;
}

.home-sci a:hover::before {
    width: 100%;
}

.home-img-hover {
    position: absolute;
    top: 0;
    right: 2px;
    width: 500px;
    height: 100%;
    background: transparent;
    transition: .9s;
    z-index: 1;

}

.home-img-hover:hover {
    background: #081b29;
    opacity: .8;
}


.contact {
    min-height: auto;
    padding-bottom: 7rem;
}


.contact  form {
    max-width: 70rem;
    margin: 0 auto;
    text-align: center;
}

.contact  form  .input-box {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.contact  form  .input-box .input-field {
    position: relative; 
    width: 49%;
    margin: .8rem 0;
}

.contact  form  .input-box .input-field input,
.contact form .textarea-field textarea {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    font-size: 1.7rem;
    color: var(--text-color);
    background: transparent;
    border-radius: .6rem;
    border: .2rem solid var(--main-color);
}

.contact  form  .input-box .input-field input::placeholder,
.contact form .textarea-field textarea::placeholder {
    color: var(--text-color);
}

.contact form .textarea-field {
    position: relative;
    margin: .8rem 0 2.7rem;
    display: flex;
}

.contact form .textarea-field textarea {
    resize: none;
}


.btn-box.btns {
    width: 150px;
    height: 100%;
    display: inline-block;
  }

  .btn-box.btns a::before {
    background: var(--second-bg-color);
  }

  .contact form .focus {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--second-bg-color);
    border-radius: .6rem;
    z-index: -1;
    transition: .5s;
  }
  .contact form .input-box .input-field input:focus~.focus,
  .contact form .input-box .input-field input:valid~.focus,
  .contact form .textarea-field textarea:focus~.focus,
  .contact form .textarea-field textarea:valid~.focus {
    width: 100%;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background-color: var(--second-bg-color);
  }

  .footer-text p {
    font-size: 1.6rem;
  }

  .footer-iconTop a{
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    background: var(--main-color);
    border: .2rem solid var(--main-color);
    border-radius: .6rem;
    z-index: 1;
    overflow: hidden;
}

.footer-iconTop a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--second-bg-color);
    z-index: -1;
    transition: .5s;
}

.footer-iconTop a:hover::before {
    width: 100%;
}

.footer-iconTop a i {
    font-size: 2.4rem;
    color: var(--main-color);
    transition: .5s;
}

.footer-iconTop a i:hover {
    color: var(--text-color);
}

@media (max-width: 390px) {
  #contact {
    min-height: 120vh;
    background-position: 19px 710px;
  }
}

.navbar {
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    padding: 1rem 4%;
    background: var(--bg-color);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
    transition: .25s ease;
    transition-delay: .25s;
 }
 
 .navbar.active {
    left: 0;
    transition-delay: 0s;
 }
 
 .navbar a {
    display: block;
    font-size: 2rem;
    margin: 3rem 0;
 }

 p {
  background: var(--second-bg-color);
 }

 span {
  color: var(--main-color);
 }

 form {
  position: relative;
  top: -80px;
 }
 
</style>