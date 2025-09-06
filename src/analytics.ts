import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-ME4TWS9KTF"); // replace with your Measurement ID
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
