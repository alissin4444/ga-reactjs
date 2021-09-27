import ReactGA from 'react-ga';

export default function sendEventToGA({ category, action }) {
  ReactGA.event({
    category,
    action
  });
}