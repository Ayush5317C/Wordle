//Global Variables
let guessInput = document.querySelector(".guessHere");
let letterBoxContainer = document.querySelector(".letterBoxContainer");
let chanceLeftEl = document.querySelector("#chanceLeft");
let descriptionEl = document.querySelector("#description");
let bestRes = document.querySelector(".bestResult");
let wordleGame = document.querySelector(".wordleGame");
let resultMenu = document.querySelector(".resultMenu");
let resultStatus = document.querySelector(".resultStatus");
let realWordEl = document.querySelector(".realWord");
let resultImg = document.querySelector(".resultImg");
let restart = document.querySelector(".restart i");
let submit = document.querySelector(".submit");
let menuIcon = document.querySelector(".menuIcon i");
let menuBox = document.querySelector(".wordSizeMenu");
let levels = document.querySelectorAll(".levels");
let previousActive = document.querySelector(".activeLevel");
let currentScore = document.querySelector(".currentScore");
let highscore = document.querySelector(".highscore");
let spans;
let hasNotifiedAboutRules = false;
//words starts
const threeSizeWords = [
  { word: "aba", description: "A type of garment often worn by women" },
  { word: "abs", description: "Short for abdominal muscles" },
  { word: "ace", description: "A playing card with a single spot on it" },
  {
    word: "act",
    description: "To perform a particular action or behave in a certain way",
  },
  {
    word: "add",
    description: "To combine or join two or more things together",
  },
  { word: "ado", description: "Fuss or commotion about something trivial" },
  {
    word: "aft",
    description: "Towards the back or stern of a ship or aircraft",
  },
  {
    word: "age",
    description: "The length of time that a person or thing has existed",
  },
  { word: "ago", description: "In the past; before now" },
  { word: "ban", description: "Officially or legally prohibit something" },
  { word: "bar", description: "A place where alcoholic drinks are served" },
  {
    word: "bat",
    description: "A nocturnal flying mammal capable of echolocation",
  },
  { word: "bay", description: "A body of water partly enclosed by land" },
  { word: "bed", description: "A piece of furniture for sleeping or resting" },
  { word: "bee", description: "A flying insect known for producing honey" },
  { word: "dry", description: "Free from moisture or liquid" },
  {
    word: "dub",
    description: "To give a name or nickname to someone or something",
  },
  { word: "due", description: "Owed or owing as a debt or right" },
  {
    word: "dug",
    description: "Past tense of 'dig,' meaning to excavate or create a hole",
  },
  { word: "dun", description: "A dull grayish-brown color" },
  { word: "duo", description: "A pair of two people or things" },
  {
    word: "fly",
    description: "To move through the air with wings, like a bird or insect",
  },
  { word: "foe", description: "An enemy or opponent in a conflict" },
  {
    word: "fog",
    description: "A thick cloud of tiny water droplets near the ground",
  },
  { word: "for", description: "In favor of; supporting a cause or idea" },
  {
    word: "fox",
    description: "A small carnivorous mammal known for its cunning nature",
  },
  { word: "fry", description: "To cook food in hot oil or fat" },
  { word: "may", description: "Expressing possibility or permission" },
  {
    word: "med",
    description: "Short for 'medical,' related to healthcare or medicine",
  },
  {
    word: "meg",
    description: "Short for 'megabyte,' a unit of digital information",
  },
  {
    word: "men",
    description: "Plural of 'man,' referring to multiple male individuals",
  },
  {
    word: "Met",
    description: "Past tense of 'meet,' having encountered someone",
  },
  { word: "mid", description: "In the middle or center of something" },
  {
    word: "nap",
    description: "A short period of sleep, often during the day",
  },
  { word: "nay", description: "A negative response or denial" },
  {
    word: "neb",
    description: "Short for 'nebula,' a cloud of gas and dust in space",
  },
  {
    word: "neg",
    description: "Short for 'negative,' expressing denial or disagreement",
  },
  {
    word: "net",
    description: "A mesh fabric or a remaining amount after deductions",
  },
  { word: "new", description: "Recently made, invented, or discovered" },
  { word: "nil", description: "Nothing; zero; non-existent" },
  { word: "nip", description: "To give a small bite or pinch with the teeth" },
  {
    word: "nod",
    description:
      "To move the head up and down as a sign of agreement or greeting",
  },
  { word: "sea", description: "A large body of saltwater" },
  { word: "sec", description: "Short for 'second,' a unit of time" },
  {
    word: "see",
    description: "To perceive with the eyes; to observe or notice",
  },
  {
    word: "sen",
    description: "Short for 'senate,' a legislative body in certain countries",
  },
  {
    word: "set",
    description: "A group of items that belong together or a fixed collection",
  },
  {
    word: "sew",
    description: "To join fabric or materials with a needle and thread",
  },
  {
    word: "sex",
    description: "The biological distinction between male and female",
  },
  { word: "she", description: "A female person or animal" },
  { word: "shy", description: "To be timid or reserved in social situations" },
  {
    word: "tat",
    description: "Short for 'tattoo,' a permanent design on the skin",
  },
  {
    word: "tax",
    description:
      "A fee imposed by the government on income, goods, or services",
  },
  {
    word: "tea",
    description: "A popular hot beverage made from steeped tea leaves",
  },
  {
    word: "ted",
    description: "Past tense of 'ted,' meaning to spread or turn over grass",
  },
  {
    word: "tee",
    description: "A small peg used to support a golf ball on the ground",
  },
  { word: "ten", description: "The number following nine" },
  { word: "the", description: "A definite article used to specify nouns" },
  {
    word: "thy",
    description: "An archaic form of 'your,' possessive pronoun",
  },
  {
    word: "tie",
    description: "A strip of material used to fasten or secure something",
  },
  {
    word: "tin",
    description: "A soft, silver-white metal with the symbol 'Sn'",
  },
  {
    word: "tip",
    description: "A helpful hint or a gratuity given for service",
  },
  { word: "tod", description: "A small fox" },
  { word: "yes", description: "An affirmative response or agreement" },
  { word: "yet", description: "Until now; up to the present time" },
  {
    word: "you",
    description: "Used to refer to the person or people being spoken to",
  },
  { word: "zip", description: "To fasten or close with a zipper" },
  {
    word: "zoo",
    description: "A place where live animals are exhibited to the public",
  },
];
const fourSizeWords = [
  {
    word: "able",
    description: "Having the skill, power, or capacity to do something",
  },
  {
    word: "acid",
    description:
      "A chemical substance that has a pH lower than 7 and can be sour or corrosive",
  },
  {
    word: "aged",
    description:
      "Having reached a certain age, usually associated with being older or mature",
  },
  { word: "also", description: "In addition; as well; too" },
  {
    word: "area",
    description: "A specific geographic region or expanse of space",
  },
  {
    word: "army",
    description:
      "A large organized military force, typically trained for warfare",
  },
  {
    word: "away",
    description: "At a distance from a particular place or person",
  },
  { word: "baby", description: "A very young child; an infant" },
  {
    word: "back",
    description: "The rear surface of something; opposite of front",
  },
  {
    word: "ball",
    description: "A spherical object used in various sports and games",
  },
  {
    word: "band",
    description: "A group of musicians playing instruments together",
  },
  {
    word: "bank",
    description:
      "An institution that offers financial services and holds deposits",
  },
  {
    word: "base",
    description: "The foundation or starting point of something",
  },
  {
    word: "bath",
    description: "The act of washing the body in a tub or container of water",
  },
  {
    word: "bear",
    description:
      "A large mammal with thick fur and a distinctive hump; or, to carry or support the weight of something",
  },
  {
    word: "came",
    description: "Past tense of 'come,' to move towards or arrive at a place",
  },
  {
    word: "camp",
    description: "A place where people live temporarily, often in tents",
  },
  {
    word: "card",
    description:
      "A piece of stiff paper used for various purposes, like playing games or identification",
  },
  {
    word: "care",
    description: "To feel concern or interest for someone or something",
  },
  {
    word: "case",
    description: "A particular situation or example of something",
  },
  { word: "cash", description: "Money in the form of coins or banknotes" },
  {
    word: "cast",
    description:
      "To throw something forcefully; or, a group of actors in a performance",
  },
  {
    word: "cell",
    description:
      "The basic unit of life in organisms; or, a small confined space",
  },
  {
    word: "chat",
    description: "To engage in informal conversation with someone",
  },
  {
    word: "drug",
    description:
      "A substance used to treat or cure medical conditions or alter the body's functions",
  },
  { word: "dual", description: "Having two parts or components" },
  {
    word: "duke",
    description:
      "A nobleman of high rank, often the highest hereditary title below a prince",
  },
  {
    word: "dust",
    description:
      "Fine particles of matter that settle on surfaces or are suspended in the air",
  },
  { word: "duty", description: "A moral or legal obligation to do something" },
  {
    word: "each",
    description: "Every one of two or more things, considered separately",
  },
  {
    word: "earn",
    description: "To receive payment for work or services rendered",
  },
  {
    word: "ease",
    description: "A state of comfort, relaxation, or freedom from difficulty",
  },
  {
    word: "east",
    description:
      "The direction toward which the sun rises; the opposite of west",
  },
  {
    word: "easy",
    description: "Not difficult; requiring little effort or discomfort",
  },
  {
    word: "edge",
    description: "The outside limit of an object, area, or surface; a border",
  },
  {
    word: "else",
    description:
      "In addition to; different or alternative to what has been mentioned",
  },
  {
    word: "feet",
    description:
      "The lower extremities of the legs; the part of the body that makes contact with the ground while walking",
  },
  { word: "fell", description: "To cut down a tree or knock someone down" },
  {
    word: "felt",
    description:
      "A type of fabric made from compressed fibers; past tense of 'feel'",
  },
  {
    word: "file",
    description: "A container for keeping documents or data in order",
  },
  {
    word: "fill",
    description: "To make something full, often with a substance or material",
  },
  {
    word: "film",
    description:
      "A motion picture or a thin layer of material coating a surface",
  },
  {
    word: "high",
    description: "Having a great height; elevated above the ground",
  },
  {
    word: "hill",
    description: "A raised area of land with a sloping top and sides",
  },
  {
    word: "hire",
    description: "To employ someone for a job or task in exchange for payment",
  },
  {
    word: "hold",
    description:
      "To grasp or carry something; or, to keep something in one's possession",
  },
  { word: "hole", description: "A hollow opening or cavity in something" },
  { word: "holy", description: "Regarded as sacred or devoted to a deity" },
  {
    word: "lose",
    description: "To misplace or fail to win in a game or competition",
  },
  {
    word: "loss",
    description: "The state of losing something; the opposite of gain",
  },
  {
    word: "lost",
    description: "No longer in one's possession or known location",
  },
  {
    word: "love",
    description:
      "An intense feeling of deep affection towards someone or something",
  },
  {
    word: "luck",
    description:
      "Success or failure seemingly brought by chance rather than through one's own actions",
  },
  {
    word: "made",
    description: "Past tense of 'make,' meaning to create or produce something",
  },
  {
    word: "mail",
    description: "Letters, packages, or parcels sent through the postal system",
  },
  { word: "main", description: "The most important or primary" },
  { word: "make", description: "To create or construct something" },
  {
    word: "poor",
    description:
      "Having little or no money or possessions; in need of assistance",
  },
  {
    word: "port",
    description:
      "A place where ships load and unload cargo; or, a type of wine",
  },
  {
    word: "post",
    description: "To display or publish something on a public platform",
  },
  {
    word: "pull",
    description: "To exert force to move something towards oneself",
  },
  {
    word: "pure",
    description: "Free from contamination or impurities; clean or clear",
  },
  {
    word: "push",
    description: "To exert force to move something away from oneself",
  },
  {
    word: "race",
    description:
      "A competition between individuals or teams to determine the fastest or best performer",
  },
  {
    word: "rail",
    description:
      "A bar or series of bars fixed on upright supports, serving as a barrier or guardrail",
  },
  {
    word: "rain",
    description:
      "Precipitation in the form of water droplets falling from the sky",
  },
  {
    word: "rank",
    description: "A position in a hierarchy or a level of importance",
  },
  { word: "rare", description: "Uncommon or infrequently occurring" },
  {
    word: "rate",
    description: "A measurement or comparison of one quantity to another",
  },
  {
    word: "save",
    description: "To rescue or preserve something from harm or danger",
  },
  {
    word: "seat",
    description:
      "A place to sit; or, to place oneself in a position of authority",
  },
  {
    word: "seed",
    description:
      "A reproductive structure of a plant from which a new plant can grow",
  },
  { word: "seek", description: "To attempt to find or discover something" },
  {
    word: "seem",
    description:
      "To give the impression of being or appearing in a certain way",
  },
  {
    word: "seen",
    description:
      "Past participle of 'see,' meaning to have perceived with the eyes",
  },
  {
    word: "self",
    description: "The individual identity of a person; the ego",
  },
  { word: "sell", description: "To exchange goods or services for money" },
  {
    word: "send",
    description: "To cause to go or be taken to a particular destination",
  },
  {
    word: "sent",
    description:
      "Past tense of 'send,' meaning to have dispatched or delivered something",
  },
  {
    word: "sept",
    description: "An abbreviation for 'September,' the ninth month of the year",
  },
  {
    word: "ship",
    description:
      "A large watercraft used for transporting people or goods across water",
  },
  {
    word: "with",
    description: "In the company or presence of someone or something else",
  },
  {
    word: "wood",
    description:
      "The hard fibrous material that makes up the trunk and branches of a tree",
  },
  {
    word: "word",
    description:
      "A unit of language that carries meaning and can be spoken or written",
  },
  {
    word: "wore",
    description:
      "Past tense of 'wear,' meaning to have had something on the body",
  },
  {
    word: "work",
    description:
      "Physical or mental activity aimed at achieving a particular result",
  },
  {
    word: "yard",
    description: "A unit of length equal to three feet or 36 inches",
  },
  {
    word: "yeah",
    description:
      "Informal slang for 'yes,' indicating agreement or affirmation",
  },
  {
    word: "year",
    description:
      "A period of time equal to 365 (or 366) days, based on Earth's orbit around the sun",
  },
  {
    word: "your",
    description:
      "Belonging to or associated with the person or people being spoken to",
  },
  {
    word: "zero",
    description:
      "The numerical value representing the absence of quantity; nothing",
  },
  {
    word: "zone",
    description:
      "An area or region with distinct characteristics or designated for a specific purpose",
  },
];
const fiveSizeWords = [
  { word: "about", description: "Concerning" },
  { word: "above", description: "At a higher level or position" },
  { word: "abuse", description: "The improper or excessive use of something" },
  {
    word: "actor",
    description: "A person who performs in plays, movies, or television shows",
  },
  {
    word: "acute",
    description: "Having a sharp point or ending in a sharp angle",
  },
  {
    word: "admit",
    description: "To confess or acknowledge the truth of something",
  },
  {
    word: "adopt",
    description: "To take on as one's own, especially legally or formally",
  },
  { word: "adult", description: "A fully grown person or organism" },
  { word: "after", description: "Following in time or place" },
  {
    word: "brain",
    description:
      "The organ inside the head that controls thought, memory, and perception",
  },
  {
    word: "brand",
    description:
      "A recognizable name or symbol associated with a product or company",
  },
  {
    word: "bread",
    description:
      "A staple food made from flour, water, and yeast, typically baked",
  },
  { word: "break", description: "To separate into pieces" },
  {
    word: "breed",
    description:
      "A group of animals with similar characteristics, resulting from selective mating",
  },
  { word: "brief", description: "Short in duration or extent" },
  {
    word: "chest",
    description: "The front part of the body between the neck and the abdomen",
  },
  {
    word: "chief",
    description:
      "The leader or highest-ranking person in a group or organization",
  },
  { word: "child", description: "A young human being; a son or daughter" },
  { word: "china", description: "A country in East Asia" },
  {
    word: "chose",
    description:
      "Past tense of 'choose,' meaning to have made a selection from multiple options",
  },
  {
    word: "civil",
    description: "Related to the ordinary citizens or people of a country",
  },
  { word: "claim", description: "To assert or demand a right or property" },
  {
    word: "class",
    description: "A group of people with common characteristics or interests",
  },
  { word: "clean", description: "Free from dirt, marks, or impurities" },
  {
    word: "debut",
    description:
      "A first public appearance or performance, especially of an artist or musician",
  },
  {
    word: "delay",
    description: "To postpone or make something happen later than planned",
  },
  {
    word: "depth",
    description:
      "The distance from the top or surface to the bottom of something",
  },
  { word: "doing", description: "The act of performing an action or task" },
  {
    word: "doubt",
    description: "A feeling of uncertainty or lack of conviction",
  },
  { word: "dozen", description: "A group of twelve items or units" },
  {
    word: "horse",
    description:
      "A large four-legged animal used for riding, racing, or carrying loads",
  },
  {
    word: "hotel",
    description:
      "An establishment that provides lodging and often other services for travelers",
  },
  { word: "house", description: "A building used as a place of residence" },
  { word: "human", description: "Relating to or characteristic of people" },
  {
    word: "ideal",
    description: "A standard or concept of perfection or excellence",
  },
  {
    word: "image",
    description: "A visual representation or likeness of someone or something",
  },
  { word: "index", description: "An alphabetical list or guide" },
  {
    word: "inner",
    description: "Located on the inside or closer to the center",
  },
  {
    word: "input",
    description:
      "Data or information that is entered into a computer or system",
  },
  { word: "rough", description: "Having an uneven or irregular surface" },
  { word: "round", description: "Shaped like a circle or sphere" },
  {
    word: "route",
    description: "A way or course taken to get from one place to another",
  },
  { word: "royal", description: "Relating to a king or queen" },
  {
    word: "rural",
    description: "Relating to the countryside or agricultural areas",
  },
  {
    word: "scale",
    description: "A system of ordered marks used for measurement",
  },
  {
    word: "scene",
    description: "A location or setting where an event or action takes place",
  },
  { word: "scope", description: "The extent or range of something" },
  {
    word: "score",
    description:
      "To achieve or obtain points, goals, or a victory; also, a total number of points or marks",
  },
  {
    word: "sense",
    description:
      "A faculty of perception through the senses; also, a feeling or understanding",
  },
  {
    word: "serve",
    description:
      "To provide a service or perform duties; also, to deliver food or drinks",
  },
  {
    word: "seven",
    description: "The number following six and preceding eight",
  },
  {
    word: "shall",
    description:
      "Used to indicate a future action or requirement; also, to be obligated or commanded",
  },
  {
    word: "shape",
    description:
      "The form or appearance of something; also, to give form or mold",
  },
  {
    word: "share",
    description:
      "To divide or distribute among multiple individuals; also, a portion or part of something",
  },
  {
    word: "noise",
    description:
      "A loud or unpleasant sound; also, general disturbance or confusion",
  },
  {
    word: "north",
    description:
      "The direction towards the Earth's North Pole; opposite of south",
  },
  {
    word: "noted",
    description: "Having been observed, recorded, or acknowledged",
  },
  {
    word: "novel",
    description: "A fictional narrative book; or, new, original, or unusual",
  },
  {
    word: "nurse",
    description: "A person trained to care for the sick, injured, or infirm",
  },
  {
    word: "occur",
    description: "To happen or take place; to exist or be found",
  },
  {
    word: "ocean",
    description:
      "A vast body of saltwater that covers much of the Earth's surface",
  },
  {
    word: "offer",
    description:
      "To present or propose something for acceptance or rejection; also, a proposal or suggestion",
  },
  { word: "often", description: "Frequently; many times or on many occasions" },
  {
    word: "order",
    description:
      "A command, instruction, or request; also, a systematic arrangement of things",
  },
  {
    word: "other",
    description: "Different or distinct from the one or ones already mentioned",
  },
  {
    word: "ought",
    description:
      "Used to indicate a moral obligation or duty; also, expected or required",
  },
  {
    word: "paint",
    description:
      "To apply colored liquid to a surface to create artwork or decorate",
  },
  {
    word: "panel",
    description:
      "A flat or curved surface, often used as a part of a larger structure; also, a group of people assembled for discussion or judgment",
  },
  {
    word: "paper",
    description:
      "A thin material made from wood pulp, used for writing, printing, or drawing",
  },
];
const sixSizeWords = [
  { word: "abroad", description: "In or to a foreign country" },
  { word: "accept", description: "To receive or agree to something offered" },
  {
    word: "access",
    description: "The ability or right to use or approach something",
  },
  { word: "across", description: "From one side to the other; spanning" },
  {
    word: "acting",
    description: "Performing a role in a play, movie, or show",
  },
  {
    word: "action",
    description: "The process of doing something; a deed or event",
  },
  { word: "active", description: "Engaged in action or movement" },
  { word: "actual", description: "Existing in fact; real or true" },
  {
    word: "advice",
    description: "Guidance or recommendations concerning future actions",
  },
  {
    word: "behind",
    description: "At or to the back of something; in the rear",
  },
  {
    word: "belief",
    description: "A conviction or acceptance that something is true or real",
  },
  {
    word: "belong",
    description: "To be the property of; to fit in a specific place or group",
  },
  { word: "berlin", description: "The capital city of Germany" },
  { word: "better", description: "Of higher quality or more desirable" },
  {
    word: "beyond",
    description: "At or to the further side of; exceeding in degree or extent",
  },
  {
    word: "dealer",
    description: "A person or business engaged in buying and selling goods",
  },
  {
    word: "debate",
    description:
      "A formal discussion of opposing arguments on a particular topic",
  },
  { word: "decade", description: "A period of ten years" },
  {
    word: "decide",
    description: "To reach a conclusion or make a choice after consideration",
  },
  {
    word: "defeat",
    description: "To overcome in a contest or battle; to lose against",
  },
  {
    word: "defend",
    description: "To protect or support; to argue in favor of",
  },
  {
    word: "define",
    description: "To explain the meaning of a word or concept",
  },
  {
    word: "degree",
    description:
      "A unit of measurement or extent; also, an academic qualification",
  },
  {
    word: "demand",
    description:
      "To request or insist on something; a desire or need for goods or services",
  },
  {
    word: "review",
    description:
      "To assess or examine something again; also, a critical evaluation of a work or performance",
  },
  {
    word: "reward",
    description:
      "Something given in return for good behavior or service; to give a prize or benefit",
  },
  {
    word: "riding",
    description:
      "The action or sport of riding on a horse, bicycle, or motorcycle",
  },
  {
    word: "rising",
    description: "Moving upward; increasing in height, amount, or importance",
  },
  { word: "robust", description: "Strong and healthy; sturdy or vigorous" },
  {
    word: "ruling",
    description:
      "An official decision or judgment; also, the exercise of authority",
  },
  {
    word: "safety",
    description: "The state of being free from harm or danger",
  },
  {
    word: "salary",
    description:
      "A fixed regular payment, usually monthly, for work or services",
  },
  {
    word: "sample",
    description: "A small portion or example taken from a larger whole",
  },
  {
    word: "saving",
    description:
      "The act of preserving or rescuing something from harm; also, economizing money or resources",
  },
  {
    word: "saying",
    description: "A brief expression or proverb conveying wisdom or truth",
  },
  {
    word: "scheme",
    description:
      "A plan, design, or program of action; often with a specific purpose",
  },
  {
    word: "school",
    description:
      "An institution for educating students, often children or young people",
  },
  {
    word: "screen",
    description:
      "A protective or separating barrier; also, a display or surface for projecting images",
  },
  {
    word: "search",
    description:
      "To look for something or someone; an examination or investigation",
  },
  {
    word: "season",
    description: "A division of the year marked by specific weather or events",
  },
  {
    word: "second",
    description:
      "The one that follows first; a unit of time equal to 1/60th of a minute",
  },
  {
    word: "secret",
    description:
      "Kept hidden from knowledge or view; also, confidential information",
  },
  {
    word: "sector",
    description:
      "A distinct part or division of something, often an economy or society",
  },
  {
    word: "secure",
    description:
      "Safe, free from risk or danger; also, to make something safe or firm",
  },
  {
    word: "seeing",
    description: "Perceiving or becoming aware of something through the eyes",
  },
  {
    word: "theory",
    description:
      "A coherent explanation or set of principles to explain a phenomenon",
  },
  {
    word: "thirty",
    description: "The number following twenty-nine and preceding thirty-one",
  },
  { word: "though", description: "However; nevertheless; despite that" },
  {
    word: "threat",
    description:
      "A declaration of intent to harm or punish; also, a source of danger",
  },
  {
    word: "thrown",
    description:
      "Past participle of 'throw,' meaning to propel or cast something with force",
  },
  {
    word: "ticket",
    description:
      "A printed or digital slip giving authorization or admission to an event or service",
  },
  {
    word: "timely",
    description: "Done or occurring at the right time; punctual or appropriate",
  },
  {
    word: "timing",
    description:
      "The choice or control of when something is done; the measurement of time intervals",
  },
  {
    word: "tissue",
    description:
      "A group of similar cells forming a part of an organism; also, soft, absorbent paper used for various purposes",
  },
  {
    word: "toward",
    description:
      "In the direction of; with the aim or purpose of achieving something",
  },
  {
    word: "travel",
    description: "To go on a journey or move from one place to another",
  },
  {
    word: "treaty",
    description:
      "A formal agreement between countries or groups, often regarding peace, trade, or other matters",
  },
  {
    word: "winner",
    description:
      "A person or thing that wins or is successful in a contest, competition, or activity",
  },
  {
    word: "winter",
    description: "The coldest season of the year, between autumn and spring",
  },
  {
    word: "within",
    description:
      "Inside or located inside; also, during the time frame of something",
  },
  {
    word: "wonder",
    description:
      "To be curious or amazed about something; also, a feeling of awe or surprise",
  },
  {
    word: "worker",
    description:
      "A person who is engaged in labor or employment, often to earn a living",
  },
  {
    word: "wright",
    description:
      "A person who constructs or repairs something, such as a shipwright or playwright",
  },
  {
    word: "writer",
    description:
      "A person who creates written works, such as books, articles, or stories",
  },
  {
    word: "yellow",
    description:
      "Having the color of ripe lemons or the sun; also, cowardly or jealous",
  },
];

const sevenSizeWords = [
  { word: "ability", description: "The capacity or skill to do something" },
  { word: "absence", description: "The state of being away or not present" },
  {
    word: "academy",
    description:
      "An institution for specialized education, often for a specific subject or field",
  },
  {
    word: "account",
    description: "A record or statement of financial transactions",
  },
  {
    word: "accused",
    description: "A person charged with an offense or crime",
  },
  {
    word: "achieve",
    description:
      "To successfully bring about or accomplish a desired aim or result",
  },
  {
    word: "acquire",
    description:
      "To obtain or gain possession of something through effort or action",
  },
  {
    word: "address",
    description:
      "The location of a place or a formal speech or written communication",
  },
  { word: "advance", description: "To move forward or make progress" },
  { word: "adverse", description: "Harmful or unfavorable" },
  {
    word: "advised",
    description:
      "Having been given recommendations or counsel about a course of action",
  },
  {
    word: "adviser",
    description: "A person who provides advice or guidance to others",
  },
  {
    word: "between",
    description: "In the space or time that separates two points or events",
  },
  { word: "billion", description: "A thousand million, or 1,000,000,000" },
  {
    word: "binding",
    description: "Restricting or obligating by law, promise, or contract",
  },
  {
    word: "brother",
    description: "A male sibling; also, a close male companion or friend",
  },
  {
    word: "brought",
    description:
      "Past tense of 'bring,' meaning to carry or convey something to a place",
  },
  {
    word: "burning",
    description:
      "On fire or in flames; also, causing a strong sensation of heat or pain",
  },
  {
    word: "cabinet",
    description:
      "A cupboard with shelves or drawers for storage; also, a group of appointed officials",
  },
  {
    word: "caliber",
    description:
      "The internal diameter or bore of a gun barrel; also, the quality or level of something",
  },
  {
    word: "calling",
    description:
      "A strong desire or vocation for a particular career or occupation",
  },
  {
    word: "capable",
    description: "Having the ability or potential to do something; competent",
  },
  {
    word: "capital",
    description:
      "Wealth in the form of money or assets; also, a city that serves as a center of government",
  },
  {
    word: "captain",
    description:
      "The person in command of a ship or aircraft; also, the leader of a team or group",
  },
  {
    word: "caption",
    description: "A title or description accompanying an image or illustration",
  },
  {
    word: "capture",
    description:
      "To take into one's possession or control; also, the act of catching or seizing something",
  },
  {
    word: "careful",
    description: "Exercising caution or attention to avoid mistakes or harm",
  },
  {
    word: "carrier",
    description:
      "A person or thing that carries or transports something; also, a telecommunications company",
  },
  {
    word: "caution",
    description: "Alertness and care to avoid danger or mistakes",
  },
  {
    word: "ceiling",
    description:
      "The upper interior surface of a room; also, an upper limit or maximum",
  },
  {
    word: "service",
    description:
      "The action of helping or doing work for someone; also, a system or organization providing assistance",
  },
  {
    word: "serving",
    description: "The action of providing food or drink at a meal",
  },
  {
    word: "session",
    description:
      "A meeting, class, or period of time devoted to a particular activity or purpose",
  },
  {
    word: "setting",
    description: "The place, time, or conditions in which something happens",
  },
  {
    word: "seventh",
    description:
      "The ordinal number corresponding to the number seven in a series",
  },
  {
    word: "several",
    description: "More than two but not many; multiple or various",
  },
  {
    word: "shortly",
    description: "In a brief or concise manner; also, to happen or occur soon",
  },
  {
    word: "showing",
    description:
      "The act of presenting or exhibiting; also, indicating or revealing something",
  },
  {
    word: "silence",
    description:
      "The absence of sound; also, refraining from speaking or making noise",
  },
  {
    word: "silicon",
    description:
      "A chemical element, symbol Si, used in electronic devices and other applications",
  },
  {
    word: "similar",
    description:
      "Having qualities or characteristics in common; resembling something else",
  },
  {
    word: "sitting",
    description: "Being in a seated position; also, a meeting or session",
  },
  {
    word: "sixteen",
    description: "The number following fifteen and preceding seventeen",
  },
  {
    word: "skilled",
    description: "Having or demonstrating specialized abilities or expertise",
  },
  {
    word: "smoking",
    description:
      "The action or habit of inhaling and exhaling the smoke of tobacco or other substances",
  },
  {
    word: "society",
    description:
      "A group of individuals living together in an organized community; also, culture or civilization",
  },
  {
    word: "somehow",
    description:
      "In a way that is not specified or known; for some unspecified reason",
  },
  {
    word: "someone",
    description: "An unspecified or unidentified person; an individual",
  },
  {
    word: "teacher",
    description:
      "A person who instructs or educates others, often in a school or academic setting",
  },
  {
    word: "telecom",
    description:
      "Short for 'telecommunications,' the transmission of information over long distances by electronic means",
  },
  {
    word: "telling",
    description:
      "Revealing or conveying information or a story; also, to communicate or narrate",
  },
  {
    word: "tension",
    description:
      "The state of being stretched or strained; also, mental or emotional stress",
  },
  {
    word: "theatre",
    description:
      "A building or area used for dramatic performances or entertainment",
  },
  {
    word: "therapy",
    description:
      "The treatment of illness, injury, or mental health issues by medical or psychological means",
  },
  {
    word: "whether",
    description:
      "Indicating a choice between two or more alternatives; also, expressing doubt or uncertainty",
  },
  {
    word: "willing",
    description: "Ready or eager to do something; inclined or disposed",
  },
  {
    word: "winning",
    description: "Having won or being likely to win; also, to achieve victory",
  },
  {
    word: "without",
    description: "Lacking or not having something; not accompanied by",
  },
  {
    word: "witness",
    description:
      "A person who sees an event or incident; also, to observe or testify to something",
  },
  {
    word: "working",
    description:
      "Engaged in labor or employment; also, functioning or operating",
  },
  {
    word: "writing",
    description:
      "The act of forming letters and words on paper or another surface; also, written text or content",
  },
  {
    word: "written",
    description: "Having been put into writing; expressed in written form",
  },
  {
    word: "network",
    description:
      "An interconnected system of people, organizations, or things; also, a telecommunications or computer system",
  },
  {
    word: "neutral",
    description:
      "Not taking sides or favoring either party in a conflict; also, having a pH of 7",
  },
  {
    word: "notable",
    description: "Worthy of attention or notice; significant or remarkable",
  },
  {
    word: "nothing",
    description:
      "The absence of anything; also, having no value, importance, or significance",
  },
  { word: "nowhere", description: "In or to no place; not anywhere" },
  {
    word: "nuclear",
    description:
      "Relating to the nucleus of an atom or involving nuclear energy; also, fundamental or central",
  },
  {
    word: "nursing",
    description:
      "The profession or practice of caring for the sick or injured; also, to nourish or foster",
  },
  {
    word: "obvious",
    description: "Easily perceived or understood; clear or apparent",
  },
  {
    word: "offense",
    description:
      "An illegal or immoral action; also, the act of attacking or opposing",
  },
  {
    word: "officer",
    description:
      "A person in a position of authority in the military, police, or other organizations",
  },
  {
    word: "ongoing",
    description: "Continuing or in progress; not yet completed or resolved",
  },
  {
    word: "opening",
    description:
      "An aperture or hole; also, the act of beginning or starting something",
  },
  {
    word: "operate",
    description:
      "To work or function; also, to manage or control the workings of something",
  },
  {
    word: "opinion",
    description: "A personal belief or judgment; a view or appraisal",
  },
  {
    word: "optical",
    description: "Related to or involving sight, vision, or light",
  },
  {
    word: "organic",
    description:
      "Related to or derived from living matter; also, natural and free from artificial chemicals",
  },
  {
    word: "outcome",
    description: "The final result or consequence of an action or process",
  },
  {
    word: "outdoor",
    description: "Relating to or taking place in the open air; outside",
  },
  {
    word: "initial",
    description:
      "Existing or occurring at the beginning; also, the first letter of a name or word",
  },
  {
    word: "inquiry",
    description:
      "The act of seeking information or investigating; also, a formal investigation or examination",
  },
  {
    word: "insight",
    description:
      "The ability to understand or perceive the true nature of something; also, a deep understanding",
  },
  {
    word: "install",
    description:
      "To set up or put in place for use; also, the process of installation",
  },
  {
    word: "instant",
    description:
      "A moment or very short period of time; also, happening or done without delay",
  },
  {
    word: "instead",
    description: "As an alternative or replacement; in place of something else",
  },
  {
    word: "intense",
    description:
      "Of extreme strength, degree, or severity; also, deeply felt or highly concentrated",
  },
  {
    word: "interim",
    description:
      "Temporary or provisional; also, the intervening time or period",
  },
  {
    word: "involve",
    description:
      "To include or contain as a necessary part; also, to engage or participate in",
  },
  {
    word: "jointly",
    description: "In collaboration or cooperation with others; together",
  },
  {
    word: "journal",
    description:
      "A daily record of events, experiences, or observations; also, a periodical publication",
  },
  {
    word: "journey",
    description:
      "A traveling from one place to another; also, a process of personal development or progress",
  },
  {
    word: "justice",
    description:
      "Fairness or moral rightness; also, the administration of law or legal proceedings",
  },
  {
    word: "justify",
    description:
      "To demonstrate or prove to be right or reasonable; also, to defend or uphold",
  },
  {
    word: "keeping",
    description:
      "The act of holding or retaining something; also, the manner of caring for or preserving",
  },
  {
    word: "killing",
    description: "The act of causing death or ending the life of something",
  },
  {
    word: "kingdom",
    description:
      "A country, territory, or realm ruled by a king or queen; also, a category in classification.",
  },
  {
    word: "kitchen",
    description: "A room or area where food is prepared and cooked.",
  },
];
const eightSizeWords = [
  {
    word: "absolute",
    description: "Unconditional, unrestricted, or ultimate in nature",
  },
  {
    word: "abstract",
    description: "Conceptual or theoretical, not concrete or specific",
  },
  {
    word: "academic",
    description: "Related to education or learning; scholarly",
  },
  {
    word: "accepted",
    description: "Agreed upon or approved; received as true or valid",
  },
  {
    word: "accident",
    description: "An unforeseen event or mishap; not intentional",
  },
  {
    word: "accuracy",
    description: "Precision and correctness in details or measurements",
  },
  {
    word: "accurate",
    description: "Free from errors or mistakes; exact or precise",
  },
  { word: "achieved", description: "Successfully accomplished or attained" },
  {
    word: "acquired",
    description: "Gained or obtained, often through effort or experience",
  },
  {
    word: "activity",
    description: "Action or movement; involvement in something",
  },
  {
    word: "actually",
    description: "In fact; truly; used to emphasize reality",
  },
  {
    word: "addition",
    description: "The act of combining or including something",
  },
  {
    word: "adequate",
    description: "Sufficient or satisfactory for a particular purpose",
  },
  {
    word: "adjacent",
    description: "Next to or adjoining something else; nearby",
  },
  {
    word: "adjusted",
    description: "Altered or modified to fit specific conditions",
  },
  {
    word: "advanced",
    description: "Highly developed or innovative; at a higher level",
  },
  { word: "advisory", description: "Providing advice or guidance" },
  {
    word: "advocate",
    description:
      "To support or recommend; also, a supporter or promoter of a cause",
  },
  {
    word: "bachelor",
    description: "An unmarried man; also, a degree or academic title",
  },
  {
    word: "bacteria",
    description:
      "Microscopic organisms, often unicellular, that can cause disease or have various roles in ecosystems",
  },
  {
    word: "baseball",
    description:
      "A bat-and-ball game played between two teams; also, the ball used in the game",
  },
  {
    word: "bathroom",
    description:
      "A room used for personal hygiene activities like bathing and using the toilet",
  },
  {
    word: "becoming",
    description:
      "Suitable or appropriate for someone's appearance or personality",
  },
  {
    word: "benjamin",
    description:
      "A given name; also, a type of paper currency in the United States",
  },
  { word: "birthday", description: "The anniversary of one's birth" },
  {
    word: "boundary",
    description: "A dividing line or limit between two areas or regions",
  },
  {
    word: "breaking",
    description:
      "Causing to separate into pieces or fragments; also, interrupting or disrupting",
  },
  {
    word: "breeding",
    description:
      "The production of offspring; also, the process of raising and caring for animals or plants",
  },
  {
    word: "building",
    description:
      "A structure with walls and a roof; also, the action of constructing or assembling",
  },
  {
    word: "bulletin",
    description:
      "A brief official statement or announcement; also, a publication with news and information",
  },
  {
    word: "business",
    description:
      "An organization or economic activity engaged in the trade of goods or services",
  },
  {
    word: "calendar",
    description:
      "A system of organizing days and months for social, religious, or administrative purposes",
  },
  {
    word: "campaign",
    description:
      "A series of planned actions to achieve a particular goal, often in politics or marketing",
  },
  {
    word: "capacity",
    description:
      "The maximum amount that something can hold or contain; also, the ability to do or produce something",
  },
  {
    word: "casualty",
    description:
      "A person killed or injured in a disaster, accident, or military action",
  },
  {
    word: "catching",
    description:
      "To capture or seize something in motion; also, causing interest or enthusiasm",
  },
  {
    word: "category",
    description:
      "A classification or grouping based on common characteristics or features",
  },
  {
    word: "Catholic",
    description: "Relating to the Roman Catholic Church or its members",
  },
  {
    word: "cautious",
    description: "Exercising care and prudence; avoiding risk or danger",
  },
  {
    word: "cellular",
    description:
      "Related to cells, the basic structural units of living organisms; also, mobile communication technology",
  },
  {
    word: "ceremony",
    description: "A formal event or ritual, often with symbolic significance",
  },
  {
    word: "chairman",
    description:
      "The person in charge or presiding over a meeting, committee, or organization",
  },
  {
    word: "champion",
    description:
      "A winner or supporter of a cause; also, a person who excels in a particular sport or skill",
  },
  {
    word: "chemical",
    description:
      "Related to or involving substances produced by chemical processes; also, a substance with specific properties",
  },
  {
    word: "children",
    description: "Plural form of 'child,' referring to young human beings",
  },
  {
    word: "circular",
    description:
      "Having the shape of a circle; also, a printed or written document distributed to many people",
  },
  {
    word: "civilian",
    description:
      "A person not in the military or police force; a non-military individual",
  },
  {
    word: "clearing",
    description:
      "The act of removing obstacles or clutter; also, a space free from obstructions",
  },
  {
    word: "contrast",
    description:
      "To compare in order to show differences; also, a difference or distinction",
  },
  {
    word: "convince",
    description: "To persuade or cause someone to believe or do something",
  },
  {
    word: "corridor",
    description:
      "A long, narrow passage in a building; also, a route or path connecting places",
  },
  {
    word: "coverage",
    description:
      "The extent or scope of something that is included or dealt with; also, the reporting of news or events",
  },
  {
    word: "covering",
    description:
      "A layer or material that conceals or protects; also, the action of hiding or enclosing something",
  },
  {
    word: "creation",
    description:
      "The act of bringing something into existence; also, the result of this process",
  },
  {
    word: "creative",
    description:
      "Involving imagination or original ideas to produce something new or artistic",
  },
  {
    word: "criminal",
    description:
      "Relating to crime or the unlawful activities of individuals or groups; also, a person guilty of a crime",
  },
  {
    word: "critical",
    description:
      "Expressing disapproval or finding fault; also, crucial or decisive",
  },
  {
    word: "crossing",
    description:
      "The act of moving from one side to another; also, a place where paths intersect",
  },
  {
    word: "cultural",
    description:
      "Related to culture, the customs, beliefs, and arts of a particular society or group",
  },
  {
    word: "currency",
    description:
      "A system of money used as a medium of exchange in a country or region",
  },
  {
    word: "customer",
    description:
      "A person who purchases goods or services from a business; a client",
  },
  {
    word: "database",
    description:
      "A structured collection of data organized and accessible in various ways",
  },
  { word: "daughter", description: "A female child or offspring" },
  {
    word: "daylight",
    description:
      "The natural light of the day; also, the period of time between sunrise and sunset",
  },
  {
    word: "deadline",
    description:
      "The time or date by which something must be completed or submitted",
  },
  {
    word: "deciding",
    description: "The process of making a decision or reaching a conclusion",
  },
  {
    word: "decision",
    description:
      "A conclusion or resolution reached after consideration or deliberation",
  },
  {
    word: "decrease",
    description:
      "To become smaller in size, quantity, or intensity; to diminish",
  },
  {
    word: "deferred",
    description: "Postponed or delayed until a later time or date",
  },
  {
    word: "definite",
    description: "Clear and certain; having distinct or fixed boundaries",
  },
  {
    word: "delicate",
    description:
      "Easily broken or damaged; also, requiring careful handling or sensitive treatment",
  },
  {
    word: "delivery",
    description:
      "The act of bringing or transferring something to a specific destination or recipient",
  },
  {
    word: "describe",
    description:
      "To give an account or representation in words; to explain or depict",
  },
  {
    word: "designer",
    description:
      "A person who plans and creates something, especially in the field of aesthetics or engineering",
  },
  {
    word: "detailed",
    description:
      "Containing a lot of information or specific elements; thorough and comprehensive",
  },
  {
    word: "diabetes",
    description:
      "A medical condition characterized by high levels of sugar in the blood",
  },
  {
    word: "dialogue",
    description:
      "A conversation or exchange of ideas between two or more people; also, a literary technique",
  },
  {
    word: "diameter",
    description:
      "A straight line passing through the center of a circle or sphere, connecting two points on the circumference or surface",
  },
  {
    word: "directly",
    description:
      "In a straight line or without any intervening steps; immediately or without deviation",
  },
  {
    word: "director",
    description:
      "A person in charge of an organization, project, or activity; also, a filmmaker or theater manager",
  },
  {
    word: "disabled",
    description:
      "Having a physical or mental condition that limits a person's abilities or movements",
  },
  {
    word: "disaster",
    description:
      "An event causing great damage, suffering, or loss; a catastrophe",
  },
  {
    word: "disclose",
    description:
      "To make known or reveal information that was previously hidden or secret",
  },
  {
    word: "discount",
    description:
      "A deduction from the original price or cost; a reduction or allowance",
  },
  {
    word: "enormous",
    description: "Very large in size, extent, or quantity; huge or immense",
  },
  {
    word: "entirely",
    description: "Completely; to the fullest extent; without exception",
  },
  {
    word: "entrance",
    description:
      "The act of entering or a place of entry; also, to fill with wonder or admiration",
  },
  {
    word: "envelope",
    description:
      "A flat, usually rectangular paper container for a letter or document; also, to enclose or surround",
  },
  {
    word: "equality",
    description:
      "The state of being equal in status, rights, or opportunities; fairness",
  },
  {
    word: "equation",
    description:
      "A mathematical statement showing that two expressions are equal; also, a situation involving variables or factors",
  },
  {
    word: "schedule",
    description:
      "A plan or timetable for events, tasks, or appointments; also, to arrange or plan according to a schedule",
  },
  {
    word: "scrutiny",
    description:
      "Close examination or inspection; careful and critical observation",
  },
  {
    word: "seasonal",
    description:
      "Related to or occurring during a particular season or time of the year",
  },
  {
    word: "secondly",
    description: "In the second place or as the second item in a list",
  },
  {
    word: "security",
    description:
      "Protection from harm, danger, or loss; also, measures taken to protect against threats",
  },
  {
    word: "sensible",
    description: "Showing good judgment or reason; practical and rational",
  },
  {
    word: "sentence",
    description:
      "A group of words expressing a complete thought or idea; also, a punishment imposed by a court for a crime",
  },
  {
    word: "separate",
    description: "To set apart or divide; not joined or connected",
  },
  {
    word: "sequence",
    description:
      "A particular order in which related events, ideas, or objects follow each other",
  },
  {
    word: "sergeant",
    description: "A non-commissioned officer in the armed forces or police",
  },
  {
    word: "shipping",
    description:
      "The act of sending or transporting goods from one place to another; also, the charges for such services",
  },
  {
    word: "shortage",
    description:
      "A deficiency or lack of something, often in supply or quantity",
  },
  {
    word: "shoulder",
    description:
      "The upper joint connecting the arm to the body; also, to carry a burden or responsibility",
  },
  {
    word: "simplify",
    description:
      "To make something less complex or easier to understand; to reduce to basic elements",
  },
  {
    word: "situated",
    description: "Located or positioned in a particular place or context",
  },
  {
    word: "whenever",
    description: "At whatever time; every time that; regardless of when",
  },
  {
    word: "wherever",
    description:
      "In or to whatever place; at any location or situation in which",
  },
  {
    word: "wildlife",
    description:
      "Animals and plants living and growing in natural habitats; also, undomesticated and uncultivated organisms",
  },
  {
    word: "wireless",
    description:
      "The transmission of signals, communication, or data without the use of physical wires",
  },
  {
    word: "withdraw",
    description:
      "To remove or take away; also, to remove oneself from a situation or place",
  },
  {
    word: "woodland",
    description:
      "A tract of land covered with trees and undergrowth; also, a forest or wooded area",
  },
  {
    word: "workshop",
    description:
      "A place where work is done, often related to a specific trade or skill; also, a meeting or seminar focused on a particular subject",
  },
  {
    word: "yourself",
    description:
      "The reflexive form of 'you,' used to refer to the person being addressed",
  },
];
wordSizeArray = [
  threeSizeWords,
  fourSizeWords,
  fiveSizeWords,
  sixSizeWords,
  sevenSizeWords,
  eightSizeWords,
];
//words ends

let winImg = ["win1.png", "win2.png"];
let loseImg = ["lost1.png", "lost2.png"];
let totalChances = 10;
let chancesLeft = totalChances;
let bestMatch = 0;
let hasMadeSpan = false;
let randIndex = Math.floor(Math.random() * fiveSizeWords.length);
let mainWordObject = fiveSizeWords[randIndex];
let mainWord = mainWordObject.word.toUpperCase();
let remLettersToMatch = mainWord;
setChances(chancesLeft);
setDescription(mainWordObject.description);
//Functions
function createBoxes(len) {
  for (let i = 0; i < len; i++) {
    let d = document.createElement("div");
    d.classList.add("box");
    letterBoxContainer.append(d);
  }
}
function deleteBoxes() {
  document.querySelectorAll(".box").forEach((box) => {
    box.remove();
  });
}
function clearElements(elements) {
  elements.forEach((el) => {
    el.innerHTML = "";
    el.classList.remove("green", "yellow", "red");
  });
}
function showBestMatch() {
  let boxes = document.querySelectorAll(".box");
  if (!hasMadeSpan) {
    bestRes.innerHTML = "Best Matched : ";
    hasMadeSpan = true;
    for (let i = 0; i < boxes.length; i++) {
      let s = document.createElement("span");
      bestRes.append(s);
    }
    spans = document.querySelectorAll(".bestResult span");
  }
  clearElements(spans);
  for (let i = 0; i < guess.length; i++) {
    spans[i].innerHTML = guess[i];
    //second classname has color classname, so giving color class name to each letter in bestMatched Result
    spans[i].classList.add(boxes[i].className.split(" ")[1]);
  }
}
function setChances(chance) {
  chanceLeftEl.innerHTML = `Chances : ${chance}`;
}
function setDescription(description) {
  descriptionEl.innerHTML = `"${description}"`;
}
function decreaseChances() {
  chancesLeft--;
  setChances(chancesLeft);
}
function checkAndShowBestMatch() {
  let boxes = document.querySelectorAll(".box");
  let currentMatch = 0;
  decreaseChances();
  clearElements(boxes);
  guess = guessInput.value.toUpperCase();
  remLettersToMatch = mainWord;
  //Make all the correct letter green and update remLettersToMatch
  for (let i = 0; i < guess.length; i++) {
    boxes[i].innerHTML = guess[i];
    if (guess[i] == mainWord[i]) {
      boxes[i].classList.add("green");
      currentMatch++;
      remLettersToMatch = remLettersToMatch.replace(mainWord[i], "");
      continue;
    }
  }
  //iterate over letters of boxes
  for (let i = 0; i < guess.length; i++) {
    //check if it is already in right position(or green) and if so, skip to next iteration
    if (guess[i] == mainWord[i]) {
      continue;
    }
    // if it is not in right position, check if it is included in remLettersToMatch. if so, remove it from remLettersToMatch and make its colour yellow in box
    if (remLettersToMatch.includes(guess[i])) {
      remLettersToMatch = remLettersToMatch.replace(guess[i], "");
      boxes[i].classList.add("yellow");
    }
    // if it is not in remLettersToMatch , make its color red
    else {
      boxes[i].classList.add("red");
    }
  }
  if (currentMatch > bestMatch) {
    bestMatch = currentMatch;
    showBestMatch();
  }
  guessInput.value = "";
  if (!hasNotifiedAboutRules) {
    setTimeout(notifyRules, 1000);
    hasNotifiedAboutRules = true;
  }
}
function getScore() {
  let score = 0;
  if (bestRes.innerHTML != "") {
    spans.forEach((el) => {
      let elClass = el.className;
      if (elClass == "green") {
        score += 100;
      } else if (elClass == "yellow") {
        score += 50;
      }
    });
    score -= 15 * (totalChances - chancesLeft);
    if (score <= 0) {
      score = 0;
    }
  }
  return score;
}
function getHighscore() {
  hs = parseInt(localStorage.getItem("highscore"));
  hs = hs || 0;
  if (getScore() > hs) {
    hs = getScore();
    localStorage.setItem("highscore", hs.toString());
    return hs;
  }
  return hs;
}
function showResult() {
  //win
  if (bestMatch == mainWord.length) {
    currentScore.innerHTML = `Score : ${getScore()}`;
    highscore.innerHTML = `Highscore : ${getHighscore()}`;
    wordleGame.style.display = "none";
    resultMenu.style.display = "block";
    resultImg.style.width = 300 + "px";
    resultStatus.innerHTML = "VICTORY";
    resultImg.style.background = `url(${
      winImg[Math.floor(Math.random() * winImg.length)]
    }) no-repeat center center/cover`;
  }
  //Lost
  else if (chancesLeft <= 0) {
    currentScore.innerHTML = `Score : ${getScore()}`;
    highscore.innerHTML = `Highscore : ${getHighscore()}`;
    wordleGame.style.display = "none";
    resultMenu.style.display = "block";
    resultImg.style.width = 200 + "px";
    if (bestMatch > Math.round(mainWord.length / 2)) {
      resultStatus.innerHTML = "SO CLOSE";
      realWordEl.innerHTML = `The word was ${mainWord}`;
      resultImg.style.background = `url(${loseImg[1]}) no-repeat center center/cover`;
    } else {
      resultStatus.style.fontSize = "1.5rem";
      resultStatus.innerHTML = "BETTER LUCK NEXT TIME";
      realWordEl.innerHTML = `The word was ${mainWord}`;
      resultImg.style.background = `url(${loseImg[0]}) no-repeat center center/cover`;
    }
  }
}
function resetGame(wordLength) {
  let boxes = document.querySelectorAll(".box");
  realWordEl.innerHTML = "";
  resultMenu.style.display = "none";
  wordleGame.style.display = "block";
  bestRes.innerHTML = "";
  guessInput.value = "";
  bestMatch = 0;
  chancesLeft = totalChances;
  hasMadeSpan = false;
  randIndex = Math.floor(Math.random() * wordLength);
  //since wordSizeArray has word starting from 3 and then 4,5,.. So 0 index has 3 wordLength. if worldLength is 5 the 5-3=2 that is 3rd index where there is fiveSizedWord
  mainWordObject = wordSizeArray[wordLength - 3][randIndex];
  mainWord = mainWordObject.word.toUpperCase();
  unMatchedWord = mainWord;
  setDescription(mainWordObject.description);
  setChances(chancesLeft);
  clearElements(boxes);
}

//Main
//submit starts
submit.addEventListener("click", () => {
  checkAndShowBestMatch();
  showResult();
});
guessInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    checkAndShowBestMatch();
    showResult();
  }
});
//submit ends
restart.addEventListener("click", () => {
  resetGame(parseInt(previousActive.innerHTML));
});
wordleGame.addEventListener("click", () => {
  menuBox.classList.remove("activeMenuBox");
});
menuIcon.addEventListener("click", () => {
  menuBox.classList.toggle("activeMenuBox");
});
levels.forEach((level) => {
  level.addEventListener("click", () => {
    previousActive.classList.remove("activeLevel");
    level.classList.add("activeLevel");
    previousActive = level;
    wordLength = parseInt(level.innerHTML);
    deleteBoxes();
    createBoxes(wordLength);
    guessInput.setAttribute("maxLength", wordLength);
    totalChances = wordLength * 2;
    resetGame(wordLength);
  });
});

//ALERT
const notifyRules = () => {
  alert(`
    TO BE CLEAR:
    1) Green colour letter in the box represent the letter is in correct position",
    2) Yellow colour letter in the box represents the box (excluding correct box) contains the letter but the letter is not in correct position right now
    3) Red colour letter in the box represents that the correct word doesn't contains the letter 
    `);
};
