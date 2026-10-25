"use client";

import { useParams, Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import NavbarFullscreen from "@/components/navbars/NavbarFullscreen";
import FooterBrand from "@/components/sections/footer/FooterBrand";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import { getRoom, rooms } from "@/data/rooms";
import "../theme.css";

const NAV_ITEMS = [
  { name: "Rooms", href: "/#rooms" },
  { name: "Experience", href: "/#experience" },
  { name: "Dining", href: "/#dining" },
  { name: "Contact", href: "/#contact" },
];

export default function RoomDetail() {
  const { id } = useParams();
  const room = getRoom(id);

  if (!room) {
    return (
      <div className="min-h-svh flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-medium">Room not found</h1>
        <p className="text-muted-foreground">The room you're looking for doesn't exist.</p>
        <Link to="/" className="flex items-center justify-center h-11 px-6 text-sm rounded-lg btn-primary bg-primary text-primary-foreground">
          Back to home
        </Link>
      </div>
    );
  }

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);
  const [heroImg, ...sideImgs] = room.gallery;

  return (
    <ReactLenis root>
      <NavbarFullscreen
        logo="Lumière & Co"
        navItems={NAV_ITEMS}
        ctaButton={{ text: "Book Now", href: "/#contact" }}
      />

      {/* Header — text only */}
      <section aria-label="Room header" className="pt-28 md:pt-36 pb-8 md:pb-10">
        <div className="w-full max-w-6xl px-6 mx-auto flex flex-col gap-6">
          <Link to="/#rooms" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
            <ArrowLeft className="size-4" strokeWidth={1.5} />
            Back to rooms
          </Link>
          <AppearOnScroll variant="slide-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div className="flex flex-col gap-3 md:max-w-3/5">
                {room.badge && (
                  <span className="px-3 py-1 text-xs tracking-wide uppercase font-medium card rounded-full w-fit">{room.badge}</span>
                )}
                <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-medium leading-[1.05]">{room.title}</h1>
                <p className="text-base md:text-lg text-muted-foreground text-balance">{room.summary}</p>
              </div>
              <div className="flex flex-col md:items-end gap-1 shrink-0">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-3xl md:text-4xl font-semibold">{room.price}</span>
              </div>
            </div>
          </AppearOnScroll>
        </div>
      </section>

      {/* Gallery first */}
      <section aria-label="Room gallery" className="pb-14 md:pb-20">
        <div className="w-full max-w-6xl px-6 mx-auto">
          <AppearOnScroll variant="fade">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[540px]">
              <img src={heroImg} alt={room.title} className="md:col-span-2 w-full h-64 md:h-full object-cover rounded-xl" />
              <div className="flex flex-col gap-4 md:h-full">
                {sideImgs.map((src, i) => (
                  <img key={src} src={src} alt={`${room.title} view ${i + 2}`} className="w-full h-40 md:h-auto md:flex-1 object-cover rounded-xl" />
                ))}
              </div>
            </div>
          </AppearOnScroll>
        </div>
      </section>

      {/* Details + booking */}
      <section aria-label="Room details" className="pb-16 md:pb-20">
        <div className="w-full max-w-6xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <AppearOnScroll variant="slide-up">
              <div className="grid grid-cols-3 divide-x divide-border card rounded-xl overflow-hidden">
                {room.details.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label} className="flex flex-col items-center justify-center gap-1.5 py-6">
                      <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
                      <span className="text-xl md:text-2xl font-semibold">{detail.value}</span>
                      <span className="text-xs md:text-sm text-muted-foreground">{detail.label}</span>
                    </div>
                  );
                })}
              </div>
            </AppearOnScroll>

            <AppearOnScroll variant="slide-up" delay={0.05}>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl font-semibold">About this room</h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{room.description}</p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll variant="slide-up" delay={0.1}>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold">What's included</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-3 text-base md:text-lg">
                      <span className="flex items-center justify-center size-6 rounded-full bg-accent/20 text-accent shrink-0">
                        <Check className="size-4" strokeWidth={2.5} />
                      </span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </AppearOnScroll>
          </div>

          {/* Booking card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 flex flex-col gap-5 p-6 md:p-7 card rounded-xl">
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl font-semibold">{room.price}</span>
                </div>
                {room.badge && <span className="px-3 py-1 text-xs uppercase tracking-wide font-medium card rounded-full">{room.badge}</span>}
              </div>
              <div className="h-px bg-border" />
              <p className="text-sm md:text-base text-muted-foreground">{room.tags}</p>
              <Link
                to="/#contact"
                className="group flex items-center justify-center gap-2 h-12 px-6 text-base font-medium rounded-lg btn-primary bg-primary text-primary-foreground"
              >
                Reserve this room
                <ArrowUpRight className="size-5 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1.5} />
              </Link>
              <p className="text-xs text-center text-muted-foreground">Free cancellation up to 48h before arrival</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other rooms */}
      <section aria-label="Other rooms" className="pb-10 md:pb-16">
        <div className="w-full max-w-6xl px-6 mx-auto flex flex-col gap-8">
          <h2 className="text-2xl md:text-4xl font-semibold">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherRooms.map((other, index) => (
              <AppearOnScroll key={other.id} variant="slide-up" delay={index * 0.08} className="h-full">
                <Link to={`/rooms/${other.id}`} className="group flex flex-col gap-3 h-full cursor-pointer">
                  <div className="relative aspect-4/3 overflow-hidden rounded-lg">
                    <img src={other.imageSrc} alt={other.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold">{other.title}</h3>
                    <span className="shrink-0 text-sm text-muted-foreground whitespace-nowrap">{other.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{other.tags}</p>
                </Link>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FooterBrand
        brand="Lumière & Co"
        columns={[
          { items: [{ label: "Rooms & Suites", href: "/#rooms" }, { label: "Dining", href: "/#dining" }, { label: "Amenities", href: "/#experience" }] },
          { items: [{ label: "Journeys", href: "/#journeys" }, { label: "Spa & Wellness", href: "/#spa" }, { label: "Events", href: "/#events" }] },
          { items: [{ label: "Book Now", href: "/#contact" }, { label: "Location", href: "/#location" }, { label: "Contact Us", href: "/#contact" }] },
        ]}
      />
    </ReactLenis>
  );
}
