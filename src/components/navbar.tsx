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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background border-2 border-primary rounded-[20px] p-2 shadow-lg">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className={`flex flex-col lg:flex-row gap-2 ${isOpen ? 'block' : 'hidden lg:flex'}`}>
            <NavItem href="/" onClick={toggleMenu}>Home</NavItem>
            <NavItem href="/about" onClick={toggleMenu}>About</NavItem>
            <NavItem href="/projects" onClick={toggleMenu}>Projects</NavItem>
            <NavItem href="/contact" onClick={toggleMenu}>Contact</NavItem>
          </div>
        </div>
      </div>
      <div><ModeToggle/></div>
    </nav>
  )
}

function NavItem({ href, children, onClick }: NavItemProps) {
  return (
    <Link href={href} passHref>
      <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10" onClick={onClick}>
        {children}
      </Button>
    </Link>
  );
}
