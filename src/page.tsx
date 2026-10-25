import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import NavbarFullscreen from "@/components/navbars/NavbarFullscreen";
import HeroExpand from "@/components/sections/hero/HeroExpand";
import AboutParallax from "@/components/sections/about/AboutParallax";
import FeaturesAttributeCards from "@/components/sections/features/FeaturesAttributeCards";
import FeaturesMediaGrid from "@/components/sections/features/FeaturesMediaGrid";
import FeaturesRevealCardsBento from "@/components/sections/features/FeaturesRevealCardsBento";
import FooterBrand from "@/components/sections/footer/FooterBrand";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import { rooms } from "@/data/rooms";
import "./theme.css";

export default function HotelTemplate() {
  return (
    <ReactLenis root>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-110"
      >
        <NavbarFullscreen
          logo="Lumière & Co"
          navItems={[
            { name: "Rooms", href: "#rooms" },
            { name: "Experience", href: "#experience" },
            { name: "Dining", href: "#dining" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Book Now", href: "#contact" }}
        />
      </motion.div>

      <div id="hero" data-section="hero">
        <HeroExpand
          title="Lumière & Co"
          videoSrc="https://cdn.coverr.co/videos/coverr-hotel-room-tour-9612/1080p.mp4"
          primaryButton={{ text: "Browse rooms", href: "#rooms" }}
          secondaryButton={{ text: "Watch tour", href: "#tour" }}
        />
      </div>

      <div id="about" data-section="about">
        <AboutParallax
          textAnimation="slide-up"
          tag="The House"
          title="A House Built for Light"
          description="On the Mediterranean shore. Slow mornings, long afternoons, evenings that linger."
          frontImageSrc="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop"
          backImageSrc="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop"
          badge="Est. 1884"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <FeaturesAttributeCards
          textAnimation="slide-up"
          tag="Rooms"
          title="Rooms & Suites"
          description="Six rooms. Each framed by sea light and finished in stone, linen and brass."
          items={rooms.map((room) => ({
            title: room.title,
            tags: room.tags,
            badge: room.badge,
            href: `/rooms/${room.id}`,
            price: room.price,
            details: room.details,
            imageSrc: room.imageSrc,
          }))}
        />
      </div>

      <div id="experience" data-section="amenities">
        <FeaturesMediaGrid
          textAnimation="slide-up"
          tag="Amenities"
          title="Made for Slow Days"
          description="Everything you need, nothing you don't."
          items={[
            { title: "Infinity Pool", description: "A heated pool above the sea.", imageSrc: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop" },
            { title: "Private Spa", description: "Treatments, sauna and hammam.", imageSrc: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1600&auto=format&fit=crop" },
            { title: "Fine Dining", description: "Sea-to-table, by candlelight.", imageSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop" },
            { title: "Fitness Studio", description: "Equipment and seafront yoga.", imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop" },
            { title: "Concierge", description: "Anything, at any hour.", imageSrc: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop" },
          ]}
        />
      </div>

      <div id="journeys" data-section="journeys">
        <FeaturesRevealCardsBento
          textAnimation="slide-up"
          tag="Journeys"
          title="Journeys"
          description="A few ways to spend a day beyond the house."
          items={[
            { title: "Riviera Village Escape", description: "Hilltop villages, markets and sundown aperitifs.", href: "#", imageSrc: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop" },
            { title: "Venetian Waterways", description: "Quiet canals and a palazzo dinner.", href: "#", imageSrc: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=1600&auto=format&fit=crop" },
            { title: "Mediterranean Diving", description: "Reefs, sea caves and clear water.", href: "#", imageSrc: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop" },
            { title: "Alpine Summit Retreat", description: "A guided hike above the clouds.", href: "#", imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop" },
            { title: "Secret Coves & Beaches", description: "Hidden coves by private boat.", href: "#", imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop" },
            { title: "Riviera Gastronomy", description: "The chef's table and coastal wines.", href: "#", imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop" },
            { title: "Clifftop Wellness Ritual", description: "Sunrise yoga above the sea.", href: "#", imageSrc: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1600&auto=format&fit=crop" },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          textAnimation="slide-up"
          tag="Contact"
          title="Stay With Us"
          description="Tell us when. We'll take care of the rest."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
            { name: "dates", type: "text", placeholder: "Preferred Dates" },
          ]}
          textarea={{ name: "message", placeholder: "Special Requests or Questions", rows: 4 }}
          buttonText="Send Inquiry"
          imageSrc="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop"
        />
      </div>

      <FooterBrand
        brand="Lumière & Co"
        columns={[
          { items: [{ label: "Rooms & Suites", href: "#rooms" }, { label: "Dining", href: "#dining" }, { label: "Amenities", href: "#experience" }] },
          { items: [{ label: "Journeys", href: "#journeys" }, { label: "Spa & Wellness", href: "#spa" }, { label: "Events", href: "#events" }] },
          { items: [{ label: "Book Now", href: "#contact" }, { label: "Location", href: "#location" }, { label: "Contact Us", href: "#contact" }] },
        ]}
      />
    </ReactLenis>
  );
}
