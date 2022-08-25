import DefaultLayout from '@/components/';
import './App.css';
import CanvasDefaultLayout from './components/CanvasDefaultLayout';

interface ISocials {
  label: string;
  link: string;
  icon: string;
}
function App() {
  return (
    <div className='App'>
      <CanvasDefaultLayout />
      <DefaultLayout />
    </div>
  );
}

export default App;
