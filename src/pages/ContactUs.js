import ContactUsBG from "../components/contact-us/ContactUsBG";
import ContactUsMap from "../components/contact-us/ContactUsMap";
import { useState } from "react";
import ContactUsForm from "../components/contact-us/ContactUsForm";
function ContactUs() {
  const [pinLocation, setPinLocation] = useState(null);
  const [pinAddress, setPinAddress] = useState("");
  const [pinGeoLocation, setPinGeoLocation] = useState("");
  return (
    <div>
      <ContactUsBG />
      <ContactUsMap />
      <ContactUsForm />
    </div>
  );
}
// <AllBlogs />
// <ContactUsBG />
// <ContactUsMap />
// <ContactUsForm />
export default ContactUs;
