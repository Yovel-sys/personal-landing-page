import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] py-8 mt-auto">
      <div
        id="footer-container"
        className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div id="footer-info" className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Professional Portfolio. All rights
          reserved.
        </div>
        <div id="footer-socials" className="flex space-x-6">
          <SocialLink href="https://www.linkedin.com/" label="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
