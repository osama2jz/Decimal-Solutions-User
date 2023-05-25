import ContactUsBG from "../components/contact-us/ContactUsBG";
import ContactUsMap from "../components/contact-us/ContactUsMap";
import { useState } from "react";
import ContactUsForm from "../components/contact-us/ContactUsForm";
import Map from "../assets/images/map.jpeg";
function ContactUs() {
  const [pinLocation, setPinLocation] = useState(null);
  const [pinAddress, setPinAddress] = useState("");
  const [pinGeoLocation, setPinGeoLocation] = useState("");
  return (
    <div>
      <ContactUsBG />
      {/* <ContactUsMap /> */}
      <ContactUsForm />
      <img src={Map} alt="map" className="w-full h-[664px] object-cover mb-10" />

    </div>
  );
}
// <AllBlogs />
// <ContactUsBG />
// <ContactUsMap />
// <ContactUsForm />
export default ContactUs;
