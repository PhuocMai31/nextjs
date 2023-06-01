import React from 'react';
import Footer from './footer/Footer'

import Sidebar from "@/components/sidebar/Sidebar";
import Feature from "@/components/feature/Feature";

export default function Layout ({children}: any){
    return (
        <div>
            <Sidebar/>
            <Feature>{children}</Feature>

        </div>
    )
}