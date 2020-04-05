const Wave = () => (
  <div className="wave">
    <svg viewBox="0 0 1920 146" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="For-Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Apple-TV-Copy" transform="translate(0.000000, -692.000000)" fill="#171C27">
          <g id="Decoration-Dark-Blue" transform="translate(0.000000, 692.000000)">
            <path d="M0,83.6560814 C212.73508,126.686062 371.59709,134.630036 476.586029,107.488002 C634.069437,66.7749523 716,81.6186046 840,34.5043141 C922.666667,3.09478718 1065.37962,23.0374725 1268.13887,94.3323702 L1268.13887,143 L0,145.400211 L0,83.6560814 Z" id="Path-3" fill-opacity="0.4"></path>
            <path d="M508.952885,58.1724559 C569.615725,-5.33355681 675.672127,-16.6477806 827.12209,24.2297844 C1054.29703,85.5461319 1020,129.419921 1200,78.6145503 C1235.91358,68.4778686 1238.61107,69.1824649 1270.90862,76.6176578 C1505.45951,130.613429 1721.82424,117.631133 1920.0028,37.6707721 L1920.0028,145.400211 L710,143.400211 L508.952885,58.1724559 Z" id="Path-4" fill-opacity="0.25"></path>
            <path d="M0,145.000005 C257.496097,39.8079745 420.605676,-3.07644339 489.328738,16.346751 C592.413331,45.4815425 801.143754,114.856214 938.7775,76.5 C1076.41125,38.1437864 1126.86052,7.4434617 1257.8172,47.2702702 C1388.77388,87.0970787 1642.65296,131.028296 1781.17809,131.028296 C1873.83804,131.028296 1920.11287,135.685532 1920.0026,145.000005 L0,145.000005 Z" id="Path-2"></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
);

const Header = () => (
  <div className="header_background">
    <div className="container">
      <h1 className="header_heading">Hi, I’m Dmitriy Yakovlev</h1>
      <h2 className="header_second-heading">UX/UI designer and front-end developer</h2>
      <p className="header_text">Here you can see my portfolio works and read a little about me. You can also contact me
        with a proposal for
        cooperation. I'm pleased to take a part in interesting projects. Let's start!</p>
      <div className="header_img-container">
        <a href="https://github.com/dmitryakovlev" className="header_img-github"></a>
        <a href="https://www.linkedin.com/in/dmitryakovlev/" className="header_img-linkedin"></a>
        <a href="https://www.facebook.com/dmitr.yakovlev" className="header_img-facebook"></a>
        <a href="https://www.instagram.com/dmitr.yakovlev/" className="header_img-instagram"></a>
      </div>
      <a href="/" className="header_btn">Open my CV</a>
    </div>
    <Wave/>
  </div>
);

export default Header