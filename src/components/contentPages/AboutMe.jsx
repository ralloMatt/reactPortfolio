import image from '../../images/me2.jpg';

function AboutMe() {

    return (
      <section class="flexRow"> 
      <h1 id="about-me" class="flexSmallItem">About Me</h1>
        <section class="flexBigItem"> 
          <section class="flexAboutMe">
              <p>My name is Matthew Rallo. I am a Computer Science graduate of the University of Missouri St. Louis. I am doing a coding bootcamp and becoming a full stack web developer.</p>
              <img class="profilePhoto" src={image} alt="A profile picture of your's truly" />
          </section>
        </section>
      </section>
      );


}

export default AboutMe;
