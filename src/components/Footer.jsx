export default function Footer() {
  return (
    <footer className="bg-gray-500 w-screen h-72 text-gray-100 flex flex-col items-center rounded-lg">
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-4xl lg:text-5xl font-bold text-center mb-4">Let&#39;s Connect</h3>
        <div className="flex flex-row items-center justify-center space-x-4">
          <a href="" target="_blank" rel="noreferrer">
            <img src="/images/github.svg" alt="github logo" className="w-12 h-12" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src="/images/linkedin.svg" alt="linkedin logo" className="w-12 h-12" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src="/images/email.svg" alt="email logo" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </footer>
  );
}
