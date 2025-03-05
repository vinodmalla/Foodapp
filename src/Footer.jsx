function Footer() {
  return (
    <footer className="bg-slate-100 text-center p-6 mt-10 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <ul className="flex space-x-4 mt-2 md:mt-0">
          <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-blue-500">Terms of Service</a></li>
          <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;