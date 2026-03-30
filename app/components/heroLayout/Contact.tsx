import Link from "next/link";
import { FiUser, FiPhone, FiMail, FiNavigation, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { contactData } from "@/app/data/data";
import emailjs from "emailjs-com";


const iconMap = {
  user: <FiUser aria-hidden />,
  phone: <FiPhone aria-hidden />,
  mail: <FiMail aria-hidden />,
  location: <FiNavigation aria-hidden />,
};

const socialIconMap = {
  linkedin: <FaLinkedinIn aria-hidden />,
  github: <FaGithub aria-hidden />,
  mail: <FiMail aria-hidden />,
  instagram: <FaInstagram aria-hidden />,
};

const Contact = () => {
  const { eyebrow, title, form, contactInfo, socials } = contactData;

// const handleSubmit = (e:any) => {
//   e.preventDefault();
//   emailjs
//     .sendForm(
//       "service_764t8ff",      // ⭐ your service id
//       "template_k4ssso9",      // ⭐ your template id
//       e.target,
//       "KxEmujWAdhtcKg57w"        // ⭐ your public key
//     )
//     .then(() => {
//       alert("Message Sent ✅");
//       e.target.reset();
//     })
//     .catch(() => {
//       alert("Error ❌");
//     });
// };



  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="contact-eyebrow">{eyebrow}</p>
          <h2 className="contact-title">
            {title.split(" ").slice(0, 2).join(" ")}
            <span> {title.split(" ").slice(2).join(" ")}</span>
          </h2>
          <div className="services-underline">
            <span className="underline-circle"></span>
            <span className="underline-diamond"></span>
            <span className="underline-circle"></span>
          </div>
        </div>

        <div className="contact-grid">
          <form className="contact-form">
            {" "}
            <div className="form-row">
              <label>
                <span className="sr-only">Name</span>
                <input type="text" name="name" placeholder="Name" required />
              </label>
              <label>
                <span className="sr-only">Email</span>
                <input type="email" name="email" placeholder="Email" required />
              </label>
            </div>
            <label>
              <span className="sr-only">Subject</span>
              <input type="text" name="subject" placeholder="Subject" />
            </label>
            <label>
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
              ></textarea>
            </label>
            <button type="submit" className="button solid form-button">
              {form.ctaLabel}
              <FiSend aria-hidden />
            </button>
          </form>

          <div className="contact-info-card">
            <h3>Contact Info</h3>
            <ul className="contact-info-list">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="contact-icon">
                    {iconMap[item.icon as keyof typeof iconMap]}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="contact-social">
              <span>Social</span>
              <span className="contact-divider"></span>
              <div className="social-icons">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                  >
                    {socialIconMap[social.icon as keyof typeof socialIconMap]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
