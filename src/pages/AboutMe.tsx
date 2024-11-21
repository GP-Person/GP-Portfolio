import portrait from "../assets/GP.jpg";

export default function AboutMe() {
  return (
    <div className="container pt-4 mt-5">
      {/* Main row to hold the portrait and text */}
      <div className="row align-items-start">
        {/* Column for the portrait image */}
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <div><p></p></div>
          <img
            src={portrait}
            alt="Portrait of Garrett Pearson"
            style={{
              width: "180px",         // Fixed width
              height: "180px",        // Fixed height to keep it proportionate
              borderRadius: "50%",    // Circular shape
              objectFit: "cover",     // Ensures the image covers within the circle
              objectPosition: "top",  // Centers image crop on the top
              marginBottom: "1rem",   // Adds space below the image on smaller screens
            }}
          />
        </div>

        {/* Column for the text content */}
        <div className="col-md-8">
          <p>
            Hello, Thank you for checking out my page. Here is some more info about me:
            <br /><br />
            With a track record of consistent reliability and commitment, Garrett Pearson has excelled in developing and running after-school programs focused on technology and music. Programs are designed to inspire and empower students, merging my deep passion for community engagement with my enthusiasm for new technological and musical horizons. Currently, he is enhancing his expertise by pursuing a certification in full-stack software development, which he plans to complete by the end of the year. His skills in graphic design and front-end development allow him to craft visually captivating and interactive digital experiences. He is passionate about learning new technologies and applications and is actively seeking opportunities to expand his impact, applying his dedication and innovative approach to foster growth and learning in diverse communities.
          </p>
        </div>
      </div>
    </div>
  );
}
