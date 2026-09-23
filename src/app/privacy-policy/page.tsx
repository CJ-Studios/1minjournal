import type { Metadata } from "next";
import Link from "next/link";
import ForestScene from "@/components/ForestScene";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy · 1 Min Journal",
  description: "How 1 Min Journal handles your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative flex-1 overflow-hidden">
        <ForestScene compact />

        <header className="relative z-10 mx-auto flex w-full max-w-3xl items-center justify-between px-6 pt-6">
          <Link href="/" className="font-serif text-lg tracking-wide text-cream">
            1 Min Journal
          </Link>
          <Link href="/" className="text-sm text-cream-dim transition-colors hover:text-cream">
            &larr; Back home
          </Link>
        </header>

        <div className="prose-forest relative z-10 mx-auto w-full max-w-3xl px-6 pb-24 pt-12 sm:pt-16">
          <h1 className="text-4xl text-cream sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-cream-faint">
            Last updated: September 23, 2026
          </p>

          <div className="journal-card mt-10 rounded-[28px] px-7 py-8 sm:px-10 sm:py-10">
          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Introduction
            </h2>
            <p className="mb-4">
              1 Min Journal (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of our users (&ldquo;user&rdquo; or &ldquo;you&rdquo;). This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application 1 Min Journal. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not use the application.
            </p>
            <div className="callout mb-4 rounded-r-xl p-4">
              <p className="font-semibold !text-cream">
                IMPORTANT: Your journal entries are stored locally on your device only. We do not have access to your personal journal content.
              </p>
            </div>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect minimal information to provide and improve our service:
            </p>
            
            <div className="mb-6">
              <h3 className="mb-2 text-base font-medium">Journal Content</h3>
              <p className="mb-4">
                Your journal entries are stored locally on your device only. We do not collect, access, or store your personal journal content on our servers.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-base font-medium">Analytics Data</h3>
              <p className="mb-2">We may collect basic, anonymous usage analytics such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>App usage patterns and retention metrics</li>
                <li>Device information (device type, operating system version)</li>
                <li>App performance data and crash reports</li>
                <li>General usage statistics (number of entries created, feature usage)</li>
              </ul>
              <p className="mb-4">
                This analytics data is anonymized and cannot be used to identify you personally or access your journal content.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-base font-medium">Device Permissions</h3>
              <p className="mb-2">We may request access to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Device storage (to save your journal entries locally on your device)</li>
                <li>Push notifications (to send you reminders if enabled)</li>
              </ul>
              <p className="mb-4">
                You can change these permissions in your device settings at any time.
              </p>
            </div>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              How We Use Your Information
            </h2>
            <p className="mb-2">We use the limited information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Improve the app&rsquo;s performance and user experience</li>
              <li>Analyze usage patterns to enhance app features</li>
              <li>Send push notifications for reminders (if you enable this feature)</li>
              <li>Respond to technical support requests</li>
              <li>Comply with legal obligations if required by law</li>
            </ul>
            <p className="mb-4">
              We do not use your information for advertising, marketing, or any commercial purposes beyond improving the app itself.
            </p>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your information to third parties. Your journal content remains private and stored only on your device.
            </p>
            <p className="mb-2">Limited situations where we may share anonymous analytics data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Legal Requirements:</strong> If required by law, we may disclose anonymous usage information to respond to legal process or protect rights and safety.</li>
              <li><strong>Service Providers:</strong> We may share anonymous analytics data with third-party service providers who help us analyze app performance. These providers are contractually obligated to keep information confidential.</li>
            </ul>
            <div className="callout mb-4 rounded-r-xl p-4">
              <p className="font-semibold !text-cream">
                Important: We never share your personal journal content, as we do not have access to it. All journal entries remain private and stored locally on your device.
              </p>
            </div>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Your Privacy Rights
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Data Control:</strong> Since your journal entries are stored locally on your device, you have complete control over your personal data. You can delete the app and all associated data at any time by uninstalling the application.</li>
              <li><strong>Analytics Opt-out:</strong> While we collect minimal anonymous analytics, you can contact us to discuss analytics data collection.</li>
              <li><strong>Push Notifications:</strong> You can enable or disable push notifications at any time in your device settings or within the app.</li>
              <li><strong>Data Portability:</strong> Your journal data is stored in standard formats on your device and can be backed up using your device&rsquo;s standard backup mechanisms.</li>
            </ul>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Children&rsquo;s Privacy
            </h2>
            <p className="mb-4">
              We do not knowingly collect personal information from children under the age of 13. If you become aware that a child has provided us with personal information, please contact us and we will delete such information from our records.
            </p>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:purpleturtledev@gmail.com">purpleturtledev@gmail.com</a>
            </p>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Changes to This Policy
            </h2>
            <p className="mb-4">
              We reserve the right to make changes to this Privacy Policy at any time. We will alert you about any changes by updating the &ldquo;Last Updated&rdquo; date of this Privacy Policy and through app store updates. Any changes will be effective immediately upon posting the updated Privacy Policy.
            </p>
            <p className="mb-4">
              You are encouraged to periodically review this Privacy Policy to stay informed of updates. Your continued use of the application after any changes constitutes acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section className="mb-8 last:mb-0">
            <h2 className="mb-3 text-xl font-semibold">
              Legal Compliance
            </h2>
            <p className="mb-4">
              This privacy policy is designed to comply with general privacy requirements. Users in specific jurisdictions (such as EU under GDPR, California under CCPA, etc.) may have additional rights under applicable law. We are committed to honoring all applicable privacy rights and regulations.
            </p>
            <p className="mb-4">
              For users in the European Union, you have additional rights including the right to access, rectify, erase, restrict processing, data portability, and to object to processing of your personal data.
            </p>
            <p className="mb-4">
              Since we collect minimal data and store journal content locally on your device, most data subject requests can be fulfilled by the user directly through the app or device settings.
            </p>
          </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
