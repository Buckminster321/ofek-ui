<template>
  <div class="container">
    <section class="home" id="home">
      <div class="home-content">
        <h1>Hi, I'm <span>Ofek Bar-On</span></h1>
        <div class="text-animate">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Hi how are you ? I created this site to show you what I have learned during
          all this time, I hope you enjoy and find interesting things, I worked very
          hard on the site so please give good and bad reviews.
        </p>
        <div class="btn-box">
          <a href="#" class="btn" id="chat-btn1">Hire Me</a>
          <a href="#" class="btn" id="chat-btn">Let's Talk</a>
          <div class="chat-container">
            <span class="close">&times;</span>
            <div class="chat-body">
              <div class="messages"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-sci">
        <a href="https://he-il.facebook.com/" target="_blank">
          <i class="bx bxl-facebook" id="facebook-link"></i>
        </a>
        <a href="https://twitter.com/" target="_blank">
          <i class="bx bxl-twitter" id="twitter-link"></i>
        </a>
        <a href="#" id="copy-link-button" @click="copyLink">
          <i class="bx bx-link"></i>
          <span id="copy-link-text">העתק קישור</span>
        </a>  
      </div>
      <span class="home-img-hover"></span>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

const count = ref(0);
export default {
  methods: {
    async copyLink() {
      try {
        const link = window.location.href;
        await navigator.clipboard.writeText(link);
        const copyButton = document.getElementById('copy-link-button');
        const originalText = copyButton.textContent;
        copyButton.textContent = 'הקישור הועתק!';
        copyButton.style.fontSize = '10px';

        setTimeout(() => {
          copyButton.textContent = originalText;
        }, 3000);
      } catch (error) {
        console.error("שגיאה בהעתקת הקישור:", error);
      }
    },
  },
};
</script>

<style scoped>
/* 
1280px -> XL
1024px -> LG
768px -> MD
640px -> SM
*/
#copy-link-text {
  font-size: 10px;
  text-align: center;
}

#copy-link-button {
  font-size: 10px;
  text-align: center;
}

.home {
  height: calc(100vh - var(--navigation-height));
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 10rem 9% 2rem;
}
@media (min-width: 768px) {
  .home {
    background-image: url("../../public/photo\ 5.webp");
    background-size: 85rem;
    background-repeat: no-repeat;
    background-position: 126%;
    color: var(--text-color);
  }
}
@media (max-width: 390px) {
  .home {
    background-image: url("../../public/photo\ 6.webp");
    background-size: 35rem;
    background-repeat: no-repeat;
    background-position: 116% 99%;
    color: var(--text-color);
  }
}

.home-content {
  max-width: 60rem;
}

.home-content h1 {
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
}

.home-content .text-animate {
  position: relative;
  width: 32.8rem;
}

.home-content .text-animate h3 {
  font-size: 23px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: .7px var(--main-color);
  background-image: linear-gradient(var(--main-color), var(--main-color));
  background-repeat: no-repeat;
  background-position: -33rem 0;
  -webkit-background-clip: text; 
  animation: homeBgText 6s linear infinite;
  animation-delay: 2s;
}

.home-content .text-animate h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-right: 2px solid var(--main-color);
  z-index: -1;
  animation: homeCursorText 6s linear infinite;
  animation-delay: 2s;
}



.home-content .text-animate h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 50%;
  border-right: 2px solid var(--main-color);
  z-index: 1;
  animation: homeCursorText 6s linear infinite;
  animation-delay: 2s;
}

.home-content p {
  font-size: 1.6rem;
  margin: 2rem 0 4rem;
}

.home-content .btn-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 345px;
  height: 50px;
}

.btn-box .btn {
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
}

.btn-box a:hover {
  color: var(--main-color);
}

.btn-box a:nth-child(2) {
  background: transparent;
  color: var(--main-color);
}

.btn-box a:nth-child(2):hover {
  color: var(--bg-color);
}

.btn-box a:nth-child(2)::before {
 background: var(--main-color);
}

.btn-box .btn::before {
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
  width: 50px;
  height: 40px;
  background: transparent;
  border: 2px solid #00abf0;
  border-radius: 50px;
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
}

.home-img-hover:hover {
  background: #081b29;
  opacity: .8;
}

#chat-textarea {
  display: none;
  border: 2px solid #1E4C93;
  padding: 10px;
  font-size: 16px;
  color: #1E4C93;
  background-color: #F2F2F2;
  border-radius: 5px;
  height: 100px;
  width: 300px;
  resize: none;
  margin-bottom: 10px;
  position: fixed;
  bottom: 0;
  right: 10px;
  z-index: 1;
}

#chat-close {
  display: none;
}

.close {
  float: right;
  font-size: 24px;
  font-weight: bold;
  color: #030303;
  cursor: pointer;
  position: absolute;
  right: 14px;
  bottom: 87px;
  z-index: 9;
}

.close:hover {
  color: #0c0a54;
}
.text-box {
  position: fixed;
  bottom: -500px;
  right: 30px;
  width: 350px;
  height: 400px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
  transition: all 0.5s ease-in-out;
  z-index: 9999;
}

.btn-box .close {
  display: none;
}

.btn-box.open .close {
  display: block;
}
 
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background: var(--second-bg-color);
  padding-bottom: 6rem;
}

.heading {
  font-size: 5rem;
  margin-bottom: 3rem;
  text-align: center;
}


.new-img {
  width: 300px;
  height: 100%;
}

.about-img {
  position: relative;
  width: 35rem;
  height: 33rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-img img {
   width: 90%;
   border-radius: 50%;
   border: .2rem solid var(--main-color);
}

.home-content h1 span {
  color: var(--text-color);
}

@media (max-width: 1200px) {
  html {
      font-size: 50%;
  }
}

@media (max-width: 991px) {
  .header {
      padding: 2rem 4%;
  }

  section {
      padding: 10rem 4% 2rem;
  }

  .home {
      padding: 0 4%;
  }

  .footer {
      padding: 2rem 4%;
  }
}



@keyframes homeBgText {
  10%,
  10%
  ,100% {
      background-position: -33rem 0;
  }
  
  65%,
  85% {
      background-position: 0 0;
  }
}

@keyframes homeCursorText {
  0%,
  10%
  ,100% {
      width: 0;
  }
  
  65%,
  78%,
  85% {
      width: 100%;
      opacity: 1;
  }

  75%,
  81% {
      opacity: 0;
  }
}
</style>