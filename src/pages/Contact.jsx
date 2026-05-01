import {useRef} from "react";
import toast from "react-hot-toast";
import ContactField from "../components/ContactField";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. יצירת הבטחה מזויפת (Mock Promise) שמחקה שליחה
    const sendPromise = new Promise((resolve, reject) => {
      // מדמה זמן המתנה של השרת (1.5 שניות)
      setTimeout(() => {
        const isSuccess = true; // שנה ל-false כדי לבדוק איך נראה מצב שגיאה

        if (isSuccess) {
          console.log("Mock Email Data:", {
            name: form.current.name.value,
            email: form.current.email.value,
            message: form.current.message.value,
          });
          resolve("Success");
        } else {
          reject(new Error("Simulated error"));
        }
      }, 1500);
    });

    // ניהול ההודעות בצורה אלגנטית
    toast.promise(sendPromise, {
      loading: "Sending (Simulated)...",
      success: () => {
        form.current.reset();
        return "Message sent successfully! (Mock) 🚀";
      },
      error: "An error occurred, please try again. ❌",
    });
  };
  return (
    <div id="contact-page" className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Get In Touch
      </h2>
      <form
        ref={form}
        id="contact-form"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md border border-gray-50"
      >
        <div
          id="user-info-fields"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
        >
          <ContactField
            label="Full Name"
            id="name"
            name="name"
            placeholder="John Doe"
          />
          <ContactField
            label="Email Address"
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
          />
        </div>
        <div className="mb-6">
          <ContactField
            label="Message"
            type="textarea"
            id="message"
            name="message"
            placeholder="How can I help you?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
