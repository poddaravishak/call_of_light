import type { Author, Post, SiteConfig } from "@/lib/types";

export const demoSiteConfig: SiteConfig = {
  id: "demo-site",
  site_name: "The Call of Light",
  site_tagline: "Stories that breathe in silence.",
  hero_title: "Stories that breathe in silence.",
  hero_tagline: "A quiet journal — est. 2025",
  hero_description:
    "A slow gallery of fiction, poetry, and essay. Read at the pace of a Nordic morning — unhurried, reverent, near-silent.",
  hero_bg_image:
    "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=2400&q=80",
};

export const demoAuthors: Author[] = [
  {
    id: "author-eivor",
    slug: "eivor-halden",
    name: "Eivor Halden",
    tagline: "Essayist. Keeper of small hours.",
    bio: "Eivor writes from a stone cottage in the fjords of Sognefjorden, where the light arrives late and leaves softly. Her essays are concerned with absence, with weather, and with the quiet furniture of domestic life.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    website: "https://example.com",
  },
  {
    id: "author-mira",
    slug: "mira-tovesdotter",
    name: "Mira Tovesdotter",
    tagline: "Poet. Photographer of thresholds.",
    bio: "Mira's work moves between verse and image — rooms half-lit, frost on window glass, the moment a kettle begins to sing. She teaches a winter workshop in Gotland each February.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    website: null,
  },
  {
    id: "author-august",
    slug: "august-reinholt",
    name: "August Reinholt",
    tagline: "Fiction. The hour before dawn.",
    bio: "August writes short fiction rooted in Danish coastal towns. His stories tend to begin with a door left open and end with someone listening for a sound that does not come.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    twitter: null,
    instagram: "https://instagram.com/",
    website: "https://example.com",
  },
  {
    id: "author-lena",
    slug: "lena-volkov",
    name: "Lena Volkov",
    tagline: "Photographic essays. Fog and stone.",
    bio: "Lena is a Berlin-based photographer whose long-form photographic essays document vanishing industrial architecture across northern Europe. Her work has appeared in quiet places.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    twitter: "https://twitter.com/",
    instagram: null,
    website: "https://example.com",
  },
];

const BODY_LAST_LAMP = `
<p>The house kept one lamp burning through October, and then through November, and by the time December arrived we had stopped pretending it was a habit. It was a devotion. My grandmother lit it at four, before the window turned dark, and she kept it lit until she went to bed, which was not a fixed hour, but an agreement between her and the room.</p>

<p>I remember asking her, once, why we did not turn it off when we left the house. She looked at me with the particular patience reserved for a child who has asked a question with an obvious answer, and said, <em>so the house knows we're coming back</em>.</p>

<h2>A room is a promise</h2>

<p>I have kept the lamp. It is older now than I am, and its brass is the color of slow tea. It does not illuminate very much — a chair, the edge of a book, the shape of my own hand — but I have come to think that illumination was never quite the point.</p>

<blockquote>The point was that the room should never be entirely alone.</blockquote>

<p>When my grandmother died, the lamp was unplugged for three days. The house felt, during those days, as though it had taken a small step backward. When I plugged it in again I did not turn it off for a week.</p>

<h2>What the light does not explain</h2>

<p>There is a theory I have been turning over for some years, which is that the objects we keep are not quite objects. They are a kind of slow language, spoken across generations, whose grammar we have mostly forgotten and whose sentences we still occasionally complete.</p>

<p>The lamp, by this theory, is not a lamp. It is a sentence my grandmother began, and which I am still, quietly, in the habit of finishing.</p>
`;

const BODY_LETTER_FROM_THAW = `
<p>Today the ice along the fence-line let go, all at once, in a sound like a book being closed in another room. I walked out to see. The dog came with me and did not bark, which is rare, and which I took as a kind of agreement.</p>

<p>I have been trying, this winter, to write a poem about absence, and I have been failing in the particular way that tells me I am asking the wrong question of it. You cannot describe a room that is empty. You can only describe the shape of the thing that is missing from it.</p>

<blockquote>The thaw is not the end of winter. It is winter telling a story about itself.</blockquote>

<p>I am sending this letter because the thaw made me want to tell someone, and because you have always been, in my mind, the sort of person to whom one sends weather reports.</p>

<p>With love, and with the first birds of February,</p>
<p>— M.</p>
`;

const BODY_ON_SILENCE = `
<p>My grandfather, who built boats, used to say that silence was a room you furnished, not a room you entered. This struck me as a strange claim when I was twelve. It strikes me, now, as the most accurate description of silence I have ever been given.</p>

<h2>The furnishings</h2>

<p>A clock, ticking in another room. The soft settle of a house adjusting to its own weight. The breath of someone asleep beside you. The distant, patient complaint of a radiator. The sound of your own attention, which is not quite a sound.</p>

<p>Silence, in other words, is almost never silent. It is a particular arrangement of quiet things — a composition, if you like, of withdrawals. A room without any sound at all is not silent. It is deafening, and after a while, unkind.</p>

<blockquote>True silence is company. It is the version of company in which nothing is being asked of you.</blockquote>

<h2>A practice</h2>

<p>I have been learning, slowly, to furnish silence the way my grandfather furnished it. A chair by the window. A book I am not reading. A lamp that is on for no particular reason. The kettle, cooling.</p>

<p>The rooms I like best, now, are the ones that know how to be quiet without becoming empty.</p>
`;

export const demoPosts: Post[] = [
  {
    id: "post-1",
    slug: "the-last-lamp",
    title: "The Last Lamp",
    excerpt:
      "The house kept one lamp burning through October, and then through November — so the house would know we were coming back.",
    cover_image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html: BODY_LAST_LAMP,
    tags: ["Fiction", "Memory"],
    featured: true,
    language: "English",
    status: "published",
    published_at: "2026-03-14T08:00:00Z",
    read_time: 6,
    seo_description:
      "A short story about grief, devotion, and a single lamp kept burning through a long Nordic winter.",
    author_id: "author-eivor",
    authors: demoAuthors[0],
  },
  {
    id: "post-2",
    slug: "a-letter-from-the-thaw",
    title: "A Letter from the Thaw",
    excerpt:
      "Today the ice along the fence-line let go, all at once, in a sound like a book being closed in another room.",
    cover_image:
      "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html: BODY_LETTER_FROM_THAW,
    tags: ["Essay", "Nature"],
    featured: true,
    language: "English",
    status: "published",
    published_at: "2026-02-27T09:30:00Z",
    read_time: 4,
    seo_description:
      "A letter written to a distant friend on the first day of thaw.",
    author_id: "author-mira",
    authors: demoAuthors[1],
  },
  {
    id: "post-3",
    slug: "on-silence-and-other-furnishings",
    title: "On Silence, and Other Furnishings",
    excerpt:
      "My grandfather, who built boats, used to say that silence was a room you furnished, not a room you entered.",
    cover_image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html: BODY_ON_SILENCE,
    tags: ["Essay", "Craft"],
    featured: true,
    language: "Bengali",
    status: "published",
    published_at: "2026-02-11T07:45:00Z",
    read_time: 7,
    seo_description:
      "An essay on silence as a made thing — a room to be furnished, not entered.",
    author_id: "author-august",
    authors: demoAuthors[2],
  },
  {
    id: "post-4",
    slug: "the-cartographers-regret",
    title: "The Cartographer's Regret",
    excerpt:
      "He drew the coastline as it was, not as it had been promised, and for this the village never quite forgave him.",
    cover_image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html:
      "<p>He drew the coastline as it was, not as it had been promised, and for this the village never quite forgave him.</p><p>Years later, when the sea had taken three of the houses he had mapped, they returned to his doorstep with a bottle of something dark and a small, embarrassed apology that did not name itself as one.</p><p>He accepted both, and said nothing, and poured.</p>",
    tags: ["Fiction"],
    language: "English",
    status: "published",
    published_at: "2026-01-30T10:15:00Z",
    read_time: 5,
    seo_description:
      "A short story about a village cartographer and the coastline that refused to stay still.",
    author_id: "author-august",
    authors: demoAuthors[2],
  },
  {
    id: "post-5",
    slug: "stone-and-the-hour-before-dawn",
    title: "Stone, and the Hour Before Dawn",
    excerpt:
      "A sequence of seven short poems, written at the kitchen table, in the year I learned to sit with not-knowing.",
    cover_image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html:
      "<p><em>I.</em><br/>The kettle knows.<br/>The kettle has always known.<br/>It is kind enough not to say.</p><p><em>II.</em><br/>Stone is patient weather.<br/>Weather is impatient stone.<br/>Between them, a life.</p><p><em>III.</em><br/>I woke at four.<br/>The house was listening<br/>to something I could not hear.</p>",
    tags: ["Poetry"],
    language: "English",
    status: "published",
    published_at: "2026-01-18T06:00:00Z",
    read_time: 3,
    seo_description: "Seven short poems for the hour before dawn.",
    author_id: "author-mira",
    authors: demoAuthors[1],
  },
  {
    id: "post-6",
    slug: "what-the-fog-keeps",
    title: "What the Fog Keeps",
    excerpt:
      "A photographic essay on abandoned shipyards along the Baltic, where the fog arrives each morning like a curator.",
    cover_image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html:
      "<p>A photographic essay on abandoned shipyards along the Baltic, where the fog arrives each morning like a curator, takes its time with the exhibits, and leaves again before the first ferry.</p><p>I have photographed the same cranes for eleven years. They are no closer to falling. They are no closer to being used.</p><blockquote>The fog keeps them. The fog keeps everything, for a little while.</blockquote>",
    tags: ["Photography", "Essay"],
    language: "French",
    status: "published",
    published_at: "2025-12-29T11:00:00Z",
    read_time: 8,
    seo_description:
      "A photographic essay on Baltic shipyards and the fog that attends them.",
    author_id: "author-lena",
    authors: demoAuthors[3],
  },
  {
    id: "post-7",
    slug: "a-small-inventory-of-winters",
    title: "A Small Inventory of Winters",
    excerpt:
      "An accounting of the winters I have known — the kind that did not pass cleanly, and the kind that did.",
    cover_image:
      "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html:
      "<p>An accounting of the winters I have known — the kind that did not pass cleanly, and the kind that did.</p><p>There was the winter of the second illness, and the winter the pipes froze, and the winter I read nothing and wrote nothing and was, for a quiet three months, nearly happy.</p><p>They are not ranked. A life is not a ranking.</p>",
    tags: ["Essay", "Memory"],
    language: "Bengali",
    status: "published",
    published_at: "2025-12-12T08:00:00Z",
    read_time: 5,
    seo_description:
      "A quiet accounting of winters, illness, pipes, and near-happiness.",
    author_id: "author-eivor",
    authors: demoAuthors[0],
  },
  {
    id: "post-8",
    slug: "the-room-that-holds-a-year",
    title: "The Room That Holds a Year",
    excerpt:
      "She kept the room exactly as it had been, which is not the same thing as keeping it the same.",
    cover_image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    body: null,
    body_html:
      "<p>She kept the room exactly as it had been, which is not the same thing as keeping it the same. The light moved. The dust settled differently on the piano than it had settled on the piano a year ago. The room was a year older. It was not the same room.</p><p>But she kept it, and in keeping it, kept something else.</p>",
    tags: ["Fiction"],
    language: "English",
    status: "published",
    published_at: "2025-11-24T09:00:00Z",
    read_time: 4,
    seo_description:
      "A short story about preservation, rooms, and the impossibility of stillness.",
    author_id: "author-eivor",
    authors: demoAuthors[0],
  },
];

export const DEMO_TAGS = [
  "All",
  "Fiction",
  "Poetry",
  "Essay",
  "Photography",
  "Memory",
];
