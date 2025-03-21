"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    preferences: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const preferences = prev.preferences.includes(value)
        ? prev.preferences.filter((item) => item !== value)
        : [...prev.preferences, value];
      return { ...prev, preferences };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset preferences when userType changes
    if (name === "userType") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        preferences: [],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting form data:", formData);

    try {
      const res = await fetch("https://crestal-backend.onrender.com/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          userType: "",
          preferences: [],
        });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const artistOptions = [
    "I want to know what listeners genuinely think of my music",
    "I want to reach new listeners",
    "I want to expand my fan base",
    "I want to reach new territories",
    "I want to know what listeners think of my new song before releasing",
  ];

  const listenerOptions = [
    "I want to discover new music before everyone else",
    "I want to help artists grow",
    "I want to get rewarded for listening",
    "I want to share my opinion on new tracks",
    "I want to be part of shaping the future of music",
  ];

  const creatorOptions = [
    "I want to collaborate with artists",
    "I want to showcase my skills",
    "I want feedback from the community",
    "I want to expand my network",
  ];

  const getOptionsForUserType = () => {
    switch (formData.userType) {
      case "artist":
        return artistOptions;
      case "listener":
        return listenerOptions;
      case "creator":
        return creatorOptions;
      default:
        return [];
    }
  };

  return (
    <div className="w-full">
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="md:w-1/2 flex flex-col justify-start h-full">
            <div className="mt-10">
              <h1 className="text-[40px] font-bold leading-tight mb-4">
                Be the first to know <br />
                when{" "}
                <span
                  className="inline-block bg-cover bg-center px-2"
                  style={{
                    backgroundImage: "url('/wordcrest.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                  }}
                >
                  we launch
                </span>
              </h1>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Make a real impact on the music industry, <br />
                get rewarded for your time and attention <br />
                for listening to and reviewing new and unreleased music.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-[20px] font-semibold mb-6">Join our waitlist</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <label className="block text-sm font-medium mb-1">User Type</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                >
                  <option value="">Select</option>
                  <option value="creator">Creator</option>
                  <option value="listener">Listener</option>
                  <option value="artist">Artist</option>
                </select>
              </div>

              {formData.userType && (
                <div className="mt-6">
                  <p className="text-[14px] font-bold mb-4">What’s most important to you?</p>
                  <div className="space-y-4">
                    {getOptionsForUserType().map((text, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm">{text}</span>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-[#FFD051]"
                          checked={formData.preferences.includes(text)}
                          onChange={() => handleCheckboxChange(text)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition mt-4"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}











// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function JoinPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     userType: "",
//     preferences: [],
//   });

//   const handleCheckboxChange = (value) => {
//     setFormData((prev) => {
//       const preferences = prev.preferences.includes(value)
//         ? prev.preferences.filter((item) => item !== value)
//         : [...prev.preferences, value];
//       return { ...prev, preferences };
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     console.log('Submitting form data:', formData); // 👈 Log form data
  
//     try {
//       const res = await fetch('https://crestal-backend.onrender.com/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // 👈 Use your form state directly
//       });
  
//       const data = await res.json();
  
//       if (res.ok) {
//         alert('Message sent!');
//         // Optionally reset form
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           userType: "",
//           preferences: [],
//         });
//       } else {
//         alert(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Something went wrong');
//     }
//   };
  



//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const res = await fetch("http://localhost:5000/api/send-email", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     if (res.ok) {
//   //       alert("Form submitted successfully!");
//   //       setFormData({
//   //         firstName: "",
//   //         lastName: "",
//   //         email: "",
//   //         phone: "",
//   //         userType: "",
//   //         preferences: [],
//   //       });
//   //     } else {
//   //       alert("Failed to submit the form.");
//   //     }
//   //   } catch (err) {
//   //     console.error("Submission error:", err);
//   //   }
//   // };

//   const checkboxOptions = [
//     "I want to know what listeners genuinely think of my music",
//     "I want to reach new listeners",
//     "I want to expand my fan base",
//     "I want to reach new territories",
//     "I want to know what listeners think of my new song before releasing",
//   ];

//   return (
//     <div className="w-full">
//       <div className="px-6 py-16 max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
//           <div className="md:w-1/2 flex flex-col justify-start h-full">
//             <div className="mt-10">
//               <h1 className="text-[40px] font-bold leading-tight mb-4">
//                 Be the first to know <br />
//                 when{" "}
//                 <span
//                   className="inline-block bg-cover bg-center px-2"
//                   style={{
//                     backgroundImage: "url('/wordcrest.png')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     color: "white",
//                   }}
//                 >
//                   we launch
//                 </span>
//               </h1>
//               <p className="text-gray-700 text-[15px] leading-relaxed">
//                 Make a real impact on the music industry, <br />
//                 get rewarded for your time and attention <br />
//                 for listening to and reviewing new and unreleased music.
//               </p>
//             </div>
//           </div>

//           <div className="md:w-1/2 w-full">
//             <h2 className="text-[20px] font-semibold mb-6">Join our waitlist</h2>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium mb-1">First Name</label>
//                   <input
//                     name="firstName"
//                     type="text"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded px-4 py-2"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium mb-1">Last Name</label>
//                   <input
//                     name="lastName"
//                     type="text"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded px-4 py-2"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium mb-1">Email</label>
//                   <input
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded px-4 py-2"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium mb-1">Phone Number</label>
//                   <input
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded px-4 py-2"
//                   />
//                 </div>
//               </div>

//               <div className="md:w-1/2">
//                 <label className="block text-sm font-medium mb-1">User Type</label>
//                 <select
//                   name="userType"
//                   value={formData.userType}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-4 py-2"
//                 >
//                   <option value="">Select</option>
//                   <option value="creator">Creator</option>
//                   <option value="listener">Listener</option>
//                   <option value="artist">Artist</option>
//                 </select>
//               </div>

//               <div className="mt-6">
//                 <p className="text-[14px] font-bold mb-4">What’s most important to you?</p>
//                 <div className="space-y-4">
//                   {checkboxOptions.map((text, i) => (
//                     <div key={i} className="flex justify-between items-center">
//                       <span className="text-sm">{text}</span>
//                       <input
//                         type="checkbox"
//                         className="form-checkbox h-4 w-4 text-[#FFD051]"
//                         checked={formData.preferences.includes(text)}
//                         onChange={() => handleCheckboxChange(text)}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-1/2 bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition mt-4"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Final Section remains unchanged */}
//     </div>
//   );
// }
