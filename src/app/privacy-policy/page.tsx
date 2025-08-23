export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                1 Min Journal is committed to protecting your privacy. We collect minimal information necessary to provide our journaling services.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Journal entries and personal reflections (stored locally on your device)</li>
                <li>Basic usage analytics to improve the app experience</li>
                <li>Account information if you choose to create an account for sync features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                How We Protect Your Data
              </h2>
              <p className="mb-4">
                Your privacy is our top priority. We implement industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>End-to-end encryption for all journal entries</li>
                <li>Local-first storage - your data stays on your device</li>
                <li>Zero-knowledge architecture - we cannot read your entries</li>
                <li>Optional cloud backup with military-grade encryption</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Data Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or share your personal data with third parties. Your journal entries remain private and are never accessed by our team or any external parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Your Rights
              </h2>
              <p className="mb-4">
                You have complete control over your data:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Delete your account and all associated data at any time</li>
                <li>Export your journal entries in standard formats</li>
                <li>Opt out of analytics and usage tracking</li>
                <li>Request information about data we may have collected</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@1minjournal.com<br/>
                Address: [Company Address]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}