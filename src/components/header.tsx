"use client"
import { ReactNode } from 'react';
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ModeToggle } from './theme-toggle';
import { Button } from "@/components/ui/button";

interface NavItemProps {
  href: string;
  children: ReactNode;
  onClick: () => void;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-1/2 max-w-7xl px-4">
  <div className="navbar backdrop-blur-lg flex items-center justify-between w-full rounded-[20px] p-2 shadow">
    {/* Left section: Hamburger and Nav Items */}
    <div className="flex items-center w-full">
      {/* Hamburger menu button */}
      <Button variant="ghost" size="icon" className="lg:hidden outline-none" onClick={toggleMenu}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Navigation items */}
      <div className={`flex flex-col lg:flex-row gap-2 lg:ml-4 w-full justify-center ${isOpen ? 'block' : 'hidden lg:flex'}`}>
        <NavItem href="/" onClick={toggleMenu}>Home</NavItem>
        <NavItem href="/posts" onClick={toggleMenu}>Posts</NavItem>
        <NavItem href="/projects" onClick={toggleMenu}>Projects</NavItem>
        <NavItem href="/contact" onClick={toggleMenu}>Contact</NavItem>
      </div>
    </div>

    {/* Right section: ModeToggle */}
    <div className="ml-4">
      <ModeToggle />
    </div>
  </div>
</nav>

  )
}

function NavItem({ href, children, onClick }: NavItemProps) {
  return (
    <Link href={href} passHref>
      <Button variant="ghost" onClick={onClick}>
        {children}
      </Button>
    </Link>
  );
}
