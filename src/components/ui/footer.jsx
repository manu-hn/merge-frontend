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
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="btn btn-ghost text-xl w-[27.5%]">
                            <img className={``} src={MergeLogo} slot="Merge Logo" />
                        </Link>
                    </div>

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
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                                aria-label={social.label}
                            >
                                <social.icon className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 border-t border-base-100 pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Merge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;