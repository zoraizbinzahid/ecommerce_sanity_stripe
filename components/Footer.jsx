import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 ZORAIZ All rights reserved</p>
      <p className='icons'>
        <Link href='https://github.com/zoraizzahid'>
          <FaGithub />
        </Link>

        <Link href='https://twitter.com/zoraizbinzahid'>
          <BsTwitter />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
