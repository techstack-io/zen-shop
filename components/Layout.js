import React from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  // const head = () => {

  // }
  const nav = () => (
    <nav class="flex items-center justify-around flex-wrap bg-oxford p-4">
      <div class="flex flex-shrink-0 text-white mr-6 lg:-mx-60">
        <Image
          src="/img/temploLogo2.svg"
          alt="Logo"
          width={110}
          height={100}
        />
      </div>
      <ul class="flex">
        <li class="mr-6">
          <Link href="/">
            <a class="text-marigold">
              Home
            </a>
          </Link>
        </li>
        <li class="mr-6">
        <Link href="/login">
            <a class="text-marigold">
              Login
            </a>
          </Link>
        </li>
        <li class="mr-6">
          <Link href="/register">
              <a class="text-marigold">
                Register
              </a>
            </Link>
        </li>
        <li class="mr-6">
          <a class="text-disabled cursor-not-allowed" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  );

  return (
    <React.Fragment>
      {nav()} {children}
    </React.Fragment>
  );
};

export default Layout;
