import type { StoryData } from "../types"

export const storyData: StoryData = {
  MONDAY: {
    0: {
      text: "The sun streams through your Morewood Gardens dorm window, casting a golden glow on your cluttered desk covered with sticky notes and empty cans of Pepsi (the official CMU beverage). Finals week has officially begun at Carnegie Mellon. Your first exam, Calculus II with Professor Flaherty, looms tomorrow morning. You check your phone: it's 7:30 AM, and your roommate is still snoring peacefully.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Hit snooze and burrow deeper under your CMU plaid comforter. You were up late watching proof videos on YouTube—surely a bit more sleep will help those derivatives stick?",
          effects: {
            energy: 10,
            stress: -5,
            prepared: -5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Force yourself up with a groan. 'Scotty would be proud,' you mutter, referencing the campus mascot as you stumble toward your electric kettle for some instant coffee. Today needs an early start.",
          effects: {
            energy: 5,
            stress: -5,
            prepared: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Grab your phone and start panic-scrolling through GroupMe messages from your study group. Everyone's sharing last-minute integral techniques and horror stories about last year's exam. Your heart rate quickens with each notification.",
          effects: {
            energy: -10,
            stress: 10,
            prepared: 0,
          },
        },
      ],
    },
    1: {
      text: "It's 10:00 AM, and the campus is buzzing with the frantic energy of finals week. Students clutch coffee cups like lifelines as they hurry between buildings. You need to find the perfect study spot for your Calculus cramming session—a decision that feels strangely monumental right now.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Brave the crowds at Hunt Library, where you might snag one of those coveted fourth-floor window seats overlooking the iconic Fence. You've heard the whispered legend that sitting there guarantees an A—if you can find an outlet for your laptop.",
          effects: {
            prepared: 5,
            stress: 5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Stay in your dorm room, where you can study in your pajamas and avoid the intimidating sight of other students who seem to understand calculus better than you do. Besides, your snack stash is here.",
          effects: {
            prepared: -5,
            happiness: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Head to Gates Center—the CS students there make you feel like you're not alone in your suffering. Plus, the Helix staircase is both an architectural marvel and a reminder that spirals are just 3D functions, right? The Randy Pausch memorial might bring some inspiration.",
          effects: {
            prepared: 5,
            stress: 5,
          },
        },
      ],
    },
    2: {
      text: "The afternoon slipped away faster than you expected. Now, the sunset casts long shadows across the Cut as evening approaches. Your Calculus notes stare back at you accusingly, and your phone buzzes with notifications—your friends are asking about your plans for tonight. Your stomach growls, reminding you that stress-eating Entropy cookies doesn't count as dinner.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Head to Doherty Hall for the Calculus review session. Your TA Jake, who somehow makes eigenvalues sound exciting, promised to cover the trickiest parts of the material. You'll miss the chicken tenders night at Schatz dining hall, but derivatives wait for no one.",
          effects: {
            prepared: 10,
            happiness: -5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Switch gears to work on your CS 112 project. Professor Kosbie's deadline waits for no one, and you've heard rumors that this project separates the 'real programmers' from everyone else. Your anxiety spikes as you open the IDE.",
          effects: {
            prepared: 5,
            stress: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Text back 'I'm in!' to your friends' invitation for a study break dinner at The Exchange. You rationalize that the Thai food and laughter might clear your mind—plus, Alex from your recitation will be there, and they always take the best notes.",
          effects: {
            happiness: 10,
            prepared: -5,
          },
        },
      ],
    },
  },
  TUESDAY: {
    0: {
      text: "Your alarm blares the CMU fight song, jolting you awake. Today's the day: Calculus II exam with Professor Flaherty, infamous for questions that 'separate the problem-solvers from the memorizers.' It's 8:00 AM, your exam is at 10:00 AM in Baker Hall, and your stomach feels like it's calculating its own derivatives. You've got two hours left—how do you use them?",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Spread your color-coded notes across every available surface, muttering 'integration by parts, u-substitution, partial fractions' like a prayer. Your roommate gives you a sympathetic glance before heading out with a whispered 'good luck.'",
          effects: {
            prepared: 5,
            stress: 5,
            energy: -5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Change into your running shoes and take a brisk walk around campus. The crisp morning air clears your head as you pass the Pausch Bridge, its lights still glowing in the morning mist. 'The calculus will still be there when I get back,' you remind yourself.",
          effects: {
            stress: -10,
            energy: 5,
            happiness: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Text your study group to meet at La Prima in Wean Hall. Nothing says 'I'm prepared to tackle improper integrals' like the strongest espresso on campus and last-minute formula recitations with equally panicked peers.",
          effects: {
            prepared: 5,
            energy: 10,
            stress: 10,
          },
        },
      ],
    },
    1: {
      text: "Emerging from Baker Hall after two hours of mathematical combat, you blink in the midday sun. Your hand cramps from writing out solutions, and your brain feels simultaneously empty and overloaded. You check your phone—several messages from your CS project group asking about your progress on the assignment due tomorrow. The Calculus exam is behind you, but the week is far from over.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Drag yourself back to your dorm for a power nap. Your brain feels like it's been through a blender, and you mumble 'just 30 minutes' as you collapse onto your bed, fully clothed, setting three alarms just in case.",
          effects: {
            energy: 15,
            stress: -5,
            prepared: -5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Head straight to the cluster in Wean Hall, claiming a computer with determination. 'No rest for the weary,' you tell yourself, opening your half-finished code. The sooner you start, the sooner you'll understand why your algorithm keeps returning NullPointerExceptions.",
          effects: {
            prepared: 10,
            stress: 5,
            energy: -5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Message your friends to meet at the Tazza D'Oro in Gates Center. Over tea and Mediterranean wraps, you'll dissect the Calculus exam questions, share answers, and possibly regret every life choice that led you to choose a STEM major. The solidarity is comforting, though.",
          effects: {
            happiness: 10,
            stress: -10,
            prepared: -5,
          },
        },
      ],
    },
    2: {
      text: "The campus grows quieter as evening falls. From your workspace, you can see the Cathedral of Learning glowing in the distance at Pitt—a reminder that you're not the only student burning the midnight oil. Your CS project mockingly stares back from your screen, only half-completed, and due in less than 24 hours. Your roommate has already texted that they're pulling an all-nighter in Hunt.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Open your backpack and pull out your emergency stash of Red Bull and Sour Patch Kids. 'Sleep is for the weak,' you declare to your rubber duck debugging companion, preparing for battle with Java until dawn.",
          effects: {
            prepared: 15,
            energy: -15,
            stress: 10,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Set a hard deadline: code until midnight, then sleep. 'I'll debug better with some rest,' you rationalize, remembering the cautionary tale of the senior who fell asleep during their final presentation after three consecutive all-nighters.",
          effects: {
            prepared: 10,
            energy: -5,
            stress: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Message your CS friends with a desperate 'SOS' and your Zoom room link. Within minutes, you've formed an impromptu help squad, sharing screens and solutions. 'This is why we're Tartans,' someone says, as you collectively tackle the project's toughest challenges.",
          effects: {
            prepared: 5,
            stress: -5,
            happiness: 5,
          },
        },
      ],
    },
  },
  WEDNESDAY: {
    0: {
      text: "Morning light filters through your blinds, forming patterns on your floor that resemble the flow diagrams from your CS project. Speaking of which, it's due by 5:00 PM today. Your desk is a monument to student chaos—empty coffee cups, scattered notebooks, and a half-eaten protein bar from... yesterday? Two days ago? Time has lost all meaning. Calculus is behind you, but your Physics exam looms tomorrow.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Bypass your growling stomach and launch straight into coding. 'Food is just a distraction,' you mutter, channeling the intensity of the seniors who practically live in the Gates basement labs during finals.",
          effects: {
            prepared: 10,
            energy: -10,
            stress: 5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Take 20 minutes to scramble some eggs and make proper coffee. As you eat, you review your project plan. 'Even Andrew Carnegie took breaks,' you tell yourself, referencing the university's industrialist founder while plotting your approach for the day.",
          effects: {
            energy: 10,
            prepared: 5,
            happiness: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Panic rises like a wave as you stare at your unfinished code. You hastily draft an email to Professor Kosbie explaining that you're struggling with the recursive function implementation. Your finger hovers over 'send' as you contemplate the consequences.",
          effects: {
            stress: 15,
            happiness: -10,
            prepared: -5,
          },
        },
      ],
    },
    1: {
      text: "Noon strikes, and the Fence—freshly painted last night by some enterprising student organization—gleams in the winter sun. You've made progress on your CS project, but the looming Physics exam on quantum mechanics and electromagnetic fields makes you question your career choices. Your phone buzzes with a reminder: 'PHYS 142 - 24 hours until doom.'",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Double down on finishing your CS project. 'One battle at a time,' you decide, blocking out thoughts of wave-particle duality as you hunt for the elusive bug in your recursive algorithm.",
          effects: {
            prepared: 10,
            stress: 5,
            energy: -5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Attempt to multitask by switching between debugging your code and reviewing Physics formulas. Every time your code compiles, you reward yourself by solving a practice problem about electric fields.",
          effects: {
            prepared: 5,
            stress: 10,
            energy: -10,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Walk to the Tartans Pavilion for fresh air and a coffee. The short break clears your mind, and you return with a clearer perspective on both your coding problem and your study strategy. 'Oxygen helps brain function,' you justify to your inner workaholic.",
          effects: {
            energy: 10,
            happiness: 5,
            prepared: 0,
          },
        },
      ],
    },
    2: {
      text: "SUCCESS! You've submitted your CS project to Autolab with thirteen minutes to spare—cutting it close, even by CMU standards. You allow yourself a brief victory dance before reality sets in: your Physics exam is tomorrow, and your knowledge of quantum mechanics is... theoretical at best. The evening stretches before you, full of potential and anxiety in equal measure.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Head to Wean Hall where the Physics TA is holding a review session. The room is already packed with students clutching formula sheets and looking slightly terrified. Someone has brought a quantum mechanics-themed cake to 'sweeten the pain.'",
          effects: {
            prepared: 15,
            energy: -5,
            happiness: 5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Retreat to your dorm room with your Physics textbook and notes. You put on noise-canceling headphones, set a timer for focused studying, and place your Scotty dog plushie nearby for moral support.",
          effects: {
            prepared: 10,
            stress: 5,
            energy: -5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Message your friends: 'CS project submitted! Celebrating at Fuel & Fuddle with potato nachos, who's in?' The Physics exam can wait a couple hours while you decompress with friends who understand exactly what you've been through.",
          effects: {
            happiness: 15,
            prepared: -5,
            energy: -5,
          },
        },
      ],
    },
  },
  THURSDAY: {
    0: {
      text: "Your eyes crack open to the sound of a vacuum cleaner in the hallway—overzealous custodial staff preparing for the end of term. The clock reads 8:17 AM. Your Physics exam on quantum mechanics and electromagnetic fields awaits at 1:00 PM in Doherty Hall. Your body feels like lead, and your brain like static—the cumulative weight of finals week pressing down on you.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Grab your Physics notes and head to Zebra Lounge in Wean Hall. The quiet study space with its black and white striped walls seems appropriate for contemplating the quantum universe. You spread out your equations and dive in, determined to master Schrödinger's equation once and for all.",
          effects: {
            prepared: 10,
            stress: 5,
            energy: -5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Put on your workout clothes and head to the University Center for a quick session. The endorphins might be your only hope for staying alert during the exam. 'My body is a quantum system,' you joke to yourself on the treadmill, 'both exhausted and energized until observed.'",
          effects: {
            energy: 10,
            stress: -5,
            happiness: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Message your Physics study group to meet outside Doherty Hall. Together, you quiz each other on Maxwell's equations and wave functions, finding comfort in collective confusion. 'If we all fail together, they'll have to curve it,' someone jokes nervously.",
          effects: {
            prepared: 5,
            stress: 0,
            happiness: 5,
          },
        },
      ],
    },
    1: {
      text: "You emerge from Doherty Hall at 3:30 PM, your brain swimming with quarks and electron fields. The exam was... well, it was a CMU Physics exam. One student exited early, either a genius or giving up—no one can tell. Your final hurdle awaits: tomorrow's Chemistry exam with Professor Hendrickson, known for his love of organic reaction mechanisms and trick questions.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "March directly to Mellon Institute, claiming a study carrel in the quiet building where Chemistry students traditionally cram. You unpack your molecular model kit, ready to build carbon chains until your fingers cramp.",
          effects: {
            prepared: 10,
            stress: 5,
            energy: -5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Head to the Cohon University Center for some much-needed decompression. You treat yourself to frozen yogurt from Skibo Café, sinking into a comfortable chair to watch other students scurry about. 'Chemistry can wait two hours,' you decide, scrolling through memes about finals on the CMU subreddit.",
          effects: {
            energy: 10,
            happiness: 10,
            prepared: -5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Check Professor Hendrickson's office hours and hurry across campus. You arrive slightly out of breath to find a small line of equally anxious students. When your turn comes, you ask about that confusing section on catalytic reactions that's been keeping you up at night.",
          effects: {
            prepared: 15,
            stress: 0,
            energy: -5,
          },
        },
      ],
    },
    2: {
      text: "Night has fallen over campus. The lights of Pittsburgh shimmer beyond Craig Street as you contemplate your Chemistry exam tomorrow—the final boss of your first CMU finals week. Your phone pings with texts from both your study group and friends inviting you to a midnight breakfast at Schatz Dining. Decision time: how do you want to spend this critical last night?",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Settle in for another all-nighter, your third this week. You stick Post-it notes with reaction mechanisms on your wall and chug a 'Scottie's Special'—a dangerous concoction of coffee, energy drink, and desperation that upperclassmen swear by.",
          effects: {
            prepared: 15,
            energy: -20,
            stress: 15,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Study intensively until 10 PM, reviewing your color-coded notes on reaction mechanisms and equilibrium constants. Then, you perform your finals week ritual: shower, set out clothes for tomorrow, and place your lucky pencil on your desk before getting a solid night's sleep.",
          effects: {
            prepared: 10,
            energy: 10,
            stress: -5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Join your Chemistry study group in the Mudge Hall lounge. Someone's brought molecular model kits, another has created elaborate flashcards, and a third has actually baked cookies shaped like benzene rings. Together, you turn studying into something almost enjoyable.",
          effects: {
            prepared: 5,
            happiness: 10,
            stress: -5,
          },
        },
      ],
    },
  },
  FRIDAY: {
    0: {
      text: "Morning light streams through your window, illuminating the chaos of your finals week dwelling—discarded coffee cups, stray papers, and a whiteboard covered in chemical formulas. Your Chemistry exam with Professor Hendrickson awaits at 11:00 AM. It's the last hurdle before freedom, and you can almost taste the sweet relief of semester's end. Your phone shows several messages wishing you good luck.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Skip breakfast entirely. 'Food is just a distraction,' you mutter, flipping frantically through your notes on organic reaction mechanisms. Your stomach protests, but your anxiety drowns it out as you recite functional groups under your breath.",
          effects: {
            prepared: 5,
            energy: -10,
            stress: 10,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Make yourself a proper breakfast—eggs and toast from your dorm microwave—and review your summary sheets calmly. 'The molecules will still be there after I eat,' you remind yourself, following advice from that senior TA who somehow aced every Chemistry class.",
          effects: {
            energy: 10,
            prepared: 5,
            stress: -5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Text your friends to meet at La Prima for one last pre-exam coffee. Over espresso and pastries, you quiz each other on reaction pathways and share encouraging stories of seniors who survived Hendrickson's exams and lived to tell the tale.",
          effects: {
            happiness: 10,
            prepared: 0,
            energy: 5,
          },
        },
      ],
    },
    1: {
      text: "You emerge from Doherty Hall at 1:00 PM, blinking in the daylight like someone released from captivity. It's over. All of it. Your first CMU finals gauntlet—completed. Around you, other students are laughing, crying, or staring vacantly into the distance. The weight of the week lifts from your shoulders as the realization sinks in: you're free until next semester.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Trudge back to your dorm room, kick off your shoes without untying them, and collapse face-first onto your bed. 'I'll celebrate later,' you mumble into your pillow, already drifting into the deepest sleep of your collegiate career.",
          effects: {
            energy: 15,
            stress: -10,
            happiness: 5,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Follow the sounds of celebration to the Cut, where someone has set up speakers playing 'Celebration' by Kool & The Gang. Students are dancing, hugging, and signing each other's chemistry molecular model kits. You join in, feeling the collective joy of survival.",
          effects: {
            happiness: 15,
            energy: -5,
            stress: -10,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Return to your dorm and begin the methodical process of packing for winter break. As you fold clothes and organize notes, you feel a strange mix of relief and nostalgia for the intense week you've just survived. 'One semester down,' you think, 'only seven more to go.'",
          effects: {
            stress: -5,
            energy: -5,
            happiness: 0,
          },
        },
      ],
    },
    2: {
      text: "The campus has transformed as evening falls—fairy lights twinkle in the trees along the Cut, music drifts from residence halls, and the stress fog that permeated the air all week has lifted. You've survived your first finals week at CMU—a rite of passage that's left you exhausted but somehow stronger. Now it's time to close this chapter properly.",
      choices: [
        {
          id: 0,
          label: "A",
          text: "Don your most comfortable non-academic clothes and head to the legendary Finals Week Liberation Party at the Cohon University Center. Legend has it that even President Jahanian makes an appearance in a Hawaiian shirt, though no one can confirm this rumor.",
          effects: {
            happiness: 20,
            energy: -10,
            stress: -15,
          },
        },
        {
          id: 1,
          label: "B",
          text: "Meet your closest friends at Sichuan Gourmet on Murray Avenue for a celebration dinner. Over spicy food that makes your eyes water (or is that emotional relief?), you recount the week's triumphs and tragedies, cementing friendships forged in academic fire.",
          effects: {
            happiness: 15,
            stress: -10,
            energy: 5,
          },
        },
        {
          id: 2,
          label: "C",
          text: "Set up a video call with your family back home. As you show them around your dorm room and campus through your phone camera, you realize how much you've grown in just one semester. 'It was tough,' you tell them with newfound confidence, 'but I did it. I really belong here.'",
          effects: {
            happiness: 10,
            stress: -10,
            energy: 0,
          },
        },
      ],
    },
  },
}
