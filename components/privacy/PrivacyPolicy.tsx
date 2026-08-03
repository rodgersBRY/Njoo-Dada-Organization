import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Users,
  ClipboardList,
  Database,
  Target,
  Scale,
  FileText,
  Share2,
  Boxes,
  Clock,
  Lock,
  UserCheck,
  HeartHandshake,
  Camera,
  ExternalLink,
  RefreshCw,
  Mail,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { orgIdentity, siteConfig } from "@/content/site";

const lastUpdated = "August 2026";

const tocItems: { href: string; label: string }[] = [
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#information-we-collect", label: "Information We Collect" },
  { href: "#how-we-collect-information", label: "How We Collect Information" },
  { href: "#how-we-use-information", label: "How We Use Information" },
  { href: "#legal-basis-for-processing", label: "Legal Basis for Processing" },
  { href: "#contact-form-information", label: "Contact Form Information" },
  { href: "#sharing-your-information", label: "Sharing Your Information" },
  { href: "#third-party-services", label: "Third-Party Services" },
  { href: "#data-retention", label: "Data Retention" },
  { href: "#how-we-protect-information", label: "How We Protect Information" },
  { href: "#your-rights", label: "Your Rights" },
  {
    href: "#childrens-personal-information",
    label: "Children's Personal Information",
  },
  { href: "#photographs-and-stories", label: "Photographs & Stories" },
  { href: "#external-links", label: "External Links" },
  { href: "#policy-updates", label: "Policy Updates" },
  { href: "#contact-us", label: "Contact Us" },
];

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 border-t border-border pt-10 first:border-t-0 first:pt-0"
    >
      <h2
        id={`${id}-heading`}
        className="flex items-center gap-3 font-display text-2xl leading-tight text-foreground md:text-3xl"
      >
        <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-accent" />
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        {children}
      </div>
    </section>
  );
}

function Callout({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "yellow";
}) {
  return (
    <div
      className={`rounded-xl border-l-[3px] bg-secondary/60 px-5 py-4 text-sm leading-relaxed text-foreground/90 md:text-base ${
        tone === "yellow" ? "border-l-[#f7c948]" : "border-l-accent"
      }`}
    >
      {children}
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <>
      <Container as="div" className="pt-10 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <ol className="flex list-none items-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-foreground hover:underline underline-offset-4"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              Privacy
            </li>
          </ol>
        </nav>

        <div className="mt-6 max-w-3xl">
          <h1 className="font-display text-4xl leading-[1.1] text-balance text-foreground sm:text-5xl md:text-6xl">
            Privacy &amp; Data Protection
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Njoo Dada is committed to respecting your privacy and protecting the
            personal information you choose to share with us.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            This policy explains how we collect, use, store and protect personal
            information submitted through our website, particularly through our
            contact form. As our organisation grows and additional online
            services become available, we may update this policy to reflect
            those changes.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Last Updated: {lastUpdated}
          </span>
        </div>
      </Container>

      <Container as="div" className="mt-12 max-w-3xl md:mt-16">
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-border bg-secondary/60 p-6 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            On this page
          </p>
          <ol className="mt-4 grid list-none grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {tocItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex gap-2 text-sm text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
                >
                  <span className="text-muted-foreground">{index + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Container>

      <Container as="div" className="mt-12 max-w-3xl pb-24 md:mt-16 md:pb-32">
        <article className="flex flex-col gap-10 md:gap-12">
          <Section id="who-we-are" icon={Users} title="Who We Are">
            <p>
              Njoo Dada is a Kenyan not-for-profit organisation, founded in{" "}
              {siteConfig.foundedYear}, that supports vulnerable teenage girls
              and young mothers to move beyond crisis and build independent
              lives. We operate primarily in Kenya.
            </p>
            <p>
              This policy covers personal information collected through
              njoodada.or.ke, including the contact form on this site. It does
              not cover information we collect in person through our programmes
              and safe house, which is governed by our internal safeguarding
              practices.
            </p>
          </Section>

          <Section
            id="information-we-collect"
            icon={ClipboardList}
            title="Information We Collect"
          >
            <p>
              When you visit our website or use the contact form, we may
              collect:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>
                Contact details you give us, such as your name, email address,
                and phone number if you choose to include it.
              </li>
              <li>
                The content of your message, including the topic you select.
              </li>
              <li>
                Basic technical information generated automatically as your
                browser communicates with our hosting provider, such as IP
                address, browser type, and pages visited.
              </li>
            </ul>
            <p>
              We do not ask visitors to create accounts or log in, and we do not
              knowingly collect payment or financial information through this
              website.
            </p>
          </Section>

          <Section
            id="how-we-collect-information"
            icon={Database}
            title="How We Collect Information"
          >
            <p>We collect information in two ways:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>
                Directly from you, when you fill in and submit our contact form.
              </li>
              <li>
                Automatically, through standard web server activity as your
                browser interacts with our hosting provider.
              </li>
            </ul>
            <p>
              We do not currently use cookies, tracking pixels, or third-party
              analytics tools on this website. If that changes, we will update
              this policy to explain what has been added and why.
            </p>
          </Section>

          <Section
            id="how-we-use-information"
            icon={Target}
            title="How We Use Information"
          >
            <p>We use the information you share with us to:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>Respond to your enquiry, question, or message.</li>
              <li>
                Route your message to the right person or team, based on the
                topic you select.
              </li>
              <li>
                Keep a record of correspondence so we can follow up
                appropriately.
              </li>
            </ul>
            <p>
              We do not use contact form submissions for marketing emails or
              newsletters, and we do not sell or rent personal information to
              anyone.
            </p>
          </Section>

          <Section
            id="legal-basis-for-processing"
            icon={Scale}
            title="Legal Basis for Processing"
          >
            <p>
              Kenya&apos;s Data Protection Act, 2019 sets out principles for how
              personal data should be handled, including lawfulness, fairness,
              purpose limitation, and data minimisation. We aim to follow these
              principles in how we handle information submitted through this
              website.
            </p>
            <p>
              When you submit our contact form, we rely on your consent, given
              by ticking the consent box and submitting the form, as the basis
              for processing your message. You can withdraw that consent at any
              time by contacting us (see{" "}
              <a
                href="#your-rights"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Your Rights
              </a>{" "}
              below).
            </p>
          </Section>

          <Section
            id="contact-form-information"
            icon={FileText}
            title="Contact Form Information"
          >
            <p>
              Our contact form asks for your name, email address, the topic of
              your message, and the message itself. This information goes
              directly to our team and is used only to respond to you.
            </p>
            <Callout tone="yellow">
              Please avoid sharing sensitive personal information, such as
              health details, financial information, or details about a child in
              an unsafe situation, through the general contact form unless it is
              necessary for your request. If you need to raise a safeguarding
              concern, please contact our safeguarding lead directly by phone
              rather than using this form.
            </Callout>
          </Section>

          <Section
            id="sharing-your-information"
            icon={Share2}
            title="Sharing Your Information"
          >
            <p>
              We do not sell, rent, or trade personal information submitted
              through this website.
            </p>
            <p>We may share information in limited circumstances:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>
                With staff or volunteers at Njoo Dada who need it to respond to
                your enquiry.
              </li>
              <li>
                With service providers who help us run this website, such as our
                hosting provider, who process data on our behalf.
              </li>
              <li>
                Where required by law, or to protect the safety of a child or
                vulnerable person.
              </li>
            </ul>
            <p>
              We do not currently share information with partner organisations
              or donors unless you have separately agreed to that as part of a
              specific programme or relationship.
            </p>
          </Section>

          <Section
            id="third-party-services"
            icon={Boxes}
            title="Third-Party Services"
          >
            <p>
              This website is hosted on Vercel&apos;s infrastructure, which
              processes standard web traffic and server logs as part of
              delivering the site to you. We do not currently use third-party
              analytics, advertising, or tracking services.
            </p>
            <p>
              As our online services grow, we may introduce additional tools,
              for example email delivery services or donation platforms. We will
              update this policy before doing so, to explain what has been added
              and how it affects your information.
            </p>
          </Section>

          <Section id="data-retention" icon={Clock} title="Data Retention">
            <p>
              We keep contact form submissions for as long as reasonably
              necessary to respond to your enquiry and maintain a record of
              correspondence, after which we aim to delete or anonymise the
              information unless we are required to keep it longer, for example
              for legal or safeguarding reasons.
            </p>
            <p>
              We have not yet published a fixed retention schedule for different
              types of information. We are working on formalising specific
              retention periods as our data practices mature.
            </p>
          </Section>

          <Section
            id="how-we-protect-information"
            icon={Lock}
            title="How We Protect Information"
          >
            <p>
              We take reasonable steps to protect the personal information we
              hold, including:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>
                Restricting access to contact form submissions to staff who need
                it to do their jobs.
              </li>
              <li>
                Using a reputable hosting provider with its own security
                practices.
              </li>
              <li>
                Reviewing how we handle information as our website and
                organisation grow.
              </li>
            </ul>
            <p>
              No method of transmission over the internet is completely secure,
              and we cannot guarantee absolute security. If you are concerned
              about the sensitivity of what you are sharing, please contact us
              directly rather than through the website form.
            </p>
          </Section>

          <Section id="your-rights" icon={UserCheck} title="Your Rights">
            <p>
              Under Kenya&apos;s Data Protection Act, you generally have the
              right to:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>Know what personal information we hold about you.</li>
              <li>Ask us to correct inaccurate information.</li>
              <li>Ask us to delete information we no longer need.</li>
              <li>Withdraw consent for us to process your information.</li>
              <li>Object to how we are using your information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              details at the end of this page. We aim to respond to reasonable
              requests within a reasonable timeframe.
            </p>
          </Section>

          <Section
            id="childrens-personal-information"
            icon={HeartHandshake}
            title="Children's Personal Information"
          >
            <Callout>
              Njoo Dada works directly with teenage girls and young mothers,
              some of whom are under 18. Where we collect personal information
              from or about a child, whether through this website or our
              programmes, we take extra care to handle it appropriately and in
              the child&apos;s best interests.
            </Callout>
            <p>
              We do not knowingly collect personal information from children
              through the general contact form without appropriate involvement
              of a parent, guardian, or responsible adult. If you believe a
              child has submitted personal information to us directly and you
              would like it removed, please contact us.
            </p>
          </Section>

          <Section
            id="photographs-and-stories"
            icon={Camera}
            title="Photographs & Stories"
          >
            <p>
              Photographs, videos, and personal stories featured on this
              website, including images used in our Programmes section, are used
              with the consent of the individuals involved, or their parent or
              guardian, where required.
            </p>
            <p>
              We take particular care with images and stories involving the
              girls and young mothers we support, to protect their dignity and
              safety. If you are featured on this website and would like an
              image or story reviewed or removed, please contact us.
            </p>
          </Section>

          <Section
            id="external-links"
            icon={ExternalLink}
            title="External Links"
          >
            <p>
              This website may contain links to external sites, such as our
              social media pages or partner organisations. We are not
              responsible for the privacy practices or content of those external
              sites, and we encourage you to review the privacy policy of any
              external site you visit.
            </p>
          </Section>

          <Section id="policy-updates" icon={RefreshCw} title="Policy Updates">
            <p>
              We may update this policy from time to time, for example as our
              online services grow or our practices change. The &ldquo;Last
              updated&rdquo; badge at the top of this page shows when it was
              last revised. We encourage you to check back occasionally if you
              have questions about how your information is handled.
            </p>
          </Section>

          <Section id="contact-us" icon={Mail} title="Contact Us">
            <p>
              If you have questions about this Privacy &amp; Data Protection
              Policy or how your information is handled, please contact Njoo
              Dada.
            </p>
            <dl className="mt-2 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {orgIdentity.email.label}
                </dt>
                <dd className="mt-1.5 text-base text-foreground">
                  <a
                    href={`mailto:${orgIdentity.email.value}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {orgIdentity.email.value}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {orgIdentity.phone.label}
                </dt>
                <dd className="mt-1.5 text-base text-foreground">
                  <a
                    href={`tel:${orgIdentity.phone.value}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {orgIdentity.phone.value}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {orgIdentity.postalAddress.label}
                </dt>
                <dd className="mt-1.5 text-base text-foreground">
                  {orgIdentity.postalAddress.value}
                </dd>
              </div>
            </dl>
          </Section>
        </article>
      </Container>
    </>
  );
}
