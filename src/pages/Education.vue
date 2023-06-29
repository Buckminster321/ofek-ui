<template>
        <section class="education" id="education">
          <h2 class="heading">My <span>Journey</span></h2>
          <div class="education-row">
             <div class="education-columan">
                <h3 class="title">Education</h3>
              
                <div class="education-box">
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i> 2017-2018 </div>
                            <h3>Master Degree - University</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur ratione distinctio labore reiciendis, deleniti possimus saepe quisquam tempore totam!</p>
                        </div>
                    </div>
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i> 2018-2019 </div>
                            <h3>Master Degree - University</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur ratione distinctio labore reiciendis, deleniti possimus saepe quisquam tempore totam!</p>
                        </div>
                    </div>

                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i> 2019-2020 </div>
                            <h3>Master Degree - University</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur ratione distinctio labore reiciendis, deleniti possimus saepe quisquam tempore totam!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="education-columan">
                <h3 class="title">Experience</h3>
              
                <div class="education-box">
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i> 2017-2018 </div>
                            <h3>Web Developer - Company</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur ratione distinctio labore reiciendis, deleniti possimus saepe quisquam tempore totam!</p>
                        </div>
                    </div>
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i> 2018-2019 </div>
                            <h3>Web Developer - Company</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur ratione distinctio labore reiciendis, deleniti possimus saepe quisquam tempore totam!</p>
                        </div>
                    </div>
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i> 2019-2020 </div>
                            <h3>Web Developer - Company</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur ratione distinctio labore reiciendis, deleniti possimus saepe quisquam tempore totam!</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    z-index: 1;
}

:root {
    --bg-color: #081b29;
    --second-bg-color: #112e42;
    --text-color: #ededed;
    --main-color: #00abf0;
}


@media (max-width: 390px) {
  #education {
    min-height: 120vh;
  }
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
    background-color: var(--bg-color);
    color: var(--text-color);
    height: 100vh;
    padding: 10rem 9% 2rem;
}


  .heading {
    font-size: 5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  span {
    color: var(--main-color);
  }

  .education {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: auto;
    padding-bottom: 5rem;
  }

 .education .education-row {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
 }

 .education-row .education-columan {
    flex: 1 1 40rem;
 }

 .education-columan .title {
   font-size: 3rem;
   margin: 0 0 1.5rem 2rem;
 }

 .education-columan .education-box {
    border-left: .2rem solid var(--main-color);
 }

 .education-columan .education-content {
    position: relative;
    padding-left: 2rem;
 }

 .education-columan .education-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1.1rem;
    width: 2rem;
    height: 2rem;
    background: var(--main-color);
    border-radius: 50%;
 }

 .education-content .content {
    position: relative;
    padding: 1.5rem;
    border: .2rem solid var(--main-color);
    border-radius: .6rem;
    margin-bottom: 2rem;
    overflow: hidden;
 }

 .education-content .content::before {
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

 .education-content .content:hover::before {
    width: 100%;

 }

 .education-content .content .year {
    font-size: 1.5rem;
    color: var(--main-color);
    padding-bottom: .5rem;
 }

 .education-content .content .year i {
    padding-left: .5rem;
 }

 .education-content .content h3 {
    font-size: 2rem;

 }

 .education-content .content p {
    font-size: 1.6rem;
    padding-top: .5rem;
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