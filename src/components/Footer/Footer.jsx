import './footer.css'

const Footer = () => {
  return (
      <section className="footer">
          <div className="logo">
              <img src="images/Frame 34.svg" alt="" />
          </div>
          <div className="flex">
              <div className="sponsor">
                  <h1>BECOME A SPONSOR</h1>
                  <p>Become the first to know about the programs and event in the GRAMA community </p>
                  <button>Reach out to us </button>
              </div>
              <div className="route">
                  <ul>
                      <li>Contact Us</li>
                      <li>Sponsor Us</li>
                      <li>GRAMA Community</li>
                  </ul>
              </div>
              <div className="newsletter">
                  <h1>Get first hand news from us </h1>
                  <p>Subscribe to our newsletter </p>
                  <form>
                      <input type="text" placeholder='Your Email' />
                      <button>h</button>
                  </form>
              </div>
          </div>
          <div className="down">
              
          <hr />
          <div className="bottom">
          <p>powered by: <span>GRAMALagos</span></p>
              <div className="right">
                  <img src="images/sociall 2.svg" alt="" />
                  <img src="images/sociall 3.svg" alt="" />
                      <img src="images/sociall 1.svg" alt="" />
                      
                  <p>@gramalagis</p>
                  </div>
          </div>
          </div>
    </section>
  )
}

export default Footer
