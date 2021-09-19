import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import { Typography } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import profileCard from '/public/profilecardblank.svg'
import styles from '../../components/Profile.module.css'



export default function exams() {
    return (
        <div>
            <SidebarV2>
                <div className={styles.container}>
                  <Image src={profileCard} alt="user profile card" style="width:100%;"/>
                  <div className={styles.centered}>12345678</div>
                  <div className={styles.centeredfirstName}>John</div>
                  <div className={styles.centeredlastName}>Smith</div>
                </div>
            </SidebarV2>
        </div>
    )
}