import { TopBar } from './components/TopBar';
import './index.css'
import { CropsPage } from './page/CropsPage';
import { AppRouter } from './router/AppRouter';

function App() {
    return (
        <>  
            <TopBar />
            <AppRouter />
            {/* <CropsPage/> */}
        </>
  )
}

export default App
