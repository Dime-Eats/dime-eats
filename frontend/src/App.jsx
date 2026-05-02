import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png'; // We'll add this later

function App() {
return (
<Router>
<div className="min-h-screen bg-dark-bg text-white">
{/* Navbar */}
<nav className="bg-black p-4 flex items-center justify-between border-b border-gold">
<div className="flex items-center gap-3">
<img src={logo} alt="Dime Eats" className="h-10 w-auto" />
<h1 className="text-2xl font-bold tracking-wider text-gold">DIME EATS</h1>
</div>
</nav>

<Routes>
<Route path="/" element={<div className="p-6">Home Feed Coming Soon...</div>} />
</Routes>
</div>
</Router>
);
}
