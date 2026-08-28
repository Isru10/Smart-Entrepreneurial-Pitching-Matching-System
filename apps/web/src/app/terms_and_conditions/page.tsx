import Link from "next/link";

export default function TermsAndConditionsPage() {
  const lastUpdated = "May 26, 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/60 bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            SEPMS
          </Link>
          <Link
            href="/sign-in"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground text-base">
            Last updated: {lastUpdated} &nbsp;&middot;&nbsp; Effective immediately upon account registration
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
            Please read these Terms and Conditions carefully before using the SEPMS platform.
            By creating an account or accessing any part of the platform, you agree to be bound
            by these terms in their entirety.
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        <section>
          <h2 className="text-xl font-bold mb-4">1. Definitions</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">"Platform"</strong> refers to the Smart Entrepreneurial Pitching and Matching System (SEPMS), including all web interfaces, APIs, AI services, and associated infrastructure operated by the SEPMS team.</p>
            <p><strong className="text-foreground">"Entrepreneur"</strong> refers to any registered user who submits a startup pitch through the Platform for the purpose of seeking investment.</p>
            <p><strong className="text-foreground">"Investor"</strong> refers to any registered user who accesses pitch submissions through the Platform for the purpose of evaluating investment opportunities.</p>
            <p><strong className="text-foreground">"Match"</strong> refers to an AI-generated pairing between an Entrepreneur's pitch and an Investor's profile, facilitated by the Platform's recommendation engine.</p>
            <p><strong className="text-foreground">"Transaction"</strong> refers to any confirmed investment, milestone payment, or financial transfer facilitated through or recorded on the Platform.</p>
            <p><strong className="text-foreground">"Content"</strong> refers to all text, documents, videos, financial data, and other materials submitted by users to the Platform.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. Platform Service Fee</h2>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 mb-4">
            <p className="text-sm font-semibold text-primary mb-1">2% Platform Transaction Fee</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SEPMS charges a platform service fee of <strong className="text-foreground">2% (two percent)</strong> on
              the total value of each confirmed investment transaction facilitated through the Platform.
              This fee is automatically deducted at the time of milestone payment confirmation and is
              non-refundable once the transaction has been processed.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              The 2% fee applies to all milestone-based disbursements, lump-sum investments, and any
              other financial transfers recorded through the Platform's payment infrastructure. The fee
              is calculated on the gross transaction amount before any applicable taxes or third-party
              payment processor charges.
            </p>
            <p>
              SEPMS reserves the right to adjust the platform fee with a minimum of 30 days' written
              notice to all active users. Transactions initiated before the effective date of any fee
              change will be processed at the rate applicable at the time of initiation.
            </p>
            <p>
              Entrepreneurs and Investors are jointly responsible for ensuring that all transactions
              are accurately recorded on the Platform. Transactions conducted outside the Platform to
              circumvent the service fee are a material breach of these Terms and may result in
              immediate account suspension.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Eligibility and Account Registration</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              You must be at least 18 years of age and legally capable of entering into binding
              contracts under the laws of your jurisdiction to register for and use the Platform.
              By registering, you represent and warrant that all information you provide is accurate,
              current, and complete.
            </p>
            <p>
              Entrepreneurs are required to complete KYC (Know Your Customer) verification before
              submitting any pitch. Failure to maintain verified status will result in the suspension
              of pitch submission privileges. SEPMS reserves the right to request additional
              verification documents at any time.
            </p>
            <p>
              Each individual or legal entity may maintain only one account per role (Entrepreneur or
              Investor). Creating multiple accounts to circumvent platform restrictions, AI screening,
              or fee obligations is strictly prohibited and will result in permanent account termination.
            </p>
            <p>
              You are solely responsible for maintaining the confidentiality of your account credentials.
              SEPMS will not be liable for any loss or damage arising from unauthorised access to your
              account resulting from your failure to safeguard your login information.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. AI-Powered Matching and Classification</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              The Platform uses artificial intelligence, including large language models (Gemini),
              sentence-transformer embeddings, and machine learning classifiers, to analyse pitch
              content, generate match recommendations, and produce trust scores. These AI outputs
              are provided for informational purposes only and do not constitute financial advice,
              investment recommendations, or guarantees of investment suitability.
            </p>
            <p>
              SEPMS does not guarantee the accuracy, completeness, or fitness for purpose of any
              AI-generated analysis, match score, or trust score. Investors are solely responsible
              for conducting their own due diligence before making any investment decision.
              Entrepreneurs acknowledge that AI screening may reject pitches that contain inaccurate,
              misleading, or low-quality content.
            </p>
            <p>
              The Platform's AI systems continuously learn from user interactions through the Rocchio
              relevance feedback algorithm. By interacting with matches (accepting, declining, or
              viewing pitches), you consent to your interaction data being used to improve the
              personalisation of your match queue. No personally identifiable information is used
              in the embedding or training process.
            </p>
            <p>
              SEPMS reserves the right to modify, retrain, or replace any AI model used on the
              Platform at any time without prior notice. Such changes may affect match rankings,
              trust scores, and pitch visibility.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. Pitch Submission Standards</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              All pitch submissions must be genuine, accurate, and represent a real business concept
              or operating company. Entrepreneurs warrant that all financial projections, market size
              estimates, and business model descriptions are made in good faith and are based on
              reasonable assumptions.
            </p>
            <p>
              Pitches that are determined by the Platform's AI systems or administrative review to
              contain gibberish, fabricated data, plagiarised content, or materially misleading
              information will be rejected without refund of any fees paid. Repeated violations will
              result in permanent account suspension.
            </p>
            <p>
              Entrepreneurs grant SEPMS a non-exclusive, royalty-free licence to display, analyse,
              and process their pitch content for the purposes of operating the Platform, including
              AI analysis, investor matching, and administrative review. This licence does not extend
              to the sale or commercial exploitation of pitch content to third parties.
            </p>
            <p>
              All documents uploaded to the Platform must be authentic, current, and unaltered.
              SEPMS employs automated document validation and reserves the right to flag, suspend,
              or reject any submission where document authenticity cannot be confirmed.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">6. Investment Transactions and Milestones</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              All investment agreements are made directly between Entrepreneurs and Investors. SEPMS
              acts solely as a technology intermediary and is not a party to any investment agreement,
              does not provide investment advice, and does not guarantee the performance of any investment.
            </p>
            <p>
              Milestone-based funding structures are encouraged on the Platform. Investors may create
              milestones tied to specific deliverables, and funds are released upon milestone completion
              as confirmed by both parties. SEPMS's 2% platform fee applies to each milestone disbursement.
            </p>
            <p>
              In the event of a dispute between an Entrepreneur and an Investor regarding milestone
              completion or fund release, SEPMS may, at its sole discretion, provide mediation support.
              SEPMS's decision in any such mediation is advisory only and not legally binding.
            </p>
            <p>
              SEPMS is not responsible for the failure of any investment, the insolvency of any party,
              or the non-performance of any milestone. Investors acknowledge that startup investments
              carry significant risk, including the total loss of invested capital.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">7. Data Privacy and Security</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              SEPMS collects, processes, and stores personal data in accordance with applicable data
              protection laws. By using the Platform, you consent to the collection and processing of
              your personal data as described in our Privacy Policy, which is incorporated into these
              Terms by reference.
            </p>
            <p>
              All pitch documents, financial data, and personal information submitted to the Platform
              are stored securely using industry-standard encryption. SEPMS employs Cloudinary for
              document storage, Firebase for authentication, and MongoDB Atlas for data persistence,
              all of which maintain their own security certifications.
            </p>
            <p>
              SEPMS will not sell, rent, or share your personal data with third parties for marketing
              purposes. Aggregated, anonymised data may be used for platform improvement, research,
              and reporting purposes.
            </p>
            <p>
              You have the right to request access to, correction of, or deletion of your personal
              data at any time by contacting SEPMS support. Deletion requests will be processed within
              30 days, subject to any legal retention obligations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">8. Prohibited Conduct</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Submit false, misleading, or fraudulent pitch information</li>
              <li>Attempt to manipulate the AI matching or scoring systems through artificial means</li>
              <li>Conduct investment transactions outside the Platform to avoid the service fee</li>
              <li>Harass, threaten, or engage in misconduct toward other users</li>
              <li>Use the Platform to facilitate money laundering, fraud, or any illegal financial activity</li>
              <li>Reverse-engineer, scrape, or attempt to extract proprietary algorithms or data from the Platform</li>
              <li>Create multiple accounts or impersonate another person or entity</li>
              <li>Upload malicious files, viruses, or any content designed to disrupt Platform operations</li>
            </ul>
            <p>
              Violation of any prohibited conduct provision may result in immediate account suspension,
              permanent termination, and where applicable, referral to relevant legal authorities.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">9. Intellectual Property</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              All Platform software, AI models, algorithms, user interface designs, branding, and
              documentation are the exclusive intellectual property of SEPMS and its licensors.
              Nothing in these Terms grants you any right, title, or interest in the Platform's
              intellectual property.
            </p>
            <p>
              You retain full ownership of all Content you submit to the Platform. By submitting
              Content, you grant SEPMS the limited licence described in Section 5 solely for the
              purpose of operating the Platform.
            </p>
            <p>
              Any feedback, suggestions, or ideas you provide regarding the Platform may be used
              by SEPMS without compensation or attribution to you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">10. Limitation of Liability</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              To the maximum extent permitted by applicable law, SEPMS and its operators, directors,
              employees, and agents shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to loss of profits,
              loss of data, loss of investment capital, or business interruption, arising from your
              use of or inability to use the Platform.
            </p>
            <p>
              SEPMS's total aggregate liability to you for any claim arising from these Terms or
              your use of the Platform shall not exceed the total platform fees paid by you in the
              12 months preceding the claim.
            </p>
            <p>
              The Platform is provided "as is" and "as available" without warranties of any kind,
              express or implied, including but not limited to warranties of merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">11. Termination</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              SEPMS reserves the right to suspend or terminate your account at any time, with or
              without notice, for any violation of these Terms, fraudulent activity, or conduct
              that SEPMS determines, in its sole discretion, to be harmful to the Platform or its users.
            </p>
            <p>
              You may terminate your account at any time by contacting SEPMS support. Upon termination,
              your access to the Platform will cease immediately. Any pending transactions at the time
              of termination will be processed in accordance with these Terms, and applicable platform
              fees will still apply.
            </p>
            <p>
              Sections 2 (Platform Service Fee), 7 (Data Privacy), 9 (Intellectual Property), and
              10 (Limitation of Liability) survive termination of these Terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">12. Governing Law and Dispute Resolution</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              Federal Democratic Republic of Ethiopia, without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising from or relating to these Terms or your use of the Platform shall
              first be subject to good-faith negotiation between the parties. If the dispute cannot
              be resolved through negotiation within 30 days, it shall be submitted to binding
              arbitration in Addis Ababa, Ethiopia.
            </p>
            <p>
              Notwithstanding the above, SEPMS reserves the right to seek injunctive or other
              equitable relief in any court of competent jurisdiction to prevent irreparable harm.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">13. Amendments</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              SEPMS reserves the right to modify these Terms at any time. Material changes will be
              communicated to registered users via email or in-platform notification at least 14 days
              before the effective date. Your continued use of the Platform after the effective date
              constitutes acceptance of the revised Terms.
            </p>
            <p>
              If you do not agree to any amended Terms, you must discontinue use of the Platform and
              request account termination before the effective date of the changes.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">14. Contact</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              For questions, concerns, or requests relating to these Terms, please contact the SEPMS
              team through the in-platform support channel or via the contact information provided
              on the Platform's official website.
            </p>
          </div>
        </section>

        <div className="border-t border-border/40 pt-8 text-xs text-muted-foreground">
          <p>
            By registering for or continuing to use SEPMS, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions in full.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} SEPMS &mdash; Smart Entrepreneurial Pitching &amp; Matching System.
            All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
