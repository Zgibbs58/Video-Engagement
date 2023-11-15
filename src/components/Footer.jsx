export default function Footer() {
  return (
    <footer className="bg-gray-500 pt-5 text-gray-100 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl lg:text-5xl font-bold text-center mb-4">Let&#39;s Connect</h3>
        <div className="flex flex-row items-center justify-center space-x-4 pb-5">
          <a href="https://github.com/Zgibbs58" target="_blank" rel="noreferrer">
            <img src="/icons/github.svg" alt="github logo" className="w-12 h-12" />
          </a>
          <a href="https://linkedin.com/in/zacharywgibbs" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="linkedin logo" className="w-12 h-12" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src="/icons/email.svg" alt="email logo" className="w-12 h-12" />
          </a>
        </div>
      </div>
      <p>Zach Gibbs &copy; 2023 All Rights Reserved.</p>
    </footer>
  );
}
