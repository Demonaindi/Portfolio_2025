const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Demonaindi" className="items-center justify-center flex p-2" target="_blank">
            <img src="/assets/github.svg" alt="github" className="relative" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/OnaindiD" className="items-center justify-center flex pt-2.5" target="_blank">
            <img src="/assets/Xlogo.png" alt="twitter" className="relative" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/demi_onaindi/?next=%2F" className="items-center justify-center flex p-2" target="_blank">
            <img src="/assets/instagram.svg" alt="instagram" className="relative" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/demian-onaindi/" className="items-center justify-center flex p-2" target="_blank">
            <img src="/assets/LinkedinLogo.png" alt="instagram" className="relative" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Demian Onaindi</p>
    </footer>
  );
};

export default Footer;
