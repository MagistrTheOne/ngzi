import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Generator from './components/Generator';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        {/* Scanlines Effect */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-5 animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          
          <Routes>
            <Route path="/" element={<Generator />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          
          <Footer />
        </div>

        {/* Background Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Cpath d='M30 0l21.2 12.3v24.6L30 60 8.8 36.9V12.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
