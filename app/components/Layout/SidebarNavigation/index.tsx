"use client"
import React from "react";
import styles from "../../../styles/sidebar.module.scss"
import Link from "next/link";
import {navlinks} from "../../../data/sidebarnavlinks"
const SideBar = ()=>{
    return(
        <div className ={styles.sidebar_wrapper}>
            {
                navlinks.length && navlinks.map((nav :{value: string, url: string}, index : number)=>{
                    return <>
                            <Link href={`/dashboard/gifts/c/${nav.url}`} key={index}>{nav.value}</Link>
                            </>
                })
            }
        </div>
    )
}
export default SideBar