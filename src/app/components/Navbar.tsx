import {navItems} from '../constants/constants';

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#030405]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">

        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-lime-400"
        >
          Manish<span className="text-lime-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-lime-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-lime-400/30 px-4 py-2 text-sm font-medium text-lime-400 transition-all hover:border-lime-400 hover:bg-lime-400/10 md:block"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}