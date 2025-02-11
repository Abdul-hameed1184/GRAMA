import './Cover.css'
const Cover = () => {
  return (
    <section className="cover">
      <div className="grid">
        <div className="left">
          <p className='heading'>
            GRAMA <br />
            <span>
              CONFERENCE <br /> <span>'25</span>
            </span>
          </p>
          <p>
            Join the 5th Annual Conference of the Graduate Muslim Association
            (GRAMA) to Discover insights, strategies, and faith-inspired
            solutions to thive in a world of Volatility, Uncertainty,
            Complexity, and Ambiguity, Let's Navigate this journey together.
                  </p>
                  <button className='primary'>Buy Tickets</button>
                  <button className='secondary'>View Gallery</button>
        </div>
        <div className="right">
          <img src="public/images/Group 1000002220.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Cover
