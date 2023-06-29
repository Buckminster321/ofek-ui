<template>
     <section class="skills" id="skills">
           <h2 class="heading">My <span>Skills</span></h2>
           <div class="skills-row">
            <div class="skills-column">
                <h3 class="title">Coding Skills</h3>
                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>HTML <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>CSS <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>JavaScript <span>65%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skills-column">
                <h3 class="title">Professional Skills</h3>
                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>Web Design <span>95%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>web Development <span>67%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Graphic Design <span>65%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
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


:root {
    --bg-color: #081b29;
    --second-bg-color: #112e42;
    --text-color: #ededed;
    --main-color: #00abf0;
}

html {
    background: var(--bg-color);
    font-size: 62.5%;
    overflow: hidden;
}

body {
    background: var(--bg-color);
    color: var(--text-color);
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 9%;
    background: var(--bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.logo {
    font-size: 2.5rem;
    color: #ededed;
    text-decoration: none;
    font-weight: 600;
}

.navbar a {
    font-size: 1.7rem;
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px;
    transition: .3s;
}

.navbar a:hover,
.navbar a.active {
    color: var(--main-color);
}

#menu-icon {
   font-size: 5.6rem;
   color: var(--text-color);
   cursor: pointer;
   display: block;
}

section {
   min-height: 100vh;
   padding: 20rem 9% 2rem;
}


  .heading {
    font-size: 5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  span {
    color: var(--main-color);
  }

  .skills {
    max-height: auto;
    padding-bottom: 7rem;
    background: var(--second-bg-color);
  }

  .skills .skills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
  }

  .skills-row .skills-column {
    flex: 1 1 40rem;
  }

  .skills-column .title {
     font-size: 2.5rem;
     margin: 0 0 1.5rem;

  }

  .skills-box .skills-content {
    position: relative;
    border: .2rem solid var(--main-color);
    border-radius: .6rem;
    padding: .5rem 1.5rem;
    z-index: 1;
    overflow: hidden;
  }
  
  .skills-box .skills-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--bg-color);
    z-index: -1;
    transition: .5s;
  }

  .skills-box .skills-content:hover::before {
    width: 100%;
  }

  .skills-content .progress {
    padding: 1rem 0;
  }

  .skills-content .progress h3 {
    font-size: 1.7rem;
    display: flex;
    justify-content: space-between;
  }

  .skills-content .progress h3 span {
    color: var(--text-color);
  }

  .skills-content .progress .bar {
    height: 2.5rem;
    border-radius: .6rem;
    border: .2rem solid var(--main-color);
    padding: .5rem;
    margin: 1rem 0;
  }

  .skills-content .progress .bar span {
    display: block;
    height: 100%;
    border-radius: .3rem;
    background-color: var(--main-color);
  }

  .skills-column:nth-child(1) .skills-content .progress:nth-child(1) .bar span {
    width: 90%;
  }
  .skills-column:nth-child(1) .skills-content .progress:nth-child(2) .bar span {
    width: 80%;
  }
  .skills-column:nth-child(1) .skills-content .progress:nth-child(3) .bar span {
    width: 65%;
  }
  .skills-column:nth-child(1) .skills-content .progress:nth-child(4) .bar span {
    width: 75%;
  }

  .skills-column:nth-child(1) .skills-content .progress:nth-child(1) .bar span {
    width: 95%;
  }
  .skills-column:nth-child(2) .skills-content .progress:nth-child(2) .bar span {
    width: 67%;
  }
  .skills-column:nth-child(2) .skills-content .progress:nth-child(3) .bar span {
    width: 85%;
  }
  .skills-column:nth-child(2) .skills-content .progress:nth-child(4) .bar span {
    width: 60%;
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
  z-index: 1;
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
