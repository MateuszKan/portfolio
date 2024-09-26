export default function Privacy() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <div className='pb-24'>
          <div className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
            <div className='mt-2 flex-1 md:mt-0'>
              <h1 className='title no-underline'>Privacy Policy</h1>
              <p className='mt-3 font-light text-muted-foreground'>
                This privacy policy explains how we collect, use, and disclose your personal information when you use our website.
              </p>

              <h2 className='mt-6 font-semibold'>1. Information We Collect</h2>
              <p className='mt-3 font-light text-muted-foreground'>
                We may collect personal information such as your name, email address, and any other information you provide while using our services.
              </p>

              <h2 className='mt-6 font-semibold'>2. How We Use Your Information</h2>
              <p className='mt-3 font-light text-muted-foreground'>
                We use your information to improve our services, communicate with you, and provide customer support.
              </p>

              <h2 className='mt-6 font-semibold'>3. Sharing of Information</h2>
              <p className='mt-3 font-light text-muted-foreground'>
                We do not share your personal information with third parties except as required by law or with your consent.
              </p>

              <h2 className='mt-6 font-semibold'>4. Your Rights</h2>
              <p className='mt-3 font-light text-muted-foreground'>
                You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.
              </p>

              <h2 className='mt-6 font-semibold'>5. Contact Us</h2>
              <p className='mt-3 font-light text-muted-foreground'>
                If you have any questions about this privacy policy, please contact us at hello@mkantarewicz.dev
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
