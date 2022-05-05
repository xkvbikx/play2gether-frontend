import { Route, Navigate } from "react-router-dom";

import Home from "../Components/Main/Home";
import Register from "../Components/Main/Register";
import Login from "../Components/Main/Login";

// export default [
//     <Route path="/" element={<Navigate replace to="/home" />} />,
//     <Route path="/home" element={<Home />} />,
//     <Route path="/register" element={<Register />} />,
//     <Route path="/login" element={<Login />} />,
// ];

export function MainRoute() {
    return [
        <Route path="/" element={<Navigate replace to="/home" />} />,
        <Route path="/home" element={<Home />} />,
        <Route path="/register" element={<Register />} />,
        <Route path="/login" element={<Login />} />,
    ];
}
