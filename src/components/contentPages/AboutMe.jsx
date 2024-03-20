import image from '../../images/me.jpg';

function AboutMe() {

    return (
      <section class="flexRow"> 
      <h1 id="about-me" class="flexSmallItem">About Me</h1>
        <section class="flexBigItem"> 
          <section class="flexAboutMe">
              <p>I'm Matthew Rallo, fueled by a passion for exploring cutting-edge technologies. Holding a Computer Science degree from the University of Missouri St. Louis, I've furthered my expertise with a rigorous six-month bootcamp program at WASHU, earning a certificate in full-stack web development. While I'm known to immerse myself in my work, my ultimate joy lies in witnessing the project from conception to completion.</p>
              <img class="profilePhoto" src={image} alt="A profile picture of your's truly" />
          </section>
        </section>
      </section>
      );


}

export default AboutMe;
