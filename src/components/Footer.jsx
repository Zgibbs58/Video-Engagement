export default function Footer() {
  return (
    <footer className="bg-gray-500 pt-4 text-gray-100 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-center mb-2">Let&#39;s Connect</h3>
        <div className="flex flex-row items-center justify-center space-x-4 pb-2">
          <a href="https://github.com/Zgibbs58" target="_blank" rel="noreferrer">
            <img src="/icons/github.svg" alt="github logo" className="w-8 h-8 hover:scale-90 ease-in-out duration-150" />
          </a>
          <a href="https://linkedin.com/in/zacharywgibbs" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="linkedin logo" className="w-8 h-8 hover:scale-90 ease-in-out duration-150" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src="/icons/email.svg" alt="email logo" className="w-8 h-8 hover:scale-90 ease-in-out duration-150" />
          </a>
        </div>
      </div>
      <p className="text-sm pb-2">Zach Gibbs &copy; 2023 All Rights Reserved.</p>
    </footer>
  );
}
