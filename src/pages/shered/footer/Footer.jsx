

const Footer = () => {
  const mediaImage = "https://i.ibb.co/bdsBJHn/wave-3.png";

  const mediaBg = {
    backgroundImage: `url(${mediaImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundPosition: "top",
    
  };

  const footerStyle = {
    ...mediaBg,
    height: "1100px", // Adjust the height as needed
  };

  return (
    <div style={footerStyle} className="relative">
        <footer className="footer p-10 absolute text-white top-[700px] left-0">
      <aside>
        <p className="text-xl font-bold">Office</p>
        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        <p>Plot No.10, Pratap Nagar, Tedhi Pulia Ring Road, Vikas Nagar, Lucknow, Uttar Pradesh – 226022</p>
        <p>info@refletivedesign.in</p>
        <p>+91-8858230920 +91-8858130920</p>
      </aside>
      <nav>
        <header className="footer-title">Visit Us</header>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Portfolio</a>
        <a className="link link-hover">Contacts</a>
        <a className="link link-hover">Blogs</a>
      
      </nav>
      <nav>
        <header className="footer-title font-bold">Our Services</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Newsletter</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;
