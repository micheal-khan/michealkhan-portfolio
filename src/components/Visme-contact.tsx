import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup when component unmounts
    };
  }, []);

  return (
    <div
      className="visme_d"
      data-title="Simple Animated Contact Form"
      data-url="8kvw1kdq-simple-animated-contact-form"
      data-domain="forms"
      data-full-page="false"
      data-min-height="500px"
      data-form-id="142933"
    ></div>
  );
};

export default ContactForm;
