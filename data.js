// Task data for 28-day SEO plan - Jimmys Removals and Logistics
const TASKS = [
  {day:1,week:1,cat:"Citations",priority:"High",title:"Add business to Bing Places",details:"Create listing on Bing Places with full business details (66 Beaufort Avenue, B34 6AE, 07404 353516).",link:"https://www.bingplaces.com/"},
  {day:1,week:1,cat:"Citations",priority:"High",title:"Add business to Apple Business Connect",details:"Create listing on Apple Business Connect for Jimmys Removals and Logistics.",link:"https://businessconnect.apple.com/"},
  {day:2,week:1,cat:"Citations",priority:"High",title:"Add business to Yell",details:"Create free listing on Yell directory with 24/7 operating hours.",link:"https://www.yell.com/free-listing/"},
  {day:2,week:1,cat:"Citations",priority:"High",title:"Add business to Yelp UK",details:"Create business profile on Yelp UK for removals and logistics.",link:"https://biz.yelp.com/"},
  {day:3,week:1,cat:"Citations",priority:"High",title:"Add business to FreeIndex",details:"Create comprehensive listing on FreeIndex directory.",link:"https://www.freeindex.co.uk/"},
  {day:3,week:1,cat:"Citations",priority:"High",title:"Add business to Cylex UK",details:"Add company to Cylex UK directory with full service list.",link:"https://www.cylex-uk.co.uk/add-company.html"},
  {day:4,week:1,cat:"Citations",priority:"Medium",title:"Add business to Scoot",details:"Create listing on Scoot business directory.",link:"https://www.scoot.co.uk/add-listing"},
  {day:4,week:1,cat:"Citations",priority:"Medium",title:"Add business to 192.com",details:"Add business to 192.com directory with Birmingham depot details.",link:"https://www.192.com/business/add/"},
  {day:5,week:1,cat:"Citations",priority:"Medium",title:"Add business to Hotfrog UK",details:"Create profile on Hotfrog UK directory.",link:"https://www.hotfrog.co.uk/add-your-business"},
  {day:5,week:1,cat:"Citations",priority:"Medium",title:"Add business to MyIndex",details:"Add business to MyIndex UK directory.",link:"https://www.myindex.co.uk/add-business"},
  {day:6,week:1,cat:"Citations",priority:"High",title:"Upload logo to all directory profiles",details:"Upload Jimmys Removals and Logistics logo to every directory listing."},
  {day:6,week:1,cat:"Citations",priority:"Medium",title:"Upload van, depot and team photos",details:"Upload photos of moving vans, Birmingham depot (66 Beaufort Avenue), and removals team."},
  {day:6,week:1,cat:"Citations",priority:"High",title:"Add 24/7 services to all profiles",details:"Add full service list (House Removals, Office Relocation, Man and Van, 24/7 Logistics) to every profile."},
  {day:6,week:1,cat:"Citations",priority:"High",title:"Add business description to all profiles",details:"Add the standard company description with Companies House No 16876169 to every directory."},
  {day:7,week:1,cat:"Citations",priority:"High",title:"Check business name consistency",details:"Verify 'Jimmys Removals and Logistics' is exactly the same on every citation."},
  {day:7,week:1,cat:"Citations",priority:"High",title:"Check phone number consistency",details:"Verify 07404 353516 is the same on every directory profile."},
  {day:7,week:1,cat:"Citations",priority:"High",title:"Check website URL consistency",details:"Verify https://jimmysremovalsltd.co.uk/ is identical across all listings."},
  {day:7,week:1,cat:"Citations",priority:"Medium",title:"Check category & hours consistency",details:"Verify category is Removals / Logistics and hours are set to Open 24/7."},
  {day:7,week:1,cat:"Citations",priority:"Medium",title:"Save all profile URLs",details:"Copy and save the live URL of every directory profile for reference."},
  {day:8,week:2,cat:"Social Profiles",priority:"High",title:"Create Facebook Business Page",details:"Set up Facebook Business Page for Jimmys Removals and Logistics.",link:"https://www.facebook.com/pages/create"},
  {day:8,week:2,cat:"Social Profiles",priority:"High",title:"Add website, phone, WhatsApp & 24/7 hours to Facebook",details:"Complete all Facebook page details: website (jimmysremovalsltd.co.uk), phone (07404 353516), WhatsApp link, and 24/7 availability."},
  {day:8,week:2,cat:"Social Profiles",priority:"Medium",title:"Upload logo and van cover photo to Facebook",details:"Upload high-res branding as profile photo and branded vehicle as cover photo."},
  {day:9,week:2,cat:"Social Profiles",priority:"High",title:"Create Instagram profile",details:"Set up Instagram business profile for Jimmys Removals and Logistics.",link:"https://www.instagram.com/"},
  {day:9,week:2,cat:"Social Profiles",priority:"Medium",title:"Add website & WhatsApp in Instagram bio",details:"Add https://jimmysremovalsltd.co.uk/ and WhatsApp link to Instagram bio."},
  {day:9,week:2,cat:"Social Profiles",priority:"Medium",title:"Add first 3 Instagram posts",details:"Upload 3 posts showcasing house moving, van packing, and Birmingham 24/7 service."},
  {day:10,week:2,cat:"Social Profiles",priority:"High",title:"Create LinkedIn Company Page",details:"Set up LinkedIn company page for Jimmys Logistics and Removals Limited.",link:"https://www.linkedin.com/company/setup/new/"},
  {day:10,week:2,cat:"Social Profiles",priority:"Medium",title:"Add B2B logistics description and website to LinkedIn",details:"Highlight commercial relocations, logistics solutions, and link to jimmysremovalsltd.co.uk."},
  {day:10,week:2,cat:"Social Profiles",priority:"Medium",title:"Add service details to LinkedIn",details:"Add all commercial and domestic services to LinkedIn services tab."},
  {day:11,week:2,cat:"Social Profiles",priority:"Low",title:"Create Pinterest account",details:"Set up Pinterest business account for removals & packing tips.",link:"https://www.pinterest.co.uk/"},
  {day:11,week:2,cat:"Social Profiles",priority:"Low",title:"Create Pinterest boards",details:"Create boards: Birmingham Moving Tips, Packing Hacks, Office Relocation, West Midlands Logistics."},
  {day:12,week:2,cat:"Social Profiles",priority:"Medium",title:"Create YouTube channel",details:"Set up YouTube channel for Jimmys Removals and Logistics.",link:"https://www.youtube.com/"},
  {day:12,week:2,cat:"Social Profiles",priority:"Medium",title:"Upload first short video to YouTube",details:"Upload a short video or YouTube Short highlighting fast Birmingham removals."},
  {day:12,week:2,cat:"Social Profiles",priority:"Medium",title:"Add website link to YouTube",details:"Add https://jimmysremovalsltd.co.uk/ to YouTube channel description and links."},
  {day:13,week:2,cat:"Social Profiles",priority:"Low",title:"Create TikTok profile",details:"Set up TikTok profile for Jimmys Removals and Logistics.",link:"https://www.tiktok.com/"},
  {day:13,week:2,cat:"Social Profiles",priority:"Low",title:"Upload first short moving clip to TikTok",details:"Upload a moving day or van loading time-lapse to TikTok."},
  {day:13,week:2,cat:"Social Profiles",priority:"Low",title:"Add website link to TikTok",details:"Add website URL to TikTok bio once available."},
  {day:14,week:2,cat:"Social Profiles",priority:"High",title:"Check all social profiles link back to website",details:"Verify every social profile has a working link to https://jimmysremovalsltd.co.uk/."},
  {day:14,week:2,cat:"Social Profiles",priority:"Medium",title:"Post website launch & 24/7 announcement",details:"Post an update on all profiles announcing 24/7 removals & logistics coverage across West Midlands."},
  {day:15,week:3,cat:"Partners",priority:"High",title:"Make list of 50 local Birmingham businesses",details:"Create a list of 50 local businesses to contact for reciprocal partnerships and backlinks."},
  {day:15,week:3,cat:"Partners",priority:"High",title:"Include estate agents, storage facilities & letting agents",details:"Include Birmingham estate agents, self-storage providers, cleaning firms, and furniture stores."},
  {day:16,week:3,cat:"Partners",priority:"High",title:"Contact 10 estate agents",details:"Send partnership email to 10 Birmingham estate agents offering trusted move recommendations."},
  {day:17,week:3,cat:"Partners",priority:"High",title:"Contact 10 letting agents",details:"Send partnership email to 10 letting agents offering tenant move-in/move-out services."},
  {day:18,week:3,cat:"Partners",priority:"High",title:"Contact 10 storage companies",details:"Send partnership email to 10 Birmingham storage facilities offering transport to/from units."},
  {day:19,week:3,cat:"Partners",priority:"Medium",title:"Contact 10 cleaning companies",details:"Send partnership email to 10 end-of-tenancy cleaning companies for joint referral packages."},
  {day:20,week:3,cat:"Partners",priority:"Medium",title:"Contact 10 furniture shops & student accommodations",details:"Send partnership email to local furniture retailers and Birmingham university accommodations."},
  {day:21,week:3,cat:"Partners",priority:"High",title:"Follow up with all partner replies",details:"Reply promptly via email (jimmyslogisticsandremovals@gmail.com) or phone (07404 353516)."},
  {day:21,week:3,cat:"Partners",priority:"Medium",title:"Save partner responses",details:"Record all responses and contact names in the partner tracker."},
  {day:21,week:3,cat:"Partners",priority:"High",title:"Mark backlink & referral opportunities",details:"Identify which partners can feature a website link or recommend page for Jimmys Removals."},
  {day:22,week:4,cat:"Blog",priority:"High",title:"Start blog: Moving House Checklist for Birmingham",details:"Write the first blog post targeting 'moving house checklist Birmingham' with local advice."},
  {day:23,week:4,cat:"Blog",priority:"High",title:"Add packing tips, moving timeline and parking advice",details:"Expand blog with van parking, council permits in Birmingham, and packing timelines."},
  {day:24,week:4,cat:"Blog",priority:"High",title:"Add internal links to Services, 24/7 Man & Van, and Quote pages",details:"Link from blog post to key pages on https://jimmysremovalsltd.co.uk/."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share blog on Google Business Profile",details:"Post the blog update on GBP with a 'Learn more' link."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share blog on Facebook",details:"Share the blog post on Facebook page to engage local followers."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share blog on Instagram & LinkedIn",details:"Post highlights on Instagram story/feed and share professional advice on LinkedIn."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share 24/7 key release delay tips",details:"Post practical advice on what to do if house keys are delayed on completion day."},
  {day:26,week:4,cat:"Blog",priority:"High",title:"Add internal links between homepage, services, areas, and blog",details:"Ensure strong internal linking structure across all website pages."},
  {day:27,week:4,cat:"Blog",priority:"Medium",title:"Send blog to local partners and ask to feature",details:"Email blog link to partner estate agents and storage companies to share on their resource pages."},
  {day:28,week:4,cat:"Search Console",priority:"High",title:"Check Google Search Console indexing",details:"Review Search Console for URL coverage and crawling issues.",link:"https://search.google.com/search-console"},
  {day:28,week:4,cat:"Search Console",priority:"High",title:"Request indexing for homepage, services, areas & blog",details:"Use URL Inspection tool to submit key URLs on jimmysremovalsltd.co.uk."},
  {day:28,week:4,cat:"Search Console",priority:"Medium",title:"Check sitemap status",details:"Verify sitemap https://jimmysremovalsltd.co.uk/sitemap.xml has processed with 0 errors."},
];

const MONTHLY_TASKS = [
  {cat:"Citations",priority:"Medium",title:"Add 5 new citations/directories",details:"Find and submit to 5 new UK business directories each month."},
  {cat:"GBP",priority:"Medium",title:"Upload 10 new GBP/social photos",details:"Upload 10 fresh photos of active moves, vans, packing, and Birmingham operations."},
  {cat:"Partners",priority:"Medium",title:"Contact 10 local Birmingham partners",details:"Reach out to 10 new estate agents, solicitors, or storage providers."},
  {cat:"Blog",priority:"High",title:"Publish 1 blog or Birmingham area guide",details:"Write and publish one new blog post or district guide (e.g. Sutton Coldfield, Solihull, Harborne)."},
  {cat:"Reviews",priority:"High",title:"Ask every customer for a Google Review",details:"Send Google review link to every customer immediately after their move."},
  {cat:"Search Console",priority:"High",title:"Check Google Search Console every Friday",details:"Review Search Console weekly for search queries, CTR, and indexing status.",link:"https://search.google.com/search-console"},
  {cat:"GBP",priority:"Medium",title:"Check GBP insights & reply to reviews every Friday",details:"Analyze calls, direction requests, and respond to all reviews within 24 hours."},
];

const DIRECTORIES = [
  {name:"Bing Places",url:"https://www.bingplaces.com/"},
  {name:"Apple Business Connect",url:"https://businessconnect.apple.com/"},
  {name:"Yell",url:"https://www.yell.com/free-listing/"},
  {name:"Yelp UK",url:"https://biz.yelp.com/"},
  {name:"FreeIndex",url:"https://www.freeindex.co.uk/"},
  {name:"Cylex UK",url:"https://www.cylex-uk.co.uk/add-company.html"},
  {name:"Scoot",url:"https://www.scoot.co.uk/add-listing"},
  {name:"192.com",url:"https://www.192.com/business/add/"},
  {name:"Hotfrog UK",url:"https://www.hotfrog.co.uk/add-your-business"},
  {name:"MyIndex",url:"https://www.myindex.co.uk/add-business"},
];

const GBP_SERVICES = [
  {name:"House Removals",desc:"Comprehensive residential house removals in Birmingham and the West Midlands. We handle packing, heavy lifting, loading, transport, and unloading with meticulous care."},
  {name:"24/7 Emergency & Same-Day Removals",desc:"Round-the-clock removals and urgent transport available 24 hours a day, 7 days a week for last-minute moves, completion delays, and key release emergencies."},
  {name:"Office Relocation & Commercial Moving",desc:"Efficient business and office removals across Birmingham and the UK. We safely relocate desks, chairs, IT equipment, archives, and warehouse stock to minimize operational downtime."},
  {name:"Furniture Removals & Single Items",desc:"Safe transport for sofas, wardrobes, beds, dining sets, appliances, and fragile antiques. Complete single item and multi-item moving service."},
  {name:"Logistics & Freight Transport",desc:"Reliable B2B logistics, pallet transport, scheduled parcel distribution, and dedicated delivery van solutions operating day and night across the Midlands."},
  {name:"Man and Van Service",desc:"Flexible, cost-effective man and van hire for small moves, flat clearances, student moves, and quick pickups across Birmingham."},
  {name:"Full & Partial Packing Services",desc:"Professional packing solutions using premium bubble wrap, heavy-duty boxes, tape, and protective furniture blankets for complete peace of mind."},
  {name:"Furniture Dismantling & Reassembly",desc:"Expert breakdown and rebuild service for flat-pack furniture, multi-door wardrobes, beds, and complex office desks."},
  {name:"Student Removals Birmingham",desc:"Affordable student moving service connecting university halls, student houses, and hometowns across the West Midlands and UK."},
  {name:"Flat & Apartment Moves",desc:"Specialized apartment removals handling tight stairwells, lift coordination, parking permits, and secure access across high-rise Birmingham properties."},
  {name:"Loading & Unloading Assistance",desc:"Skilled removals crew available to assist with professional van loading, unloading, and safe heavy lifting."},
  {name:"Furniture Wrapping & Heavy Protection",desc:"Export-grade protective wrapping for delicate furniture, mirrors, glass tables, and electronics to prevent any transit damage."},
];

const BLOG_ITEMS = [
  {title:"Moving House Checklist for Birmingham (2026)",keyword:"moving house checklist Birmingham"},
  {title:"What to Do When House Keys Are Delayed on Moving Day",keyword:"house keys delayed moving day"},
  {title:"Packing Tips for Moving House: Complete Room-by-Room Guide",keyword:"packing tips moving house"},
  {title:"Man and Van Birmingham: Cost, Booking & Practical Guide",keyword:"man and van Birmingham"},
  {title:"Office Relocation Checklist: How to Move Your Business Seamlessly",keyword:"office relocation checklist"},
  {title:"Student Removals Birmingham: Affordable University Moving Tips",keyword:"student removals Birmingham"},
];

const SC_CHECKLIST = [
  "Add domain property in Google Search Console",
  "Verify DNS TXT record for jimmysremovalsltd.co.uk",
  "Submit sitemap: https://jimmysremovalsltd.co.uk/sitemap.xml",
  "Inspect homepage (https://jimmysremovalsltd.co.uk/)",
  "Inspect services page",
  "Inspect areas covered page",
  "Inspect quote / contact page",
  "Inspect first published blog post",
  "Check sitemap processed successfully with 0 errors",
  "Review weekly Search Console performance, impressions & queries",
];

const GBP_CHECKLIST = [
  "Add primary website URL: https://jimmysremovalsltd.co.uk/",
  "Add quote / contact page as appointment link",
  "Set business name: Jimmys Removals and Logistics",
  "Set address: 66 Beaufort Avenue, Birmingham, West Midlands, B34 6AE",
  "Set phone number: 07404 353516",
  "Set operating hours: Open 24 hours, 7 days a week",
  "Add primary category: Moving company / Removals service",
  "Add secondary categories: Delivery service, Logistics service, Transportation service",
  "Add all 12 custom GBP services and descriptions",
  "Add Birmingham, Solihull, Sutton Coldfield and West Midlands service areas",
  "Upload business logo and cover banner",
  "Upload photos of removals vans and equipment",
  "Upload active move photos and careful packing in progress",
  "Post weekly Google Business updates with CTA button",
  "Send review link (WhatsApp/SMS/Email) to every customer after each move",
  "Reply to all customer reviews within 24 hours",
];

const BUSINESS = {
  name: "Jimmys Removals and Logistics",
  registeredName: "Jimmys Logistics and Removals Limited (trading as Jimmys Removals and Logistics)",
  companyNumber: "16876169",
  companyType: "Private Limited Company in England & Wales",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/16876169",
  website: "https://jimmysremovalsltd.co.uk/",
  phone: "07404 353516",
  email: "jimmyslogisticsandremovals@gmail.com",
  whatsapp: "https://wa.me/447404353516?text=Hello%20Jimmys%20Removals%2C%20I%20have%20an%20enquiry%20regarding%20a%20house%20move.",
  mapsUrl: "https://maps.app.goo.gl/ygPJdVe7PStKi1k1A",
  address: "66 Beaufort Avenue, Birmingham, West Midlands, B34 6AE",
  hours: "Open 24 hours, 7 days a week (Removals & deliveries arranged day or night)",
  category: "Removals company / Moving & Storage service / Logistics service",
  location: "Birmingham, West Midlands (B34 6AE)",
  services: "House Removals, Office Relocation, Commercial Removals, Furniture Removals, Packing Services, Man and Van, 24/7 Emergency Moves, Logistics & Deliveries, Student Removals",
  tagline: "We're Here to Help You Move. Have questions about van access, key release delays, or packing services? Contact our Birmingham operations desk directly.",
  description: "Jimmys Removals and Logistics (trading as Jimmys Logistics and Removals Limited, Co. No. 16876169) is a trusted 24/7 removals and logistics provider headquartered at 66 Beaufort Avenue, Birmingham, B34 6AE. We provide reliable house removals, furniture moving, office relocation, commercial transport, full packing services, man and van, and urgent deliveries arranged day or night across Birmingham and the West Midlands.",
};

const EMAIL_TEMPLATE = `Subject: Local removals and logistics partnership — Jimmys Removals

Hi,

I run Jimmys Removals and Logistics (Jimmys Logistics and Removals Limited), based at 66 Beaufort Avenue, Birmingham, B34 6AE. We operate 24 hours, 7 days a week across Birmingham and the West Midlands.

We assist clients with house removals, flat moves, furniture removals, office relocations, packing services, commercial transport, and rapid man and van services day or night.

I wanted to ask if you ever need a dependable, round-the-clock removals and transport partner for your customers or clients. We would also be delighted to recommend your business where relevant.

Business Details:
- Website: https://jimmysremovalsltd.co.uk/
- Direct Phone: 07404 353516
- WhatsApp: https://wa.me/447404353516
- Email: jimmyslogisticsandremovals@gmail.com
- Depot: 66 Beaufort Avenue, Birmingham, B34 6AE

Kind regards,
Jimmys Removals and Logistics
Jimmys Logistics and Removals Limited`;

const PARTNER_TYPES = [
  "Estate Agents","Letting Agents","Storage Companies","Cleaning Companies",
  "Furniture Shops","Student Accommodation","Office Fit-Out Companies",
  "Property Managers","Builders","Interior Designers"
];
