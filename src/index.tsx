import { createRoot } from 'react-dom/client';
import Container from './components/Container/Container';
import './global.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Container />,
);
