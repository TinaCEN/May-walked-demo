const routes = [
  {
    title: "Literature",
    place: "Walk with stories, authors, and city memories.",
    steps: 1800,
    image: "./find-literature.png",
    note: "Start a literature walk and collect story cards along the route.",
  },
  {
    title: "Nature",
    place: "Discover plants, animals, and outdoor biodiversity.",
    steps: 2600,
    image: "./find-nature.png",
    note: "Start a nature walk and find biodiversity cards nearby.",
  },
];

const pets = [
  { name: "Ocean Buddy", type: "image", src: "./pet-blue.png" },
  { name: "Orange Scout", type: "image", src: "./pet-orange.png" },
  { name: "Green Hopper", type: "image", src: "./pet-green.png" },
  { name: "Purple Night", type: "image", src: "./pet-purple.png" },
  { name: "Pink Mist", type: "image", src: "./pet-pink.png" },
  { name: "Yellow Spark", type: "image", src: "./pet-yellow.png" },
  { name: "Rabbit Pop", type: "image", src: "./pet-selected.png" },
];

const decorationCatalog = {
  "pet-blue.png": [
    { id: "blue-party-hat", name: "Party Hat", price: 800, image: "./blue-party-hat.png", thumb: "./blue-party-hat-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-citrus-drink", name: "Lemon Drink", price: 600, image: "./blue-citrus-drink.png", thumb: "./blue-citrus-drink-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-chef-hat", name: "Chef Hat", price: 1200, image: "./blue-chef-hat.png", thumb: "./blue-chef-hat-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-moon-cap", name: "Moon Cap", price: 800, image: "./blue-moon-cap.png", thumb: "./blue-moon-cap-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-graduation-cap", name: "Grad Cap", price: 1000, image: "./blue-graduation-cap.png", thumb: "./blue-graduation-cap-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-eye-patch", name: "Eye Patch", price: 400, image: "./blue-eye-patch.png", thumb: "./blue-eye-patch-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-pirate-hat", name: "Pirate Hat", price: 1200, image: "./blue-pirate-hat.png", thumb: "./blue-pirate-hat-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-cowboy-hat", name: "Cowboy Hat", price: 800, image: "./blue-cowboy-hat.png", thumb: "./blue-cowboy-hat-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-wings", name: "Angel Wings", price: 1000, image: "./blue-wings.png", thumb: "./blue-wings-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-star-ferry", name: "Star Ferry", price: 600, image: "./blue-star-ferry.png", thumb: "./blue-star-ferry-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-cookies", name: "Cookie Tray", price: 400, image: "./blue-cookies.png", thumb: "./blue-cookies-thumb.png", note: "Ocean Buddy accessories" },
    { id: "blue-gold-cap", name: "Gold Cap", price: 1200, image: "./blue-gold-cap.png", thumb: "./blue-gold-cap-thumb.png", note: "Ocean Buddy accessories" },
  ],
  "pet-green.png": [
    { id: "green-bunny-balloon", name: "Bunny Balloon", price: 800, image: "./green-bunny-balloon.png", thumb: "./green-bunny-balloon-thumb.png", note: "Green Hopper accessories" },
    { id: "green-halo", name: "Halo", price: 1200, image: "./green-halo.png", thumb: "./green-halo-thumb.png", note: "Green Hopper accessories" },
    { id: "green-butterfly-net", name: "Butterfly Net", price: 400, image: "./green-butterfly-net.png", thumb: "./green-butterfly-net-thumb.png", note: "Green Hopper accessories" },
    { id: "green-candy-skewer", name: "Candy Skewer", price: 500, image: "./green-candy-skewer.png", thumb: "./green-candy-skewer-thumb.png", note: "Green Hopper accessories" },
    { id: "green-lemon-juice", name: "Lemon Juice", price: 1200, image: "./green-lemon-juice.png", thumb: "./green-lemon-juice-thumb.png", note: "Green Hopper accessories" },
    { id: "green-cotton-candy", name: "Cotton Candy", price: 1200, image: "./green-cotton-candy.png", thumb: "./green-cotton-candy-thumb.png", note: "Green Hopper accessories" },
    { id: "green-pudding", name: "Pudding", price: 800, image: "./green-pudding.png", thumb: "./green-pudding-thumb.png", note: "Green Hopper accessories" },
    { id: "green-egg-waffles", name: "Egg Waffles", price: 600, image: "./green-egg-waffles.png", thumb: "./green-egg-waffles-thumb.png", note: "Green Hopper accessories" },
    { id: "green-pocket-mirror", name: "Pocket Mirror", price: 400, image: "./green-pocket-mirror.png", thumb: "./green-pocket-mirror-thumb.png", note: "Green Hopper accessories" },
    { id: "green-pink-glasses", name: "Pink Glasses", price: 600, image: "./green-pink-glasses.png", thumb: "./green-pink-glasses-thumb.png", note: "Green Hopper accessories" },
    { id: "green-mustache", name: "Mustache", price: 500, image: "./green-mustache.png", thumb: "./green-mustache-thumb.png", note: "Green Hopper accessories" },
    { id: "green-angel-wings", name: "Angel Wings", price: 1200, image: "./green-angel-wings.png", thumb: "./green-angel-wings-thumb.png", note: "Green Hopper accessories" },
  ],
  "pet-yellow.png": [
    { id: "yellow-wizard-hat", name: "Wizard Hat", price: 1200, image: "./yellow-wizard-hat.png", thumb: "./yellow-wizard-hat-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-sailor-hat", name: "Sailor Hat", price: 1000, image: "./yellow-sailor-hat.png", thumb: "./yellow-sailor-hat-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-pumpkin-hat", name: "Pumpkin Hat", price: 800, image: "./yellow-pumpkin-hat.png", thumb: "./yellow-pumpkin-hat-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-pudding-hat", name: "Pudding Hat", price: 800, image: "./yellow-pudding-hat.png", thumb: "./yellow-pudding-hat-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-dino-hat", name: "Dino Hat", price: 1000, image: "./yellow-dino-hat.png", thumb: "./yellow-dino-hat-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-strawberry-hat", name: "Strawberry Hat", price: 800, image: "./yellow-strawberry-hat.png", thumb: "./yellow-strawberry-hat-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-flower-crown", name: "Flower Crown", price: 800, image: "./yellow-flower-crown.png", thumb: "./yellow-flower-crown-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-bat-wings", name: "Bat Wings", price: 1200, image: "./yellow-bat-wings.png", thumb: "./yellow-bat-wings-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-water-drop", name: "Water Drop", price: 900, image: "./yellow-water-drop.png", thumb: "./yellow-water-drop-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-bandage", name: "Bandage", price: 400, image: "./yellow-bandage.png", thumb: "./yellow-bandage-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-star-wand", name: "Star Wand", price: 800, image: "./yellow-star-wand.png", thumb: "./yellow-star-wand-thumb.png", note: "Yellow Spark accessories" },
    { id: "yellow-star-glasses", name: "Star Glasses", price: 600, image: "./yellow-star-glasses.png", thumb: "./yellow-star-glasses-thumb.png", note: "Yellow Spark accessories" },
  ],
  "pet-orange.png": [
    { id: "orange-pink-glasses", name: "Pink Glasses", price: 1200, image: "./orange-pink-glasses.png", thumb: "./orange-pink-glasses-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-purple-horns", name: "Purple Horns", price: 1000, image: "./orange-purple-horns.png", thumb: "./orange-purple-horns-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-candy-mask", name: "Candy Mask", price: 1000, image: "./orange-candy-mask.png", thumb: "./orange-candy-mask-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-pink-bow", name: "Pink Bow", price: 400, image: "./orange-pink-bow.png", thumb: "./orange-pink-bow-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-bubble-wand", name: "Bubble Wand", price: 800, image: "./orange-bubble-wand.png", thumb: "./orange-bubble-wand-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-party-hat", name: "Party Hat", price: 1200, image: "./orange-party-hat.png", thumb: "./orange-party-hat-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-bear-ears", name: "Bear Ears", price: 1000, image: "./orange-bear-ears.png", thumb: "./orange-bear-ears-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-camera", name: "Camera", price: 600, image: "./orange-camera.png", thumb: "./orange-camera-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-name-tag", name: "Name Tag", price: 400, image: "./orange-name-tag.png", thumb: "./orange-name-tag-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-monkey-charm", name: "Monkey Charm", price: 1000, image: "./orange-monkey-charm.png", thumb: "./orange-monkey-charm-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-waffle", name: "Waffle", price: 500, image: "./orange-waffle.png", thumb: "./orange-waffle-thumb.png", note: "Orange Scout accessories" },
    { id: "orange-pineapple-hat", name: "Pineapple Hat", price: 800, image: "./orange-pineapple-hat.png", thumb: "./orange-pineapple-hat-thumb.png", note: "Orange Scout accessories" },
  ],
  "pet-purple.png": [
    { id: "purple-butter-toast", name: "Butter Toast", price: 400, image: "./purple-butter-toast.png", thumb: "./purple-butter-toast-thumb.png", note: "Purple Night accessories" },
    { id: "purple-egg-tart", name: "Egg Tart", price: 400, image: "./purple-egg-tart.png", thumb: "./purple-egg-tart-thumb.png", note: "Purple Night accessories" },
    { id: "purple-fish-ball-bowl", name: "Fish Ball Bowl", price: 800, image: "./purple-fish-ball-bowl.png", thumb: "./purple-fish-ball-bowl-thumb.png", note: "Purple Night accessories" },
    { id: "purple-umbrella", name: "Floral Umbrella", price: 1200, image: "./purple-umbrella.png", thumb: "./purple-umbrella-thumb.png", note: "Purple Night accessories" },
    { id: "purple-taxi-sign", name: "Taxi Sign", price: 1000, image: "./purple-taxi-sign.png", thumb: "./purple-taxi-sign-thumb.png", note: "Purple Night accessories" },
    { id: "purple-milk-tea", name: "Milk Tea", price: 800, image: "./purple-milk-tea.png", thumb: "./purple-milk-tea-thumb.png", note: "Purple Night accessories" },
    { id: "purple-ferry-bag", name: "Ferry Bag", price: 1000, image: "./purple-ferry-bag.png", thumb: "./purple-ferry-bag-thumb.png", note: "Purple Night accessories" },
    { id: "purple-minibus-sign", name: "Minibus Sign", price: 600, image: "./purple-minibus-sign.png", thumb: "./purple-minibus-sign-thumb.png", note: "Purple Night accessories" },
    { id: "purple-market-bag", name: "Market Bag", price: 900, image: "./purple-market-bag.png", thumb: "./purple-market-bag-thumb.png", note: "Purple Night accessories" },
    { id: "purple-pineapple-bun", name: "Pineapple Bun", price: 1200, image: "./purple-pineapple-bun.png", thumb: "./purple-pineapple-bun-thumb.png", note: "Purple Night accessories" },
    { id: "purple-mushroom-hat", name: "Mushroom Hat", price: 800, image: "./purple-mushroom-hat.png", thumb: "./purple-mushroom-hat-thumb.png", note: "Purple Night accessories" },
    { id: "purple-crown", name: "Royal Crown", price: 1000, image: "./purple-crown.png", thumb: "./purple-crown-thumb.png", note: "Purple Night accessories" },
  ],
  "pet-pink.png": [
    { id: "pink-card-pass", name: "Card Pass", price: 1000, image: "./pink-card-pass.png", thumb: "./pink-card-pass-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-milk-tea", name: "Milk Tea", price: 800, image: "./pink-milk-tea.png", thumb: "./pink-milk-tea-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-neon-sign", name: "Neon Sign", price: 400, image: "./pink-neon-sign.png", thumb: "./pink-neon-sign-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-woven-bag", name: "Woven Bag", price: 600, image: "./pink-woven-bag.png", thumb: "./pink-woven-bag-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-bouquet", name: "Flower Bouquet", price: 1200, image: "./pink-bouquet.png", thumb: "./pink-bouquet-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-strawberry-bag", name: "Strawberry Bag", price: 1200, image: "./pink-strawberry-bag.png", thumb: "./pink-strawberry-bag-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-butterfly", name: "Butterfly", price: 600, image: "./pink-butterfly.png", thumb: "./pink-butterfly-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-fox-ears", name: "Fox Ears", price: 800, image: "./pink-fox-ears.png", thumb: "./pink-fox-ears-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-mustache-face", name: "Mustache", price: 500, image: "./pink-mustache-face.png", thumb: "./pink-mustache-face-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-santa-hat", name: "Santa Hat", price: 1000, image: "./pink-santa-hat.png", thumb: "./pink-santa-hat-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-flower-clip", name: "Flower Clip", price: 600, image: "./pink-flower-clip.png", thumb: "./pink-flower-clip-thumb.png", note: "Pink Mist accessories" },
    { id: "pink-bear-bag", name: "Bear Bag", price: 800, image: "./pink-bear-bag.png", thumb: "./pink-bear-bag-thumb.png", note: "Pink Mist accessories" },
  ],
  "pet-selected.png": [
    { id: "rabbit-chick-hat", name: "Chick Hat", price: 1200, image: "./rabbit-chick-hat.png", thumb: "./rabbit-chick-hat-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-gold-crown", name: "Gold Crown", price: 1000, image: "./rabbit-gold-crown.png", thumb: "./rabbit-gold-crown-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-bubble", name: "Bubble", price: 400, image: "./rabbit-bubble.png", thumb: "./rabbit-bubble-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-straw-hat", name: "Straw Hat", price: 600, image: "./rabbit-straw-hat.png", thumb: "./rabbit-straw-hat-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-star-wand", name: "Star Wand", price: 600, image: "./rabbit-star-wand.png", thumb: "./rabbit-star-wand-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-bunny-ears", name: "Bunny Ears", price: 1200, image: "./rabbit-bunny-ears.png", thumb: "./rabbit-bunny-ears-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-chef-hat", name: "Chef Hat", price: 1200, image: "./rabbit-chef-hat.png", thumb: "./rabbit-chef-hat-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-red-bow", name: "Red Bow", price: 800, image: "./rabbit-red-bow.png", thumb: "./rabbit-red-bow-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-star-stickers", name: "Star Stickers", price: 400, image: "./rabbit-star-stickers.png", thumb: "./rabbit-star-stickers-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-star-clip", name: "Star Clip", price: 400, image: "./rabbit-star-clip.png", thumb: "./rabbit-star-clip-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-ice-cream", name: "Ice Cream", price: 800, image: "./rabbit-ice-cream.png", thumb: "./rabbit-ice-cream-thumb.png", note: "Pink Bunny accessories" },
    { id: "rabbit-fish-skewer", name: "Fish Skewer", price: 600, image: "./rabbit-fish-skewer.png", thumb: "./rabbit-fish-skewer-thumb.png", note: "Pink Bunny accessories" },
  ],
  default: [
    { id: "default-star-charm", name: "Star Charm", price: 120, className: "is-star-charm", note: "Special decorations for this partner" },
    { id: "default-berry-bow", name: "Berry Bow", price: 160, className: "is-berry-bow", note: "Special decorations for this partner" },
    { id: "default-sun-crown", name: "Tiny Crown", price: 230, className: "is-sun-crown", note: "Special decorations for this partner" },
  ],
};

const homeEffectsCatalog = [
  { id: "home-rocking-unicorn", name: "Rocking Unicorn", price: 1200, image: "./home-effect-unicorn.png" },
  { id: "home-christmas-tree", name: "Christmas Tree", price: 1000, image: "./home-effect-tree.png" },
  { id: "home-floor-lamp", name: "Floor Lamp", price: 800, image: "./home-effect-lamp.png" },
  { id: "home-flower-pot", name: "Flower Pot", price: 800, image: "./home-effect-flower-pot.png" },
  { id: "home-spray-bottle", name: "Spray Bottle", price: 400, image: "./home-effect-spray.png" },
  { id: "home-cupcake", name: "Cupcake", price: 400, image: "./home-effect-cupcake.png" },
  { id: "home-armchair", name: "Rainbow Armchair", price: 800, image: "./home-effect-armchair.png" },
  { id: "home-camera", name: "Retro Camera", price: 600, image: "./home-effect-camera-clean.png" },
  { id: "home-chocolate-cake", name: "Chocolate Cake", price: 900, image: "./home-effect-cake.png" },
  { id: "home-gift-box", name: "Gift Box", price: 1200, image: "./home-effect-gift.png" },
  { id: "home-wooden-stool", name: "Wooden Stool", price: 800, image: "./home-effect-stool.png" },
  { id: "home-heart-cushion", name: "Heart Cushion", price: 600, image: "./home-effect-heart.png" },
];

const dashboardBackgrounds = [
  { src: "./sea-background.png", weight: 0.65 },
  { src: "./sky-background.png", weight: 0.25 },
  { src: "./grass-background.png", weight: 0.1 },
];

const checkpoints = [
  {
    id: "yuen-viewpoint-1",
    title: "Yuen Chau Kok Park Viewpoint",
    lat: 22.3831,
    lng: 114.2045,
    unlockItem: {
      name: "Mysterious items A",
      image: "./yuen-walk-item-a.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-1-hero.png",
    unlockIndex: 0,
    heroVariant: "route-one",
    completed: false,
    photo: null,
  },
  {
    id: "yuen-route-2",
    title: "Yuen Chau Kok Park Route 2",
    lat: 22.3827,
    lng: 114.2049,
    unlockItem: {
      name: "Mysterious items B",
      image: "./yuen-walk-item-b.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-2-hero.png",
    unlockIndex: 1,
    heroVariant: "route-two",
    completed: false,
    photo: null,
  },
  {
    id: "yuen-route-3",
    title: "Yuen Chau Kok Park Route 3",
    lat: 22.3833,
    lng: 114.2056,
    unlockItem: {
      name: "Mysterious items C",
      image: "./yuen-walk-item-c.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-3-hero.png",
    unlockIndex: 2,
    heroVariant: "route-three",
    completed: false,
    photo: null,
  },
  {
    id: "yuen-route-4",
    title: "Yuen Chau Kok Park Route 4",
    lat: 22.384,
    lng: 114.2062,
    unlockItem: {
      name: "Mysterious items D",
      image: "./yuen-walk-item-d.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-4-hero.png",
    unlockIndex: 3,
    heroVariant: "route-four",
    completed: false,
    photo: null,
  },
  {
    id: "yuen-route-5",
    title: "Yuen Chau Kok Park Route 5",
    lat: 22.3844,
    lng: 114.2068,
    unlockItem: {
      name: "Mysterious items D",
      image: "./yuen-walk-item-d.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-5-hero.png",
    unlockIndex: 3,
    heroVariant: "route-five",
    completed: false,
    photo: null,
  },
  {
    id: "yuen-route-6",
    title: "Yuen Chau Kok Park Route 6",
    lat: 22.3848,
    lng: 114.2074,
    unlockItem: {
      name: "Mysterious items D",
      image: "./yuen-walk-item-d.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-6-hero.png",
    unlockIndex: 3,
    heroVariant: "route-six",
    completed: false,
    photo: null,
  },
  {
    id: "yuen-route-7",
    title: "Yuen Chau Kok Park Route 7",
    lat: 22.3852,
    lng: 114.208,
    unlockItem: {
      name: "Mysterious items D",
      image: "./yuen-walk-item-d.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-7-hero.png",
    unlockIndex: 3,
    heroVariant: "route-seven",
    completed: false,
    photo: null,
  },
  {
    id: "yuen-route-8",
    title: "Yuen Chau Kok Park Route 8",
    lat: 22.3856,
    lng: 114.2086,
    unlockItem: {
      name: "Mysterious items D",
      image: "./yuen-walk-item-d.png",
    },
    distanceRequired: 80,
    image: "./yuen-checkpoint-8-hero.png",
    unlockIndex: 3,
    heroVariant: "route-eight",
    completed: false,
    photo: null,
  },
];

const hungMuiKukCheckpoints = [
  {
    id: "hung-stone-trail",
    title: "Hung Mui Kuk Route 1",
    lat: 22.3748,
    lng: 114.1921,
    unlockItem: {
      name: "Mysterious items A",
      image: "./hung-walk-item-a.png",
    },
    distanceRequired: 80,
    image: "./hung-route-1-thumb.png",
    thumb: "./hung-route-1-thumb.png",
    cameraLabel: "Hung Mui Kuk Barbecue Area",
    unlockIndex: 0,
    heroVariant: "hung-one",
    completed: false,
    photo: null,
  },
  {
    id: "hung-forest-turn",
    title: "Hung Mui Kuk Route 2",
    lat: 22.3761,
    lng: 114.1908,
    unlockItem: {
      name: "Mysterious items B",
      image: "./hung-walk-item-b.png",
    },
    distanceRequired: 80,
    image: "./hung-checkpoint-2-hero.png",
    thumb: "./hung-route-2-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Hung Mui Kuk Barbecue Area",
    unlockIndex: 1,
    heroVariant: "hung-two",
    completed: false,
    photo: null,
  },
  {
    id: "hung-hillside-view",
    title: "Hung Mui Kuk Route 3",
    lat: 22.3773,
    lng: 114.1896,
    unlockItem: {
      name: "Mysterious items C",
      image: "./hung-walk-item-c.png",
    },
    distanceRequired: 80,
    image: "./hung-route-3-thumb.png",
    thumb: "./hung-route-3-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Hung Mui Kuk Barbecue Area",
    unlockIndex: 2,
    heroVariant: "hung-three",
    completed: false,
    photo: null,
  },
  {
    id: "hung-trail-exit",
    title: "Hung Mui Kuk Route 4",
    lat: 22.3784,
    lng: 114.1889,
    unlockItem: {
      name: "Mysterious items D",
      image: "./hung-walk-item-d.png",
    },
    distanceRequired: 80,
    image: "./hung-checkpoint-4-hero.png",
    thumb: "./hung-route-4-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Hung Mui Kuk Barbecue Area",
    unlockIndex: 3,
    heroVariant: "hung-four",
    completed: false,
    photo: null,
  },
];

const taoFongShanCheckpoints = [
  {
    id: "tao-bridge-view",
    title: "Tao Fong Shan Route 1",
    lat: 22.3815,
    lng: 114.1952,
    unlockItem: {
      name: "Mysterious items A",
      image: "./reward-item-a-box.png",
    },
    distanceRequired: 80,
    image: "./tao-checkpoint-1-hero.png",
    thumb: "./tao-route-1-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Tao Fong Shan Trail",
    unlockIndex: 0,
    heroVariant: "tao-one",
    completed: false,
    photo: null,
  },
  {
    id: "tao-cross-view",
    title: "Tao Fong Shan Route 2",
    lat: 22.3822,
    lng: 114.196,
    unlockItem: {
      name: "Mysterious items B",
      image: "./reward-item-b-chest.png",
    },
    distanceRequired: 80,
    image: "./tao-checkpoint-2-hero.png",
    thumb: "./tao-route-2-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Tao Fong Shan Cross",
    unlockIndex: 1,
    heroVariant: "tao-two",
    completed: false,
    photo: null,
  },
  {
    id: "tao-labyrinth-view",
    title: "Tao Fong Shan Route 3",
    lat: 22.3828,
    lng: 114.1967,
    unlockItem: {
      name: "Mysterious items C",
      image: "./reward-item-c-potion.png",
    },
    distanceRequired: 80,
    image: "./tao-route-3-thumb.png",
    thumb: "./tao-route-3-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Tao Fong Shan Labyrinth",
    unlockIndex: 2,
    heroVariant: "tao-three",
    completed: false,
    photo: null,
  },
];

const pakShekKokCheckpoints = [
  {
    id: "pak-waterfront-start",
    title: "Pak Shek Kok Route 1",
    lat: 22.4265,
    lng: 114.2118,
    unlockItem: {
      name: "Mysterious items A",
      image: "./reward-item-a-box.png",
    },
    distanceRequired: 80,
    image: "./pak-route-1-thumb.png",
    thumb: "./pak-route-1-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Pak Shek Kok Promenade",
    unlockIndex: 0,
    heroVariant: "pak-one",
    completed: false,
    photo: null,
  },
  {
    id: "pak-harbour-view",
    title: "Pak Shek Kok Route 2",
    lat: 22.4252,
    lng: 114.2124,
    unlockItem: {
      name: "Mysterious items B",
      image: "./reward-item-b-chest.png",
    },
    distanceRequired: 80,
    image: "./pak-route-2-thumb.png",
    thumb: "./pak-route-2-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Pak Shek Kok Promenade",
    unlockIndex: 1,
    heroVariant: "pak-two",
    completed: false,
    photo: null,
  },
  {
    id: "pak-seaside-trees",
    title: "Pak Shek Kok Route 3",
    lat: 22.4238,
    lng: 114.2131,
    unlockItem: {
      name: "Mysterious items C",
      image: "./reward-item-c-potion.png",
    },
    distanceRequired: 80,
    image: "./pak-route-3-thumb.png",
    thumb: "./pak-route-3-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Pak Shek Kok Promenade",
    unlockIndex: 2,
    heroVariant: "pak-three",
    completed: false,
    photo: null,
  },
  {
    id: "pak-coastal-path",
    title: "Pak Shek Kok Route 4",
    lat: 22.4221,
    lng: 114.2139,
    unlockItem: {
      name: "Mysterious items D",
      image: "./reward-item-d-scroll.png",
    },
    distanceRequired: 80,
    image: "./pak-route-4-thumb.png",
    thumb: "./pak-route-4-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Pak Shek Kok Promenade",
    unlockIndex: 3,
    heroVariant: "pak-four",
    completed: false,
    photo: null,
  },
  {
    id: "pak-promenade-end",
    title: "Pak Shek Kok Route 5",
    lat: 22.4208,
    lng: 114.2146,
    unlockItem: {
      name: "Mysterious items D",
      image: "./reward-item-d-scroll.png",
    },
    distanceRequired: 80,
    image: "./pak-route-5-thumb.png",
    thumb: "./pak-route-5-thumb.png",
    walkDistance: "1.6km",
    cameraLabel: "Pak Shek Kok Promenade",
    unlockIndex: 3,
    heroVariant: "pak-five",
    completed: false,
    photo: null,
  },
];

const rewardItems = [
  {
    id: "item-b",
    heading: "Congratulations!",
    name: "Mysterious Item B",
    image: "./reward-item-b-chest.png",
    description: "A rare treasure found in Yuen chau Kok Park. This item holds the secrets of the literary walk.",
  },
  {
    id: "item-a",
    heading: "Congratulations!",
    name: "Mysterious Item A",
    image: "./reward-item-a-box.png",
    description: "A rare treasure found in Yuen chau Kok Park. This item holds the secrets of the literary walk.",
  },
  {
    id: "item-c",
    heading: "Amazing Discovery!",
    name: "Mysterious Item C",
    image: "./reward-item-c-potion.png",
    description: "A rare treasure found in Yuen chau Kok Park. This item holds the secrets of the literary walk.",
  },
  {
    id: "item-d",
    heading: "Amazing Discovery!",
    name: "Mysterious Item D",
    image: "./reward-item-d-scroll.png",
    description: "A rare treasure found in Yuen chau Kok Park. This item holds the secrets of the literary walk.",
  },
];

const petBurstSymbols = [
  { text: "♥", className: "is-heart" },
  { text: "♡", className: "is-heart" },
  { text: "✦", className: "is-spark" },
  { text: "★", className: "is-spark" },
  { text: "✧", className: "is-spark" },
];

let totalSteps = 0;
let translated = false;
let selectedGoal = 8000;
let selectedPet = pets[0];
let ownedDecorations = new Set(Object.values(decorationCatalog).flat().map((decoration) => decoration.id));
let shopActiveTab = "accessories";
let shopCoins = 1250;
let ownedHomeEffects = new Set();
let equippedDecorations = {};
let equippedHomeEffect = null;
let pendingHomeEffectPurchase = null;
let homeEffectPositions = {};
let homeEffectDragState = null;
let suppressHomeEffectClick = false;
let hatchTaps = 0;
let isPetSpinning = false;
let dashboardExp = 40;
let activeRecommendationTarget = "literature";
let createRouteMap = null;
let createRoutePolyline = null;
let createRouteMarkers = [];
let createdRoutes = [];
let customRoutePoints = [];
let activeRouteDetailKey = "yuen";
let activeRouteWalkKey = "yuen";
let activeCheckpoint = checkpoints[0];
let socialReturnScreen = "dashboard";
let selfieStream = null;
let selfiePhoto = null;
let cameraStream = null;
let currentCheckinPosition = null;
let currentCheckpointDistance = null;
let currentHongKongWeather = {
  temp: "20°C",
  humidity: "70%",
  condition: "Cloudy",
  icon: "☁️",
  reason: "Urban and parks routes, gentle slopes and rich scenes. Perfect for beginner exploring.",
};

const titleScreen = document.querySelector("#titleScreen");
const profileScreen = document.querySelector("#profileScreen");
const bodyScreen = document.querySelector("#bodyScreen");
const selfieScreen = document.querySelector("#selfieScreen");
const hatchScreen = document.querySelector("#hatchScreen");
const partnerScreen = document.querySelector("#partnerScreen");
const dashboardScreen = document.querySelector("#dashboardScreen");
const collectionScreen = document.querySelector("#collectionScreen");
const schoolLeaderboardScreen = document.querySelector("#schoolLeaderboardScreen");
const friendsListScreen = document.querySelector("#friendsListScreen");
const friendFeedScreen = document.querySelector("#friendFeedScreen");
const myFeedScreen = document.querySelector("#myFeedScreen");
const newPostScreen = document.querySelector("#newPostScreen");
const walkScreen = document.querySelector("#walkScreen");
const createRouteScreen = document.querySelector("#createRouteScreen");
const literatureScreen = document.querySelector("#literatureScreen");
const natureScreen = document.querySelector("#natureScreen");
const routeWalkScreen = document.querySelector("#routeWalkScreen");
const checkpointScreen = document.querySelector("#checkpointScreen");
const cameraCheckinScreen = document.querySelector("#cameraCheckinScreen");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const translateButton = document.querySelector("#translateButton");
const localizedTitle = document.querySelector("#localizedTitle");
const profileForm = document.querySelector("#profileForm");
const bodyForm = document.querySelector("#bodyForm");
const bodyBackButton = document.querySelector("#bodyBackButton");
const schoolInput = document.querySelector("#schoolInput");
const classInput = document.querySelector("#classInput");
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const selfiePreview = document.querySelector("#selfiePreview");
const selfieCanvas = document.querySelector("#selfieCanvas");
const selfieCapturedImage = document.querySelector("#selfieCapturedImage");
const selfieEmptyState = document.querySelector("#selfieEmptyState");
const selfieCaptureButton = document.querySelector("#selfieCaptureButton");
const selfieStatusText = document.querySelector("#selfieStatusText");
const selfieBackButton = document.querySelector("#selfieBackButton");
const selfieNextButton = document.querySelector("#selfieNextButton");
const walkerLabel = document.querySelector("#walkerLabel");
const goalLabel = document.querySelector("#goalLabel");
const partnerBackButton = document.querySelector("#partnerBackButton");
const partnerCreateButton = document.querySelector("#partnerCreateButton");
const rerollPetButton = document.querySelector("#rerollPetButton");
const partnerName = document.querySelector("#partnerName");
const partnerPetFrame = document.querySelector("#partnerPetFrame");
const hatchTapArea = document.querySelector("#hatchTapArea");
const petEgg = document.querySelector("#petEgg");
const hatchProgressBar = document.querySelector("#hatchProgressBar");
const hatchCounter = document.querySelector("#hatchCounter");
const hatchTip = document.querySelector("#hatchTip");
const dashboardUserName = document.querySelector("#dashboardUserName");
const dashboardExpBar = document.querySelector("#dashboardExpBar");
const dashboardExpText = document.querySelector("#dashboardExpText");
const dashboardPetImage = document.querySelector("#dashboardPetImage");
const dashboardPetStage = document.querySelector(".dashboard-pet-stage");
const dashboardPetDecoration = document.querySelector("#dashboardPetDecoration");
const dashboardHomeEffect = document.querySelector("#dashboardHomeEffect");
const dashboardStepCount = document.querySelector("#dashboardStepCount");
const dashboardCardsCollection = document.querySelector(".cards-collection");
const dashboardFindButton = document.querySelector("#dashboardFindButton");
const dashboardShopButton = document.querySelector("#dashboardShopButton");
const dashboardSocialButton = document.querySelector("#dashboardSocialButton");
const dashboardSchoolButton = document.querySelector("#dashboardSchoolButton");
const dashboardStepButton = document.querySelector("#dashboardStepButton");
const dashboardSideToggle = document.querySelector("#dashboardSideToggle");
const dashboardSideNav = document.querySelector(".dashboard-side-nav");
const shopDecorationPanel = document.querySelector("#shopDecorationPanel");
const shopDecorationCloseButton = document.querySelector("#shopDecorationCloseButton");
const shopDecorationGrid = document.querySelector("#shopDecorationGrid");
const shopAccessoriesTab = document.querySelector("#shopAccessoriesTab");
const shopHomeEffectsTab = document.querySelector("#shopHomeEffectsTab");
const shopWalletAmount = document.querySelector("#shopWalletAmount");
const shopPreviewPetImage = document.querySelector("#shopPreviewPetImage");
const shopPreviewDecoration = document.querySelector("#shopPreviewDecoration");
const shopPetTitle = document.querySelector("#shopPetTitle");
const shopPetSubtitle = document.querySelector("#shopPetSubtitle");
const shopPurchaseOverlay = document.querySelector("#shopPurchaseOverlay");
const shopPurchaseCloseButton = document.querySelector("#shopPurchaseCloseButton");
const shopPurchaseCancelButton = document.querySelector("#shopPurchaseCancelButton");
const shopPurchaseConfirmButton = document.querySelector("#shopPurchaseConfirmButton");
const shopPurchaseImage = document.querySelector("#shopPurchaseImage");
const shopPurchaseItemName = document.querySelector("#shopPurchaseItemName");
const shopPurchaseCost = document.querySelector("#shopPurchaseCost");
const shopPurchaseBalance = document.querySelector("#shopPurchaseBalance");
const shopSuccessOverlay = document.querySelector("#shopSuccessOverlay");
const shopSuccessCloseButton = document.querySelector("#shopSuccessCloseButton");
const shopSuccessOkButton = document.querySelector("#shopSuccessOkButton");
const shopSuccessImage = document.querySelector("#shopSuccessImage");
const shopSuccessItemName = document.querySelector("#shopSuccessItemName");
const shopSuccessCost = document.querySelector("#shopSuccessCost");
const collectionBackButton = document.querySelector("#collectionBackButton");
const schoolRankBackButton = document.querySelector("#schoolRankBackButton");
const schoolRankActionButton = document.querySelector("#schoolRankActionButton");
const friendsListBackButton = document.querySelector("#friendsListBackButton");
const friendFeedBackButton = document.querySelector("#friendFeedBackButton");
const friendFeedAddPostButton = document.querySelector("#friendFeedAddPostButton");
const friendsProfileButton = document.querySelector("#friendsProfileButton");
const friendsFeedProfileButton = document.querySelector("#friendsFeedProfileButton");
const myFeedBackButton = document.querySelector("#myFeedBackButton");
const newPostBackButton = document.querySelector("#newPostBackButton");
const newPostForm = document.querySelector("#newPostForm");
const newPostText = document.querySelector("#newPostText");
const newPostCount = document.querySelector("#newPostCount");
const newPostPhotoInput = document.querySelector("#newPostPhotoInput");
const newPostPreviewGrid = document.querySelector("#newPostPreviewGrid");
const newPostLocationButton = document.querySelector("#newPostLocationButton");
const newPostLocationText = document.querySelector("#newPostLocationText");
const friendsNavButtons = document.querySelectorAll(".friends-bottom-nav [data-friends-tab]");
const schoolRankUserPetImage = document.querySelector("#schoolRankUserPetImage");
const schoolRankUserName = document.querySelector("#schoolRankUserName");
const schoolRankUserClass = document.querySelector("#schoolRankUserClass");
const schoolRankUserSteps = document.querySelector("#schoolRankUserSteps");
const schoolRankCurrentPetImage = document.querySelector("#schoolRankCurrentPetImage");
const schoolRankCurrentName = document.querySelector("#schoolRankCurrentName");
const friendsProfilePetImage = document.querySelector("#friendsProfilePetImage");
const friendsProfileName = document.querySelector("#friendsProfileName");
const friendsFeedProfilePetImage = document.querySelector("#friendsFeedProfilePetImage");
const friendsFeedProfileName = document.querySelector("#friendsFeedProfileName");
const myFeedProfilePetImage = document.querySelector("#myFeedProfilePetImage");
const myFeedProfileName = document.querySelector("#myFeedProfileName");
const newPostProfilePetImage = document.querySelector("#newPostProfilePetImage");
const newPostProfileName = document.querySelector("#newPostProfileName");
const cardsCollectionCount = document.querySelector("#cardsCollectionCount");
const translateCardButtons = document.querySelectorAll(".translate-card-button");
const routeList = document.querySelector("#routeList");
const createRouteButton = document.querySelector("#createRouteButton");
const myRouteButton = document.querySelector("#myRouteButton");
const createRouteBackButton = document.querySelector("#createRouteBackButton");
const createRouteForm = document.querySelector("#createRouteForm");
const createRouteMapElement = document.querySelector("#createRouteMap");
const customRouteLength = document.querySelector("#customRouteLength");
const customRouteHint = document.querySelector("#customRouteHint");
const undoRoutePointButton = document.querySelector("#undoRoutePointButton");
const literatureBackButton = document.querySelector("#literatureBackButton");
const natureBackButton = document.querySelector("#natureBackButton");
const literatureFilterButtons = document.querySelectorAll(".literature-screen:not(.nature-screen) .literature-filter-tabs button");
const literatureRouteCards = document.querySelectorAll(".literature-screen:not(.nature-screen) .literature-route-card");
const natureFilterButtons = document.querySelectorAll(".nature-screen .literature-filter-tabs button");
const natureRouteCards = document.querySelectorAll(".nature-screen .literature-route-card");
const recommendationOverlay = document.querySelector("#recommendationOverlay");
const recommendationCloseButton = document.querySelector("#recommendationCloseButton");
const recommendationDetailsButton = document.querySelector("#recommendationDetailsButton");
const recommendationRouteButton = document.querySelector("#recommendationRouteButton");
const recommendationRouteImage = document.querySelector("#recommendationRouteImage");
const recommendationDifficulty = document.querySelector("#recommendationDifficulty");
const recommendationRouteTitle = document.querySelector("#recommendationRouteTitle");
const weatherTemp = document.querySelector("#weatherTemp");
const weatherHumidity = document.querySelector("#weatherHumidity");
const weatherCondition = document.querySelector("#weatherCondition");
const weatherConditionIcon = document.querySelector("#weatherConditionIcon");
const recommendationReason = document.querySelector("#recommendationReason");
const stepCount = document.querySelector("#stepCount");
const progressBar = document.querySelector("#progressBar");
const routeDialog = document.querySelector("#routeDialog");
const routeDialogContent = document.querySelector("#routeDialogContent");
const routeDetailOverlay = document.querySelector("#routeDetailOverlay");
const routeDetailHeroImage = document.querySelector("#routeDetailHeroImage");
const routeDetailDifficulty = document.querySelector("#routeDetailDifficulty");
const routeDetailTitle = document.querySelector("#routeDetailTitle");
const routeDetailLocation = document.querySelector("#routeDetailLocation");
const routeDetailTime = document.querySelector("#routeDetailTime");
const routeDetailLength = document.querySelector("#routeDetailLength");
const routeDetailCloseButton = document.querySelector("#routeDetailCloseButton");
const routeRewardCards = document.querySelectorAll(".mini-reward-card");
const letsWalkButton = document.querySelector("#letsWalkButton");
const routeWalkBackButton = document.querySelector("#routeWalkBackButton");
const routeWalkMap = document.querySelector("#routeWalkMap");
const routeWalkMapImage = document.querySelector("#routeWalkMapImage");
const routeWalkName = document.querySelector("#routeWalkName");
const routeWalkDistanceValue = document.querySelector("#routeWalkDistanceValue");
const yuenCheckpointOneButton = document.querySelector("#yuenCheckpointOneButton");
const yuenCheckpointTwoButton = document.querySelector("#yuenCheckpointTwoButton");
const yuenCheckpointThreeButton = document.querySelector("#yuenCheckpointThreeButton");
const yuenCheckpointFourButton = document.querySelector("#yuenCheckpointFourButton");
const yuenCheckpointFiveButton = document.querySelector("#yuenCheckpointFiveButton");
const yuenCheckpointSixButton = document.querySelector("#yuenCheckpointSixButton");
const yuenCheckpointSevenButton = document.querySelector("#yuenCheckpointSevenButton");
const yuenCheckpointEightButton = document.querySelector("#yuenCheckpointEightButton");
const routePhotoButtons = document.querySelectorAll("[data-checkpoint-slot]");
const routeUnlockCards = document.querySelectorAll("[data-unlock-slot]");
const checkpointUnlockCards = document.querySelectorAll(".checkpoint-collection .unlock-card");
const checkpointBackButton = document.querySelector("#checkpointBackButton");
const checkpointArrivedButton = document.querySelector("#checkpointArrivedButton");
const checkpointHeroImage = document.querySelector("#checkpointHeroImage");
const checkpointDistanceValue = document.querySelector("#checkpointDistanceValue");
const cameraBackButton = document.querySelector("#cameraBackButton");
const cameraCheckpointTitle = document.querySelector("#cameraCheckpointTitle");
const cameraCheckpointMeta = document.querySelector("#cameraCheckpointMeta");
const cameraPhotoLabel = document.querySelector("#cameraPhotoLabel");
const cameraResultPhotoLabel = document.querySelector("#cameraResultPhotoLabel");
const cameraLocationName = document.querySelector("#cameraLocationName");
const cameraRequiredDistance = document.querySelector("#cameraRequiredDistance");
const cameraPreview = document.querySelector("#cameraPreview");
const cameraCanvas = document.querySelector("#cameraCanvas");
const capturedPhotoPreview = document.querySelector("#capturedPhotoPreview");
const cameraEmptyState = document.querySelector("#cameraEmptyState");
const cameraStatusCard = document.querySelector(".camera-status-card");
const cameraStatusText = document.querySelector("#cameraStatusText");
const cameraDistanceText = document.querySelector("#cameraDistanceText");
const retryLocationButton = document.querySelector("#retryLocationButton");
const captureCheckinButton = document.querySelector("#captureCheckinButton");
const cameraRetakeButton = document.querySelector("#cameraRetakeButton");
const cameraRetakeButtonInline = document.querySelector("#cameraRetakeButtonInline");
const cameraDoneButton = document.querySelector("#cameraDoneButton");
const rewardModal = document.querySelector("#rewardModal");
const rewardTitle = document.querySelector("#rewardTitle");
const rewardItemImage = document.querySelector("#rewardItemImage");
const rewardItemName = document.querySelector("#rewardItemName");
const rewardItemCopy = document.querySelector("#rewardItemCopy");
const rewardCloseButton = document.querySelector("#rewardCloseButton");
const rewardClaimButton = document.querySelector("#rewardClaimButton");
const routeWalkTabButtons = document.querySelectorAll("[data-walk-tab]");
const routeWalkPanels = document.querySelectorAll("[data-walk-panel]");
const discussionInputBar = document.querySelector(".discussion-input-bar");
const discussionThread = document.querySelector("#discussionThread");
const discussionMessageInput = document.querySelector("#discussionMessageInput");
const requiredFields = [
  { input: schoolInput, message: "Please enter your school." },
  { input: classInput, message: "Please enter your class." },
  { input: nameInput, message: "Please enter your name." },
  { input: ageInput, message: "Please enter your age." },
  { input: heightInput, message: "Please enter your height." },
  { input: weightInput, message: "Please enter your weight." },
];

function showScreen(screen) {
  titleScreen.classList.toggle("is-active", screen === "title");
  profileScreen.classList.toggle("is-active", screen === "profile");
  bodyScreen.classList.toggle("is-active", screen === "body");
  selfieScreen.classList.toggle("is-active", screen === "selfie");
  hatchScreen.classList.toggle("is-active", screen === "hatch");
  partnerScreen.classList.toggle("is-active", screen === "partner");
  dashboardScreen.classList.toggle("is-active", screen === "dashboard");
  collectionScreen.classList.toggle("is-active", screen === "collection");
  schoolLeaderboardScreen.classList.toggle("is-active", screen === "school-rank");
  friendsListScreen.classList.toggle("is-active", screen === "friends-list");
  friendFeedScreen.classList.toggle("is-active", screen === "friend-feed");
  myFeedScreen.classList.toggle("is-active", screen === "my-feed");
  newPostScreen.classList.toggle("is-active", screen === "new-post");
  walkScreen.classList.toggle("is-active", screen === "walk");
  createRouteScreen.classList.toggle("is-active", screen === "create-route");
  literatureScreen.classList.toggle("is-active", screen === "literature");
  natureScreen.classList.toggle("is-active", screen === "nature");
  routeWalkScreen.classList.toggle("is-active", screen === "route-walk");
  checkpointScreen.classList.toggle("is-active", screen === "checkpoint");
  cameraCheckinScreen.classList.toggle("is-active", screen === "camera-checkin");

  if (screen !== "camera-checkin") {
    stopCameraCheckin();
  }
  if (screen !== "selfie") {
    stopSelfieCamera();
  }

  if (screen === "create-route") {
    setTimeout(initializeCreateRouteMap, 80);
  }
  if (screen === "camera-checkin") {
    startCameraCheckin(activeCheckpoint);
  }
  if (screen === "selfie") {
    startSelfieCamera();
  }
  if (screen === "collection") {
    collectionScreen.scrollTop = 0;
  }
  if (screen === "school-rank" || screen === "friends-list" || screen === "friend-feed" || screen === "my-feed" || screen === "new-post") {
    updateSchoolLeaderboard();
  }
  if (screen === "friends-list" || screen === "friend-feed") {
    updateFriendsNavActive(screen === "friend-feed" ? "feed" : "list");
  }
}

function updateFriendsNavActive(activeTab) {
  friendsNavButtons.forEach((navButton) => {
    const isActive = navButton.dataset.friendsTab === activeTab;
    navButton.classList.toggle("is-active", isActive);
    navButton.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function updateProgress() {
  if (stepCount) {
    stepCount.textContent = totalSteps.toLocaleString("zh-Hans");
  }
  if (progressBar) {
    progressBar.style.width = `${Math.min(totalSteps / selectedGoal, 1) * 100}%`;
  }
  dashboardStepCount.textContent = Math.max(totalSteps, 1922).toLocaleString("zh-Hans");
}

function updateSchoolLeaderboard() {
  const displayName = (nameInput.value.trim() || "EMMA").toUpperCase();
  const petImage = selectedPet?.src || "./pet-yellow.png";
  const petName = selectedPet?.name || "Selected pet";
  schoolRankUserPetImage.src = petImage;
  schoolRankUserPetImage.alt = petName;
  schoolRankCurrentPetImage.src = petImage;
  schoolRankCurrentPetImage.alt = petName;
  friendsProfilePetImage.src = petImage;
  friendsProfilePetImage.alt = petName;
  friendsFeedProfilePetImage.src = petImage;
  friendsFeedProfilePetImage.alt = petName;
  myFeedProfilePetImage.src = petImage;
  myFeedProfilePetImage.alt = petName;
  newPostProfilePetImage.src = petImage;
  newPostProfilePetImage.alt = petName;
  schoolRankUserName.textContent = displayName;
  schoolRankCurrentName.textContent = displayName;
  friendsProfileName.textContent = displayName;
  friendsFeedProfileName.textContent = displayName;
  myFeedProfileName.textContent = displayName;
  newPostProfileName.textContent = displayName;
  schoolRankUserClass.textContent = "LEVEL 12 Guardians";
  schoolRankUserSteps.textContent = "12,450";
}

function updateNewPostCount() {
  newPostCount.textContent = `${newPostText.value.length}/280`;
}

function renderNewPostPreviews(files) {
  newPostPreviewGrid.innerHTML = "";
  Array.from(files).slice(0, 6).forEach((file) => {
    const preview = document.createElement("img");
    preview.src = URL.createObjectURL(file);
    preview.alt = file.name;
    preview.onload = () => URL.revokeObjectURL(preview.src);
    newPostPreviewGrid.appendChild(preview);
  });
}

function resetNewPostForm() {
  newPostForm.reset();
  newPostPreviewGrid.innerHTML = "";
  newPostLocationText.textContent = "Add location...";
  updateNewPostCount();
}

function renderPet(pet) {
  partnerPetFrame.innerHTML = "";

  const reel = document.createElement("div");
  reel.className = "pet-slot-reel";
  const item = createPetSlotItem(pet);
  reel.appendChild(item);
  partnerPetFrame.appendChild(reel);
}

function createPetSlotItem(pet) {
  const item = document.createElement("div");
  item.className = "pet-slot-item";
  const image = document.createElement("img");
  image.src = pet.src;
  image.alt = pet.name;
  item.appendChild(image);
  return item;
}

function pickRandomPet() {
  selectedPet = pets[Math.floor(Math.random() * pets.length)];
  renderPet(selectedPet);
}

function spinRandomPet() {
  if (isPetSpinning) return;
  isPetSpinning = true;

  const targetPet = pets[Math.floor(Math.random() * pets.length)];
  const spinPets = [];
  for (let i = 0; i < 15; i += 1) {
    spinPets.push(pets[(i + Math.floor(Math.random() * pets.length)) % pets.length]);
  }
  spinPets.push(targetPet);

  partnerPetFrame.innerHTML = "";
  partnerPetFrame.classList.add("is-spinning");
  const reel = document.createElement("div");
  reel.className = "pet-slot-reel";
  spinPets.forEach((pet) => reel.appendChild(createPetSlotItem(pet)));
  partnerPetFrame.appendChild(reel);

  requestAnimationFrame(() => {
    reel.classList.add("is-spinning");
    reel.style.transform = `translateY(-${(spinPets.length - 1) * 188}px)`;
  });

  window.setTimeout(() => {
    selectedPet = targetPet;
    isPetSpinning = false;
    partnerPetFrame.classList.remove("is-spinning");
    renderPet(selectedPet);
  }, 950);
}

function resetHatch() {
  hatchTaps = 0;
  petEgg.className = "pet-egg";
  hatchProgressBar.style.width = "0%";
  hatchCounter.textContent = "0/3";
  hatchTip.textContent = "Tap the egg to meet your companion!";
}

async function startSelfieCamera() {
  if (!selfiePreview || !selfieEmptyState) return;
  selfieStatusText.textContent = "Opening selfie camera...";
  selfieEmptyState.hidden = false;
  selfieCapturedImage.hidden = true;
  selfiePreview.hidden = false;
  selfieCaptureButton.disabled = false;

  if (!navigator.mediaDevices?.getUserMedia) {
    selfieStatusText.textContent = "Camera is not available in this browser.";
    selfieEmptyState.textContent = "Camera permission needed";
    selfiePreview.hidden = true;
    return;
  }

  try {
    if (!selfieStream) {
      selfieStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
    }
    selfiePreview.srcObject = selfieStream;
    await selfiePreview.play();
    selfieEmptyState.hidden = true;
    selfieStatusText.textContent = selfiePhoto ? "Selfie captured. You can retake it or continue." : "Camera ready. Capture your selfie.";
  } catch (error) {
    selfieStatusText.textContent = "Could not open selfie camera. Please allow camera permission and retry.";
    selfieEmptyState.textContent = "Camera permission needed";
    selfiePreview.hidden = true;
  }
}

function stopSelfieCamera() {
  if (!selfieStream) return;
  selfieStream.getTracks().forEach((track) => track.stop());
  selfieStream = null;
  if (selfiePreview) {
    selfiePreview.srcObject = null;
  }
}

function captureSelfie() {
  if (!selfieStream || !selfiePreview.srcObject) {
    selfieStatusText.textContent = "Camera is not ready. Please allow camera permission and retry.";
    startSelfieCamera();
    return;
  }

  const width = selfiePreview.videoWidth || 640;
  const height = selfiePreview.videoHeight || 480;
  selfieCanvas.width = width;
  selfieCanvas.height = height;
  const context = selfieCanvas.getContext("2d");
  context.translate(width, 0);
  context.scale(-1, 1);
  context.drawImage(selfiePreview, 0, 0, width, height);

  selfiePhoto = selfieCanvas.toDataURL("image/png");
  selfieCapturedImage.src = selfiePhoto;
  selfieCapturedImage.hidden = false;
  selfiePreview.hidden = true;
  selfieEmptyState.hidden = true;
  selfieStatusText.textContent = "Selfie captured. Tap Skip to hatch your partner.";
}

function updateHatch() {
  hatchProgressBar.style.width = `${(hatchTaps / 3) * 100}%`;
  hatchCounter.textContent = `${hatchTaps}/3`;
  petEgg.classList.toggle("cracked", hatchTaps >= 1);
  petEgg.classList.toggle("opening", hatchTaps >= 2);
  hatchTip.textContent = hatchTaps >= 2 ? "Almost there! Just a few more taps!" : "Tap the egg to meet your companion!";
}

function renderRoutes() {
  routeList.innerHTML = "";
  routes.slice(0, 2).forEach((route) => {
    const card = document.createElement("button");
    card.className = "find-category-card";
    card.type = "button";
    card.innerHTML = `
      <img src="${route.image}" alt="" />
      <span>${route.title}</span>
    `;
    card.addEventListener("click", () => {
      if (route.title === "Literature") {
        showScreen("literature");
        setTimeout(() => openRecommendation("literature"), 120);
        return;
      }
      if (route.title === "Nature") {
        showScreen("nature");
        setTimeout(() => openRecommendation("nature"), 120);
        return;
      }
      openRoute(route);
    });
    routeList.appendChild(card);
  });
  updateMyRouteButton();
}

function updateMyRouteButton() {
  myRouteButton.hidden = createdRoutes.length === 0;
}

function openRoute(route) {
  routeDialogContent.innerHTML = `
    <h2>${route.title}</h2>
    <p>${route.place}</p>
    <p>${route.note}</p>
    <button class="dialog-action" type="button">Start ${route.steps.toLocaleString("en-US")} steps</button>
  `;

  routeDialogContent.querySelector(".dialog-action").addEventListener("click", () => {
    totalSteps += route.steps;
    updateProgress();
    routeDialog.close();
  });

  routeDialog.showModal();
}

function createRouteMarkerIcon(index, className = "") {
  return L.divIcon({
    className: "",
    html: `<span class="route-point-marker ${className}">${index}</span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function getCustomRouteDistanceKm() {
  if (!createRouteMap || customRoutePoints.length < 2) return 0;

  return customRoutePoints.reduce((sum, point, index) => {
    if (index === 0) return sum;
    const previous = customRoutePoints[index - 1];
    return sum + L.latLng(previous.lat, previous.lng).distanceTo(L.latLng(point.lat, point.lng));
  }, 0) / 1000;
}

function updateCustomRouteDisplay() {
  const latLngs = customRoutePoints.map((point) => [point.lat, point.lng]);

  createRouteMarkers.forEach((marker) => marker.remove());
  createRouteMarkers = customRoutePoints.map((point, index) => {
    const isStart = index === 0;
    const isEnd = index === customRoutePoints.length - 1 && customRoutePoints.length > 1;
    const marker = L.marker([point.lat, point.lng], {
      icon: createRouteMarkerIcon(index + 1, `${isStart ? "is-start" : ""} ${isEnd ? "is-end" : ""}`.trim()),
    }).addTo(createRouteMap);
    return marker;
  });

  if (!createRoutePolyline) {
    createRoutePolyline = L.polyline(latLngs, {
      color: "#72bc56",
      weight: 5,
      opacity: 0.95,
      dashArray: "10 8",
      lineCap: "round",
    }).addTo(createRouteMap);
  } else {
    createRoutePolyline.setLatLngs(latLngs);
  }

  const distance = getCustomRouteDistanceKm();
  customRouteLength.textContent = `${distance.toFixed(2)} km`;
  customRouteHint.textContent = customRoutePoints.length
    ? `${customRoutePoints.length} point${customRoutePoints.length > 1 ? "s" : ""} added. Tap map to continue.`
    : "Tap the map to add route points.";
  undoRoutePointButton.disabled = customRoutePoints.length === 0;
}

function initializeCreateRouteMap() {
  if (!createRouteMapElement || typeof L === "undefined") {
    customRouteHint.textContent = "Leaflet map could not load. Please check the network connection.";
    return;
  }

  if (!createRouteMap) {
    createRouteMap = L.map(createRouteMapElement, {
      center: [22.3193, 114.1694],
      zoom: 11,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap",
    }).addTo(createRouteMap);

    createRouteMap.on("click", (event) => {
      customRoutePoints.push({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      });
      updateCustomRouteDisplay();
    });
  }

  createRouteMap.invalidateSize();
  updateCustomRouteDisplay();
}

function undoLastRoutePoint() {
  customRoutePoints.pop();
  updateCustomRouteDisplay();
}

function addDiscussionMessage({ author = "", text, mine = false, avatar = "blue" }) {
  const message = document.createElement("article");
  message.className = `discussion-message is-new ${mine ? "is-me" : "is-friend"}`;

  if (!mine) {
    const avatarNode = document.createElement("div");
    avatarNode.className = `discussion-avatar is-${avatar}`;
    avatarNode.setAttribute("aria-hidden", "true");
    if (avatar === "yellow") {
      const img = document.createElement("img");
      img.src = "./yuen-discussion-frog.png";
      img.alt = "";
      avatarNode.appendChild(img);
    }
    message.appendChild(avatarNode);
  }

  const bubble = document.createElement("div");
  bubble.className = `discussion-bubble ${mine ? "is-orange" : ""}`.trim();
  if (author) {
    const authorNode = document.createElement("strong");
    authorNode.textContent = author;
    bubble.appendChild(authorNode);
  }

  const textNode = document.createElement("p");
  textNode.textContent = text;
  bubble.appendChild(textNode);
  message.appendChild(bubble);
  discussionThread.appendChild(message);
  discussionThread.scrollTop = discussionThread.scrollHeight;
}

function getDiscussionReply(message) {
  const normalized = message.toLowerCase();
  if (normalized.includes("bird") || normalized.includes("animal")) {
    return "Look near the trees. I think there may be a card point nearby!";
  }
  if (normalized.includes("tired") || normalized.includes("rest")) {
    return "Let’s take a short break and keep walking slowly.";
  }
  if (normalized.includes("where") || normalized.includes("next")) {
    return "Follow the yellow route line. The next check-in is not far!";
  }
  return "Nice! Keep sharing what you discover on the route.";
}

function getDistanceMeters(from, to) {
  if (typeof L !== "undefined") {
    return L.latLng(from.lat, from.lng).distanceTo(L.latLng(to.lat, to.lng));
  }

  const earthRadius = 6371000;
  const toRadians = (degree) => degree * Math.PI / 180;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function setCameraStatus(message, distance = null, tone = "info") {
  cameraStatusText.textContent = message;
  if (distance !== null) {
    cameraDistanceText.textContent = distance;
  }
  cameraStatusCard.classList.toggle("is-alert", tone === "alert");
  cameraStatusCard.classList.toggle("is-ready", tone === "ready");
  if (tone === "alert") {
    cameraStatusCard.classList.remove("is-floating");
    void cameraStatusCard.offsetWidth;
    cameraStatusCard.classList.add("is-floating");
  } else {
    cameraStatusCard.classList.remove("is-floating");
  }
}

function updateCameraDistance(position) {
  currentCheckinPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  currentCheckpointDistance = getDistanceMeters(currentCheckinPosition, activeCheckpoint);
  setCameraStatus(
    currentCheckpointDistance <= activeCheckpoint.distanceRequired
      ? "You are within range. Take a photo to check in!"
      : "Too far away. Move closer and retry.",
    `Distance: ${Math.round(currentCheckpointDistance)}m / ${activeCheckpoint.distanceRequired}m`,
    currentCheckpointDistance <= activeCheckpoint.distanceRequired ? "ready" : "alert",
  );
}

function requestCheckpointLocation() {
  currentCheckinPosition = null;
  currentCheckpointDistance = null;
  setCameraStatus("Requesting your current location once...", "Distance: --");
  captureCheckinButton.disabled = true;

  if (!navigator.geolocation) {
    setCameraStatus("GPS is not available in this browser.", "Distance: --", "alert");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      updateCameraDistance(position);
      captureCheckinButton.disabled = false;
    },
    () => {
      setCameraStatus("GPS is missing. Please allow location and retry.", "Distance: --", "alert");
      captureCheckinButton.disabled = false;
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
  );
}

async function startCameraCheckin(checkpoint) {
  activeCheckpoint = checkpoint;
  const placeName = checkpoint.cameraLabel || checkpoint.title;
  cameraCheckinScreen.classList.remove("is-captured");
  cameraCheckpointTitle.textContent = "Nice shot!";
  cameraCheckpointMeta.textContent = "Photo saved to your album";
  cameraPhotoLabel.textContent = placeName.toUpperCase();
  cameraResultPhotoLabel.textContent = placeName.toUpperCase();
  cameraLocationName.textContent = placeName;
  cameraRequiredDistance.textContent = `${checkpoint.distanceRequired} m`;
  setCameraStatus("Requesting camera and location once.", "Distance: --");
  cameraEmptyState.hidden = false;
  cameraEmptyState.textContent = "Opening camera...";
  capturedPhotoPreview.hidden = true;
  capturedPhotoPreview.removeAttribute("src");
  cameraPreview.hidden = false;
  captureCheckinButton.disabled = true;

  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("getUserMedia is unavailable");
    }
    if (!cameraStream) {
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
    }
    cameraPreview.srcObject = cameraStream;
    await cameraPreview.play();
    cameraEmptyState.hidden = true;
  } catch (error) {
    setCameraStatus("Camera is missing. Please allow camera and retry.", "Distance: --", "alert");
    cameraEmptyState.textContent = "Camera unavailable";
    cameraEmptyState.hidden = false;
  }

  requestCheckpointLocation();
}

function stopCameraCheckin() {
  if (!cameraStream) return;
  cameraStream.getTracks().forEach((track) => track.stop());
  cameraStream = null;
  cameraPreview.srcObject = null;
}

function captureCheckpointPhoto() {
  if (!currentCheckinPosition) {
    setCameraStatus("GPS is missing. Please retry GPS before taking a photo.", "Distance: --", "alert");
    return;
  }

  if (currentCheckpointDistance > activeCheckpoint.distanceRequired) {
    setCameraStatus(
      `Too far away: ${Math.round(currentCheckpointDistance)}m. Move closer and retry.`,
      `Distance: ${Math.round(currentCheckpointDistance)}m / ${activeCheckpoint.distanceRequired}m`,
      "alert",
    );
    return;
  }

  if (!cameraStream || !cameraPreview.srcObject) {
    setCameraStatus("Camera is not ready. Please allow camera and retry.", null, "alert");
    return;
  }

  const width = cameraPreview.videoWidth || 640;
  const height = cameraPreview.videoHeight || 480;
  cameraCanvas.width = width;
  cameraCanvas.height = height;
  const context = cameraCanvas.getContext("2d");
  context.drawImage(cameraPreview, 0, 0, width, height);

  activeCheckpoint.photo = cameraCanvas.toDataURL("image/png");
  activeCheckpoint.completed = true;
  capturedPhotoPreview.src = activeCheckpoint.photo;
  capturedPhotoPreview.hidden = false;
  cameraPreview.hidden = true;
  setCameraStatus("Check-in completed. Item unlocked!", null, "ready");
  cameraCheckinScreen.classList.add("is-captured");
  stopCameraCheckin();
  markCheckpointCompleted(activeCheckpoint);
}

function openCheckpoint(checkpoint) {
  activeCheckpoint = checkpoint;
  const config = routeWalkConfigs[activeRouteWalkKey] || routeWalkConfigs.yuen;
  checkpointScreen.dataset.checkpoint = checkpoint.heroVariant || checkpoint.id;
  checkpointHeroImage.src = checkpoint.image;
  checkpointHeroImage.alt = checkpoint.title;
  checkpointDistanceValue.textContent = checkpoint.walkDistance || config.distance;
  renderCheckpointItems();
  showScreen("checkpoint");
}

function markCheckpointCompleted(checkpoint) {
  const index = checkpoint.unlockIndex ?? 0;
  document.querySelectorAll(".checkpoint-collection .unlock-card")[index]?.classList.add("is-completed");
  document.querySelectorAll(".route-walk-collection .unlock-card")[index]?.classList.add("is-completed");
}

function showRewardModal(checkpoint) {
  const reward = rewardItems[Math.floor(Math.random() * rewardItems.length)];
  checkpoint.unlockItem = {
    id: reward.id,
    name: reward.name,
    image: reward.image,
  };
  rewardModal.dataset.reward = reward.id;
  rewardTitle.textContent = reward.heading;
  rewardItemImage.src = reward.image;
  rewardItemImage.alt = reward.name;
  rewardItemName.textContent = reward.name;
  rewardItemCopy.textContent = reward.description;
  rewardModal.classList.add("is-visible");
  rewardModal.setAttribute("aria-hidden", "false");
}

function closeRewardModal() {
  rewardModal.classList.remove("is-visible");
  rewardModal.setAttribute("aria-hidden", "true");
}

const routeDetails = {
  "Yuen Chau Kok Park": {
    key: "yuen",
    title: "Yuen Chau Kok Park",
    difficulty: "EASY",
    location: "Sha Tin, New Territories",
    hero: "./route-detail-yuen-chau-kok.png",
    time: "35-55",
    length: "~1",
    rewards: [
      { number: "#00001", image: "./route-card-common-kingfisher.png", name: "Common Kingfisher", stars: "★★" },
      { number: "#00002", image: "./route-card-white-rumped-munia.png", name: "White-rumped Munia", stars: "★★" },
      { number: "#00003", image: "./route-card-trailing-lantana.png", name: "Trailing Lantana", stars: "★" },
    ],
  },
  "Pak Shek Kok Promenade": {
    key: "pak",
    title: "Pak Shek Kok Promenade",
    difficulty: "EASY",
    location: "Sha Tin, New Territories",
    hero: "./nature-pak-shek-kok.png",
    time: "40-60",
    length: "~2",
    rewards: [
      { number: "#0000A", image: "./card-grey-heron.png", name: "Grey Heron", stars: "★★" },
      { number: "#00008", image: "./route-card-common-kingfisher.png", name: "Common Kingfisher", stars: "★★" },
      { number: "#00004", image: "./route-card-trailing-lantana.png", name: "Trailing Lantana", stars: "★" },
    ],
  },
  "Hung Mui Kuk Hiking Trail": {
    key: "hung",
    title: "Hung Mui Kuk Hiking Trail",
    difficulty: "MEDIUM",
    location: "Sha Tin, New Territories",
    hero: "./route-detail-hung-hero.png",
    time: "60-90",
    length: "~2",
    rewards: [
      { number: "#00018", image: "./route-card-wild-boar.png", name: "Wild Boar", stars: "★★" },
      { number: "#00015", image: "./route-card-moss.png", name: "Moss", stars: "★★★" },
      { number: "#00016", image: "./route-card-pallas-squirrel.png", name: "Pallas's Squirrel", stars: "★★" },
    ],
  },
  "Tao Fong Shan": {
    key: "tao",
    title: "Tao Fong Shan",
    difficulty: "HARD",
    location: "Sha Tin, New Territories",
    hero: "./route-detail-tao-hero.png",
    time: "55-85",
    length: "~2",
    rewards: [
      { number: "#00001", image: "./route-card-tao-kingfisher.png", name: "Common Kingfisher", stars: "★★" },
      { number: "#00002", image: "./route-card-tao-munia.png", name: "White-rumped Munia", stars: "★★" },
      { number: "#00003", image: "./route-card-tao-lantana.png", name: "Trailing Lantana", stars: "★" },
    ],
  },
  "The Hong Kong Polytechnic University": {
    key: "polyu",
    title: "The Hong Kong Polytechnic University",
    difficulty: "EASY",
    location: "Hung Hom, Kowloon",
    hero: "./route-detail-polyu-hero.png",
    time: "25-35",
    length: "~1",
    rewards: [
      { number: "#00003", image: "./route-card-polyu-scaly-munia.png", name: "Scaly-breasted Munia", stars: "★★" },
      { number: "#00002", image: "./route-card-polyu-xiao-hong.png", name: "Xiao Hong", stars: "★★" },
      { number: "#00008", image: "./route-card-polyu-white-rumped-munia.png", name: "White-rumped Munia", stars: "★★" },
    ],
  },
  "HK University – Main Building": {
    key: "hku",
    title: "HK University – Main Building",
    difficulty: "EASY",
    location: "Hong Kong Island, Pok Fu Lam Road",
    hero: "./route-detail-hku-hero.png",
    time: "35-45",
    length: "~1",
    rewards: [
      { number: "#00003", image: "./route-card-hku-scaly-munia.png", name: "Scaly-breasted Munia", stars: "★★" },
      { number: "#00001", image: "./route-card-hku-eileen-chang.png", name: "Eileen Chang", stars: "★★" },
      { number: "#00004", image: "./route-card-hku-pink-trumpet.png", name: "Pink Trumpet Tree", stars: "★★" },
    ],
  },
  "St. Stephen's Girls' College": {
    key: "st-stephen",
    title: "St. Stephen's Girls' College",
    difficulty: "EASY",
    location: "Mid-Levels, 2 Lyttelton Rd",
    hero: "./route-detail-st-stephen-hero.png",
    time: "35-45",
    length: "~1",
    rewards: [
      { number: "#00003", image: "./route-card-st-stephen-scaly-munia.png", name: "Scaly-breasted Munia", stars: "★★" },
      { number: "#00002", image: "./route-card-st-stephen-xiao-hong.png", name: "Xiao Hong", stars: "★★" },
      { number: "#00004", image: "./route-card-st-stephen-pink-trumpet.png", name: "Pink Trumpet Tree", stars: "★★" },
    ],
  },
  "Repulse Bay Hotel": {
    key: "repulse",
    title: "Repulse Bay Hotel",
    difficulty: "MEDIUM",
    location: "Sha Tin, New Territories",
    hero: "./route-detail-repulse-bay-hero.png",
    time: "45-75",
    length: "~2",
    rewards: [
      { number: "#00003", image: "./route-card-repulse-scaly-munia.png", name: "Scaly-breasted Munia", stars: "★★" },
      { number: "#00001", image: "./route-card-repulse-eileen-chang.png", name: "Eileen Chang", stars: "★★" },
      { number: "#00015", image: "./route-card-repulse-acacia.png", name: "Acacia", stars: "★★★" },
    ],
  },
  "Confucian Hall": {
    key: "confucian",
    title: "Confucian Hall",
    difficulty: "EASY",
    location: "Hong Kong Island, Causeway Bay",
    hero: "./route-detail-confucian-hall-hero.png",
    time: "35-55",
    length: "~1",
    rewards: [
      { number: "#00007", image: "./route-card-confucian-magpie.png", name: "Red-billed Blue Magpie", stars: "★★" },
      { number: "#00001", image: "./route-card-confucian-cai-yuanpei.png", name: "Cai Yuanpei", stars: "★★" },
      { number: "#00015", image: "./route-card-confucian-moss.png", name: "Moss", stars: "★★★" },
    ],
  },
};

function openRouteDetail(detail = routeDetails["Yuen Chau Kok Park"]) {
  activeRouteDetailKey = detail.key;
  routeDetailOverlay.dataset.route = detail.key;
  routeDetailHeroImage.src = detail.hero;
  routeDetailHeroImage.alt = detail.title;
  routeDetailDifficulty.textContent = detail.difficulty;
  routeDetailTitle.textContent = detail.title;
  routeDetailLocation.textContent = detail.location;
  routeDetailTime.innerHTML = `${detail.time} <small>min</small>`;
  routeDetailLength.innerHTML = `${detail.length} <small>km</small>`;
  routeRewardCards.forEach((card, index) => {
    const reward = detail.rewards[index];
    card.querySelector(".reward-number").textContent = reward.number;
    card.querySelector(".reward-image").src = reward.image;
    card.querySelector(".reward-image").alt = reward.name;
    card.querySelector(".reward-name").textContent = reward.name;
    card.querySelector(".reward-stars").textContent = reward.stars;
  });

  routeDetailOverlay.classList.add("is-visible");
  routeDetailOverlay.setAttribute("aria-hidden", "false");
}

function closeRouteDetail() {
  routeDetailOverlay.classList.remove("is-visible");
  routeDetailOverlay.setAttribute("aria-hidden", "true");
}

const routeWalkConfigs = {
  yuen: {
    backScreen: "nature",
    name: "Yuen chau Kok Park",
    distance: "1.2km",
    map: "./yuen-walk-map-base.png",
    checkpoints: checkpoints.map((checkpoint, index) => ({
      ...checkpoint,
      thumb: `./yuen-checkpoint-${index + 1}-thumb.png`,
    })),
    items: [
      { name: "Mysterious items A", description: "This area was discovered", distance: "120m", image: "./yuen-walk-item-a.png", locked: false },
      { name: "Mysterious items B", description: "This area was discovered", distance: "350m", image: "./yuen-walk-item-b.png", locked: false },
      { name: "Mysterious items C", description: "This area was discovered", distance: "580m", image: "./yuen-walk-item-c.png", locked: true },
      { name: "Mysterious items D", description: "This area was discovered", distance: "720m", image: "./yuen-walk-item-d.png", locked: true },
    ],
  },
  hung: {
    backScreen: "nature",
    name: "Hung Mui Kuk",
    distance: "1.2km",
    map: "./hung-walk-map-base.png",
    checkpoints: hungMuiKukCheckpoints,
    items: [
      { name: "Mysterious items A", description: "This area was discovered", distance: "120m", image: "./hung-walk-item-a.png", locked: false },
      { name: "Mysterious items B", description: "This area was discovered", distance: "350m", image: "./hung-walk-item-b.png", locked: false },
      { name: "Mysterious items C", description: "This area was discovered", distance: "580m", image: "./hung-walk-item-c.png", locked: true },
      { name: "Mysterious items D", description: "This area was discovered", distance: "720m", image: "./hung-walk-item-d.png", locked: true },
    ],
  },
  pak: {
    backScreen: "nature",
    name: "Pak shek kok promenade",
    distance: "1.6km",
    map: "./pak-walk-map-base.png",
    checkpoints: pakShekKokCheckpoints,
    pointPositions: [
      { left: 248, top: 14, width: 30, height: 29 },
      { left: 232, top: 116, width: 37, height: 36 },
      { left: 207, top: 232, width: 41, height: 37 },
      { left: 168, top: 333, width: 40, height: 36 },
      { left: 183, top: 424, width: 46, height: 42 },
    ],
    items: [
      { name: "Mysterious items A", description: "This area was discovered", distance: "120m", image: "./reward-item-a-box.png", locked: false },
      { name: "Mysterious items B", description: "This area was discovered", distance: "350m", image: "./reward-item-b-chest.png", locked: false },
      { name: "Mysterious items C", description: "This area was discovered", distance: "580m", image: "./reward-item-c-potion.png", locked: true },
      { name: "Mysterious items D", description: "This area was discovered", distance: "720m", image: "./reward-item-d-scroll.png", locked: true },
    ],
  },
  tao: {
    backScreen: "nature",
    name: "Tao Fong Shan",
    distance: "1.6km",
    map: "./tao-walk-map-base.png",
    ctaLabel: "I got here!",
    checkpoints: taoFongShanCheckpoints,
    items: [
      { name: "Mysterious items A", description: "This area was discovered", distance: "120m", image: "./reward-item-a-box.png", locked: false },
      { name: "Mysterious items B", description: "This area was discovered", distance: "350m", image: "./reward-item-b-chest.png", locked: false },
      { name: "Mysterious items C", description: "This area was discovered", distance: "580m", image: "./reward-item-c-potion.png", locked: true },
      { name: "Mysterious items D", description: "This area was discovered", distance: "720m", image: "./reward-item-d-scroll.png", locked: true },
    ],
  },
};

function renderUnlockCards(cards, items, checkpointsForRoute = []) {
  cards.forEach((card, index) => {
    const item = items[index];
    if (!item) {
      card.hidden = true;
      return;
    }
    const isCompleted = checkpointsForRoute.some((checkpoint) => checkpoint.unlockIndex === index && checkpoint.completed);

    card.hidden = false;
    card.classList.toggle("is-locked", item.locked);
    card.classList.toggle("is-completed", isCompleted);
    card.querySelector(".unlock-lock")?.remove();
    if (item.locked) {
      card.insertAdjacentHTML("afterbegin", '<div class="unlock-lock" aria-hidden="true"></div>');
    }
    const imageWrap = card.querySelector(".unlock-image");
    imageWrap.classList.toggle("is-gold", !item.locked);
    imageWrap.classList.toggle("is-muted", item.locked);
    imageWrap.querySelector("img").src = item.image;
    imageWrap.querySelector("img").alt = item.name;
    card.querySelector("h2").textContent = item.name;
    card.querySelector("p").textContent = item.description;
    card.querySelector("strong").innerHTML = `<span aria-hidden="true">♡</span>${item.distance}`;
  });
}

function renderCheckpointItems() {
  const config = routeWalkConfigs[activeRouteWalkKey] || routeWalkConfigs.yuen;
  renderUnlockCards(checkpointUnlockCards, config.items, config.checkpoints);
}

function openRouteWalk(routeKey = "yuen") {
  const config = routeWalkConfigs[routeKey] || routeWalkConfigs.yuen;
  activeRouteWalkKey = routeKey;
  routeWalkMap.dataset.route = routeKey;
  routeWalkMapImage.src = config.map;
  routeWalkMapImage.alt = config.name;
  routeWalkName.classList.toggle("is-cta", Boolean(config.ctaLabel));
  if (config.ctaLabel) {
    routeWalkName.innerHTML = `<span>${config.ctaLabel}</span><img src="./yuen-camera-icon.svg" alt="" />`;
    routeWalkName.setAttribute("aria-label", `${config.ctaLabel} Start camera check-in`);
  } else {
    routeWalkName.textContent = config.name;
    routeWalkName.setAttribute("aria-label", config.name);
  }
  routeWalkDistanceValue.textContent = config.distance;

  routePhotoButtons.forEach((button, index) => {
    const checkpoint = config.checkpoints[index];
    const position = config.pointPositions?.[index];
    button.hidden = !checkpoint;
    Object.assign(button.style, {
      left: position ? `${position.left}px` : "",
      top: position ? `${position.top}px` : "",
      width: position ? `${position.width}px` : "",
      height: position ? `${position.height}px` : "",
    });
    if (!checkpoint) return;
    const image = button.querySelector("img");
    image.src = checkpoint.thumb || checkpoint.image;
    image.alt = checkpoint.title;
    button.setAttribute("aria-label", `Open checkpoint photo: ${checkpoint.title}`);
  });

  renderUnlockCards(routeUnlockCards, config.items, config.checkpoints);

  routeWalkTabButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.walkTab === "items"));
  routeWalkPanels.forEach((panel) => {
    const isItems = panel.dataset.walkPanel === "items";
    panel.classList.toggle("is-active", isItems);
    panel.hidden = !isItems;
  });
  showScreen("route-walk");
}

function renderDashboard() {
  const name = nameInput.value.trim();
  dashboardExp = 40;
  dashboardScreen.classList.remove("is-cards-collapsed");
  closeShopPanel();
  dashboardSideNav.classList.remove("is-collapsed");
  dashboardSideToggle.setAttribute("aria-label", "Collapse dashboard actions");
  pickDashboardBackground();
  dashboardUserName.textContent = name || "User name";
  dashboardPetImage.src = selectedPet.src;
  dashboardPetImage.alt = selectedPet.name;
  applyDashboardDecoration();
  cardsCollectionCount.textContent = "6/15";
  translateCardButtons.forEach((button) => {
    button.disabled = false;
    button.textContent = "Translated";
    button.closest(".collection-card").classList.remove("is-translated");
  });
  updateDashboardExp(0);
  updateProgress();
}

function updateDashboardExp(delta) {
  dashboardExp = Math.min(dashboardExp + delta, 100);
  dashboardExpBar.style.width = `${dashboardExp}%`;
  dashboardExpText.textContent = `${dashboardExp}/100`;
}

function getSelectedPetKey() {
  return (selectedPet?.src || "").split("/").pop() || "default";
}

function getSelectedDecorationCatalog() {
  return decorationCatalog[getSelectedPetKey()] || decorationCatalog.default;
}

function getHomeEffect(effectId) {
  return homeEffectsCatalog.find((effect) => effect.id === effectId) || null;
}

function getDefaultHomeEffectPosition() {
  return { x: -34, y: 132 };
}

function clampHomeEffectPosition(position) {
  if (!dashboardPetStage || !dashboardHomeEffect) return position;

  const stageBounds = dashboardPetStage.getBoundingClientRect();
  const effectBounds = dashboardHomeEffect.getBoundingClientRect();
  const effectWidth = effectBounds.width || 56;
  const effectHeight = effectBounds.height || 56;
  const minX = -52;
  const maxX = stageBounds.width - effectWidth + 48;
  const minY = 48;
  const maxY = stageBounds.height - effectHeight - 8;

  return {
    x: Math.min(Math.max(position.x, minX), maxX),
    y: Math.min(Math.max(position.y, minY), maxY),
  };
}

function setDashboardHomeEffectPosition(position, shouldPersist = false) {
  if (!dashboardHomeEffect) return;
  const safePosition = clampHomeEffectPosition(position);
  dashboardHomeEffect.style.setProperty("--home-effect-left", `${safePosition.x}px`);
  dashboardHomeEffect.style.setProperty("--home-effect-top", `${safePosition.y}px`);

  if (shouldPersist && equippedHomeEffect) {
    homeEffectPositions[equippedHomeEffect] = safePosition;
  }
}

function getEquippedDecoration() {
  const petKey = getSelectedPetKey();
  const decorationId = equippedDecorations[petKey];
  return getSelectedDecorationCatalog().find((decoration) => decoration.id === decorationId) || null;
}

function getSelectedPetDisplaySrc() {
  return getEquippedDecoration()?.image || selectedPet.src;
}

function setDecorationClass(element, decoration) {
  element.className = decoration?.className ? `dashboard-pet-decoration ${decoration.className}` : "dashboard-pet-decoration";
}

function applyDashboardHomeEffect() {
  const homeEffect = getHomeEffect(equippedHomeEffect);
  if (!dashboardHomeEffect) return;

  if (!homeEffect) {
    dashboardHomeEffect.hidden = true;
    dashboardHomeEffect.removeAttribute("src");
    dashboardHomeEffect.alt = "";
    dashboardHomeEffect.removeAttribute("role");
    dashboardHomeEffect.removeAttribute("tabindex");
    dashboardHomeEffect.removeAttribute("title");
    dashboardHomeEffect.removeAttribute("aria-label");
    dashboardHomeEffect.removeAttribute("data-home-effect-id");
    dashboardHomeEffect.classList.remove("is-dragging", "is-long-press-ready");
    return;
  }

  dashboardHomeEffect.hidden = false;
  dashboardHomeEffect.src = homeEffect.image;
  dashboardHomeEffect.alt = homeEffect.name;
  dashboardHomeEffect.role = "button";
  dashboardHomeEffect.tabIndex = 0;
  dashboardHomeEffect.dataset.homeEffectId = homeEffect.id;
  dashboardHomeEffect.title = `Click to remove ${homeEffect.name}. Long press to move.`;
  dashboardHomeEffect.setAttribute("aria-label", `Click to remove ${homeEffect.name}. Long press to move.`);
  setDashboardHomeEffectPosition(homeEffectPositions[homeEffect.id] || getDefaultHomeEffectPosition());
}

function applyDashboardDecoration() {
  const equippedDecoration = getEquippedDecoration();
  dashboardPetImage.src = getSelectedPetDisplaySrc();
  dashboardPetImage.alt = equippedDecoration ? `${selectedPet.name} wearing ${equippedDecoration.name}` : selectedPet.name;
  setDecorationClass(dashboardPetDecoration, equippedDecoration?.className ? equippedDecoration : null);
  applyDashboardHomeEffect();
}

function updateShopWallet() {
  shopWalletAmount.textContent = String(shopCoins);
  shopWalletAmount.closest(".shop-decoration-wallet")?.setAttribute("aria-label", `Coins ${shopCoins}`);
}

function updateShopTabs() {
  const tabs = [
    { element: shopAccessoriesTab, tab: "accessories" },
    { element: shopHomeEffectsTab, tab: "home" },
  ];

  tabs.forEach(({ element, tab }) => {
    const isActive = shopActiveTab === tab;
    element.classList.toggle("is-active", isActive);
    element.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function renderShopPanel() {
  const isHomeTab = shopActiveTab === "home";
  const items = isHomeTab ? homeEffectsCatalog : getSelectedDecorationCatalog();
  const equippedDecoration = getEquippedDecoration();
  const equippedHome = getHomeEffect(equippedHomeEffect);

  shopPreviewPetImage.src = getSelectedPetDisplaySrc();
  shopPreviewPetImage.alt = selectedPet.name;
  shopPetTitle.textContent = isHomeTab ? "Home Effects" : selectedPet.name;
  shopPetSubtitle.textContent = isHomeTab ? "Furniture effects shared by every partner" : items[0]?.note || "Special decorations for this partner";
  setDecorationClass(shopPreviewDecoration, equippedDecoration?.className ? equippedDecoration : null);
  updateShopTabs();
  updateShopWallet();

  shopDecorationGrid.dataset.shopTab = shopActiveTab;
  shopDecorationGrid.setAttribute("aria-label", isHomeTab ? "Buy home effects" : "Buy pet decorations");
  shopDecorationGrid.innerHTML = "";
  items.forEach((item) => {
    const isOwned = isHomeTab ? ownedHomeEffects.has(item.id) : ownedDecorations.has(item.id);
    const isEquipped = isHomeTab ? equippedHome?.id === item.id : item.isDefault ? !equippedDecoration : equippedDecoration?.id === item.id;
    const card = document.createElement("button");
    card.className = `shop-decoration-card${isHomeTab ? " is-home-effect" : ""}${item.isDefault ? " is-default" : ""}${isOwned ? " is-owned" : " is-locked"}${isEquipped ? " is-equipped" : ""}`;
    card.type = "button";
    card.dataset.decorationId = item.id;
    card.dataset.shopItemId = item.id;
    card.setAttribute("aria-pressed", isEquipped ? "true" : "false");
    card.innerHTML = `
      <span class="shop-decoration-icon ${item.className || ""}" aria-hidden="true">
        ${item.thumb || item.image ? `<img src="${item.thumb || item.image}" alt="" />` : ""}
      </span>
      <strong>${item.name}</strong>
      <span class="shop-decoration-price"><span aria-hidden="true"></span>${item.price}</span>
    `;
    shopDecorationGrid.appendChild(card);
  });
}

function openShopPanel() {
  renderShopPanel();
  dashboardScreen.classList.add("is-shop-open");
  shopDecorationPanel.setAttribute("aria-hidden", "false");
}

function closeShopPanel() {
  dashboardScreen.classList.remove("is-shop-open");
  shopDecorationPanel.setAttribute("aria-hidden", "true");
  closePurchaseModal();
  closeSuccessModal();
}

function openSocialHub(returnScreen = "dashboard") {
  socialReturnScreen = returnScreen;
  closeShopPanel();
  showScreen("friends-list");
}

function selectDecoration(decorationId) {
  const decoration = getSelectedDecorationCatalog().find((item) => item.id === decorationId);
  if (!decoration) return;

  const petKey = getSelectedPetKey();
  if (decoration.isDefault) {
    delete equippedDecorations[petKey];
  } else if (equippedDecorations[petKey] === decoration.id) {
    delete equippedDecorations[petKey];
  } else {
    equippedDecorations[petKey] = decoration.id;
  }

  applyDashboardDecoration();
  renderShopPanel();
}

function setShopModalVisibility(overlay, isOpen) {
  overlay.classList.toggle("is-open", isOpen);
  overlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

function openPurchaseModal(effect) {
  pendingHomeEffectPurchase = effect;
  shopPurchaseImage.src = effect.image;
  shopPurchaseImage.alt = effect.name;
  shopPurchaseItemName.textContent = effect.name;
  shopPurchaseCost.textContent = String(effect.price);
  shopPurchaseBalance.textContent = shopCoins >= effect.price ? `Balance: ${shopCoins}` : `Need ${effect.price - shopCoins} more coins`;
  shopPurchaseConfirmButton.disabled = shopCoins < effect.price;
  setShopModalVisibility(shopPurchaseOverlay, true);
}

function closePurchaseModal() {
  pendingHomeEffectPurchase = null;
  setShopModalVisibility(shopPurchaseOverlay, false);
  shopPurchaseConfirmButton.disabled = false;
}

function openSuccessModal(effect) {
  shopSuccessImage.src = effect.image;
  shopSuccessImage.alt = effect.name;
  shopSuccessItemName.textContent = effect.name;
  shopSuccessCost.textContent = String(effect.price);
  setShopModalVisibility(shopSuccessOverlay, true);
}

function closeSuccessModal() {
  setShopModalVisibility(shopSuccessOverlay, false);
}

function confirmHomeEffectPurchase() {
  const effect = pendingHomeEffectPurchase;
  if (!effect || shopCoins < effect.price) return;

  shopCoins -= effect.price;
  ownedHomeEffects.add(effect.id);
  equippedHomeEffect = effect.id;
  applyDashboardHomeEffect();
  closePurchaseModal();
  renderShopPanel();
  openSuccessModal(effect);
}

function selectHomeEffect(effectId) {
  const effect = getHomeEffect(effectId);
  if (!effect) return;

  if (!ownedHomeEffects.has(effect.id)) {
    openPurchaseModal(effect);
    return;
  }

  equippedHomeEffect = equippedHomeEffect === effect.id ? null : effect.id;
  applyDashboardHomeEffect();
  renderShopPanel();
}

function removeDashboardHomeEffect(event) {
  event.stopPropagation();
  if (suppressHomeEffectClick) {
    suppressHomeEffectClick = false;
    return;
  }
  if (!equippedHomeEffect) return;

  equippedHomeEffect = null;
  applyDashboardHomeEffect();
  if (dashboardScreen.classList.contains("is-shop-open")) {
    renderShopPanel();
  }
}

function clearHomeEffectLongPress() {
  if (!homeEffectDragState?.timer) return;
  clearTimeout(homeEffectDragState.timer);
  homeEffectDragState.timer = null;
}

function startHomeEffectDrag(event) {
  if (!equippedHomeEffect || dashboardHomeEffect.hidden) return;
  event.stopPropagation();

  clearHomeEffectLongPress();
  const currentPosition = homeEffectPositions[equippedHomeEffect] || getDefaultHomeEffectPosition();
  homeEffectDragState = {
    pointerId: event.pointerId,
    startClientX: event.clientX,
    startClientY: event.clientY,
    startX: currentPosition.x,
    startY: currentPosition.y,
    dragging: false,
    timer: window.setTimeout(() => {
      if (!homeEffectDragState || homeEffectDragState.pointerId !== event.pointerId) return;
      homeEffectDragState.dragging = true;
      suppressHomeEffectClick = true;
      dashboardHomeEffect.classList.add("is-dragging");
      dashboardHomeEffect.setPointerCapture?.(event.pointerId);
    }, 450),
  };
}

function moveHomeEffectDrag(event) {
  if (!homeEffectDragState || homeEffectDragState.pointerId !== event.pointerId) return;

  const deltaX = event.clientX - homeEffectDragState.startClientX;
  const deltaY = event.clientY - homeEffectDragState.startClientY;
  const movedFarEnough = Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6;

  if (!homeEffectDragState.dragging && movedFarEnough) {
    clearHomeEffectLongPress();
    suppressHomeEffectClick = true;
    window.setTimeout(() => {
      suppressHomeEffectClick = false;
    }, 80);
    homeEffectDragState = null;
    return;
  }

  if (!homeEffectDragState.dragging) return;

  event.preventDefault();
  event.stopPropagation();
  setDashboardHomeEffectPosition(
    {
      x: homeEffectDragState.startX + deltaX,
      y: homeEffectDragState.startY + deltaY,
    },
    true
  );
}

function endHomeEffectDrag(event) {
  if (!homeEffectDragState || homeEffectDragState.pointerId !== event.pointerId) return;
  event.stopPropagation();
  clearHomeEffectLongPress();

  if (homeEffectDragState.dragging) {
    suppressHomeEffectClick = true;
    dashboardHomeEffect.releasePointerCapture?.(event.pointerId);
    window.setTimeout(() => {
      suppressHomeEffectClick = false;
    }, 80);
  }

  dashboardHomeEffect.classList.remove("is-dragging");
  homeEffectDragState = null;
}

function selectShopItem(itemId) {
  if (shopActiveTab === "home") {
    selectHomeEffect(itemId);
  } else {
    selectDecoration(itemId);
  }
}

function pickDashboardBackground() {
  const roll = Math.random();
  let threshold = 0;
  const choice = dashboardBackgrounds.find((background) => {
    threshold += background.weight;
    return roll < threshold;
  }) || dashboardBackgrounds[0];
  dashboardScreen.style.setProperty("--dashboard-bg", `url("${choice.src}")`);
}

function getWeatherDescription(iconCode) {
  const weatherByIcon = {
    50: { condition: "Sunny", icon: "☀️" },
    51: { condition: "Sunny", icon: "🌤️" },
    52: { condition: "Sunny intervals", icon: "⛅" },
    53: { condition: "Cloudy", icon: "☁️" },
    54: { condition: "Overcast", icon: "☁️" },
    60: { condition: "Rainy", icon: "🌧️" },
    61: { condition: "Showers", icon: "🌦️" },
    62: { condition: "Showers", icon: "🌦️" },
    63: { condition: "Rainy", icon: "🌧️" },
    64: { condition: "Heavy rain", icon: "⛈️" },
    65: { condition: "Thunderstorms", icon: "⛈️" },
    70: { condition: "Fine", icon: "🌤️" },
    71: { condition: "Fine", icon: "🌤️" },
    72: { condition: "Fine", icon: "🌤️" },
    73: { condition: "Fine", icon: "🌤️" },
    74: { condition: "Fine", icon: "🌤️" },
    75: { condition: "Fine", icon: "🌤️" },
    76: { condition: "Cloudy", icon: "☁️" },
    77: { condition: "Cloudy", icon: "☁️" },
    80: { condition: "Windy", icon: "🌬️" },
    83: { condition: "Dry", icon: "🍃" },
    85: { condition: "Hot", icon: "🌡️" },
  };

  return weatherByIcon[iconCode] || currentHongKongWeather;
}

function getRouteReason(condition, humidityValue) {
  const isNature = activeRecommendationTarget === "nature";
  if (condition.includes("rain") || condition.includes("Shower") || humidityValue >= 75) {
    return isNature
      ? "Cloudy or damp weather today. This nature route stays near parks and waterfront paths, making biodiversity discovery easier."
      : "Cloudy or damp weather today. This route keeps slopes gentle and stays close to urban parks for an easier walk.";
  }
  if (condition.includes("Sunny") || condition.includes("Hot")) {
    return isNature
      ? "Warm bright weather today. This nature route has open scenery, breezy paths, and beginner-friendly pacing."
      : "Warm bright weather today. This route has shaded paths, cultural stops, and a beginner-friendly distance.";
  }
  return isNature
    ? "Green parks and waterfront routes, gentle slopes and rich biodiversity. Perfect for beginner exploring."
    : "Urban and parks routes, gentle slopes and rich scenes. Perfect for beginner exploring.";
}

function renderRecommendationWeather(weather) {
  currentHongKongWeather = weather;
  weatherTemp.textContent = weather.temp;
  weatherHumidity.textContent = weather.humidity;
  weatherCondition.textContent = weather.condition;
  weatherConditionIcon.textContent = weather.icon;
  recommendationReason.textContent = weather.reason;
}

async function loadHongKongWeather() {
  try {
    const response = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Weather API ${response.status}`);

    const data = await response.json();
    const temperatures = data.temperature?.data || [];
    const observatoryTemp = temperatures.find((item) => item.place === "Hong Kong Observatory") || temperatures[0];
    const humidity = data.humidity?.data?.[0];
    const iconCode = data.icon?.[0];
    const { condition, icon } = getWeatherDescription(iconCode);
    const humidityValue = Number(humidity?.value || 70);
    const weather = {
      temp: `${Math.round(Number(observatoryTemp?.value || 20))}°${observatoryTemp?.unit || "C"}`,
      humidity: `${Math.round(humidityValue)}%`,
      condition,
      icon,
      reason: getRouteReason(condition, humidityValue),
    };

    renderRecommendationWeather(weather);
  } catch (error) {
    renderRecommendationWeather(currentHongKongWeather);
  }
}

function configureRecommendation(target) {
  activeRecommendationTarget = target;
  const isNature = target === "nature";

  recommendationRouteImage.src = isNature ? "./nature-yuen-chau-kok.png" : "./literature-hku.png";
  recommendationDifficulty.textContent = "EASY";
  recommendationRouteTitle.textContent = isNature ? "Park Nature Walk" : "Harbour Literary Walk";
  recommendationReason.textContent = isNature
    ? "Green parks and waterfront routes, gentle slopes and rich biodiversity. Perfect for beginner exploring."
    : "Urban and parks routes, gentle slopes and rich scenes. Perfect for beginner exploring.";
}

function openRecommendation(target = "literature") {
  configureRecommendation(target);
  recommendationOverlay.classList.add("is-visible");
  recommendationOverlay.setAttribute("aria-hidden", "false");
  loadHongKongWeather();
}

function closeRecommendation() {
  recommendationOverlay.classList.remove("is-visible");
  recommendationOverlay.setAttribute("aria-hidden", "true");
}

function burstPetParticles(clientX, clientY) {
  const stageRect = dashboardPetStage.getBoundingClientRect();
  const originX = clientX - stageRect.left;
  const originY = clientY - stageRect.top - 20;
  const count = 9;

  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    const symbol = petBurstSymbols[Math.floor(Math.random() * petBurstSymbols.length)];
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    const distance = 24 + Math.random() * 42;

    particle.className = `pet-burst-particle ${symbol.className}`;
    particle.textContent = symbol.text;
    particle.style.setProperty("--x", `${originX}px`);
    particle.style.setProperty("--y", `${originY}px`);
    particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--dy", `${Math.sin(angle) * 24 - Math.random() * 54}px`);
    particle.style.setProperty("--r", `${-28 + Math.random() * 56}deg`);
    particle.style.setProperty("--size", `${19 + Math.random() * 11}px`);

    dashboardPetStage.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove());
  }
}

function petDashboardPartner(event) {
  event.stopPropagation();
  const stageRect = dashboardPetStage.getBoundingClientRect();
  const clientX = event.clientX ?? stageRect.left + stageRect.width / 2;
  const clientY = event.clientY ?? stageRect.top + stageRect.height / 2;

  burstPetParticles(clientX, clientY);

  dashboardPetStage.classList.remove("is-petted");
  void dashboardPetStage.offsetWidth;
  dashboardPetStage.classList.add("is-petted");
}

function updateRequiredMessage(input, message) {
  input.setCustomValidity(input.validity.valueMissing ? message : "");
}

requiredFields.forEach(({ input, message }) => {
  updateRequiredMessage(input, message);
  input.addEventListener("input", () => updateRequiredMessage(input, message));
  input.addEventListener("invalid", () => updateRequiredMessage(input, message));
});

startButton.addEventListener("click", () => showScreen("profile"));

translateButton.addEventListener("click", () => {
  translated = !translated;
  localizedTitle.classList.toggle("is-visible", translated);
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  showScreen("body");
});

bodyBackButton.addEventListener("click", () => showScreen("profile"));

bodyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const height = Number(heightInput.value.trim());
  const weight = Number(weightInput.value.trim());
  const goal = height && weight ? Math.round(6500 + height * 5 + weight * 8) : 8000;
  selectedGoal = goal;
  partnerName.textContent = name || "User Name";
  pickRandomPet();
  selfiePhoto = null;
  selfieCapturedImage.removeAttribute("src");
  showScreen("selfie");
});

selfieBackButton.addEventListener("click", () => showScreen("body"));
selfieCaptureButton.addEventListener("click", captureSelfie);
selfieNextButton.addEventListener("click", () => {
  resetHatch();
  showScreen("hatch");
});

hatchTapArea.addEventListener("click", () => {
  hatchTaps += 1;
  updateHatch();
  if (hatchTaps >= 3) {
    showScreen("partner");
  }
});

partnerBackButton.addEventListener("click", () => showScreen("body"));
rerollPetButton.addEventListener("click", spinRandomPet);

partnerCreateButton.addEventListener("click", () => {
  renderDashboard();
  showScreen("dashboard");
});

function openCollectionPage(event) {
  if (event?.target?.closest?.(".translate-card-button")) return;
  event?.stopPropagation?.();
  closeShopPanel();
  showScreen("collection");
}

backButton.addEventListener("click", () => showScreen("dashboard"));
collectionBackButton.addEventListener("click", () => showScreen("dashboard"));
dashboardCardsCollection.addEventListener("click", openCollectionPage);
dashboardCardsCollection.addEventListener("keydown", (event) => {
  if (event.target.closest(".translate-card-button")) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openCollectionPage(event);
});
dashboardFindButton.addEventListener("click", () => showScreen("walk"));
dashboardShopButton.addEventListener("click", (event) => {
  event.stopPropagation();
  if (dashboardScreen.classList.contains("is-shop-open")) {
    closeShopPanel();
  } else {
    openShopPanel();
  }
});
shopDecorationCloseButton.addEventListener("click", closeShopPanel);
shopAccessoriesTab.addEventListener("click", () => {
  shopActiveTab = "accessories";
  renderShopPanel();
});
shopHomeEffectsTab.addEventListener("click", () => {
  shopActiveTab = "home";
  renderShopPanel();
});
shopDecorationGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".shop-decoration-card");
  if (!card) return;
  selectShopItem(card.dataset.shopItemId);
});
shopPurchaseOverlay.addEventListener("click", (event) => {
  if (event.target === shopPurchaseOverlay) closePurchaseModal();
});
shopPurchaseCloseButton.addEventListener("click", closePurchaseModal);
shopPurchaseCancelButton.addEventListener("click", closePurchaseModal);
shopPurchaseConfirmButton.addEventListener("click", confirmHomeEffectPurchase);
shopSuccessOverlay.addEventListener("click", (event) => {
  if (event.target === shopSuccessOverlay) closeSuccessModal();
});
shopSuccessCloseButton.addEventListener("click", closeSuccessModal);
shopSuccessOkButton.addEventListener("click", closeSuccessModal);
dashboardHomeEffect.addEventListener("click", removeDashboardHomeEffect);
dashboardHomeEffect.addEventListener("pointerdown", startHomeEffectDrag);
dashboardHomeEffect.addEventListener("pointermove", moveHomeEffectDrag);
dashboardHomeEffect.addEventListener("pointerup", endHomeEffectDrag);
dashboardHomeEffect.addEventListener("pointercancel", endHomeEffectDrag);
dashboardHomeEffect.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  removeDashboardHomeEffect(event);
});
dashboardSocialButton.addEventListener("click", (event) => {
  event.stopPropagation();
  openSocialHub("dashboard");
});
dashboardSchoolButton.addEventListener("click", () => showScreen("school-rank"));
dashboardStepButton.addEventListener("click", () => showScreen("walk"));
schoolRankBackButton.addEventListener("click", () => showScreen("dashboard"));
schoolRankActionButton.addEventListener("click", () => openSocialHub("school-rank"));
friendsListBackButton.addEventListener("click", () => showScreen(socialReturnScreen));
friendFeedBackButton.addEventListener("click", () => showScreen(socialReturnScreen));
friendFeedAddPostButton.addEventListener("click", () => showScreen("new-post"));
friendsProfileButton.addEventListener("click", () => showScreen("my-feed"));
friendsFeedProfileButton.addEventListener("click", () => showScreen("my-feed"));
myFeedBackButton.addEventListener("click", () => showScreen("friend-feed"));
newPostBackButton.addEventListener("click", () => showScreen("friend-feed"));
newPostText.addEventListener("input", updateNewPostCount);
newPostPhotoInput.addEventListener("change", () => renderNewPostPreviews(newPostPhotoInput.files));
newPostLocationButton.addEventListener("click", () => {
  newPostLocationText.textContent = "Locating...";
  if (!navigator.geolocation) {
    newPostLocationText.textContent = "Location unavailable";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(4);
      const lng = position.coords.longitude.toFixed(4);
      newPostLocationText.textContent = `Location added (${lat}, ${lng})`;
    },
    () => {
      newPostLocationText.textContent = "Location unavailable";
    },
    { enableHighAccuracy: true, timeout: 7000, maximumAge: 60000 }
  );
});
newPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  resetNewPostForm();
  showScreen("friend-feed");
});
friendsNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.friendsTab === "list") {
      showScreen("friends-list");
      return;
    }
    if (button.dataset.friendsTab === "feed") {
      showScreen("friend-feed");
      return;
    }
    updateFriendsNavActive("add");
  });
});
literatureBackButton.addEventListener("click", () => showScreen("walk"));
natureBackButton.addEventListener("click", () => showScreen("walk"));
recommendationCloseButton.addEventListener("click", closeRecommendation);
recommendationOverlay.addEventListener("click", (event) => {
  if (event.target === recommendationOverlay) {
    closeRecommendation();
  }
});
recommendationDetailsButton.addEventListener("click", () => {
  const title = activeRecommendationTarget === "nature" ? "Park Nature Walk" : "Harbour Literary Walk";
  routeDialogContent.innerHTML = `
    <h2>${title}</h2>
    <p>${currentHongKongWeather.temp} · ${currentHongKongWeather.humidity} humidity · ${currentHongKongWeather.condition}</p>
    <p>${currentHongKongWeather.reason}</p>
    <button class="dialog-action" type="button">Got it</button>
  `;
  routeDialogContent.querySelector(".dialog-action").addEventListener("click", () => routeDialog.close());
  routeDialog.showModal();
});
recommendationRouteButton.addEventListener("click", () => {
  closeRecommendation();
  const targetCards = activeRecommendationTarget === "nature" ? natureRouteCards : literatureRouteCards;
  targetCards[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
});
createRouteButton.addEventListener("click", () => showScreen("create-route"));
myRouteButton.addEventListener("click", () => {
  const latestRoute = createdRoutes[createdRoutes.length - 1];
  if (latestRoute) {
    openRoute(latestRoute);
  }
});
createRouteBackButton.addEventListener("click", () => showScreen("walk"));
undoRoutePointButton.addEventListener("click", undoLastRoutePoint);
createRouteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const distance = getCustomRouteDistanceKm();

  if (customRoutePoints.length < 2) {
    routeDialogContent.innerHTML = `
      <h2>Add route points</h2>
      <p>Please tap at least two points on the map to create a route.</p>
      <button class="dialog-action" type="button">Keep editing</button>
    `;
    routeDialogContent.querySelector(".dialog-action").addEventListener("click", () => routeDialog.close());
    routeDialog.showModal();
    return;
  }

  const formData = new FormData(createRouteForm);
  const routeName = formData.get("routeName").trim() || "My Hong Kong Route";
  const location = formData.get("location").trim() || "Hong Kong";
  const difficulty = formData.get("difficulty").toUpperCase();
  const routeData = {
    title: routeName,
    place: location,
    steps: Math.max(Math.round(distance * 1400), 500),
    image: "./create-route-map.png",
    note: `${difficulty} custom route · ${distance.toFixed(2)} km · ${customRoutePoints.length} points`,
    points: customRoutePoints.map((point) => ({ lat: point.lat, lng: point.lng })),
    distanceKm: Number(distance.toFixed(2)),
  };

  createdRoutes.push(routeData);
  updateMyRouteButton();

  routeDialogContent.innerHTML = `
    <h2>Route created</h2>
    <p>${routeName} has been saved with ${routeData.distanceKm.toFixed(2)} km and ${routeData.points.length} route points.</p>
    <button class="dialog-action" type="button">Back to Find</button>
  `;
  routeDialogContent.querySelector(".dialog-action").addEventListener("click", () => {
    routeDialog.close();
    showScreen("walk");
  });
  routeDialog.showModal();
});

literatureFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    literatureFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    literatureRouteCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.difficulty === filter;
      card.hidden = !shouldShow;
    });
  });
});

function bindRouteCards(cards, routeType) {
  cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("is-locked")) return;
    const title = card.querySelector("h2").textContent;
    const note = card.querySelector(".literature-route-body p").textContent;

    if (routeDetails[title]) {
      openRouteDetail(routeDetails[title]);
      return;
    }

    routeDialogContent.innerHTML = `
      <h2>${title}</h2>
      <p>${note}</p>
      <p>Start this ${routeType} route and collect biodiversity cards along the way.</p>
      <button class="dialog-action" type="button">Start route</button>
    `;
    routeDialogContent.querySelector(".dialog-action").addEventListener("click", () => {
      totalSteps += 1800;
      updateProgress();
      routeDialog.close();
    });
    routeDialog.showModal();
  });
});
}

natureFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    natureFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    natureRouteCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.difficulty === filter;
      card.hidden = !shouldShow;
    });
  });
});

bindRouteCards(literatureRouteCards, "literature");
bindRouteCards(natureRouteCards, "nature");
routeDetailCloseButton.addEventListener("click", closeRouteDetail);
routeDetailOverlay.addEventListener("click", (event) => {
  if (event.target === routeDetailOverlay) {
    closeRouteDetail();
  }
});
letsWalkButton.addEventListener("click", () => {
  const routeKey = routeDetailOverlay.dataset.route || activeRouteDetailKey;
  totalSteps += 1800;
  updateProgress();
  closeRouteDetail();
  if (routeWalkConfigs[routeKey]) {
    openRouteWalk(routeKey);
    return;
  }
  showScreen("dashboard");
});
routeWalkBackButton.addEventListener("click", () => {
  const config = routeWalkConfigs[activeRouteWalkKey] || routeWalkConfigs.yuen;
  showScreen(config.backScreen);
});
routeWalkName.addEventListener("click", () => {
  const config = routeWalkConfigs[activeRouteWalkKey] || routeWalkConfigs.yuen;
  if (!config.ctaLabel) return;
  const checkpoint = config.checkpoints[0];
  if (!checkpoint) return;
  activeCheckpoint = checkpoint;
  showScreen("camera-checkin");
});
routePhotoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const config = routeWalkConfigs[activeRouteWalkKey] || routeWalkConfigs.yuen;
    const checkpoint = config.checkpoints[Number(button.dataset.checkpointSlot)];
    if (checkpoint) openCheckpoint(checkpoint);
  });
});
checkpointBackButton.addEventListener("click", () => showScreen("route-walk"));
checkpointArrivedButton.addEventListener("click", () => {
  showScreen("camera-checkin");
});
cameraBackButton.addEventListener("click", () => showScreen("checkpoint"));
retryLocationButton.addEventListener("click", requestCheckpointLocation);
captureCheckinButton.addEventListener("click", captureCheckpointPhoto);
cameraRetakeButton.addEventListener("click", () => {
  if (activeCheckpoint) startCameraCheckin(activeCheckpoint);
});
cameraRetakeButtonInline.addEventListener("click", () => {
  if (activeCheckpoint) startCameraCheckin(activeCheckpoint);
});
cameraDoneButton.addEventListener("click", () => {
  if (activeCheckpoint?.completed) {
    showRewardModal(activeCheckpoint);
  }
});
rewardCloseButton.addEventListener("click", () => {
  closeRewardModal();
  showScreen("checkpoint");
});
rewardClaimButton.addEventListener("click", () => {
  closeRewardModal();
  showScreen("checkpoint");
});
rewardModal.addEventListener("click", (event) => {
  if (event.target === rewardModal) {
    closeRewardModal();
    showScreen("checkpoint");
  }
});
routeWalkTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.walkTab;
    routeWalkTabButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    routeWalkPanels.forEach((panel) => {
      const isActive = panel.dataset.walkPanel === target;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  });
});
discussionInputBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = discussionMessageInput.value.trim();
  if (!message) return;

  addDiscussionMessage({ text: message, mine: true });
  discussionMessageInput.value = "";

  setTimeout(() => {
    addDiscussionMessage({
      author: "Lila",
      text: getDiscussionReply(message),
      avatar: "yellow",
    });
  }, 520);
});
dashboardPetStage.addEventListener("click", petDashboardPartner);
dashboardPetStage.addEventListener("animationend", (event) => {
  if (event.animationName === "dashboardPetPop") {
    dashboardPetStage.classList.remove("is-petted");
  }
});
dashboardPetStage.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  petDashboardPartner(event);
});

dashboardSideToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const isCollapsed = dashboardSideNav.classList.toggle("is-collapsed");
  dashboardSideToggle.setAttribute(
    "aria-label",
    isCollapsed ? "Expand dashboard actions" : "Collapse dashboard actions",
  );
});

translateCardButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (button.disabled) return;
    const card = button.closest(".collection-card");
    const exp = Number(button.dataset.exp || 20);
    updateDashboardExp(exp);
    button.disabled = true;
    button.textContent = "Converted";
    card.classList.add("is-translated");
  });
});

dashboardScreen.addEventListener("click", (event) => {
  if (event.target.closest(".shop-modal-overlay")) return;

  if (dashboardScreen.classList.contains("is-shop-open") && !event.target.closest(".shop-decoration-panel")) {
    closeShopPanel();
    return;
  }

  const blockedTarget = event.target.closest(
    "button, .dashboard-user-card, .dashboard-side-nav, .dashboard-pet-stage, .cards-collection, .shop-decoration-panel, .shop-modal-overlay",
  );
  if (blockedTarget) return;
  dashboardScreen.classList.toggle("is-cards-collapsed");
});

renderRoutes();
updateProgress();
