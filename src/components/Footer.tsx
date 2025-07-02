import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Zap, 
  Code, 
  Star, 
  Book, 
  User,
  Settings
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Marketplace", href: "/" },
        { label: "Templates", href: "/templates" },
        { label: "Publishers", href: "/publishers" },
        { label: "Pricing", href: "/pricing" },
      ]
    },
    {
      title: "For Creators",
      links: [
        { label: "Publish Template", href: "/publish" },
        { label: "Creator Dashboard", href: "/dashboard" },
        { label: "Analytics", href: "/analytics" },
        { label: "Payouts", href: "/payouts" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Tutorials", href: "/tutorials" },
        { label: "Community", href: "/community" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ]
    }
  ];

  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary rounded-lg p-2 shadow-primary">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                  AutoButler.ai
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  AI Workflow Automation
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              The premier marketplace for AI-powered automation templates. 
              Build, buy, and sell workflow solutions that transform businesses.
            </p>
            <div className="flex space-x-2">
              <Button variant="hero" size="sm" asChild>
                <Link to="/signup">
                  <Star className="mr-2 h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© 2024 AutoButler.ai. All rights reserved.</span>
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Terms of Service
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <div className="flex items-center space-x-1">
                <div className="h-4 w-4 rounded bg-gradient-primary animate-pulse"></div>
                <span className="font-medium gradient-primary bg-clip-text text-transparent">
                  AI Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;