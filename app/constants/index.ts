// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  // { href: "/portfolio", key: "portfolio", label: "Portfolio" },
  { href: "/experience", key: "experience ", label: "Experience " },
];

// HOME SECTION
export const BIO = {
  p1: "As a Solutions Engineer, I specialize in orchestrating the end-to-end customer journey, delivering a seamless user experience that fosters client satisfaction and loyalty. I excel at cultivating strong, trusting relationships with clients, ensuring their confidence in our company and its solutions.",
  p2: "Before transitioning to robotics, I held roles in software development and product design, where I developed a passion for creating easy-to-use software and optimizing the user experience.",
  quote:
    "“If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.”—Zig Ziglar.",
};

// ABOUT SECTION
export const ABOUT = {
  intro:
    "Exploring a vast amount of interests is where I find my joy. Here are just a few of them.",
  hiking: {
    first:
      "In 2020, the pandemic led me down an unexpected path – I began hiking. Surprisingly, I wasn't particularly outdoorsy at the time, and the idea of hiking had never piqued my interest. However, a turning point came when a friend invited me to join them for a hike up Heart Mountain in the Kananaskis/Canmore area. It was a challenging hike, taking around 6.5 hours, and it turned out to be a transformative experience.",
    second:
      "After this hike, I became completely hooked. On the same evening, my friend and I committed to tackling the Canmore Triple Crown. This challenge within the hiking community requires completing the three most popular hikes in Canmore in a single day. Just over a month after my second-ever hike, I, along with two friends, successfully accomplished the Canmore Triple Crown in a demanding 8.5-hour expedition. It was easily the most difficult thing I've ever done, and the mental fortitude gained from this endeavor made it profoundly rewarding. In that year alone, I completed 19 different trails in just four months, solidifying hiking as an integral part of my life.",
  },
  healthWellness: {
    first:
      "This field continually captivates my curiosity and fuels an ongoing journey of learning. It all began in 2015 when I delved into the realm of weight lifting, swiftly discovering my passion for the intricate art of bodybuilding. What initially started with fundamental knowledge on resistance training evolved into a relentless pursuit of understanding and expertise.",
    second:
      "From resolving common health issues to healing from injuries on your own, learning about the topics in this space has proven immensely valuable for enhancing one's quality of life.",
    third:
      "The wealth of information available on platforms like YouTube, podcasts, and eBooks, has made the learning process not only enriching but also thoroughly enjoyable. For those seeking valuable resources, I highly recommend exploring the curated content in the button below, as it offers a gateway to a wealth of knowledge in this captivating domain. The content will lead you to podcast episodes and YouTube pages.",
  },
  moviesShows: {
    first:
      "Once you finish watching something, you’re onto the next. This is just how things go for me and has led me to viewing 2,700+ titles. Ever since I created an IMDB account, I found myself constantly hunting down different titles that interested me. In the past, my watch list was monumental, but having experienced all the movies and shows that ever intrigued me has provided a sense of fulfillment.",
    second:
      "What fuels my deep love for movies and shows? It's rooted in the emotions they evoke. The sentiments expressed through these media forms hold profound significance for me. Christopher Nolan stands out as a director who has touched my soul like no other. His unique film style, coupled with the consistently sensational soundtracks, transforms each viewing into a delightful experience.",
    third:
      "Check out the buttons below to discover the titles I absolutely adore.",
  },
};

export const HIKING_PICS = [
  {
    id: 1,
    label: "Mount Temple",
    file: "/temple.svg",
  },
  {
    id: 2,
    label: "Mount Rundle",
    file: "/rundle.svg",
  },
  {
    id: 3,
    label: "Cascade Mountain",
    file: "/cascade.svg",
  },
];

export const MODALS = {
  hiking: [
    {
      label: "Mount Temple",
      href: "https://www.alltrails.com/trail/canada/alberta/mount-temple",
    },
    {
      label: "Cirque Peak",
      href: "https://www.alltrails.com/trail/canada/alberta/cirque-peak-via-helen-lake-trail",
    },
    {
      label: "Akamina Pass",
      href: "https://www.alltrails.com/trail/canada/alberta/akamina-pass-and-wall-and-forum-lake-trail",
    },
    {
      label: "East End of Rundle",
      href: "https://www.alltrails.com/trail/canada/alberta/east-end-of-rundle-eeor",
    },
    {
      label: "Mount Yamnuska",
      href: "https://www.alltrails.com/trail/canada/alberta/mount-yamnuska-traverse-and-west-col-descent",
    },
    {
      label: "Tent Ridge Horseshoe",
      href: "https://www.alltrails.com/trail/canada/alberta/tent-ridge-horseshoe",
    },
    {
      label: "Wasootch Peak",
      href: "https://www.alltrails.com/trail/canada/alberta/wasootch-peak?search=true",
    },
    {
      label: "Devil's Thumb",
      href: "https://www.alltrails.com/trail/canada/alberta/devils-thumb-via-lake-agnes-trail",
    },
    {
      label: "Mount Rundle",
      href: "https://www.alltrails.com/trail/canada/alberta/mount-rundle-summit-trail",
    },
    {
      label: "Cascade Mountain",
      href: "https://www.alltrails.com/trail/canada/alberta/cascade-mountain--2",
    },
  ],
  movies: [
    "Interstellar",
    "Inception",
    "The Dark Knight Rises",
    "The Dark Knight",
    "Inglourious Basterds",
    "The Wolf of Wall Street",
    "The Shawshank Redemption",
    "Joker",
    "Nightcrawler",
    "The Curious Case of Benjamin Button",
  ],
  tv_shows: [
    "Breaking Bad",
    "Peaky Blinders",
    "Mr. Robot",
    "Trailer Park Boys",
    "Daredevil",
    "The Wire",
    "Silicon Valley",
    "The Office",
    "The Inbetweeners",
    "Game of Thrones",
  ],
  health_resources: [
    {
      label: "James Nestor (Breathing)",
      href: "https://open.spotify.com/episode/58Drs6tKeuq82hMTbcDC0G?si=3ff3d09d9b224f3e",
    },
    {
      label: "Andrew Huberman (Neuroscience)",
      href: "https://open.spotify.com/episode/1HnJSVAxlfZVREkojSJ39c?si=390398a4dcba486e",
    },
    {
      label: "David Goggins (Mindset)",
      href: "https://open.spotify.com/episode/70ssh8DCCOlwwOEAjLobW3?si=49Vg_RthSGKDyao-GwsAHA",
    },
    {
      label: "Peter Attia (Longevity)",
      href: "https://open.spotify.com/episode/5DuxGhOJSa7X0AKvJGwwta?si=XVJf6fjoRhC6560HLVBXBg",
    },
    {
      label: "Ben Patrick (Fitness)",
      href: "https://www.youtube.com/@TheKneesovertoesguy",
    },
    {
      label: "Jeff Cavaliere (Fitness)",
      href: "https://www.youtube.com/@athleanx",
    },
    {
      label: "Naval Ravikant (Mindset)",
      href: "https://open.spotify.com/episode/3ijkVfaht5kcFPvHcCbYYD?si=bpiCLKL6QR6DtE9y7rCyCw",
    },
    {
      label: "Matthew Walker (Sleep)",
      href: "https://open.spotify.com/episode/4KNsmuCgX6lz8GE2J3393Y?si=z724P8-rRuuw2sqAOJB29w",
    },
    {
      label: "Dr. Eric Berg (Nutrition)",
      href: "https://www.youtube.com/@DrEricBergDC",
    },
    {
      label: "Paul Saladino (Nutrition)",
      href: "https://open.spotify.com/episode/38aFwbmJSYCezCcAVHbWk0?si=yUcX4OCdTp6kV7yOFey_pA",
    },
  ],
};

// PORTFOLIO SECTION
export const PORTFOLIO = {
  intro: "(Coming Soon)",
  portfolio: {
    first: "",
  },
};

// EXPERIENCE SECTION
export const EXPERIENCE = {
  symbotic: {
    first:
      "Developed detailed product roadmaps using Agile methodologies to streamline development processes, resulting in increased team efficiency",
    second:
      "Orchestrated the end-to-end customer journey for the telehealth robotics team, resulting in outstanding customer reviews",
    third:
      "Leveraging Figma and UI/UX design principles, I effectively designed new features that enhanced the user experience, reducing support tickets by 30%",
  },
  freelance: {
    first:
      "Led comprehensive efforts encompassing research, user story development, wireframing, prototyping, and design for the mobile view of an Event Registration app",
    second:
      "Partnered with developers to validate workflows to promote alignment across the project",
  },
  ohmniLabs: {
    first:
      "Led our robotics trial programs and delivered compelling product demos to prospective stakeholders, resulting in revenue generation exceeding $1,000,000",
    second:
      "Managed the customer journey from onboarding, product adoption, and expansion which resulted in over $300,000 in expansion revenue within one year",
    third:
      "Delivered exceptional customer support, building strong, long-term relationships and achieving a 100% customer retention rate",
    fourth:
      "Engaged in research, design, and prototyping of new software features to develop a more seamless user experience, garnering an abundance of positive client feedback",
    fifth:
      "Created a comprehensive array of content, encompassing documents, photos, and videos to streamline and enhance the support and training process",
  },
  simplyAsk: {
    first:
      "Integrated AI chatbot APIs to streamline customer service requests, enhancing efficiency and ensuring timely responses to client inquiries",
    second:
      "Engineered frontend solutions using React.js to introduce software features, thereby amplifying runtime efficiency and elevating the user experience",
    third:
      "Executed code reviews and conducted comprehensive functionality tests for software features, ensuring seamless and successful deployments",
  },
};
