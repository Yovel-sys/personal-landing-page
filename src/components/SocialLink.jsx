const SocialLink = ({href, label}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-600 transition-colors text-sm"
  >
    {label}
  </a>
);

export default SocialLink;
