// app/privacy/page.tsx or components/Privacy.jsx

export default function PrivacyPolicy() {
    return (
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At <strong>Crestal Music</strong>, your privacy is our priority.
          Whether you're an artist, listener, or creator, we ensure that all data you share with us is
          protected and only used to enhance your experience on the platform.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">What We Do</h2>
        <p className="text-gray-700 mb-4">
          Crestal Music is a music engagement platform where artists can promote their songs, and listeners
          can participate in activities like challenges, group listening sessions, and tasks. We collect
          user data (like preferences, listening habits, and participation) to help us understand how you
          use the app and make improvements that better serve our community.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">How Your Data Is Used</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>To personalize your experience on Crestal Music.</li>
          <li>To improve features based on how users interact with the app.</li>
          <li>To enhance music recommendations, challenges, and engagement tools.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h2>
        <p className="text-gray-700 mb-4">
          <strong>We do not sell or share your personal data with any third-party services or advertisers.</strong> All information stays strictly within the platform and is used solely for internal analysis and improvements.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Your Control</h2>
        <p className="text-gray-700 mb-4">
        You can request to view or delete your data anytime by contacting our support team at{" "}
        <a href="mailto:info@crestal.app" className="text-blue-600 underline">
            info@crestal.app
        </a>
        . We believe in transparency and giving you full control over your personal information.
        </p>

  
        <p className="text-sm text-gray-500 mt-8">
          Last updated: April 25, 2025
        </p>
      </div>
    );
  }
  