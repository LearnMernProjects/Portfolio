import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Viraj",
          from_email: formData.email,
          to_email: "sharpframeedits.com",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section id="Contact" className="relative flex items-center c-space section-spacing">
     <Alert/>
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col mt-16 mb-14 w-[85%] text-white text-lg space-x-4 items-center justify-center max-w-full p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-white text-3xl font-bold font-mono">Let's Talk</h2>
          <p className="font-normal  font-mono text-neutral-100">
          I'm always open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello—feel free to reach out!
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor="name" className="feild-label block mb-2">
      Full Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      className="field-input text-black field-input-focus"
      placeholder="Viraj Naik"
      autoComplete="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-5">
    <label htmlFor="email" className="feild-label block mb-2">
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      className="field-input text-black field-input-focus"
      placeholder="naikviraj301.com"
      autoComplete="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-5">
    <label htmlFor="message" className="feild-label block mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      type="text"
      className="field-input text-black  field-input-focus h-10" // h-10 to match label height
      placeholder="Share your thoughts..."
      autoComplete="message"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600  mt-[10px] text-xl font-bold px-1 py-3 hover:text-2xl text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
  >
    {!isLoading ? "Send" : "Sending..."}
  </button>
</form>

      </div>
    </section>
  );
};

export default Contact;