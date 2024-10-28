const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center p-4 bg-neutral text-neutral-content bg-muted">
      <div className="flex flex-col sm:flex-row items-center">
        Made by Daniyal Bekinalkar
        <span className="border border-primary mx-2 h-4 invisible sm:visible"></span>
        <a
          href="https://www.github.com/dbekinalkar"
          target="_blank"
          className="link link-hover inline"
        >
          https://github.com/dbekinalkar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
