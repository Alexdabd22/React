import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ComputersAndLaptopsPage from './Devices/Devices';
import LaptopsPage from './LaptopsPage/LaptopsPage';
import LaptopLenovoPage from './LaptopsPage/LaptopLenovoPage';
import Breadcrumb from './Breadcrumb';

const App = () => {
    return (
        <div>
            <Breadcrumb />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/computers-and-laptops" element={<ComputersAndLaptopsPage />} />
                <Route path="/laptops" element={<LaptopsPage />} />
                <Route path="/laptops/lenovo" element={<LaptopLenovoPage />} />
            </Routes>
        </div>
    );
};

export default App;
