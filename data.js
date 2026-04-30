// Task data for 28-day SEO plan
const TASKS = [
  {day:1,week:1,cat:"Citations",priority:"High",title:"Add business to Bing Places",details:"Create listing on Bing Places with full business details.",link:"https://www.bingplaces.com/"},
  {day:1,week:1,cat:"Citations",priority:"High",title:"Add business to Apple Business Connect",details:"Create listing on Apple Business Connect.",link:"https://businessconnect.apple.com/"},
  {day:2,week:1,cat:"Citations",priority:"High",title:"Add business to Yell",details:"Create free listing on Yell directory.",link:"https://www.yell.com/free-listing/"},
  {day:2,week:1,cat:"Citations",priority:"High",title:"Add business to Yelp UK",details:"Create business profile on Yelp UK.",link:"https://biz.yelp.com/"},
  {day:3,week:1,cat:"Citations",priority:"High",title:"Add business to FreeIndex",details:"Create listing on FreeIndex directory.",link:"https://www.freeindex.co.uk/"},
  {day:3,week:1,cat:"Citations",priority:"High",title:"Add business to Cylex UK",details:"Add company to Cylex UK directory.",link:"https://www.cylex-uk.co.uk/add-company.html"},
  {day:4,week:1,cat:"Citations",priority:"Medium",title:"Add business to Scoot",details:"Create listing on Scoot directory.",link:"https://www.scoot.co.uk/add-listing"},
  {day:4,week:1,cat:"Citations",priority:"Medium",title:"Add business to 192.com",details:"Add business to 192.com directory.",link:"https://www.192.com/business/add/"},
  {day:5,week:1,cat:"Citations",priority:"Medium",title:"Add business to Hotfrog UK",details:"Create profile on Hotfrog UK.",link:"https://www.hotfrog.co.uk/add-your-business"},
  {day:5,week:1,cat:"Citations",priority:"Medium",title:"Add business to MyIndex",details:"Add business to MyIndex directory.",link:"https://www.myindex.co.uk/add-business"},
  {day:6,week:1,cat:"Citations",priority:"High",title:"Upload logo to all directory profiles",details:"Upload The Royals Removals logo to every directory listing."},
  {day:6,week:1,cat:"Citations",priority:"Medium",title:"Upload van and team photos",details:"Upload photos of moving van and team to directory profiles."},
  {day:6,week:1,cat:"Citations",priority:"High",title:"Add services to all profiles",details:"Add full service list to every directory listing."},
  {day:6,week:1,cat:"Citations",priority:"High",title:"Add business description to all profiles",details:"Add the standard business description to every directory."},
  {day:7,week:1,cat:"Citations",priority:"High",title:"Check business name consistency",details:"Verify 'The Royals Removals' is exactly the same on every listing."},
  {day:7,week:1,cat:"Citations",priority:"High",title:"Check phone number consistency",details:"Verify 07345 624506 is the same on every listing."},
  {day:7,week:1,cat:"Citations",priority:"High",title:"Check website URL consistency",details:"Verify https://www.theroyalsremovals.co.uk/ is the same on every listing."},
  {day:7,week:1,cat:"Citations",priority:"Medium",title:"Check category consistency",details:"Verify category is Removals company / Moving company on every listing."},
  {day:7,week:1,cat:"Citations",priority:"Medium",title:"Save all profile URLs",details:"Copy and save the URL of every directory profile for records."},
  {day:8,week:2,cat:"Social Profiles",priority:"High",title:"Create Facebook Business Page",details:"Set up Facebook Business Page for The Royals Removals.",link:"https://www.facebook.com/pages/create"},
  {day:8,week:2,cat:"Social Profiles",priority:"High",title:"Add website, phone, services and service areas to Facebook",details:"Complete all Facebook page details including website, phone, services and areas."},
  {day:8,week:2,cat:"Social Profiles",priority:"Medium",title:"Upload logo and cover photo to Facebook",details:"Upload logo as profile photo and a cover photo to Facebook page."},
  {day:9,week:2,cat:"Social Profiles",priority:"High",title:"Create Instagram profile",details:"Set up Instagram business profile for The Royals Removals.",link:"https://www.instagram.com/"},
  {day:9,week:2,cat:"Social Profiles",priority:"Medium",title:"Add website in Instagram bio",details:"Add website URL to Instagram bio."},
  {day:9,week:2,cat:"Social Profiles",priority:"Medium",title:"Add first 3 Instagram posts",details:"Upload 3 posts showcasing removals work."},
  {day:10,week:2,cat:"Social Profiles",priority:"High",title:"Create LinkedIn Company Page",details:"Set up LinkedIn company page.",link:"https://www.linkedin.com/company/setup/new/"},
  {day:10,week:2,cat:"Social Profiles",priority:"Medium",title:"Add business description and website to LinkedIn",details:"Complete LinkedIn page with description and website."},
  {day:10,week:2,cat:"Social Profiles",priority:"Medium",title:"Add service details to LinkedIn",details:"Add all services offered to LinkedIn page."},
  {day:11,week:2,cat:"Social Profiles",priority:"Low",title:"Create Pinterest account",details:"Set up Pinterest business account.",link:"https://www.pinterest.co.uk/"},
  {day:11,week:2,cat:"Social Profiles",priority:"Low",title:"Create Pinterest boards",details:"Create boards: Moving Tips, Packing Tips, Birmingham Removals."},
  {day:12,week:2,cat:"Social Profiles",priority:"Medium",title:"Create YouTube channel",details:"Set up YouTube channel for The Royals Removals.",link:"https://www.youtube.com/"},
  {day:12,week:2,cat:"Social Profiles",priority:"Medium",title:"Upload first short video to YouTube",details:"Upload a short video about removals services."},
  {day:12,week:2,cat:"Social Profiles",priority:"Medium",title:"Add website link to YouTube",details:"Add website URL to YouTube channel description."},
  {day:13,week:2,cat:"Social Profiles",priority:"Low",title:"Create TikTok profile",details:"Set up TikTok profile for The Royals Removals.",link:"https://www.tiktok.com/"},
  {day:13,week:2,cat:"Social Profiles",priority:"Low",title:"Upload first short moving clip to TikTok",details:"Upload a short moving clip to TikTok."},
  {day:13,week:2,cat:"Social Profiles",priority:"Low",title:"Add website link to TikTok if available",details:"Add website URL to TikTok bio if the option is available."},
  {day:14,week:2,cat:"Social Profiles",priority:"High",title:"Check all social profiles link back to website",details:"Verify every social profile has a working link to the website."},
  {day:14,week:2,cat:"Social Profiles",priority:"Medium",title:"Post website launch update",details:"Post an update on all social profiles about the website launch."},
  {day:15,week:3,cat:"Partners",priority:"High",title:"Make list of 50 local businesses",details:"Create a list of 50 local businesses to contact for partnerships."},
  {day:15,week:3,cat:"Partners",priority:"High",title:"Include estate agents, letting agents, storage companies, cleaners and furniture shops",details:"Make sure the list includes a variety of partner types."},
  {day:16,week:3,cat:"Partners",priority:"High",title:"Contact 10 estate agents",details:"Send partnership email to 10 estate agents in Birmingham."},
  {day:17,week:3,cat:"Partners",priority:"High",title:"Contact 10 letting agents",details:"Send partnership email to 10 letting agents in Birmingham."},
  {day:18,week:3,cat:"Partners",priority:"High",title:"Contact 10 storage companies",details:"Send partnership email to 10 storage companies in Birmingham."},
  {day:19,week:3,cat:"Partners",priority:"Medium",title:"Contact 10 cleaning companies",details:"Send partnership email to 10 cleaning companies in Birmingham."},
  {day:20,week:3,cat:"Partners",priority:"Medium",title:"Contact 10 furniture shops, student accommodation or office businesses",details:"Send partnership email to 10 additional local businesses."},
  {day:21,week:3,cat:"Partners",priority:"High",title:"Follow up with all replies",details:"Reply to everyone who responded to your partnership emails."},
  {day:21,week:3,cat:"Partners",priority:"Medium",title:"Save partner responses",details:"Record all responses in the partner tracker."},
  {day:21,week:3,cat:"Partners",priority:"High",title:"Mark backlink opportunities",details:"Identify which partners may provide a backlink."},
  {day:22,week:4,cat:"Blog",priority:"High",title:"Start blog: Moving House Checklist for Birmingham",details:"Write the first blog post targeting 'moving house checklist Birmingham'."},
  {day:23,week:4,cat:"Blog",priority:"High",title:"Add packing tips, moving timeline and Birmingham moving advice",details:"Expand the blog with useful packing tips and a moving timeline."},
  {day:24,week:4,cat:"Blog",priority:"High",title:"Add internal links to Services, Areas and Get a Quote pages",details:"Link from blog post to key pages on the website."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share blog on Google Business Profile",details:"Post the blog link on GBP."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share blog on Facebook",details:"Share the blog post on Facebook page."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share blog on Instagram",details:"Share the blog post on Instagram."},
  {day:25,week:4,cat:"Blog",priority:"Medium",title:"Share blog on LinkedIn",details:"Share the blog post on LinkedIn."},
  {day:26,week:4,cat:"Blog",priority:"High",title:"Add internal links between homepage, services, areas, blog and quote page",details:"Ensure strong internal linking across the website."},
  {day:27,week:4,cat:"Blog",priority:"Medium",title:"Send blog to local partners and ask if they can share it",details:"Email blog link to partner contacts."},
  {day:28,week:4,cat:"Search Console",priority:"High",title:"Check Google Search Console",details:"Review Search Console for any issues.",link:"https://search.google.com/search-console"},
  {day:28,week:4,cat:"Search Console",priority:"High",title:"Request indexing for homepage, services page, areas page and blog post",details:"Use URL Inspection tool to request indexing for key pages."},
  {day:28,week:4,cat:"Search Console",priority:"Medium",title:"Check sitemap status",details:"Verify sitemap has been submitted and processed successfully."},
];

const MONTHLY_TASKS = [
  {cat:"Citations",priority:"Medium",title:"Add 5 new citations/directories",details:"Find and submit to 5 new business directories each month."},
  {cat:"GBP",priority:"Medium",title:"Upload 10 new GBP/social photos",details:"Upload 10 fresh photos to Google Business Profile and social media."},
  {cat:"Partners",priority:"Medium",title:"Contact 10 local partners",details:"Reach out to 10 new local businesses for partnership opportunities."},
  {cat:"Blog",priority:"High",title:"Publish 1 blog or area guide",details:"Write and publish one new blog post or area guide each month."},
  {cat:"Reviews",priority:"High",title:"Ask every customer for Google review",details:"Request a Google review from every customer after their move."},
  {cat:"Search Console",priority:"High",title:"Check Google Search Console every Friday",details:"Review Search Console weekly for indexing issues and performance.",link:"https://search.google.com/search-console"},
  {cat:"GBP",priority:"Medium",title:"Check GBP performance every Friday",details:"Review Google Business Profile insights and performance weekly."},
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
  {name:"House Removals",desc:"Professional house removals in Birmingham and the West Midlands. We handle packing, loading, transport and unloading with care."},
  {name:"Furniture Removals",desc:"Safe furniture removals for sofas, beds, wardrobes, tables and fragile items. We move single items or full home furniture."},
  {name:"Office Relocation",desc:"Reliable office relocation for desks, chairs, IT equipment and business items, planned to reduce downtime."},
  {name:"Commercial Removals",desc:"Commercial removals for shops, offices, warehouses and business premises across Birmingham and nearby areas."},
  {name:"Packing Services",desc:"Full and partial packing services using safe materials to protect your belongings before moving day."},
  {name:"Man and Van",desc:"Flexible man and van service for small moves, single items, student moves and local deliveries."},
  {name:"Equipment Removals",desc:"Careful removals for heavy, oversized or delicate equipment, including business and specialist items."},
  {name:"Student Removals",desc:"Affordable student removals for university moves, student houses and small loads."},
  {name:"Flat Moves",desc:"Simple flat removals for apartments, small homes and rented properties across Birmingham and nearby areas."},
  {name:"Same-Day Removals",desc:"Same-day removals for urgent local moves, small moves and last-minute transport when available."},
  {name:"Dismantling and Reassembly",desc:"Dismantling and reassembly support for beds, wardrobes, desks and large furniture during your move."},
  {name:"Loading and Unloading",desc:"Careful loading and unloading service to move items safely into and out of the removals van."},
  {name:"Single Item Delivery",desc:"Single item delivery for sofas, beds, wardrobes, appliances and other large items."},
  {name:"Furniture Wrapping",desc:"Furniture protection and wrapping to help keep items safe during loading, transport and unloading."},
];

const BLOG_ITEMS = [
  {title:"Moving House Checklist for Birmingham",keyword:"moving house checklist Birmingham"},
  {title:"Packing Tips for Moving House",keyword:"packing tips moving house"},
  {title:"Man and Van Birmingham Guide",keyword:"man and van Birmingham"},
  {title:"House Removals Birmingham Guide",keyword:"house removals Birmingham"},
  {title:"Office Relocation Checklist",keyword:"office relocation checklist"},
  {title:"Student Removals Birmingham Guide",keyword:"student removals Birmingham"},
];

const SC_CHECKLIST = [
  "Add domain property",
  "Verify DNS TXT record",
  "Submit sitemap: https://www.theroyalsremovals.co.uk/sitemap.xml",
  "Inspect homepage",
  "Inspect services page",
  "Inspect areas page",
  "Inspect quote page",
  "Inspect first blog post",
  "Check sitemap success",
  "Check indexing report weekly",
];

const GBP_CHECKLIST = [
  "Add website URL",
  "Add quote page as appointment link",
  "Add services",
  "Add descriptions",
  "Add service areas",
  "Upload logo",
  "Upload cover photo",
  "Upload van photos",
  "Upload team photos",
  "Upload packing photos",
  "Post weekly update",
  "Ask customers for reviews",
  "Reply to reviews",
];

const BUSINESS = {
  name: "The Royals Removals",
  website: "https://www.theroyalsremovals.co.uk/",
  phone: "07345 624506",
  category: "Removals company / Moving company",
  location: "Birmingham, West Midlands",
  services: "House Removals, Furniture Removals, Office Relocation, Commercial Removals, Packing Services, Man and Van, Equipment Removals, Student Removals",
  description: "The Royals Removals is a trusted removals company serving Birmingham and the West Midlands. We provide house removals, furniture removals, office relocation, commercial removals, packing services, man and van, equipment removals and student removals. Our team offers careful handling, secure transport and reliable service from start to finish.",
};

const EMAIL_TEMPLATE = `Subject: Local removals partnership

Hi,

I run The Royals Removals, a Birmingham and West Midlands removals company.

We help with house removals, flat moves, furniture removals, office relocation, packing services and man and van jobs.

I wanted to ask if you ever need a reliable removals partner for your customers. We would also be happy to recommend your business where relevant.

Website: https://www.theroyalsremovals.co.uk/

Kind regards,
The Royals Removals`;

const PARTNER_TYPES = [
  "Estate Agents","Letting Agents","Storage Companies","Cleaning Companies",
  "Furniture Shops","Student Accommodation","Office Fit-Out Companies",
  "Property Managers","Builders","Interior Designers"
];
