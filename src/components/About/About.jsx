// import CountdownTimer from '../Clock/Clock';
import './about.css'

const About = () => {
  return (
    <section className="about">
      <div className="countdown">
        <p>COUNTDOWN TO GRAMA CONFERENCE </p>
        {/* <CountdownTimer/> */}
        
      </div>
      <div className="grid">
        <div className="left">
          <h1>ABOUT GRAMA</h1>
          <p>
            The GRAMA conference is a professional focused conference for muslim
            graduates, that gathers young adult around Lagos for an educative,
            informativeand networking session, to foster kknowledge sharing and
            capacity building, aiming to strenghten the professional workspace
            amongst it members.
                  </p>
                  <button>Reserve Seat </button>
              </div>
              <div className="right">
                  <img src="images/Frame 99.svg" alt="" />
              </div>
      </div>
    </section>
  );
};

export default About;
