import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { MONTH_NAMES, getTodayParts, validateDateValues } from "../lib/dates";
import { WA_MESSAGES, WA_PHONE, waLink } from "../data/site";
import { track } from "../lib/analytics";
import { ImageSlider } from "../components/ImageSlider";
import { HALL_IMAGES } from "../data/images";
import { CalendarIcon, WhatsAppIcon } from "../components/icons";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqSection } from "../components/FaqSection";
import { FactTable } from "../components/blocks";
import { BANQUET_FAQS } from "../data/content";
import { CAPACITY_TABLE } from "../content/pages";

// WhatsApp enquiry text: blanks read naturally until the guest fills them in.
const buildMessage = (eventType, date) =>
  [
    "Hello Radiant Vista Hotel, I would like to enquire about Gala Vista banquets and conferencing.",
    `My event type is: ${eventType || "___"}`,
    `Preferred date: ${date || "___"}`,
    "Please share the available packages and details.",
  ].join("\n");

// DEDICATED BANQUETS PAGE COMPONENT (/banquets/)
export const BanquetsPage = () => {
  const [eventType, setEventType] = React.useState("");
  const [rawDigits, setRawDigits] = React.useState("");
  const [displayDate, setDisplayDate] = React.useState("");
  const [calendarIso, setCalendarIso] = React.useState("");
  const [validatedFormattedDate, setValidatedFormattedDate] = React.useState("");
  const [dateError, setDateError] = React.useState("");
  const datePickerRef = React.useRef(null);
  // Read the date after hydration so server and client markup match.
  const [todayIso, setTodayIso] = React.useState("");
  React.useEffect(() => setTodayIso(getTodayParts().iso), []);
  const handleManualDateChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
    setRawDigits(digits);
    let formatted = "";
    if (digits.length <= 2) {
      formatted = digits;
    } else if (digits.length <= 4) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    } else {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    }
    setDisplayDate(formatted);
    if (digits.length === 8) {
      const d = parseInt(digits.slice(0, 2), 10);
      const m = parseInt(digits.slice(2, 4), 10);
      const y = parseInt(digits.slice(4, 8), 10);
      const res = validateDateValues(d, m, y);
      if (res.valid) {
        setDateError("");
        const formattedName = `${d} ${MONTH_NAMES[m - 1]} ${y}`;
        setValidatedFormattedDate(formattedName);
        const iso = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        setCalendarIso(iso);
      } else {
        setDateError(res.error);
        setValidatedFormattedDate("");
        setCalendarIso("");
      }
    } else {
      setValidatedFormattedDate("");
      setCalendarIso("");
      if (digits.length === 0) {
        setDateError("");
      } else if (dateError) {
        setDateError("");
      }
    }
  };
  const handleDateBlur = () => {
    if (rawDigits.length > 0 && rawDigits.length < 8) {
      setDateError("Please enter a complete 8-digit date in DDMMYYYY format (e.g. 25112026).");
    }
  };
  const handleCalendarChange = (e) => {
    const isoVal = e.target.value;
    if (!isoVal) return;
    const [yStr, mStr, dStr] = isoVal.split("-");
    const y = parseInt(yStr, 10);
    const m = parseInt(mStr, 10);
    const d = parseInt(dStr, 10);
    const res = validateDateValues(d, m, y);
    if (res.valid) {
      setDateError("");
      setCalendarIso(isoVal);
      const digits = `${String(d).padStart(2, "0")}${String(m).padStart(2, "0")}${y}`;
      setRawDigits(digits);
      setDisplayDate(`${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`);
      const formattedName = `${d} ${MONTH_NAMES[m - 1]} ${y}`;
      setValidatedFormattedDate(formattedName);
    } else {
      setDateError(res.error);
      setValidatedFormattedDate("");
    }
  };
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!rawDigits && !calendarIso) {
      setDateError("Please select or enter your preferred event date (today or a future date).");
      return;
    }
    if (rawDigits.length > 0 && rawDigits.length < 8) {
      setDateError("Please enter a complete 8-digit date in DDMMYYYY format.");
      return;
    }
    if (dateError || !validatedFormattedDate) {
      setDateError(dateError || "Please provide a valid, future event date.");
      return;
    }
    const msg = buildMessage(eventType.trim() || "Special Event", validatedFormattedDate);
    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
    track("whatsapp_click", { page: "/banquets/", venue: "banquets", source: "event_planner" });
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };
  const previewMsg = buildMessage(eventType.trim(), validatedFormattedDate);
  return (
    <main id="main" className="pt-20 bg-hubli-light min-h-screen text-hubli-dark">
      {/* Introduction (Retained White Content Section directly below header) */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <Breadcrumbs className="text-xs tracking-widest uppercase text-gray-500 mb-4 flex justify-center items-center gap-2" linkClassName="hover:text-hubli-sunset transition-colors" />
          <span className="text-hubli-sunset font-bold tracking-widest uppercase text-xs">
            Premier Event Venue
          </span>
          <h1 className="text-3xl md:text-4xl font-serif text-hubli-green font-bold mt-2 mb-6">
            {"Banquet Halls & Conference Venues in Hubballi"}
          </h1>
          <p id="answer-summary" className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
            Gala Vista is the banquet and conference venue at Radiant Vista in Hubballi (Hubli), with two halls: Gala Vista I
            for weddings and receptions, and Gala Vista II for conferences and meetings.
</p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Both halls are supported by on-site catering and an events team, with secure basement parking and rooms for
            out-of-town guests in the same building. See the{" "}
            <a href="/banquets/weddings/" className="text-hubli-earth font-semibold hover:underline">
              wedding hall
            </a>{" "}
            and the{" "}
            <a href="/banquets/conferences/" className="text-hubli-earth font-semibold hover:underline">
              conference hall
            </a>{" "}
            for more detail.
</p>
        </div>
      </section>
      {/* Two Dedicated Spaces Showcase */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="space-y-16">
          {/* Gala Vista I */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 card-hover-lift">
            <ImageSlider sizes="(min-width: 1024px) 50vw, 100vw"
              images={HALL_IMAGES}
              alt="Gala Vista I grand banquet hall for weddings in Hubballi"
              className="rounded-xl overflow-hidden shadow-md h-[320px] md:h-[380px]"
            />
            <div className="space-y-5">
              <span className="text-hubli-sunset font-bold uppercase tracking-widest text-xs">
                Grand Celebrations
              </span>
              <h2 id="gala-vista-i-grand-banquet-hall" className="text-3xl font-serif text-hubli-dark font-bold">
                Gala Vista I — Grand Banquet Hall
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Designed for grand celebrations, weddings, marriage receptions, engagement ceremonies, and
                festive family reunions. The hall provides an opulent atmosphere, elegant lighting, and
                seamless coordination to make your special moments unforgettable in Hubballi.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hubli-sunset" />
                  {" Ideal for weddings, receptions & milestones"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hubli-sunset" />
                  {" Secure basement parking for all guests"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hubli-sunset" />
                  {" On-site catering and banquet management support"}
                </li>
              </ul>
            </div>
          </div>
          {/* Gala Vista II */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 card-hover-lift lg:grid-flow-dense">
            <ImageSlider sizes="(min-width: 1024px) 50vw, 100vw"
              images={HALL_IMAGES}
              alt="Gala Vista II conference and event space at Radiant Vista Hubballi"
              className="rounded-xl overflow-hidden shadow-md h-[320px] md:h-[380px] lg:col-start-2"
            />
            <div className="space-y-5">
              <span className="text-hubli-sunset font-bold uppercase tracking-widest text-xs">
                {"Corporate & Professional"}
              </span>
              <h2 id="gala-vista-ii-conference-event-space" className="text-3xl font-serif text-hubli-dark font-bold">
                {"Gala Vista II — Conference & Event Space"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Tailored for corporate conferences, business presentations, seminars, executive boardroom
                meetings, and corporate training programs. Located within our business hotel on Gokul Road,
                Gala Vista II provides professional surroundings with high-speed Wi-Fi and modern event
                infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hubli-sunset" />
                  {" Purpose-built for corporate seminars & conferences"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hubli-sunset" />
                  {" High-speed Wi-Fi and presentation connectivity"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hubli-sunset" />
                  {" Adjacent business center and hotel room blocks"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Interactive WhatsApp Enquiry Helper Tool */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl bg-hubli-light p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <span className="text-hubli-sunset font-bold uppercase tracking-widest text-xs">
              Quick Event Planner
            </span>
            <h2 id="enquire-for-your-upcoming-event" className="text-2xl md:text-3xl font-serif font-bold text-hubli-green mt-1">
              Enquire for Your Upcoming Event
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Select your event type and preferred date below, then click to open WhatsApp with your
              customized details.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Or{" "}
              <a
                href={waLink(WA_MESSAGES.banquets)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#128C7E] font-semibold hover:underline"
              >
                message us on WhatsApp directly
              </a>
              .
            </p>
          </div>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-hubli-sunset text-sm"
              >
                <option value="">-- Select Event Type (Optional) --</option>
                <option value="Wedding">Wedding</option>
                <option value="Marriage Reception">Marriage Reception</option>
                <option value="Corporate Conference">Corporate Conference</option>
                <option value="Seminar / Presentation">Seminar / Presentation</option>
                <option value="Business Meeting">Business Meeting</option>
                <option value="Social Celebration">Social Celebration / Anniversary</option>
                <option value="Other Event">Other Event</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">
                {"Preferred Event Date "}
                <span className="text-xs font-normal text-gray-500">(DDMMYYYY or choose from calendar)</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={10}
                  value={displayDate}
                  onChange={handleManualDateChange}
                  onBlur={handleDateBlur}
                  placeholder="DD/MM/YYYY (e.g. 25112026)"
                  className={`w-full pl-4 pr-12 py-3 bg-white border ${dateError ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-hubli-sunset"} rounded-sm focus:outline-none text-sm transition-colors`}
                />
                <div className="absolute right-3 flex items-center justify-center w-7 h-7">
                  <CalendarIcon className="w-5 h-5 text-gray-500 pointer-events-none" />
                  <input
                    ref={datePickerRef}
                    type="date"
                    min={todayIso || undefined}
                    value={calendarIso}
                    onChange={handleCalendarChange}
                    title="Choose date from calendar"
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>
              </div>
              {dateError ? (
                <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                  <span>⚠</span>
                  {dateError}
                </p>
              ) : validatedFormattedDate ? (
                <p className="text-xs text-green-700 font-medium flex items-center gap-1 mt-1">
                  <span>✓</span>
                  {`Validated Event Date: ${validatedFormattedDate}`}
                </p>
              ) : null}
            </div>
            <div className="p-4 bg-white rounded-md border border-gray-200 text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Preview WhatsApp message:</strong>
              <br />
              <span className="whitespace-pre-line">{previewMsg}</span>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect flex items-center justify-center gap-2 uppercase tracking-wider text-sm cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Enquire on WhatsApp (+91 91871 95517)
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Hall capacity: columns appear once confirmed in src/data/facts.js */}
      <section id="capacity" aria-labelledby="capacity-title" className="py-12 bg-hubli-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 id="capacity-title" className="text-3xl font-serif text-hubli-dark font-bold mb-6 text-center">
            Compare the halls
          </h2>
          <FactTable {...CAPACITY_TABLE} />
        </div>
      </section>
      <FaqSection faqs={BANQUET_FAQS} title="Gala Vista Banquets FAQ" />
      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 id="explore-more-at-radiant-vista" className="text-xl font-serif font-bold text-hubli-dark mb-6">Explore More at Radiant Vista</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/rooms/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              {"Rooms & Accommodation"}
            </a>
            <a
              href="/dining/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Brick and Brew Dining
            </a>
            <a
              href="/bar/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Breeze Point Rooftop Bar
            </a>
            <a
              href="/contact/"
              className="p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm"
            >
              Contact Hotel
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

