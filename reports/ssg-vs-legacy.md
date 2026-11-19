# SSG output vs legacy site (main)

Generated 2026-11-19T07:21:02.337Z.
"Legacy static" = the hand-written HTML (what crawlers without JS saw). "Legacy live" = the old React DOM after it replaced that HTML (what visitors saw). "New" = dist/ server HTML (identical to the hydrated DOM, see the parity check).

## Summary

| Route | Static copy lost | Live copy lost | Alts lost | Links lost | Head tags changed | JSON-LD lost / added |
|---|---|---|---|---|---|---|
| `/` | 27 | 33 | 18 | 7 | 0 | 12 / +13 |
| `/rooms/` | 20 | 2 | 3 | 0 | 0 | 4 / +16 |
| `/dining/` | 17 | 0 | 1 | 0 | 0 | 0 / +8 |
| `/bar/` | 22 | 0 | 1 | 0 | 0 | 0 / +8 |
| `/banquets/` | 24 | 0 | 2 | 0 | 0 | 0 / +8 |
| `/gallery/` | 11 | 0 | 0 | 1 | 1 | 0 / +0 |

## `/`

### Copy in legacy static HTML that is not in the new page (27)

- Location on Gokul Road
- Radiant Vista – Hotel in Hubballi
- All rooms feature individually controlled air conditioning, 42-inch Smart TVs, hot water kettle, and secure premises with CCTV surveillance:
- View All Rooms and Accommodation Details → | Book Online via ResAvenue | Enquire on WhatsApp
- This dining restaurant in Hubballi blends cherished comfort flavours—from rich butter chicken crafted with artistry to gourmet momos with a dimsum twist and comforting dal reimagined with five-star plating—against a backdrop of retro Bollywood beats, earthy vibes, and playful pomegranate motifs.
- View Dining Details at Brick and Brew → | Enquire on WhatsApp
- Our bar team crafts classic curated cocktails paired with savoury bites and a rotating selection of appetizing meals.
- Designed with distinct spaces to suit romantic dinner dates as well as lively gatherings with friends, this hotel rooftop bar in Hubballi provides an elevated atmosphere.
- View Breeze Point Rooftop Bar Details → | Enquire on WhatsApp
- Gala Vista I — Grand Banquet Hall:
- Gala Vista II — Conference & Event Space:
- View Gala Vista Banquet & Event Details → | Enquire on WhatsApp
- Facilities and amenities at Radiant Vista ensure a seamless stay for business and leisure guests:
- Multiple Dining Venues (Brick and Brew & Breeze Point Rooftop Bar)
- Banqueting & Conference Facilities (Gala Vista I & Gala Vista II)
- Inorbit Mall Hubballi:
- Hubballi Airport (Gokul Road):
- Hubballi Junction (Railway Station):
- Indira Gandhi Glass House Garden:
- +91 83620 02487
- Conveniently situated on Gokul Road with direct connections to Hubli Airport, Akshay Park commercial area, and major industrial hubs in Hubballi-Dharwad.
- +91 836 200 2487 / +91 836 451 1339
- Call +91 83620 02487 or email reservations@hotelradiantvista.com to check dates.
- Call reservations at +91 91871 95517, call the front desk at +91 83620 02487, email reservations@hotelradiantvista.com, or book online through hotelradiantvista.com.
- © Radiant Vista, Gokul Road, Hubballi – Business Hotel, Brick and Brew Restaurant, Breeze Point Rooftop Bar & Gala Vista Banquet Halls.
- Radiant Vista is a business and leisure hotel on Gokul Road, Akshay Park, Hubballi, Karnataka.
- For room reservations and event bookings, please call +91 83620 02487 or email reservations@hotelradiantvista.com.

### Copy in the legacy live React page that is not in the new page (33)

- Business Hotel & Leisure Travel
- Radiant Vista is not just a hotel; it's a seamless blend of professional excellence and leisurely comfort.
- Whether you are visiting Hubli for a business conference or a relaxing getaway, we provide the perfect environment on Gokul Road, Akshay Park.
- Enjoy our distinct dining experiences—from the nostalgic flavors at Brick and Brew to the stunning rooftop vibes at Breeze Point.
- With designer rooms and state-of-the-art facilities, we redefine hospitality in Hubballi.
- Designed for Comfort
- All rooms feature individually controlled air conditioning, 42-inch Smart TVs, and secure premises with CCTV surveillance.
- Designer rooms equipped with individually controlled air conditioning, 42-inch Smart TV, and essential amenities for a restful stay.
- Spacious accommodation featuring premium interiors, a private mini fridge, an executive work desk, and a safe deposit locker.
- Experience ultimate luxury with satellite cable, expansive living space, separate lounge, and upscale designer interiors.
- Taste the Extraordinary Food
- Host your events in style at our premier halls.
- Perfect for corporate conferences, weddings, and grand gatherings.
- Our facilities are designed to handle both intimate business meetings and large-scale celebrations with equal grace.
- Grand Banquet Hall for weddings and receptions
- Conference & Event Space for corporate presentations
- Amenities & Events
- From secure basement parking to a fully equipped business center, we have it all to ensure a seamless stay.
- Radiant Vista is located on Gokul Road in Akshay Park, Hubballi, with convenient access to shopping, transport hubs, leisure destinations, and important attractions around the city.
- Shopping and entertainment destination.
- Convenient for guests travelling by air on Gokul Road.
- Major railway connection for travellers.
- Popular leisure and sightseeing destination.
- Historic temple and cultural attraction.
- Popular viewpoint and recreational destination.
- Important spiritual and cultural landmark.
- Public garden and leisure destination.
- Guests searching for a hotel near Inorbit Mall Hubballi, a hotel near Hubballi Airport, a hotel near Hubballi Junction, or accommodation convenient for exploring Hubballi can consider Radiant Vista on Gokul Road, Akshay Park.
- EXPLORE FULL GALLERY
- Located at Akshay Park, Gokul Road
- Start Your Journey
- Plot No 04, S/No 106A, 107B, 108A, & 109A,
- Akshay Park, Gokul Road,

### Image alt text no longer present (18)

- Radiant Vista Logo
- Classic room accommodation at Radiant Vista hotel in Hubballi
- Premium room at Radiant Vista business hotel in Hubballi
- Luxury suite accommodation at Radiant Vista hotel in Hubballi
- Brick and Brew restaurant at Radiant Vista in Hubballi
- Breeze Point rooftop bar at Radiant Vista in Hubballi
- Gala Vista banquet hall at Radiant Vista in Hubballi
- Classic Room - photo 1
- Classic Room - photo 2
- Classic Room - photo 3
- Premium Room - photo 1
- Premium Room - photo 2
- Premium Room - photo 3
- Premium Room - photo 4
- Suite - photo 1
- Suite - photo 2
- Suite - photo 3
- Suite - photo 4

### Links no longer present (7)

- /#about
- /#facilities
- /#location
- /#contact
- /#dining
- /#breeze-point
- /#gala-vista

### Head tags removed or changed (legacy value) (0)

_none_

### Head tags added or changed (new value) (0)

_none_

### JSON-LD facts removed or changed (legacy value) (12)

- FAQPage </#faq-schema>.mainEntity[0].acceptedAnswer.text = Radiant Vista is located on Gokul Road, Akshay Park, Hubballi (also spelled Hubli), Karnataka 580030, India, near Hubballi Airport and Inorbit Mall.
- FAQPage </#faq-schema>.mainEntity[1].acceptedAnswer.text = Yes. Hubballi is the official Kannada name and Hubli is the common Anglicized spelling of the same city in Karnataka, part of the twin city Hubballi-Dharwad.
- FAQPage </#faq-schema>.mainEntity[2].name = Does Radiant Vista have a restaurant?
- FAQPage </#faq-schema>.mainEntity[2].acceptedAnswer.text = Yes. Brick and Brew is the restaurant at Radiant Vista on Gokul Road, Hubballi, serving nostalgic flavours and contemporary dishes in a vibrant atmosphere.
- FAQPage </#faq-schema>.mainEntity[3].acceptedAnswer.text = Yes. Breeze Point is the rooftop bar and restaurant at Radiant Vista, offering an open-roof ambience, curated cocktails, savoury dishes, and panoramic views of Hubballi.
- FAQPage </#faq-schema>.mainEntity[4].name = Can I book a banquet hall for a wedding or corporate conference at Radiant Vista?
- FAQPage </#faq-schema>.mainEntity[4].acceptedAnswer.text = Yes. Gala Vista offers two premier event spaces: Gala Vista I (Grand Banquet Hall) for weddings and receptions, and Gala Vista II (Conference & Event Space) for corporate conferences, seminars, and business meetings. Call +91 83620 02487 or email reservations@hotelradiantvista.com for bookings.
- FAQPage </#faq-schema>.mainEntity[5].name = What room types are available at Radiant Vista?
- FAQPage </#faq-schema>.mainEntity[5].acceptedAnswer.text = Radiant Vista offers three room categories: Classic Room, Premium Room, and Suite, all equipped with individually controlled air conditioning, 42-inch Smart TVs, and modern business amenities.
- FAQPage </#faq-schema>.mainEntity[6].name = Is Radiant Vista convenient for business travellers visiting Hubballi?
- FAQPage </#faq-schema>.mainEntity[6].acceptedAnswer.text = Yes. Radiant Vista is positioned as a business hotel on Gokul Road in Akshay Park, near Hubballi Airport, featuring a business center, conferencing halls, high-speed connectivity, and dedicated travel services.
- FAQPage </#faq-schema>.mainEntity[7].acceptedAnswer.text = You can call reservations at +91 91871 95517, call the front desk at +91 83620 02487, email reservations@hotelradiantvista.com, or book online via hotelradiantvista.com.

### JSON-LD facts added or changed (new value) (13)

- WebPage </#webpage>.description = Radiant Vista is a premium business and leisure hotel on Gokul Road, Akshay Park, Hubballi (Hubli), Karnataka. The hotel features designer rooms and suites, the vibrant Brick and Brew restaurant, Breeze Point rooftop bar with panoramic city views, Gala Vista banquet halls and event spaces, and modern business conferencing facilities.
- FAQPage </#faq-schema>.mainEntity[0].acceptedAnswer.text = Radiant Vista is located on Gokul Road, Akshay Park, Hubballi (also spelled Hubli), Karnataka 580030, India, near Hubballi Airport and Inorbit Mall Hubballi.
- FAQPage </#faq-schema>.mainEntity[1].acceptedAnswer.text = Yes. Hubballi is the official Kannada name and Hubli is the common Anglicized spelling of the same city in northern Karnataka, which forms the twin city Hubballi-Dharwad.
- FAQPage </#faq-schema>.mainEntity[2].name = Does Radiant Vista have an on-site restaurant?
- FAQPage </#faq-schema>.mainEntity[2].acceptedAnswer.text = Yes. Brick and Brew is the restaurant at Radiant Vista on Gokul Road, Hubballi, serving nostalgic food favourites with a modern twist in a vibrant setting.
- FAQPage </#faq-schema>.mainEntity[3].acceptedAnswer.text = Yes. Breeze Point is the rooftop bar and restaurant at Radiant Vista, offering an open-roof ambience, curated cocktails, savoury dishes, and panoramic skyline views.
- FAQPage </#faq-schema>.mainEntity[4].name = Can I book a banquet hall for a wedding or corporate event at Radiant Vista?
- FAQPage </#faq-schema>.mainEntity[4].acceptedAnswer.text = Yes. Gala Vista offers two dedicated event spaces: Gala Vista I (Grand Banquet Hall) for weddings and receptions, and Gala Vista II (Conference & Event Space) for corporate conferences, seminars, and business meetings. Call +91 836 200 2487 or email reservations@hotelradiantvista.com to check dates.
- FAQPage </#faq-schema>.mainEntity[5].name = What room categories are available at Radiant Vista?
- FAQPage </#faq-schema>.mainEntity[5].acceptedAnswer.text = Radiant Vista offers Classic Rooms, Premium Rooms, and Suites, all equipped with individually controlled air conditioning, 42-inch Smart TVs, and business amenities.
- FAQPage </#faq-schema>.mainEntity[6].name = Is Radiant Vista suitable for business travellers visiting Hubballi?
- FAQPage </#faq-schema>.mainEntity[6].acceptedAnswer.text = Yes. Radiant Vista is positioned as a business hotel on Gokul Road near Hubballi Airport, featuring a business center, meeting spaces, high-speed Wi-Fi, and 24/7 front desk services.
- FAQPage </#faq-schema>.mainEntity[7].acceptedAnswer.text = Call reservations at +91 91871 95517, call the front desk at +91 836 200 2487, email reservations@hotelradiantvista.com, or book online through hotelradiantvista.com.

## `/rooms/`

### Copy in legacy static HTML that is not in the new page (20)

- Radiant Vista offers modern hotel rooms in Hubballi for business travelers and families.
- Our hotel is conveniently located on Gokul Road in Akshay Park, just minutes from Hubballi Airport.
- Guests enjoy fast city connectivity, peaceful rest, and attentive hospitality.
- Choose from comfortable Classic Rooms, spacious Premium Rooms, and luxury Suites.
- Every room includes individual climate control, a 42-inch Smart TV, high-speed Wi-Fi, and round-the-clock room service.
- Designer rooms equipped with individually controlled air conditioning, 42-inch Smart TV, hot water kettle, executive work desk, and contemporary bathroom amenities.
- Perfect for single executives and business travelers.
- Book Classic Room Online | Enquire on WhatsApp
- Spacious accommodation in Hubballi featuring upgraded designer interiors, mini fridge, safe deposit locker, executive work desk, individually controlled air conditioning, and 42-inch Smart TV.
- Tailored for corporate guests.
- Book Premium Room Online | Enquire on WhatsApp
- Expansive luxury living space featuring a separate private lounge area, upscale designer interiors, satellite television, safe deposit locker, mini fridge, and comprehensive business amenities.
- Book Suite Online | Enquire on WhatsApp
- Radiant Vista offers Classic Rooms, Premium Rooms, and Suites, all equipped with air conditioning and Smart TVs.
- What in-room amenities are standard across all rooms?
- Individually controlled AC, 42-inch Smart TV, hot water kettle, work desk, high-speed Wi-Fi, and CCTV secure premises.
- Book online via our verified ResAvenue booking engine, WhatsApp +91 91871 95517, or call +91 836 200 2487.
- Explore More Services
- Brick and Brew Restaurant | Breeze Point Rooftop Bar | Gala Vista Banquet Halls | Contact Hotel
- © Radiant Vista, Gokul Road, Hubballi – Business Hotel & Leisure Travel.

### Copy in the legacy live React page that is not in the new page (2)

- Amenities & Events
- From secure basement parking to a fully equipped business center, we have it all to ensure a seamless stay.

### Image alt text no longer present (3)

- Classic room accommodation at Radiant Vista hotel in Hubballi
- Premium room at Radiant Vista business hotel in Hubballi
- Luxury suite accommodation at Radiant Vista hotel in Hubballi

### Links no longer present (0)

_none_

### Head tags removed or changed (legacy value) (0)

_none_

### Head tags added or changed (new value) (0)

_none_

### JSON-LD facts removed or changed (legacy value) (4)

- FAQPage </rooms/#faq-schema>.mainEntity[0].acceptedAnswer.text = Radiant Vista offers three verified room categories: Classic Room, Premium Room, and luxury Suite, all featuring individually controlled air conditioning and 42-inch Smart TVs.
- FAQPage </rooms/#faq-schema>.mainEntity[1].acceptedAnswer.text = Standard room amenities include individually controlled AC, 42-inch Smart TV, hot water kettle, complimentary high-speed Wi-Fi, work desk, and CCTV secure premises. Premium Rooms and Suites additionally feature mini fridges and safe deposit lockers.
- FAQPage </rooms/#faq-schema>.mainEntity[2].name = How do I book a room at Radiant Vista Hubballi?
- FAQPage </rooms/#faq-schema>.mainEntity[2].acceptedAnswer.text = Guests can book online via the official ResAvenue booking engine, connect via WhatsApp at +91 91871 95517, or call the hotel directly at +91 836 200 2487.

### JSON-LD facts added or changed (new value) (16)

- FAQPage </rooms/#faq-schema>.mainEntity[0].acceptedAnswer.text = Radiant Vista offers three verified room categories: Classic Room, Premium Room, and luxury Suite. All categories include individually controlled air conditioning and 42-inch Smart TVs.
- FAQPage </rooms/#faq-schema>.mainEntity[1].acceptedAnswer.text = Standard amenities include individually controlled AC, 42-inch Smart TV, hot water kettle, complimentary high-speed Wi-Fi, work desks, and CCTV secure premises. Premium Rooms and Suites additionally feature mini fridges and safe deposit lockers.
- FAQPage </rooms/#faq-schema>.mainEntity[2].name = Is Radiant Vista suitable for business travellers visiting Hubballi?
- FAQPage </rooms/#faq-schema>.mainEntity[2].acceptedAnswer.text = Yes. Radiant Vista is positioned as a business hotel on Gokul Road near Hubballi Airport, featuring a business center, meeting facilities, high-speed Wi-Fi, executive work desks, and 24/7 front desk services.
- FAQPage </rooms/#faq-schema>.mainEntity[3].@type = Question
- FAQPage </rooms/#faq-schema>.mainEntity[3].name = How do I book a room at Radiant Vista?
- FAQPage </rooms/#faq-schema>.mainEntity[3].acceptedAnswer.@type = Answer
- FAQPage </rooms/#faq-schema>.mainEntity[3].acceptedAnswer.text = You can book directly online via our verified ResAvenue booking engine, contact reservations on WhatsApp at +91 91871 95517, or call +91 836 200 2487.
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[0].@type = ListItem
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[0].position = 1
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[0].name = Home
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[0].item = https://hotelradiantvista.com/
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[1].@type = ListItem
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[1].position = 2
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[1].name = Rooms & Suites
- BreadcrumbList </rooms/#breadcrumb>.itemListElement[1].item = https://hotelradiantvista.com/rooms/

## `/dining/`

### Copy in legacy static HTML that is not in the new page (17)

- Rooms & Suites
- Home > Brick and Brew Dining
- Brick and Brew is the signature in-house restaurant at Radiant Vista on Gokul Road, Hubballi.
- We celebrate beloved Indian food classics with a fresh, modern culinary twist.
- Our cozy atmosphere welcomes resident guests, visiting executives, and local food enthusiasts alike.
- Ever craved butter chicken that looks like art?
- Or momos with a gourmet dim sum twist?
- Welcome to Brick and Brew.
- Every dish revives your favourite food memories with a creative modern flair.
- Enjoy retro Bollywood melodies, earthy decor, and warm pendant lighting.
- Inspired by cultural quirks and comfort food memories, Brick and Brew combines nostalgic tastes with contemporary presentation.
- Experience home-style comfort paired with five-star hospitality.
- This is more than a restaurant in Hubballi; it is a lively gathering place for great food and conversation.
- Whether searching for a restaurant on Gokul Road Hubballi, places to eat in Hubballi with family or colleagues, or dining in Akshay Park Hubballi, connect with our dining team on WhatsApp:
- Explore More Services
- Breeze Point Rooftop Bar | Rooms & Accommodation | Gala Vista Banquet Halls | Contact Hotel
- © Radiant Vista, Gokul Road, Hubballi – Business Hotel & Dining.

### Copy in the legacy live React page that is not in the new page (0)

_none_

### Image alt text no longer present (1)

- Brick and Brew restaurant dining at Radiant Vista in Hubballi

### Links no longer present (0)

_none_

### Head tags removed or changed (legacy value) (0)

_none_

### Head tags added or changed (new value) (0)

_none_

### JSON-LD facts removed or changed (legacy value) (0)

_none_

### JSON-LD facts added or changed (new value) (8)

- BreadcrumbList </dining/#breadcrumb>.itemListElement[0].@type = ListItem
- BreadcrumbList </dining/#breadcrumb>.itemListElement[0].position = 1
- BreadcrumbList </dining/#breadcrumb>.itemListElement[0].name = Home
- BreadcrumbList </dining/#breadcrumb>.itemListElement[0].item = https://hotelradiantvista.com/
- BreadcrumbList </dining/#breadcrumb>.itemListElement[1].@type = ListItem
- BreadcrumbList </dining/#breadcrumb>.itemListElement[1].position = 2
- BreadcrumbList </dining/#breadcrumb>.itemListElement[1].name = Brick and Brew Dining
- BreadcrumbList </dining/#breadcrumb>.itemListElement[1].item = https://hotelradiantvista.com/dining/

## `/bar/`

### Copy in legacy static HTML that is not in the new page (22)

- Rooms & Suites
- Home > Breeze Point Rooftop Bar
- Breeze Point is the open-air rooftop bar and restaurant at Radiant Vista on Gokul Road, Hubballi.
- Perched high above the city, it offers panoramic skyline views, refreshing breezes, and an inviting evening ambiance.
- Whether you are relaxing after a busy day or celebrating a special occasion, Breeze Point delivers a memorable rooftop dining experience.
- Open-Air Skyline Dining & Craft Cocktails
- Breeze Point combines comfortable lounge seating with skilled mixology.
- Our open-air terrace is ideal for sunset views, romantic candlelit dinners, and weekend get-togethers with friends.
- Guests can also choose covered lounge seating for casual business conversations and relaxed drinks.
- Panoramic open-sky views across the Hubballi cityscape
- Handcrafted cocktails, premium spirits, and refreshing mocktails
- Fresh tandoori platters, crispy bar bites, and chef-curated small plates
- Dedicated lounge zones for intimate dinners and celebratory groups
- Attentive table service with prompt hospitality
- Timings & Guest Experience
- Breeze Point operates daily every evening from 5:30 PM to 11:30 PM.
- Enjoy pleasant background music, starlit dining, and seamless elevator access directly from the hotel lobby.
- Complimentary parking is available for all dining visitors.
- For rooftop table enquiries, timings, and group gatherings, reach out directly via WhatsApp:
- Explore More Services
- Brick and Brew Dining | Rooms & Accommodation | Gala Vista Banquet Halls | Contact Hotel
- © Radiant Vista, Gokul Road, Hubballi – Rooftop Bar & Dining.

### Copy in the legacy live React page that is not in the new page (0)

_none_

### Image alt text no longer present (1)

- Breeze Point rooftop bar and restaurant at Radiant Vista in Hubballi

### Links no longer present (0)

_none_

### Head tags removed or changed (legacy value) (0)

_none_

### Head tags added or changed (new value) (0)

_none_

### JSON-LD facts removed or changed (legacy value) (0)

_none_

### JSON-LD facts added or changed (new value) (8)

- BreadcrumbList </bar/#breadcrumb>.itemListElement[0].@type = ListItem
- BreadcrumbList </bar/#breadcrumb>.itemListElement[0].position = 1
- BreadcrumbList </bar/#breadcrumb>.itemListElement[0].name = Home
- BreadcrumbList </bar/#breadcrumb>.itemListElement[0].item = https://hotelradiantvista.com/
- BreadcrumbList </bar/#breadcrumb>.itemListElement[1].@type = ListItem
- BreadcrumbList </bar/#breadcrumb>.itemListElement[1].position = 2
- BreadcrumbList </bar/#breadcrumb>.itemListElement[1].name = Breeze Point Rooftop Bar
- BreadcrumbList </bar/#breadcrumb>.itemListElement[1].item = https://hotelradiantvista.com/bar/

## `/banquets/`

### Copy in legacy static HTML that is not in the new page (24)

- Rooms & Suites
- Host memorable events at Gala Vista inside Radiant Vista on Gokul Road, Hubballi.
- Our modern venues accommodate corporate conferences, business seminars, wedding receptions, and social celebrations.
- Each hall features elegant interiors, climate control, and flexible seating arrangements.
- Gala Vista offers two versatile event spaces.
- Gala Vista I is designed for grand weddings and celebratory banquets.
- Gala Vista II is purpose-built for executive conferences, seminars, and corporate meetings.
- Gala Vista I provides a grand setting for weddings, receptions, and family milestones.
- The hall includes ambient chandelier lighting, a raised stage, and seamless hospitality coordination.
- Gala Vista II is tailored for business presentations, corporate training, seminars, and board meetings.
- It offers high-speed Wi-Fi, modern audio-visual technology, and comfortable executive seating.
- Banqueting Amenities & Services
- Every event at Gala Vista is supported by experienced event managers and technical staff.
- We offer flexible seating formats including theatre, round-table cluster, and U-shape conference styles.
- High-definition digital projection and wide display screens
- Acoustic sound system with wireless handheld and collar microphones
- Customized multi-cuisine catering prepared by Brick and Brew chefs
- Dedicated pre-function foyer and private host dressing rooms
- Ample guest parking with convenient valet assistance
- Enquire About Gala Vista Banquets & Conferencing
- Enquire about packages, hall availability, and customized catering for your upcoming event on WhatsApp:
- Explore More Services
- Rooms & Accommodation | Brick and Brew Dining | Breeze Point Rooftop Bar | Contact Hotel
- © Radiant Vista, Gokul Road, Hubballi – Banquets & Event Venues.

### Copy in the legacy live React page that is not in the new page (0)

_none_

### Image alt text no longer present (2)

- Gala Vista I grand banquet hall for weddings in Hubballi
- Gala Vista II conference and event space at Radiant Vista Hubballi

### Links no longer present (0)

_none_

### Head tags removed or changed (legacy value) (0)

_none_

### Head tags added or changed (new value) (0)

_none_

### JSON-LD facts removed or changed (legacy value) (0)

_none_

### JSON-LD facts added or changed (new value) (8)

- BreadcrumbList </banquets/#breadcrumb>.itemListElement[0].@type = ListItem
- BreadcrumbList </banquets/#breadcrumb>.itemListElement[0].position = 1
- BreadcrumbList </banquets/#breadcrumb>.itemListElement[0].name = Home
- BreadcrumbList </banquets/#breadcrumb>.itemListElement[0].item = https://hotelradiantvista.com/
- BreadcrumbList </banquets/#breadcrumb>.itemListElement[1].@type = ListItem
- BreadcrumbList </banquets/#breadcrumb>.itemListElement[1].position = 2
- BreadcrumbList </banquets/#breadcrumb>.itemListElement[1].name = Gala Vista Banquets
- BreadcrumbList </banquets/#breadcrumb>.itemListElement[1].item = https://hotelradiantvista.com/banquets/

## `/gallery/`

### Copy in legacy static HTML that is not in the new page (11)

- Welcome to the photo gallery of Radiant Vista, a premier business and leisure hotel on Gokul Road, Akshay Park, Hubballi.
- Explore photographs of our contemporary guest rooms, vibrant Brick and Brew restaurant, Breeze Point open-air rooftop restobar, and Gala Vista banqueting facilities.
- Hotel Facade & Exterior
- Brick and Brew Dining Restaurant
- Breeze Point Rooftop Restobar
- Gala Vista Banquets & Conferences
- Book Your Stay or Enquire
- Experience Radiant Vista in person on Gokul Road, Akshay Park, Hubballi.
- Book Online or Enquire via WhatsApp.
- Rooms & Suites | Brick and Brew Restaurant | Breeze Point Rooftop Bar | Gala Vista Banquet Halls | Contact Hotel
- © Radiant Vista, Gokul Road, Hubballi – Business Hotel & Suites.

### Copy in the legacy live React page that is not in the new page (0)

_none_

### Image alt text no longer present (0)

_none_

### Links no longer present (1)

- wa.me/919187195517 ""

### Head tags removed or changed (legacy value) (1)

- stylesheet https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap

### Head tags added or changed (new value) (1)

- stylesheet https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap

### JSON-LD facts removed or changed (legacy value) (0)

_none_

### JSON-LD facts added or changed (new value) (0)

_none_
