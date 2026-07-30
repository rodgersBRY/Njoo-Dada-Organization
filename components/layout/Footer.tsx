import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/content/navigation";
import {
  siteConfig,
  orgIdentity,
  socialLinks,
  accountabilityLinks,
  legalLinks,
} from "@/content/site";

const socialIcons: Record<string, IconType> = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <Container className="grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-2">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={46}
            height={40}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <ul className="mt-6 flex gap-4">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="text-muted-foreground hover:text-accent"
                    aria-label={
                      social.isPlaceholder
                        ? `${social.label}: link to be provided`
                        : social.label
                    }
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#get-involved" className="text-sm text-foreground/80 hover:text-foreground">
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/#get-involved" className="text-sm text-foreground/80 hover:text-foreground">
                Partner
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact &amp; Accountability
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground/80">
            <li className={orgIdentity.email.isPlaceholder ? "text-muted-foreground italic" : ""}>
              {orgIdentity.email.value}
            </li>
            <li className={orgIdentity.phone.isPlaceholder ? "text-muted-foreground italic" : ""}>
              {orgIdentity.phone.value}
            </li>
            <li className={orgIdentity.physicalAddress.isPlaceholder ? "text-muted-foreground italic" : ""}>
              {orgIdentity.physicalAddress.value}
            </li>
          </ul>
          <ul className="mt-6 flex flex-col gap-3">
            {accountabilityLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
            <span className="italic"> {orgIdentity.registrationStatus.value}</span>
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
