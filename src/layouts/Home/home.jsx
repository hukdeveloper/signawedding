import "./style.css";

// pics
import Logo from "../../assets/logo.png";
import PlanImage from "../../assets/plan-image.jpg";
import GetImage from "../../assets/get-image.png";
import Img1 from "../../assets/b-imageOne.png";
import Img2 from "../../assets/b-imageTwo.png";
import Img3 from "../../assets/b-imageThree.png";
import Img4 from "../../assets/consult.svg";
import Img5 from "../../assets/plan.svg";
import Img6 from "../../assets/wedding.svg";
import Img7 from "../../assets/dest-img1.png";
import Img8 from "../../assets/dest-img2.png";
import Img9 from "../../assets/dest-img3.png";
import Img10 from "../../assets/dest-img4.png";
import LocationIcon from "../../assets/location-icon.svg";
import Location1Icon from "../../assets/location1-icon.svg";
import EconIcon from "../../assets/economical-icon.svg";
import StressIcon from "../../assets/stress-icon.svg";
import VenueImg1 from "../../assets/vennue-img1.png";
import VenueImg2 from "../../assets/venuue-img2.png";
import LineICon from "../../assets/line.svg";
import BlogImg1 from "../../assets/blog-img1.webp";
import BlogImg2 from "../../assets/blog-img2.webp";
import bgVedio from "../../assets/file.mp4";

const Home = () => {
  const servicesData = [
    {
      bgColor: "#0B0061",
      icon: LocationIcon,
      heading: "location",
      description:
        "You get to choose the perfect location that fits your personality and style. Whether you desire a beachfront ceremony or an intimate gathering in the mountains, there is a destination for everyone. ",
    },
    {
      bgColor: "#CD7F32",
      icon: EconIcon,
      heading: "Economical",
      description:
        "Destination weddings can be more cost-effective than a traditional wedding. By eliminating some of the conventional expenses associated with hosting a local event, you can align the budget with your dream wedding abroad. As an added bonus, we offer interest-free payments and travel financing plans.",
    },
    {
      bgColor: "#4BD1A0",
      icon: StressIcon,
      heading: "Stress- Free",
      description:
        "You get to choose the perfect location that fits your personality and style. Whether you desire a beachfront ceremony or an intimate gathering in the mountains, there is a destination for everyone. ",
    },
  ];
  const processCard = [
    {
      icon: Img4,
      title: "THE CONSULT",
      description:
        "First things first, congratulations! This is an incredibly exciting time in your life and we can’t wait to hear about it. Getting to know each other is the key to ensuring you receive exactly what you’ve dreamed up and better. Through our initial call and ensuing conversation, we’ll build a vision to set solid expectations.",
    },
    {
      icon: Img5,
      title: "THE PLAN",
      description:
        "The next step is to jump into flawlessly planning your wedding from start to finish. We will assess your budget, do’s and don'ts, locations, and so much more. All the fine details will be outlined so that you know exactly what your wedding will entail. Our professional experience allows you to feel confident that you are in the right hands.",
    },
    {
      icon: Img6,
      title: "THE WEDDING AWAY",
      description:
        "The last step is my personal favorite because this is when I get to send you two (and your potential guests) off to experience the most incredible matrimony trip of your life! At this point, everything is booked, finalized and you are on your way to soak up every moment of your hand-designed wedding experience. Throughout our entire process, the goal is to get you to this point right here. Happy, glowing, and married!",
    },
  ];
  const infoService = [
    {
      bgImg: Img1,
      content:
        " We believe there’s no better opportunity to strengthen relationships than by traveling together, and destination weddings offer a great way to develop lasting memories. Our exclusive approach establishes an environment that is conducive to you and your guests forming new bonds and deepening existing ones. Your wedding is once in a lifetime and the experience should be one in a million. Signature Weddings Away creates moments that are unforgettable for everyone.",
      btnContent: "EXCLUSIVE APPROACH",
    },
    {
      bgImg: Img2,
      content:
        "We would be willing to bet that you’re feeling a crazy amount of mixed emotions as it relates to planning your wedding. Not to worry, as we can guide you all the way to “I Do” ….and the moments that follow. We’ll also provide extraordinary concierge service and extra attention to all of your guests. After you’ve said vows and taken that first sip of your celebratory ‘beverage of choice’, you’ll be beaming knowing the whole experience was ‘perfection’.  From the original detail mapping, to the research and booking, we look to achieve completion of your day with expert precision.",
      btnContent: "IMPECCABLE EXECUTION",
    },
    {
      bgImg: Img3,
      content:
        " It’s simple, your destination wedding should be an unrivaled event and our sole objective is to deliver an overall experience unlike anything you’ve ever encountered.  We want you to reflect on a day that is unapologetically yours. Friends and loved ones are there to celebrate you.  As a couple, your unique identity should be all over your special day. After all, you two are the stars of the show and we intend to truly make you feel as such.",
      btnContent: "UNPARALLED EXPERIENCE",
    },
  ];
  const destData = [
    {
      bgImg: Img7,
      title: "Costa Rica",
    },
    {
      bgImg: Img8,
      title: "Dominican Republic",
    },
    {
      bgImg: Img9,
      title: "Grenada",
    },
    {
      bgImg: Img10,
      title: "Mexico",
    },
  ];

  const blogdata = [
    {
      img: BlogImg1,
      title: "Sanctuary Cap Cana",
      p: "Adult only, Butler Service, All  Inclusive,",
    },
    {
      img: BlogImg2,
      title: "Hotel Xcaret Arte",
      p: "Family Friendly, All Fun Inclusive, Butler Service",
    },
  ];
  return (
    <div className="main-content">
      <div className="hero-section">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header-section">
        <p>
          We are passionate about helping couples find and create wedding <br />
          experiences that honor their love, reflect their personalities and{" "}
          <br />
          inspire all.
        </p>
        <button className="header-btn">
          PLAN FOREVER TODAY- REQUEST A QUICK HELLO
        </button>
      </div>
      <div className="plan">
        <h2>Planned with Precision, Shared with Love! </h2>

        <div className="plan-card">
          <div className="plan-content">
            <h3>You're Getting Married!</h3>
            <p>
              We understand how important your wedding day is. Whether you have
              dreamt of this day all of your life or it has taken you by
              surprise, you only get one wedding day with the one you love. Why
              not make it everything you've dreamt of? Let's put your Pinterest
              board to work. We can make your inspiration a reality. Let us show
              you how.
            </p>
            <button className="plan-btn">DISCOVER ALL THAT IS POSSIBLE</button>
          </div>
          <div className="plan-image">
            <img src={PlanImage} alt="" />
          </div>
        </div>
      </div>
      <div className="destination-wedding">
        <div className="inner-content">
          <h3>
            Placing your destination wedding <br /> in the right hands can be
            the <br />
            difference between:
          </h3>
          <h4>
            "Happily Ever After" or "Happily <br /> Never After"
          </h4>
          <p>
            Making the special decision to take your wedding abroad is ambitious
            and you should be very proud! When it comes to planning their
            nuptials, more and more couples are choosing to have a destination
            wedding over one that is hosted locally. There are many reasons why
            this type of wedding has become so popular, but here are just a few:
          </p>
          <button className="dest-btn">Your Custom Wedding Awaits</button>
        </div>
      </div>
      <div className="service-cards">
        {servicesData.map((data) => {
          return (
            <>
              <div
                className="service-card"
                style={{ background: data.bgColor }}
              >
                <img src={data.icon} alt="" />
                <span>{data.heading}</span>
                <p>{data.description}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="unity-section">
        <h2>Love. Unite. Share</h2>
      </div>
      <div className="get-know">
        <div className="inner-image">
          <img src={GetImage} alt="" />
        </div>
        <div className="inner-content">
          <h2>Get To Know Us</h2>
          <p>
            Signature Weddings Away offers couples the exclusive opportunity to
            have their destination wedding without all of the hassle typically
            associated with planning such an occasion. Fortunately, providing
            high quality destination wedding planning is what we consider our
            expertise. It’s our pleasure to take care of everything for you,
            from finding the perfect location to arranging all of the related
            details. We want you to be at ease during the entire process as we
            provide the highest level of service, including personalized touches
            throughout your picture-perfect wedding day. We’ll work with you to
            design a wedding we know you will love.
          </p>
          <button className="get-know-btn">
            BOOK YOUR COMPLIMENTARY CONSULTATION &#62;{" "}
          </button>
        </div>
      </div>
      <div className="benefits">
        <h2>Benefits of a Destination Wedding</h2>
        <div className="cards">
          {infoService.map((data) => {
            return (
              <>
                <div className="card">
                  <div
                    className="card-content"
                    style={{ backgroundImage: `url(${data.bgImg})` }}
                  >
                    <div className="content">
                      <p>{data.content}</p>
                    </div>
                  </div>
                  <button className="benefit-btn">{data.btnContent}</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="process-section">
        <h2>Our Simple Process</h2>
        <p>
          Signature, defined as the unique way a name is written, encompasses
          our core belief which precisely conveys our view of the union between
          you and your significant other. Just as a Signature is unique to each
          person, so you are to us. We value each couple's intrinsic style and
          flair. Simply put, you are more than just a wedding! This is why we
          take the time to identify your unique style. So schedule some time
          aside to speak; we want to get to know you!
        </p>
        <p>
          The steps below will help you understand the process utilized to
          develop your wedding’s “unique signature”....
        </p>
        {processCard.map((data) => {
          return (
            <>
              <div className="process-card">
                <img src={data.icon} alt="" />
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="dest-section">
        <h2>Destinations</h2>
      </div>

      <div className="dest-cards">
        {destData.map((data) => {
          return (
            <>
              <div
                className="card"
                style={{ backgroundImage: `url(${data.bgImg})` }}
              >
                <div className="card-content">
                  <img src={Location1Icon} alt="" />
                  <h3>{data.title}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="vennue">
        <div className="inner-image">
          <img src={VenueImg1} alt="" />
        </div>
        <div className="inner-content">
          <img src={LineICon} alt="" />
          <h2>
            Where will your <br />
            <i>"I DO"</i> take you?
          </h2>
          <span>Find Your Venue</span>
          <img src={LineICon} alt="" />

          <button className="venue-btn">SEE ALL &#62; </button>
        </div>
        <div className="inner-image">
          <img src={VenueImg2} alt="" />
        </div>
      </div>

      <div className="blog-cards">
        {blogdata.map((data) => {
          return (
            <>
              <div className="card">
                <img src={data.img} alt="" />
                <h3>{data.title}</h3>
                <p>{data.p}</p>
                <button>Learn More</button>
              </div>
            </>
          );
        })}
      </div>

      <div id="video-section">
        <video src={bgVedio} autoPlay loop muted></video>

        <div className="video-content">
          <h1>Plan your dream wedding</h1>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
