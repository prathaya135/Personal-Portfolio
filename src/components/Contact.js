import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
export default function Contact() {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icon' data-aos="zoom-in" data-aos-duration="1000">
            <a href='https://www.instagram.com/prathamesh_b1305/' target='_blank' className="items">
            <FaInstagram className="icons"/>
            </a>
            {/* <a  href='https://www.google.com' target='_blank' className="items">
            <CiFacebook className="icons"/>
            </a> */}
            <a href="https://www.linkedin.com/in/prathamesh-bhokare-600a00234/" target='_blank' className="items">
            <CiLinkedin className="icons"/>
            </a>
            {/* <a href='https://www.google.com' target='_blank' className="items">
            <FaXTwitter className="icons"/>
            </a> */}
            <a href='https://github.com/prathaya135' target='_blank' className="items">
            <FaGithub className="icons"/>
            </a>
            <a href='mailto:bprathamesh135@gmail.com' target='_blank' className="items">
            <BiLogoGmail className="icons"/>
            </a>
        </div>
      </div>
    </>
  )
}
