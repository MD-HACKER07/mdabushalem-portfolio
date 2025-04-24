import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

// Create a safe version of ReactGA to prevent errors
const safeGA = {
  initialize: () => {},
  event: () => {},
  send: () => {}
};

// Only initialize Google Analytics if a tracking ID is provided
const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;

// Set up global gtag function
if (typeof window !== 'undefined') {
  window.gtag = window.gtag || function() {};
}

// Initialize GA only if we have a tracking ID
if (TRACKING_ID) {
  try {
    ReactGA.initialize(TRACKING_ID);
  } catch (error) {
    console.warn("Google Analytics initialization failed:", error);
  }
} else {
  // Replace ReactGA with our safe version when no tracking ID exists
  Object.keys(safeGA).forEach(key => {
    ReactGA[key] = safeGA[key];
  });
}

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
