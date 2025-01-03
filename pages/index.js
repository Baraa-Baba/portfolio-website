import { useEffect } from "react";
import dynamic from "next/dynamic";
import Introdution from "../components/Introdution";
const Jet = dynamic(() => import("../components/jet"));
const About = dynamic(() => import("../components/About.jsx"));
const Projects = dynamic(() => import("../components/projects.jsx"));
const Contact = dynamic(() => import("../components/Contact.jsx"));
const SocialAccounts = dynamic(() => import("../components/SocialAccounts"));
export default function App({ loading }) {
  return (
    <div className="space p-0 m-0">
      <head>
        <title>Baraa El Baba</title>
        <meta author="Baraa El Baba"></meta>
        <script>history.scrollRestoration = "manual"</script>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300&display=swap" rel="stylesheet"></link>
        <meta
          name="Description"
          content="Hi my name is Baraa a frontend developer from lebeneon I love
      programming and learning new things all the time and this is my portfilio website"
        />
      </head>
      <Jet />
      <Contact />
      <SocialAccounts />
      <Projects />
      <About />
      <Introdution />
    </div>
  );
}
