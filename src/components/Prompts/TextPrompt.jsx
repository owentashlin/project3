const textPrompts = [
    {prompt: 'Outside the Window: What’s the weather outside your window doing right now? If that’s not inspiring, what’s the weather like somewhere you wish you could be?'},

    {prompt: 'The Unrequited love poem: How do you feel when you love someone who does not love you back?'},

    {prompt:'The Unrequited love poem: How do you feel when you love someone who does not love you back?'},
    
    {prompt:'The Vessel: Write about a ship or other vehicle that can take you somewhere different from where you are now.'},
    
    {prompt:'Dancing: Who’s dancing and why are they tapping those toes?'},
    
    {prompt:'Food: What’s for breakfast? Dinner? Lunch? Or maybe you could write a poem about that time you met a friend at a cafe.'},
    
    {prompt:'Eye Contact: Write about two people seeing each other for the first time.'},
    
    {prompt:'The Rocket-ship: Write about a rocket-ship on its way to the moon or a distant galaxy far, far, away.'},
    
    {prompt:'Dream-catcher: Write something inspired by a recent dream you had.'},
    
    {prompt:'Animals: Choose an animal. Write about it!'},
    
    {prompt:'Friendship: Write about being friends with someone.'},
    
    {prompt:'Dragon: Envision a dragon. Do you battle him? Or is the dragon friendly? Use descriptive language.'},
    
    {prompt:'Greeting: Write a story or poem that starts with the word “hello” or another greeting.'},
    
    {prompt:'The Letter: Write a poem or story using words from a famous letter or inspired by a letter someone sent you.'},
    
    {prompt:'The Found Poem: Read a book and circle some words on a page. Use those words to craft a poem. Alternatively, you can cut out words and phrases from magazines.'},
    
    {prompt:'Eavesdropper: Create a poem, short story, or journal entry about a conversation you’ve overheard.'},
    
    {prompt:'Addict: Everyone’s addicted to something in some shape or form. What are things you can’t go without?'},
    
    {prompt:'Dictionary Definition: Open up a dictionary to a random word. Define what that word means to you'},
    
    {prompt:'Cleaning: Hey, even writers and creative artists have to do housework sometimes. Write about doing laundry, dishes, and other cleaning activities.'},
    
    {prompt:'Great Minds: Write  about someone you admire and you thought to have had a beautiful mind.'},
    
    {prompt:'Missed Connections: If you go to Craigslist, there is a “Missed Connections” section where you can find some interesting storylines to inspire your writing.'},
    
    {prompt:'Foreclosure: Write a poem or short story about someone who has lost or is about to lose their home.'},
    
    {prompt:'Smoke, Fog, and Haze: Write about not being able to see ahead of you.'},
    
    {prompt:'Sugar: Write something so sweet, it makes your teeth hurt.'},
    
    {prompt:'Numbers: Write a poem or journal entry about numbers that have special meaning to you.'},
    
    {prompt:'Dread: Write about doing something you don’t want to do.'},
    
    {prompt:'Fear: What scares you a little? What do you feel when scared? How do you react?'},
    
    {prompt:'Closed Doors: What’s behind the door? Why is it closed?'},
    
    {prompt:'Shadow: Imagine you are someone’s shadow for a day.'},
    
    {prompt:'Good Vibes: What makes you smile? What makes you happy?'},
    
    {prompt:'Write about your shopping wishlist and how you like to spend money.'},
    
    {prompt:'The Professor: Write about a teacher that has influenced you.'},
    
    {prompt:'Rewrite: Take any poem or short story you enjoy. Rewrite it in your own words.'},
    
    {prompt:'ewelry: Write about a piece of jewelry. Who does it belong to?'},
    
    {prompt:'Sounds: Sit outside for about an hour. Write down the sounds you hear.'},
    
    {prompt:'War and Peace: Write about a recent conflict that you dealt with in your life.'},
    
    {prompt:'Frame It: Write a poem or some phrases that would make for good wall art in your home.'},
    
    {prompt:'Puzzle: Write about putting together the pieces of puzzles.'},
    
    {prompt:'Fire-starters: Write about building a fire.'},
    
    {prompt:'Coffee & Tea: Surely you drink one or the other or know someone who does- write about it!'},
    
    {prompt:'Car Keys: Write about someone getting their driver’s license for the first time.'},
    
    {prompt:'What You Don’t Know: Write about a secret you’ve kept from someone else or how you feel when you know someone is keeping a secret from you.'},
    
    {prompt:'Warehouse: Write about being inside an old abandoned warehouse.'},
    
    {prompt:'The Sound of Silence: Write about staying quiet when you feel like shouting.'},
    
    {prompt:'Insult: Write about being insulted. How do you feel? Why do you think the other person insulted you?'},
    
    {prompt:'Mirror, Mirror: What if you mirror started talking to you? What might the mirror say?'},
    
    {prompt:'Dirty: Write a poem about getting covered in mud.'},
    
    {prompt:'Light Switch: Write about coming out of the dark and seeing the light.'},
    
    {prompt:'The Stars: Take inspiration from a night sky. Or, write about a time when “the stars aligned” in your horoscope.'},

    {prompt:'Joke Poem: What did the wall say to the other wall? Meet you at the corner! Write something inspired by a favorite joke.'},
    
    {prompt:'Just Say No: Write about the power you felt when you told someone no.'},
    
    {prompt:'Sunrise/Sunset: The sun comes up, the sun goes down. It goes round and round. Write something inspiring about the sunrise or sunset.'},
    
    {prompt:'Memory Lane: What does Memory Lane look like? How do you get there?'},
    
    {prompt:'Tear-Jerker: Watch a movie that makes you cry. Write about that scene in the movie.'},
    
    {prompt:'Dear Diary: Write a poem or short story about a diary entry you’ve read or imagined.'},
    
    {prompt:'Holding Hands: The first time you held someone’s hand.'},
    
    {prompt:'Photograph: Write a story or journal entry influenced by a photograph you see online or in a magazine.'},
    
    {prompt:'Alarm Clock: Write about waking up.'},
    
    {prompt:'Darkness: Write a poem or journal entry inspired by what you can’t see.'},
    
    {prompt:'Refreshed: Write a poem about a time you really felt refreshed and renewed. Maybe it was a dip into a pool on a hot summer day, a drink of lemonade, or other situation that helped you relax and start again.'},
    
    {prompt:'Handle With Care: Write about a very fragile or delicate object.'},

    {prompt:'Drama: Write about a time when you got stuck in between two parties fighting with each other.'},
    
    {prompt:'Slip Up: Write about making mistakes.'},

    {prompt:'Spice: Write about flavors and tastes or a favorite spice of yours.'},
    
    {prompt:'Sing a New Song: Take a popular song off the radio and rewrite it as a poem in your own words.'},

    {prompt:'Telephone: Write about a phone call you recently received.'},
    
    {prompt:'Name: Write a poem or short story using your name in some way or form.'},
    
    {prompt:'Dollhouse: Write a poem or short story from the viewpoint of someone living in a doll house.'},
    
    {prompt:'Random Wikipedia Article: Go to Wikipedia and click on Random Article. Write about whatever the page you get.'},
    
    {prompt:'Silly Sports: Write about an extreme or silly sport. If none inspire you, make up the rules for your own game.'},
    
    {prompt:'Recipe: Write about a recipe for something abstract, such as a feeling.'},
    
    {prompt:'Famous Artwork: Choose a famous painting and write about it.'},
    
    {prompt:'Where That Place Used to Be: Think of a place you went to when you were younger but it now no longer there or is something else. Capture your feelings about this in your writing.'},
    
    {prompt:'Last Person You Talked to: Write a quick little poem or story about the last person you spoke with.'},
    
    {prompt:'Caught Red-Handed: Write about being caught doing something embarrassing.'},
    
    {prompt:'Interview: Write a list of questions you have for someone you would like to interview, real or fictional.'},
    
    {prompt:'Missing You: Write about someone you miss dearly.'},
    
    {prompt:'Geography: Pick a state or country you’ve never visited. Write about why you would or would not like to visit that place.'},
    
    {prompt:'Random Song: Turn on the radio, use the shuffle feature on your music collection or your favorite streaming music service. Write something inspired by the first song you hear.'},
    
    {prompt:'Hero: Write a tribute to someone you regard as a hero.'},
    
    {prompt:'Ode to Strangers: Go people watching and write an ode to a stranger you see on the street.'},
    
    {prompt:'Advertisement: Advertisements are everywhere, aren’t they? Write using the slogan or line from an ad.'},
    
    {prompt:'Book Inspired: Think of your favorite book. Now write a poem that sums up the entire story in 10 lines.'},
    
    {prompt:'Magic: Imagine you have a touch of magic, and can make impossible things happen. What would you do?'},
    
    {prompt:'Fanciest Pen: Get out your favorite pen, pencils, or even colored markers and write using them!'},
    
    {prompt:'A Day in the Life: Write about your daily habits and routine.'},
    
    {prompt:'Your Muse: Write about your muse – what do they look like? What does your muse do to inspire you?'},
    
    {prompt:'Convenience Store: Write about an experience you’ve had at a gas station or convenience store.'},
    
    {prompt:'Natural Wonders of the World: Choose one of the natural wonders of the world. Write about it.'},
    
    {prompt:'Status Update: Write a poem using the words from your latest status update or a friend’s status update. If you don’t use sites like Facebook or Twitter, you can often search online for some funny ones to use as inspiration.'},
    
    {prompt:'Green Thumb: Write about growing something.'},
    
    {prompt:'Family Heirloom: Write about an object that’s been passed through the generations in your family.'},
    
    {prompt:'Bug Catcher: Write about insects.'},
    
    {prompt:'Potion: Write about a magic potion. What is it made of? What does it do? What is the antidote?'},
    
    {prompt:'Swinging & Sliding: Write something inspired by a playground or treehouse.'},
    
    {prompt:'Adjectives: Make a list of the first 5 adjectives that pop into your head. Use these 5 words in your story, poem, or journal entry.'},
    
    {prompt:'Fairy Tales: Rewrite a fairy tale. Give it a new ending or make it modern or write as a poem.'},
    
    {prompt:'Whispers: Write about someone who has to whisper a secret to someone else.'},
    
    {prompt:'Smile: Write a poem about the things that make you smile.'},
    
    {prompt:'Seasonal: Write about your favorite season.'},
    
    {prompt:'Normal: What does normal mean to you? Is it good or bad to be normal?'},
    
    {prompt:'Recycle: Take something you’ve written in the past and rewrite it into a completely different piece.'},
    
    {prompt:'Wardrobe: Write about a fashion model or what’s currently in your closet or drawers.'},
    
    {prompt:'Secret Message: Write something with a secret message hidden in between the words. For example, you could make an acrostic poem using the last letters of the word or use secret code words in the poem.'},
    
    {prompt:'Vacation: Write about a vacation you took.'},
    
    {prompt:'Heat: Write about being overheated and sweltering.'},
    
    {prompt:'Spellbinding: Write a magic spell.'},
    
    {prompt:'Collection: Write about collecting something, such as salt shakers, sea shells, or stamps.'},
    
    {prompt:'Taking Chances: Everyone takes a risk at some point in their life. Write about a time when you took a chance and what the result was.'},
    
    {prompt:'Carnival: Write a poem or story or journal entry inspired by a carnival or street fair.'},
    
    {prompt:'Country Mouse: Write about someone who grew up in the country visiting the city for the first time.'},
    
    {prompt:'Questions: Write about questions you have for the universe. Optional: include an answer key.'},
    
    {prompt:'Rushing: Write about moving quickly and doing things fast.'},
    
    {prompt:'Staircase: Use a photo of a staircase or the stairs in your home or a building you love to inspire you.'},
    
    {prompt:'Neighbors: Make up a story or poem about your next door neighbor.'},
    
    {prompt:'Black and Blue: Write about a time you’ve been physically hurt.'},
    
    {prompt:'All Saints: Choose a saint and create a poem about his or her life.'},
    
    {prompt:'Beach Inspired: What’s not to write about the beach?'},
    
    {prompt:'Shoes: What kind of shoes do you wear? Where do they lead your feet?'},
    
    {prompt:'The Ex: Write a poem to someone who is estranged from you.'},
    
    {prompt:'My Point of View: Write in the first person point of view.'},
    
    {prompt:'Stray Animal: Think of the life of a stray cat or dog and write about that.'},
    
    {prompt:'Stop and Stare: Create a poem or story about something you could watch forever.'},
    
    {prompt:'Your Bed: Describe where you sleep each night.'},
    
    {prompt:'Fireworks: Do they inspire you or do you not like the noise and commotion? Write about it.'},
    
    {prompt:'Frozen: Write about a moment in your life you wish you could freeze and preserve.'},
    
    {prompt:'Alone: Do you like to be alone or do you like having company?'},
    
    {prompt:'Know-it-all: Write about something you are very knowledgeable about, for example a favorite hobby or passion of yours.'},
    
    {prompt:'The Promise: Write about a promise you’ve made to someone. Did you keep that promise?'},
    
    {prompt:'Commotion: Write about being overstimulated by a lot of chaos.'},
    
    {prompt:'Read the News Today: Construct a poem or story using a news headline for your first line.'},
    
    {prompt:'Macro: Write a description of an object close-up.'},
    
    {prompt:'Transportation: Write about taking your favorite (or least-favorite) form of transportation.'},
    
    {prompt:'Gadgets: If you could invent a gadget, what would it do? Are there any gadgets that make your life easier?'},
    
    {prompt:'Bring on the Cheese: Write a tacky love poem that is so cheesy, it belongs on top of a pizza.'},
    
    {prompt:'Ladders: Write a story or poem that uses ladders as a symbol.'},
    
    {prompt:'Bizarre Holiday: There is a bizarre holiday for any date! Look up a holiday for today’s date and create a poem in greeting card fashion or write a short story about the holiday to celebrate.'},
    
    {prompt:'Blog-o-sphere: Visit your favorite blog or your feedreader and craft a story, journal entry, or poem based on the latest blog post you read.'},
    
    {prompt:'Mailbox: Create a poem, short story, or journal entry based on a recent item of mail you’ve received.'},
    
    {prompt:'Sharing: Write about sharing something with someone else.'},
    
    {prompt:'Cactus: Write from the viewpoint of a cactus. What’s it like to live in the desert or have a prickly personality?'},
    
    {prompt:'It’s a Sign: Have you seen any interesting road signs lately?'},
    
    {prompt:'Furniture: Write about a piece of furniture in your home.'},
    
    {prompt:'Failure: Write about a time you failed at something. Did you try again or give up completely?'},
    
    {prompt:'Mystical Creatures: Angels or other mystical creatures – use them as inspiration.'},
    
    {prompt:'Flying: Write about having wings and what you would do.'},
    
    {prompt:'Clear and Transparent: Write a poem about being able to see-through something.'},
    
    {prompt:'Break the Silence: Record yourself speaking, then write down what you spoke and revise into a short story or poem.'},
    
    {prompt:'Beat: Listen to music with a strong rhythm or listen to drum loops. Write something that goes along with the beat you feel and hear.'},
    
    {prompt:'Color Palette: Search online for color palettes and be inspired to write by one you resonate with.'},
    
    {prompt:'Magazine: Randomly flip to a page in a magazine and write using the first few words you see as an opening line.'},
    
    {prompt:'The Grass is Greener: Write about switching the place with someone or going to where it seems the “grass is greener”.'},
    
    {prompt:'Mind & Body: Write something that would motivate others to workout and exercise.'},
    
    {prompt:'Shaping Up: Write something that makes a shape on the page…ie: a circle, a heart, a square, etc.'},
    
    {prompt:'Twenty-One: Write about your 21st birthday.'},
    
    {prompt:'Aromatherapy: Write about scents you just absolutely love.'},
    
    {prompt:'Swish, Buzz, Pop: Create a poem that uses Onomatopoeia.'},
    
    {prompt:'What Time is It? Write about the time of day it is right now. What are people doing? What do you usually do at this time each day?'},
    
    {prompt:'Party Animal: Have you ever gone to a party you didn’t want to leave? Or do you hate parties? Write about it!'},
    
    {prompt:'Miss Manners: Use the words “please” and “thank you” in your writing.'},
    
    {prompt:'Cliche: Choose a common cliche, then write something that says the same thing but without using the catch phrase.'},
    
    {prompt:'Eco-friendly: Write about going green or an environmental concern you have.'},
    
    {prompt:'Missing You: Write about someone you miss.'},
    
    {prompt:'Set it Free: Think of a time when you had to let someone or something go to be free…did they come back?'},
    
    {prompt:'Left Out: Write about a time when you’ve felt left out or you’ve noticed someone else feeling as if they didn’t belong.'},
    
    {prompt:'Suitcase: Write about packing for a trip or unpacking from when you arrive home.'},
    
    {prompt:'Fantasy: Write about fairies, gnomes, elves, or other mythical creatures.'},
    
    {prompt:'Give and Receive: Write about giving and receiving.'},
    
    {prompt:'Baker’s Dozen: Imagine the scents and sights of a bakery and write.'},
    
    {prompt:'Treehouse: Write about your own secret treehouse hideaway.'},
    
    {prompt:'Risk: Write about taking a gamble on something.'},
    
    {prompt:'Acrostic: Choose a word and write an acrostic poem where every line starts with a letter from the word.'},
    
    {prompt:'Crossword Puzzle: Open up the newspaper or find a crossword puzzle online and choose one of the clues to use as inspiration for your writing.'},
    
    {prompt:'Silver Lining: Write about the good that happens in a bad situation.'},
    
    {prompt:'Gloves: Write about a pair of gloves – what kind of gloves are they? Who wears them and why?'},
    
    {prompt:'All that Glitters: Write about a shiny object.'},
    
    {prompt:'Jealousy: Write with a theme of envy and jealousy.'},
    
    {prompt:'How Does Your Garden Grow? Write about a flower that grows in an unusual place.'},
    
    {prompt:'Jury Duty: Write a short story or poem that takes place in a courtroom.'},
    
    {prompt:'Gifts: Write about a gift you have given or received.'},
    
    {prompt:'Running: Write about running away from someone or something.'},
    
    {prompt:'Discovery: Think of something you’ve recently discovered and use it as inspiration.'},
    
    {prompt:'Complain: Write about your complaints about something.'},
    
    {prompt:'Gratitude: Write a poem or journal entry that is all about things you are thankful for.'},
    
    {prompt:'Chemistry: Choose an element and write a poem or story that uses that word in one of the lines.'},
    
    {prompt:'Applause: Write about giving someone a standing ovation.'},
    
    {prompt:'Old Endings Into New Beginnings: Take an old poem, story, or journal entry of yours and use the last line and make it the first line of your writing today.'},
    
    {prompt:'Longing: Write  about something you very much want to do.'},
    
    {prompt:'I Am: Write a motivational poem or journal entry about positive traits that make you who you are.'},
    
    {prompt:'Rainbow: What is at the end of a rainbow? Or, take a cue from Kermit the Frog, and ask yourself, why are there so many songs about rainbows?'},
    
    {prompt:'Museum: Take some time to visit a nearby museum with your journal. Write about one of the pieces that speaks to you.'},
    
    {prompt:'Cartoon: Think of your favorite cartoon or comic. Write a poem or story that takes place in that setting.'},
    
    {prompt:'Copycat: Borrow a line from a famous public domain poem to craft your own.'},
    
    {prompt:'From the Roof-tops: Imagine you could stand on a rooftop and broadcast a message to everyone below – what would you say?'},
    
    {prompt:'Time Travel: If there was a time period you could visit for a day, where would you go? Write about traveling back in time to that day.'},
    
    {prompt:'Changing Places: Imagine living the day as someone else.'},
    
    {prompt:'Neighborhood: Write about your favorite place in your neighborhood to visit and hang out at.'},
    
    {prompt:'Pirates: Write about a pirate ship.'},
    
    {prompt:'Interview: Write based on a recent interview you’ve read or seen on TV or heard on the radio.'},
    
    {prompt:'Hiding Spaces: Write about places you like to hide things at. What was a favorite hiding spot for you as a child playing hide-and-seek?'},
    
    {prompt:'Extreme Makeover: Imagine how life might be different if you could change your hair color or clothing into something completely opposite from your current style.'},
    
    {prompt:'Empathy: Write about your feelings of empathy or compassion for another person.'},
    
    {prompt:'Opposites: Write a poem or story that ties in together two opposites.'},
    
    {prompt:'Boredom: Write about being bored or make a list of different ways to entertain yourself.'},
    
    {prompt:'Strength: Think of a time when you’ve been physically or emotionally strong and use that as inspiration.'},
    
    {prompt:'Hunger: Write from the perspective of someone with no money to buy food.'},
    
    {prompt:'Greed: Write about someone who always wants more – whether it be money, power, etc. etc.'},
    
    {prompt:'Volcano: Write about an eruption of a volcano.'},
    
    {prompt:'Video Inspiration: Go to Vimeo.com or YouTube.com and watch one of the videos featured on the homepage. Write something based on what you watch.'},
    
    {prompt:'Sneeze: Write about things that make you sneeze.'},
    
    {prompt:'Footsteps on the Moon: Write about the possibility of life in outer-space.'},
    
    {prompt:'Star-crossed: Write a short modern version of the story of Romeo and Juliet or think of real-life examples of lovers who are not allowed to be together to use as inspiration for your writing.'},
    
    {prompt:'Font-tastic: Choose a unique font and type out a poem, story or journal entry using that font.'},
    
    {prompt:'Schedule: Take a look at your calendar and use the schedule for inspiration in writing.'},
    
    {prompt:'Grandparents: Write about a moment in your grandparent’s life.'},
    
    {prompt:'Collage: Go through a magazine and cut out words that grab your attention. Use these words to construct a poem or as a story starter or inspiration for your journal.'},
    
    {prompt:'Oh so Lonely: Write a poem about what you do when you are alone – do you feel lonely or do you enjoy your own company?'},
    
    {prompt:'Waterfall: Think of a waterfall you’ve seen in person or spend some time browsing photos of waterfalls online. Write about the movement, flow, and energy.'},
    
    {prompt:'First Kiss: Write about your first kiss.'},
    
    {prompt:'So Ironic: Write about an ironic situation you’ve been in throughout your life.'},
    
    {prompt:'Limerick: Write a limerick today.'},
    
    {prompt:'Grocery Shopping: Write about an experience at the grocery store.'},
    
    {prompt:'Fashion: Go through a fashion magazine or browse fashion websites online and write about a style you love.'},
    
    {prompt:'So Close: Write about coming close to reaching a goal.'},
    
    {prompt:'Drinks on Me: Write a poem or short story that takes place at a bar.'},
    
    {prompt:'Online Friends: Write an ode to someone online you’ve met and become friends with.'},
    
    {prompt:'Admiration: Is there someone you admire? Write about those feelings.'},
    
    {prompt:'Trash Day: Write from the perspective of a garbage collector.'},
    
    {prompt:'Mailbox: Open your mailbox and write something inspired by one of the pieces of mail you received.'},
    
    {prompt:'Fresh & Clean: Write about how you feel after you take a shower.'},
    
    {prompt:'Energized: Write about how you feel when you’re either at a high or low energy level for the day.'},
    
    {prompt:'Rhyme & No Reason: Make up a silly rhyming poem using made up words.'},
    
    {prompt:'Tech Support: Use computers or a conversation with tech support you’ve had as inspiration.'},
    
    {prompt:'Hotel: Write from the perspective of someone who works at a hotel or staying at a hotel.'},
    
    {prompt:'Underwater: Write about sea creatures and under water life. What’s under the surface of the ocean? What adventures might be waiting?'},
    
    {prompt:'Breathing: Take a few minutes to do some deep breathing relaxation techniques. Once your mind is clear, just write the first few things that you think of.'},
    
    {prompt:'Liar, Liar: Make up a poem or story of complete lies about yourself or someone else.'},
    
    {prompt:'Obituaries: Look at the recent obituaries online or in the newspaper and imagine the life of someone and write about that person.'},
    
    {prompt:'Pocket: Rummage through your pockets and write about what you keep or find in your pockets.'},
    
    {prompt:'Cinquain: Write a cinquain poem, which consists of 5 lines that do not rhyme.'},
    
    {prompt:'Alphabetical: Write a poem that has every letter of the alphabet in it.'},
    
    {prompt:'Comedy Club: Write something inspired by a comedian.'},
    
    {prompt:'Cheater: Write about someone who is unfaithful.'},
    
    {prompt:'Sestina: Give a try to writing a sestina poem.'},
    
    {prompt:'Fight: Write about witnessing two people get in an argument with each other.'},
    
    {prompt:'Social Network: Visit your favorite Social Networking website (ie: Facebook, Pinterest, Google, Twitter, etc.) and write a about a post you see there.'},
    
    {prompt:'Peaceful: Write about something peaceful and serene.'},{prompt:'In the Clouds: Go cloud watching for the day and write about what you imagine in the clouds.'},
    
    {prompt:'At the Park: Take some time to sit on a park bench and write about the sights, scenes, and senses and emotions you experience.'},
    
    {prompt:'Sonnet: Write a sonnet today.'},
    
    {prompt:'Should, Would, And Could: Write a poem or story using the words should, would, and could.'},
    
    {prompt:'How to: Write directions on how to do something.'},
    
    {prompt:'Alliteration: Use alliteration in your poem or in a sentence in a story.'},
    
    {prompt:'Poker Face: Write about playing a card game.'},
    
    {prompt:'Timer: Set a timer for 5 minutes and just write. Don’t worry about it making sense or being perfect.'},
    
    {prompt:'Dance: Write about a dancer or a time you remember dancing.'},
    
    {prompt:'Write for a Cause: Write a poem or essay that raises awareness for a cause you support.'},
    
    {prompt:'Magic: Write about a magician or magic trick.'},
    
    {prompt:'Out of the Box: Imagine finding a box. Write about opening it and what’s inside.'},
    
    {prompt:' Under the Influence: What is something has impacted you positively in your life?'},
    
    {prompt:'Forgotten Toy: Write from the perspective a forgotten or lost toy.'},
    
    {prompt:'Rocks and Gems: Write about a rock or gemstone meaning.'},
    
    {prompt:'Remote Control: Imagine you can fast forward and rewind your life with a remote control.'},
    
    {prompt:'Symbolism: Think of objects, animals, etc. that have symbolic meaning to you. Write about it.'},
    
    {prompt:'Light at the End of the Tunnel: Write about a time when you saw hope when it seemed like a hopeless situation.'},
    
    {prompt:'Smoke and Fire: “Where there’s smoke, there’s fire.” Use this saying as inspiration to write!'},
    
    {prompt:'Railroad: Write about a train and its cargo or passengers.'},
    
    {prompt:'Clipboard: Write about words you imagine on an office clipboard.'},
    
    {prompt:'Shipwrecked: Write about being stranded somewhere – an island, a bus stop, etc.'},
    
    {prompt:'Quotable: Use a popular quote from a speaker and use it as inspiration for your writing.'},
    
    {prompt:'ind Map it Out: Create a mind map of words, phrases, and ideas that pop into your head or spend some time browsing the many mind maps online. Write a poem, story, or journal entry inspired by the mind map.'},
    
    {prompt:'Patterns: Write about repeating patterns that occur in life.'},
    
    {prompt:'Scrapbook: Write about finding a scrapbook and the memories it contains.'},
    
    {prompt:'Cure: Write about finding a cure for an illness.'},
    
    {prompt:'Email Subject Lines: Read your email today and look for subject lines that may be good starters for writing inspiration.'},
    
    {prompt:'Wishful Thinking: Write about a wish you have.'},
    
    {prompt:'Doodle: Spend some time today doodling for about 5-10 minutes. Write about the thoughts you had while doodling or create something inspired by your finished doodle.'},
    
    {prompt:'Chalkboard: Imagine you are in a classroom. What does it say on the chalkboard?'},
    
    {prompt:'Sticky: Imagine a situation that’s very sticky, maybe even covered in maple syrup, tape or glue. Write about it!'},
    
    {prompt:'Flashlight: Imagine going somewhere very dark with only a flashlight to guide you.'},
    
    {prompt:'A Far Away Place: Envision yourself traveling to a fictional place, what do you experience in your imaginary journey?'},
    
    {prompt:'On the Farm: Write about being in a country or rural setting.'},
    
    {prompt:'Promise to Yourself: Write about a promise you want to make to yourself and keep.'},
    
    {prompt:'Brick Wall: Write a poem that is about a brick wall – whether literal or figurative.'},
    
    {prompt:'Making a Choice: Write about a time when you had to make a difficult choice.'},
    
    {prompt:'Repeat: Write about a time when you’ve had to repeat yourself or a time when it felt like no one was listening.'},
    
    {prompt:'Outcast: Write about someone who is not accepted by their peers. (for example, the Ugly Ducking)'},
    
    {prompt:'Scary Monsters: Write about a scary (or not-so-scary) monster in your closet or under the bed.'},
    
    {prompt:'Sacrifice: Write about something you’ve sacrificed doing to do something else or help another person.'},
    
    {prompt:'Imperfection: Create a poem that highlights the beauty in being flawed.'},
    
    {prompt:'Birthday Poem: Write a poem inspired by birthdays.'},
    
    {prompt:'Title First: Make a list of potential poem or story titles and choose one to write from.'},
    
    {prompt:'Job Interview: Write about going on a job interview.'},
    
    {prompt:'Get Well: Write a poem that will help someone who is sick feel better quick!'},
    
    {prompt:'Lost in the Crowd: Write about feeling lost in the crowd.'},
    
    {prompt:'Apple a Day: Write about a health topic that interests you.'},
    
    {prompt:'Cravings: Write about craving something.'},
    
    {prompt:'Phobia: Research some common phobias, choose one, and write about it.'},
    
    {prompt:'In the Moment: Write about living in the present moment.'},
    
    {prompt:'Concrete: Write about walking down a sidewalk and what you see and experience.'},
    
    {prompt:'Battle: Write about an epic battle, whether real, fictional or figurative.'},
    
    {prompt:'This Old House: Write about an old house that is abandoned or being renovated.'},
    
    {prompt:'Clutter: Is there a cluttered spot in your home? Go through some of that clutter today and write about what you find or the process of organizing.'},
    
    {prompt:'Go Fly a Kite: Write about flying a kite.'},
    
    {prompt:'On the TV: Flip to a random TV channel and write about the first thing that comes on – even if it is an infomercial!'},
    
    {prompt:'Fruit: Write an ode to your favorite fruit.'},
    
    {prompt:'Long Distance Love: Write about a couple that is separated by distance.'},
    
    {prompt:'Glasses: Write about a pair of eyeglasses or someone wearing glasses.'},
    
    {prompt:'Robotic: Write about a robot.'},
    
    {prompt:'Cute as a Button: Write about something you think is just adorable.'},
    
    {prompt:'Movie Conversation: Use a memorable conversation from a favorite movie to inspire your writing.'},
    
    {prompt:'Easy-Peasy: Write  about doing something effortlessly.'},
    
    {prompt:'Idiom: Choose from a list of idioms one that speaks to you and create a poem around that saying or phrase. (Ie: It is raining cats and dogs)'},
    
    {prompt:'Playground: Whether it is the swings or the sandbox or the sliding boards, write about your memories of being on a playground.'},
    
    {prompt:'Romance: Write about romantic things partners can do for each other.'},
    
    {prompt:'Rock Star: Imagine you are a famous rock star. Write about the experience.'},
    
    {prompt:'Come to Life: Imagine ordinary objects have come to life. Write about what they do and say.'},
    
    {prompt:'Airplane: Write about meeting someone on an airplane and a conversation you might have.'},
    
    {prompt:'Health & Beauty: Take some time to peruse your medicine cabinet or the health and beauty aisles at a local store. Write a poem, short story, or journal entry inspired by a product label.'},
    
    {prompt:'Determination: Write about not giving up.'},
    
    {prompt:'Instrumental Inspiration: Listen to some instrumental music and write a poem that matches the mood, beat, and style of the music.'},
    
    {prompt:'Wait Your Turn: Write about having to wait in line.'},
    
    {prompt:'Personality Type: Do you know your personality type? (There are many free quizzes online) – write about what type of personality traits you have.'},
    
    {prompt:'Decade: Choose a favorite decade and write about it. (IE: 1980’s or 1950’s for example)'},
    
    {prompt:'I Believe: Write your personal credo of things you believe in.'},
    
    {prompt:'Lost and Found: Write about a lost object.'},
    
    {prompt:'Say it: Write a poem or story that uses dialogue between two people.'},
    
    {prompt:'The Unsent Letter: Write about a letter that never made it to its recipient.'},
    
    {prompt:'The Windows of the Soul: Write a poem about the story that is told through someone’s eyes.'},
    
    {prompt:'Trial and Error: Write about something you learned the hard way.'},
    
    {prompt:'Escape: Write about where you like to go to escape from it all.'},
    
    {prompt:'What’s Cooking: Write something inspired a favorite food or recipe.'},
    
    {prompt:'Records: Go through your file box and pull out old receipts or records…write something inspired by what you find!'},
    
    {prompt:'Banking: Write about visiting the bank.'},
    
    {prompt:'Sweet Talk: Write about trying to convince someone of something.'},
    
    {prompt:'Serendipity: Write about something that happened by chance in a positive way.'},
    
    {prompt:'Distractions: Write about how it feels when you can’t focus.'},
    
    {prompt:'Corporation: Write about big business.'},
    
    {prompt:'Word of the Day: Go to a dictionary website that has a word of the day and use it in a poem, story or journal entry you write.'},
    
    {prompt:'Pick Me Up: What do you do when you need a pick me up?'},
    
    {prompt:'Unfinished: Write about a project you started but never completed.'},
    
    {prompt:'Forgiveness: Write about a time when someone forgave you or you forgave someone.'},
    
    {prompt:'Weakness: Write about your greatest weakness.'},
    
    {prompt:'Starting: Write about starting a project.'},
    
    {prompt:'Mechanical: Think of gears, moving parts, machines.'},
    
    {prompt:'Random Act of Kindness: Write about a random act of kindness you’ve done for someone or someone has done for you, no matter how small or insignificant it may have seemed.'},
    
    {prompt:'Underground: Imagine living in a home underground and use that as inspiration for writing.'},
    
    {prompt:'Classic Rock: Pick a classic rock love ballad and rewrite it into a story or poem with a similar theme.'},
    
    {prompt:'Night Owl: Write about staying up late at night.'},
    
    {prompt:'Magnetic: Write about attraction to something or someone.'},
    
    {prompt:'Teamwork: Write about working with a team towards a common goal.'},
    
    {prompt:'Roller-coaster: Write about the ups and downs in life.'},
    
    {prompt:'Motivational Poster: Look at some motivational posters online and write a poem or journal entry inspired by your favorite one.'},
    
    {prompt:'Games: Write about the games people play – figuratively or literally.'},
    
    {prompt:'Turning Point: Write about a point in life where things turned for the better or worse.'},
    
    {prompt:'Spellbound: Write about a witch’s spell.'},
    
    {prompt:'Anniversary: Write about the anniversary of a special date.'},
    
    {prompt:'Gamble: Be inspired by a casino or lottery ticket.'},
    
    {prompt:'Picnic: Write about going on a picnic.'},
    
    {prompt:'Garage: Write about some random item you might find in a garage.'},
    
    {prompt:'Review: Review your week, month, or year in a journal entry or poem format.'},
    
    {prompt:'Detective: Write about a detective searching for clues or solving a mystery.'},
    
    {prompt:'Camera: Take your camera for a walk and write based on one of the photographs you take.'},
    
    {prompt:'Visiting: Write about visiting a family member or friend.'},
    
    {prompt:'Trust: Write about putting trust in someone.'}
    ]
   
const TextPrompt = () => {
    const randomTextIndex = Math.floor(Math.random() * textPrompts.length)

    const randomTextObject = textPrompts[randomTextIndex]
    
    const randomTextPrompt = JSON.stringify(randomTextObject)

    console.log(randomTextPrompt)

    return (
        <div>
        <h4>Random Text Prompt: </h4>    
            {randomTextPrompt}
        </div>
    )
}

export default TextPrompt
