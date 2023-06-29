<template>
        <section class="about" id="about">
          <h2 class="heading">About <span>Me</span></h2>
          <div class="about-img">
            <img class="new-img" src="../../public/photo\ 6.webp" alt="">
            <span class="cricle-spin"></span>
          </div>
          <div class="about-content">
            <h3>Frontend Developer!</h3>
            <p>VI started learning programming from the drop because I wanted to build my own algorithm that includes everything including everything over time that interests the field and what I want to be a programmer
              And the reason for this is very simple: I feel that this is a profession that will advance me greatly and bring me the ability to succeed and grow as much as possible and even though I don't have a certificate that shows knowledge or success, I believe that willpower is completely enough!!</p>
              <div class="btn-box btns">
                <a href="#" class="btn">Read More</a>
              </div>
            </div>
       </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped>

.heading {
    color: white;
     font-size: 8rem;
    margin-bottom: 5rem;
    text-align: center;
}

@media (max-width: 390px) {
  #about {
    min-height: 100vh;
  }
}

#menu-icon {
   font-size: 5.6rem;
   color: var(--text-color);
   cursor: pointer;
}

section {
   min-height: 100vh;
   padding: 8.6rem 9% 2rem;
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

  .about {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    background: var(--second-bg-color);
    padding-bottom: 6rem;
   
  }

  .about-img {
    width: 25rem;
    height: 25.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 50px;
  }

  .new-img {
     background-image: url("../../public/photo\ 6.webp");
     background-size: 190px;
     background-repeat: no-repeat;
     width: 200px;
     height: 190px;
     border-radius: 50%;
     border:  solid var(--main-color);
     position: relative;
     top: 50px;
  }

  span {
    color: var(--main-color);
  }

  .about-img .cricle-spin {
    position: absolute;
    top: 76%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border-top: .2rem solid var(--second-bg-color);
    border-bottom: .2rem solid var(--second-bg-color);
    border-left: .2rem solid var(--main-color);
    border-right: .2rem solid var(--main-color);
    animation: aboutSpinner 8s linear infinite;
  }

  @keyframes aboutSpinner {
    100% {
    transform: translate(-50%, -50%) rotate(360deg);
}
}

  .about-content {
    color: white;
    text-align: center;
    position: relative;
    bottom: -40px;
  }

  .about-content h3 {
    font-size: 2.6rem;
  }
  .about-content p {
    font-size: 1.7rem;
    margin: 2rem 0 3rem;
  }

  .btn-box.btns {
    width: 150px;
    height: 100%;
    display: inline-block;
  }

  .btn-box.btns a::before {
    background: var(--second-bg-color);
  }

#menu-icon {
  display: block;

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

</style>
