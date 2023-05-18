import React from "react";
import "./styles.css";
import SignatureImg from "../../assets/About-signIMG.png";
import planningImg from "../../assets/planningImg.webp";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutTopHead">
          <h1>lets Plan Events of your Dreams</h1>
        </div>
        <div className="aboutContainer">
          <div className="aboutContent">
            <div className="aboutCard whoWeArecard">
              <div className="imgHead">
                <img src={SignatureImg} alt="img not found" />
              </div>
              <div className="content">
                <h1>Who we are</h1>
                <p>
                  Signature Weddings Away, a boutique destination wedding travel
                  planning service, helping couples wed in picturesque tropical
                  islands while surrounded by loved ones.  
                </p>
                <p>
                  We specialize in wedding event and group travel arrangements
                  in the sunny Isles of the Caribbean, Mexico and Costa Rica.
                  Providing island weddings tailored to your vision, while
                  assisting your guests every step of the way. Our purpose is to
                  help relationships bond & flourish while celebrating life's
                  most momentous moment together, saying I Do.
                </p>
                <p>
                  As a former Destination Wedding Bride and Group Travel Curator
                  our clientele reap the benefits of our firsthand experiences
                  and advance travel technology. We hold your hand from
                  beginning to end, guiding you through the unchanging nuisances
                  of group travel in today's travel era. Keeping you in the
                  'KNOW' with direct access to current information ranging from
                  flight status updates to travel restrictions all in the palm
                  of your hand.
                </p>
                <p>
                  Why, there is nothing more satisfying than being a part of
                  such a momentous occasion in someone's life. Especially,
                  knowing that the experiences created will become memories of
                  their lifetime. We are simply honored to play a role.
                </p>

                <button>
                  <a href="#"> DISCOVER ALL THAT IS POSSIBLE</a>
                </button>
              </div>
            </div>

            <div className="aboutCard aboutPlanningCard">
              <div className="imgHead">
                <img src={planningImg} alt="img not found" />
              </div>
              <div className="content">
                <h1>Elsa S Davis</h1>
                <p>Plain and simple, I do what I love.</p>
                <p>
                  t's not every day you get the opportunity to do what you're
                  passionate about, but I am fortunate enough to be doing just
                  that!
                </p>
                <p>
                  My name is Elsa S. Davis and it has been an honor putting
                  together destination weddings that inspire with help from my
                  team of dreamers; we strive each day to bring our couples'
                  wedding unique wedding visions to life by creating magical
                  moments where love shines bright through everything.  My hope
                  when couples walk down the aisle (or onto the dance floor) is
                  that they feel that the details of their day were heard and
                  understood. 
                </p>
                <p>
                  With over 28 years of experience (8 years specializing in
                  wedding travel and group celebrations) , my customer service,
                  analytical and negotiating skills are a benefit to the couples
                  that I work with resulting in noteworthy destination
                  weddings.  I’m on a mission to continue curating special
                  moments that couples will cherish for a lifetime.  And, I
                  can’t wait to help you create memories that will last
                  forever. 
                </p>
                <p>Talk to you soon!</p>

                <h6>Contact Me:</h6>

                <a href="#">elsa@signatureweddingsaway.com</a>
                <button>
                  <a href="#"> LET'S GET PLANNING!</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
