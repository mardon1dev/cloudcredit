import { useEffect, useState } from "react";

const Video = ({ src }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const videoHtml = `
      <video autoPlay muted loop class="w-full h-full object-cover">
        <source src=${src} />
      </video>
    `;
    setHtml(videoHtml);
  }, [src]);

  return <div className="hero-video w-full h-[100vh] absolute top-0 z-[-1]" dangerouslySetInnerHTML={{ __html: html }}></div>;
}


export default Video