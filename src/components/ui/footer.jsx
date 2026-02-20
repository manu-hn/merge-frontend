import { Link } from "react-router-dom";
import MergeLogo from "../../assets/logo/merge-logo.png";
import { Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = [
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
]

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
]



const Footer = () => {
    return (
        <footer className="border-t border-base-100 bg-black">
            <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
                    {/* Logo */}
                    <div className="flex items-center gap-2 ">
                        <Link to="/" className="btn btn-ghost text-xl w-[27.5%]">
                            <img className={``} src={MergeLogo} slot="Merge Logo" />
                        </Link>
                    </div>

                    <div className="w-[90%] md:w-[95%] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 ">
                        {/* Links */}
                        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Social icons */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg border 
                                    text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-4 border-t border-base-100 pt-4 text-center flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Merge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;