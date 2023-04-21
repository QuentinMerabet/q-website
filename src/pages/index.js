import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";

import Blob from "@/components/Blob";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

import useTheme from "@/utils/useTheme";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Quentin Merabet | developer + designer</title>
        <meta
          name="description"
          content="Bonjour, i’m Quentin Merabet — a French developer & designer with
          12+ years of experience creating. I love to build elegant yet
          disruptive products making an impact."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={theme === "dark" ? "dark" : "light"}>
        <nav className="gradient w-screen absolute">
          <div className="container  mx-auto flex place-content-center">
            <a
              className="cta"
              href="mailto:bonjour@quentinmerabet.com"
              target="_blank"
              rel="noreferrer"
            >
              👁️ Open to opportunities from April 2023
            </a>
          </div>
        </nav>
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto">
            <Blob theme={theme} toggleTheme={toggleTheme} />
            <h1>
              Bonjour, i’m Quentin Merabet — a French{" "}
              <span className="txtgradient">developer & designer</span> with 12+
              years of experience creating. I love to build elegant yet
              disruptive products making an impact.
            </h1>
            <h4 className="mt-8">Montréal + Paris</h4>
            <p className="mt-3">
              I'm highly curious, and I love exploring the world of art in all
              its forms. When I'm not coding, you might catch me on set{" "}
              <a
                href="https://vimeo.com/quentinmerabet"
                target="_blank"
                rel="noreferrer"
              >
                directing commercials or music videos
              </a>
              .<br />
              Let's connect on{" "}
              <a
                href="https://twitter.com/quentinmerabet"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://linkedin.com/in/quentin-merabet"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/quentinmerabet"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              . Or you can just send me an email at{" "}
              <a href="mailto:bonjour@quentinmerabet.com">
                bonjour@quentinmerabet.com
              </a>
            </p>
          </div>
        </section>

        <div className="container mx-auto flex flex-col md:flex-row md:gap-10">
          <section className="md:w-2/4">
            <h2>Experiences</h2>
            <Experience
              title={"Lead Developer (web3)"}
              company={"Code Green"}
              from={"Jun 2022"}
              to={"Now"}
            />
            <Experience
              title={"Founder + Developer (web3)"}
              company={"Peuple.app"}
              from={"Aug 2021"}
              to={"2022"}
            />
            <Experience
              title={"Developer + Designer + Director"}
              company={"Freelance"}
              from={"2015"}
              to={"2021"}
            />
            <Experience
              title={"Instructor Code + Design"}
              company={"Tremplin Numérique, Paris"}
              from={"2014"}
              to={"2016"}
            />
            <Experience
              title={"Developer"}
              company={"Permis de Vivre La Ville, Paris"}
              from={"2013"}
              to={"2015"}
            />
            <Experience
              title={"Webdesigner (work-study program)"}
              company={"Touscoprod, Paris"}
              from={"2010"}
              to={"2012"}
            />
          </section>

          <div>
            <section>
              <h2>Tools</h2>
              <ul>
                <li>
                  <strong>React, Next.js, Node.js</strong> fanboy.
                </li>
                <li>
                  <strong>Three.js, Framer Motion, Spring</strong> enthusiast.
                </li>
                <li>
                  <strong>
                    Solidity, Wagmi, ethers.js, web3js, connectkit
                  </strong>{" "}
                  lover.
                </li>
                <li>
                  <strong>
                    MongoDB, GraphQL, Parse Server, Decentralized databases
                  </strong>{" "}
                  nerd.
                </li>
                <li>
                  <strong>Figma, Adobe Suite, C4D & AI's API </strong> player.
                </li>
              </ul>
            </section>
            <section>
              <h2>Education</h2>
              <ul>
                <li>
                  Bachelor's degree in Multimedia Engineering{" "}
                  <strong>(promotion valedictorian)</strong>, EMC Paris.
                  <div className="subtext">2010 - 2013</div>
                </li>
                <li>
                  Baccalaureate in Electronics Engineering{" "}
                  <strong>(visual arts option)</strong>, High School.
                  <div className="subtext">2009</div>
                </li>
                <li className="subtext">
                  I wasn’t the coolest kid in town — I learnt to code in 2006
                  during my highschool years.
                </li>
                <li>French + English</li>
              </ul>
            </section>
          </div>
        </div>

        <section>
          <div className="container mx-auto">
            <h2>Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
              <Project title={"The Zerøs"} client={"Personal"}>
                <p className="mb-3">
                  A 3D experiment in generative art - using terrain generation,
                  physics, and live sound. Now available as an NFT open edition.
                </p>
                <a
                  href="https://zeros.quentinmerabet.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </Project>
              <Project
                title={"Carbon Calculator"}
                client={"Code Green + World Of Women"}
              >
                <p className="mb-3">
                  A tool calculating the amount of kgCO2 emitted by any Ethereum
                  wallet or contract address. Using the Carbon Calculator, World
                  Of Women was able to offset their entire historical carbon
                  footprint.
                </p>
                <a
                  href="https://calculator.codegreen.earth"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://news.worldofwomen.art/wow-offsets-historical-carbon-footprint-a321b053ed01"
                  target="_blank"
                  rel="noreferrer"
                >
                  Press release
                </a>
              </Project>
              <Project title={"SoulX"} client={"Code Green + United Nations"}>
                <p className="mb-3">
                  Introduced to the United Nations and the World Economic Forum,
                  proof-of-concept of a dynamic NFT taking the form of a
                  passport storing on-chain proof of donations, attending to
                  events or mobile app achievements. Experimented with
                  generative art to make every passport unique.
                </p>
                <a href="https://soulx.org" target="_blank" rel="noreferrer">
                  Visit
                </a>
                <a
                  href="https://testnets.opensea.io/assets/mumbai/0x50fbdf958ca75781e368e22b7a0a5c9a4b9b467e/7"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on opensea
                </a>
              </Project>
              <Project title={"The Vampires Club"} client={"Code Green"}>
                <p className="mb-3">
                  A Code Green’s NFT collection including 3D interactions and
                  games (threejs) with an offchain point system.
                </p>
                <a
                  href="https://beta.thevampires.club"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </Project>
              <Project title={"ERC-1155PricePerSupply"} client={"Personal"}>
                <p className="mb-3">
                  A Solidity smart contract following ERC-1155 standard that
                  raises the value of NFTs with every mint, which naturally
                  restricts the supply of open edition.
                </p>
                <a
                  href="https://github.com/QuentinMerabet/ERC-1155PricePerSupply"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </Project>
              <Project
                title={"Snapdrop"}
                client={"Code Green + World Of Women"}
              >
                <p className="mb-3">
                  Internal tool used to take snapshots of multiple projects at
                  once, checking for doubles, and then make an airdrop to the
                  communities.
                </p>
                <a
                  href="https://codegreen-snapdrop.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </Project>
              <Project title={"Pixshot"} client={"Personal"}>
                <p className="mb-3">
                  API generating PNG pixel art from an array of pixel
                  coordinates.
                </p>
                <a
                  href="https://github.com/QuentinMerabet/thepixelcollective-pixshot/blob/master/index.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </Project>
              <Project title={"Social Staking"} client={"Peuple.app"}>
                <p className="mb-3">
                  A Solidity staking contract with social points boosting the
                  APY.
                </p>
                <a
                  href="https://www.bscscan.com/address/0x9eb9192ae8c71e7e457257f9efe84ab696379adb#code"
                  target="_blank"
                  rel="noreferrer"
                >
                  See contract
                </a>
              </Project>
              <Project title={"Heal Labs"} client={"Heal Labs"}>
                <p className="mb-3">
                  A minimalist puzzle-like website introducing the Code Green's
                  innovation branch to partners.
                </p>
                <a
                  href="https://www.heal-labs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </Project>
            </div>
          </div>
        </section>
        <footer>
          <a
            href="mailto:bonjour@quentinmerabet.com"
            target="_blank"
            rel="noreferrer"
          >
            bonjour@quentinmerabet.com
          </a>
        </footer>
      </main>
    </>
  );
}
