const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Iamit-kumarI" target="_blank" style={{ color: 'white', marginTop: '10px' }}>
          Git
        </a>
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <a
          href="https://www.linkedin.com/in/amit-kumar-23a86924b/"
          target="_blank"
          style={{ color: 'white', marginTop: '10px' }}>
          Linkdin
        </a>
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="linkdin" className="w-1/2 h-1/2" />
        </div>
        <a href="https://www.instagram.com/i._.anoy/" target="_blank" style={{ color: 'white', marginTop: '10px' }}>
          instagram
        </a>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">© 2024 Amit. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
