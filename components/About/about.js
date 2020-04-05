const Wave = () => (
  <div className="wave">
    <svg viewBox="0 0 1920 153" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="For-Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Apple-TV-Copy" transform="translate(0.000000, -2849.000000)" fill="#EEEEEE">
          <g id="Decoration-Blue" transform="translate(-9.000000, 2849.000000)">
            <path d="M-2.27373675e-13,87.6667478 C168.833484,23.9026155 327.695493,31.8465891 476.586029,111.498669 C699.921832,230.976788 908.435096,53.3310287 998.01302,38.3705177 C1087.59094,23.4100066 1164.98219,98.3430365 1268.13887,98.3430365 C1336.91,98.3430365 1395.53128,114.698984 1444.00273,147.410877 L-2.27373675e-13,149.410877 L-2.27373675e-13,87.6667478 Z" id="Path-3" fill-opacity="0.4" transform="translate(722.001365, 94.488421) scale(-1, 1) translate(-722.001365, -94.488421) "></path>
            <path d="M554.669671,127.083906 C731.827763,86 652.652497,57.1267942 837.441023,12.8667577 C933.142167,-10.0553155 1099,137.101341 1279,86.2959703 C1302.94239,79.5381825 1519.60998,64.6631165 1929.0028,41.6707721 L1929.0028,149.400211 L719,147.400211 C605.566309,134.755833 550.789532,127.983731 554.669671,127.083906 Z" id="Path-4" fill-opacity="0.25"></path>
            <path d="M5.93168571,149 C215.793472,13.9749151 378.903052,-28.9095013 495.260424,20.346751 C669.796481,94.2311294 791.486154,111.853213 925.931686,111.853213 C1060.37722,111.853213 1132.7922,11.4434617 1263.74889,51.2702702 C1394.70557,91.0970787 1624.34167,149 1787.10978,135.028296 C1895.62184,125.713826 1941.89581,130.371061 1925.93169,149 L5.93168571,149 Z" id="Path-2" transform="translate(967.467241, 74.799159) scale(-1, 1) translate(-967.467241, -74.799159) "></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
);

const About = () => (
  <div className="about_background">
    <div className="container">
      <h1 className="text-dark">About Me</h1>
      <div className="about_container">
        <img src="/images/about/picture.svg"/>
        <p className="text-dark about_text">
          I’m a professional web-designer and junior design developer.
          <br/><br/>
          In 2018, while I was working as a UX/UI designer at Diehl Controls Corporation, I developed many successful
          design solutions, ranging from an airplane lighting control display to an interface for a coffee machine and a
          washing machine.
          <br/><br/>
          At the beginning of 2019, I opened my own IT service company. In addition to design, I started my career in
          programming, which has been my hobby for the last two years. Nowadays, I work on the project “SignOnTheGo” and
          “AtTheSpot” which is based on MVC .NET technology. Moreover, I am involved in the implementation of design
          solutions in the project using Css (Sass, Bootstrap, Compass), C# (Razor) and JS (jQuery).
          <br/><br/>
          I continue studying programming and improving my skills constantly. I believe that every web designer should
          understand how the Internet and web pages work.
        </p>
      </div>
    </div>
    <Wave/>
  </div>
)

export default About