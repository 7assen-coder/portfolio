import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mohammed Hassen. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            {
              icon: Github,
              href: "https://github.com/7assen-coder",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/mohamed-douiery-a48496373",
              label: "LinkedIn",
            },
            {
              icon: Facebook,
              href: "https://www.facebook.com/share/1ApHGsPsou/",
              label: "Facebook",
            },
            {
              icon: Mail,
              href: "mailto:Sidahmedmhd08@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
