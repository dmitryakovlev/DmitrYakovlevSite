import { FC } from "react";

const Wave = () => (
  <svg
    viewBox="0 0 1920 168"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Apple-TV-Copy"
        transform="translate(0.000000, -1804.000000)"
        fill="#FAC719"
      >
        <g id="Decoration-Yellow" transform="translate(0.000000, 1804.000000)">
          <path
            d="M-1.13686838e-13,107.656081 C188.510322,82.6173936 347.372332,90.5613672 476.586029,131.488002 C670.406574,192.877955 890.422076,99.460511 980,84.5 C1039.71862,74.526326 1135.76491,85.8037827 1268.13887,118.33237 L1444.00273,167.400211 L-1.13686838e-13,169.400211 L-1.13686838e-13,107.656081 Z"
            id="Path-3"
            fillOpacity="0.4"
          ></path>
          <path
            d="M710,125.194772 C638.395751,36.8730555 677.436447,11.2180595 827.12209,48.2297844 C921.043516,71.4530803 1020,153.419921 1200,102.61455 C1235.91358,92.4778686 1235.84961,122.843627 1268.14716,130.27882 C1502.69805,184.274591 1719.98326,161.405241 1920.0028,61.6707721 L1920.0028,169.400211 L710,167.400211 L710,125.194772 Z"
            id="Path-4"
            fillOpacity="0.25"
          ></path>
          <path
            d="M1.13686838e-13,169 C193.786017,169 356.895596,126.115584 489.328738,40.346751 C687.97845,-88.306498 785.554468,131.853213 920,131.853213 C1054.44553,131.853213 1126.86052,31.4434617 1257.8172,71.2702702 C1388.77388,111.097079 1642.65296,155.028296 1781.17809,155.028296 C1873.83804,155.028296 1920.11294,159.685531 1920.0028,169 L1.13686838e-13,169 Z"
            id="Path-2"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

interface ICompanyLogo {
  id: number;
  url: string;
}

const companyLogo: ICompanyLogo[] = [
  {
    id: 0,
    url: "/images/logos/f8.png",
  },
  {
    id: 1,
    url: "/images/logos/diehl.png",
  },
  {
    id: 2,
    url: "/images/logos/smartech.png",
  },
  {
    id: 3,
    url: "/images/logos/tfs.png",
  },
];

const ExperienceLogo: FC<ICompanyLogo> = ({ url }) => <img src={url} />;

const Experience = () => (
  <div className="home home-experience">
    <div className="container">
      <h1>My Work Experience</h1>
      <div className="home-experience__block">
        {companyLogo.map((param) => (
          <ExperienceLogo {...param} key={param.id} />
        ))}
      </div>
    </div>
    <Wave />
  </div>
);

export default Experience;
