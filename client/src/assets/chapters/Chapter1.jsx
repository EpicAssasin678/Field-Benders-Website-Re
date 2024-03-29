import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';



import './chapter1.css';

const Chapter = () => {

    return(
        
        <div className='chapter-wrapper'>

            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c4">
            <span class="c0">Admiring the evening sky,</span>
            </p>
            <p class="c4">
            <span class="c0">Rays of warmth into my heart, </span>
            </p>
            <p class="c4">
            <span class="c0">Spectral beams cross the soul, </span>
            </p>
            <p class="c4">
            <span class="c0">Shot across all existence,</span>
            </p>
            <p class="c4">
            <span class="c0">And I feel its magnitude,</span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c4">
            <span class="c0">Against the horizon a cloud erupts,</span>
            </p>
            <p class="c4">
            <span class="c0">Fiery displays of energy,</span>
            </p>
            <p class="c4">
            <span class="c0">Tormented demons writhing for escape,</span>
            </p>
            <p class="c4">
            <span class="c0">Black and red skin billowing,</span>
            </p>
            <p class="c4">
            <span class="c0">Their faces and form cast within,</span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c4">
            <span class="c0">Sounds not of the sky,</span>
            </p>
            <p class="c4">
            <span class="c0">Penetrating shouts from those fiends,</span>
            </p>
            <p class="c4">
            <span class="c0">A wall of air coming towards,</span>
            </p>
            <p class="c4">
            <span class="c0">Clouds pushing towards Amaterasu,</span>
            </p>
            <p class="c4">
            <span class="c0">More pillars of fire erupt,</span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c4">
            <span class="c0">Against the horizon a blue beam,</span>
            </p>
            <p class="c4">
            <span class="c0">Standing tall as heaven,</span>
            </p>
            <p class="c4">
            <span class="c0">Briefest of moments I heard its voice,</span>
            </p>
            <p class="c4">
            <span class="c0">Crackling of static and air,</span>
            </p>
            <p class="c4">
            <span class="c0">An upset force birthed this moment,</span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c4">
            <span class="c0">Admiring the evening sky,</span>
            </p>
            <p class="c4">
            <span class="c0">Rays of warmth into my heart,</span>
            </p>
            <p class="c4">
            <span class="c0">Spectral beams cross the soul</span>
            </p>
            <p class="c4">
            <span class="c0">Shot across all existence,</span>
            </p>
            <p class="c4">
            <span class="c0">And I feel its magnitude</span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c5">
            <span class="c0"></span>
            </p>
            <p class="c5">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c2">
            <span class="c0"></span>
            </p>
            <p class="c4">
            <span class="c0">Chapter I: Beaches of Okuma </span>
            </p>
            <p class="c5">
            <span class="c3"></span>
            </p>
            <p class="c5">
            <span class="c3"></span>
            </p>
            <p class="c8">
            <span class="c3">October 1st, 2044</span>
            </p>
            <p class="c8">
            <span class="c3">Undisclosed Location Along the Coast of Soma, Sendai Bay, Japan</span>
            </p>
            <p class="c5">
            <span class="c3"></span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;The International Monetary Fund has designated Japan as its &lsquo;future investment until the foreseeable future&rsquo; sparking outrage amongst Middle Eastern and North African countries. Leader of Egypt, Abdel Fattah El-Sisi remarked &lsquo;the IMF has disregarded its previous promises to deliver much-needed aid to our withering developments, which have been impacted by its member&#39;s inaction&rsquo;, causing a broader outrage&hellip;&rdquo;</span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sound vibrated off the walls of our patrol boat rather poorly, causing every square inch of space to fill with a tinny echo of the news report. Itadoske and his 5&rsquo;8&rdquo; body were twitching with rage in a manner that almost seemed fictional. He never was good at maintaining composure, if Itadoske Myanora felt something strongly, you could bet he&rsquo;d make it known. Every feature about him was overbearing, from his long messy black hair to his vicious brown eyes and terrifying complexion. </span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Turn this shit off!&rdquo;, yelled Itadoske, trying to read his field manual. No one around me reacted to his anger. Probably turned it on to piss him off originally. I grabbed the remote and turned off the radio. &ldquo;Thank the lord, someone who recognizes my anguish!&rdquo;.</span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One large hand palmed my back softly, &ldquo;You really shouldn&rsquo;t have done that, now he&rsquo;ll bitch to you constantly,&rdquo; whispered Raiku Surikaga into my ear. Raiku, or &ldquo;Thunderclap&rdquo; according to his callsign, always gave me timely advice. Callsigns amongst JFAC mercenaries were reserved for those who came back in one piece and left a Field Bender in pieces. Returning from the Anomaly had a survival rate of approximately 30%. They were heroes amongst the barracks.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;So what&rsquo;s the point of this insertion again?&rdquo; asked Todo, another private and the only other previous member of Squad 74 to survive. Despite both of us growing up and serving together, we barely got along and always struggled to cooperate. He waved his hand around almost in a wave to gather our attention. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Shoulda&rsquo; known, it&rsquo;s in your debrief!&rdquo; tersely replied Itadoske. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Reading doesn&rsquo;t get me pumped for fighting.&rdquo; </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Ah, so that&rsquo;s the reason eh?&rdquo; asked Raiku, raising his right brow, imposing that glare of nearly infinite mass with only a single eye. &ldquo;What a bad liar!&rdquo;, his hand flung into the air nonchalantly. &ldquo;Eh I suppose we could use a refresher, our operation begins in Okuma. Remember the 89th?&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;The Ghost Squad,&rdquo; interjected Lorum Catill, resting his head in between his legs. Another owner of a callsign, though I was never allowed to know it. Raiku insisted his callsign was too important to casually utter, and that one day if the situation calls for it, I&rsquo;ll hear him announce it. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Correct. They&rsquo;ve been MIA for over two months, and while that isn&rsquo;t traditionally worrying for the boys at Sapporo, the Ghost Squad has reported almost weekly for over a year. We are tasked with a search and seizure of their members, which unfortunately puts us strictly in the outskirts of Fukushima&mdash;Kunimi to be specific.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Oh brother! So we&rsquo;re going into the heart of the bastard!&rdquo;, yelled Itadoske. Raiku chuckled.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;One way of phrasing it, but yes. We&rsquo;ll be in the hotbed of Bender groups, the &lsquo;Purgatory&rsquo; of Anomaly inhabitants.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Great, we&rsquo;re dead.&rdquo;, said Todo.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Fear not! I, Raiku &lsquo;Thunderclap&rsquo; Surikaga shall be your welcoming tour guide through such an apocalyptic nightmare! You may even wish to refer to me as Virgil!&rdquo; Raiku spoke without the subtlest hint of fear. Instead, he seemed excited. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Careless and passionate as ever Raiku&rdquo;, Lorum looked at Raiku slowly, &ldquo;we aren&rsquo;t in the clear, remember our last trip to Fukushima?&rdquo; Raiku stopped his theatrics, retreating into a more solemn and collected character.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Unfortunately.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;You two aren&rsquo;t the only ones you know.&rdquo; Todo smirked. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Saw it on your file, but you never informed me or another superior within the squad? So then you know the picnic we&rsquo;re jumping into.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;All too well sir.&rdquo;, I commented. To the left of me was Ishin Myota, the newest addition to our squad and undoubtedly the most reserved soul I ever met. No matter the subject, Ishin usually would butt out, he saved his mouth for the battlefield. And at that moment, he looked into me attempting to discern the implication of such a statement. I saw that face only once before.</span>
            </p>
            <p class="c5 c7">
            <span class="c3"></span>
            </p>
            <p class="c1">
            <span class="c3">Three months before, when we were training, I saw Ishin Myota alone, not participating in combatants. Instead, he was fiddling with the core of his engine. Nobody asked how or why Ishin had an Engine considering his position as a Corporal. Full engines were usually acquired after being assigned as a Level 2 or higher. Nonetheless, we all accepted such unfathomable circumstances because the brass sent him to us. Questioning decisions like that never unfolds well. </span>
            </p>
            <p class="c1">
            <span class="c3">Even more peculiar than Ishin&rsquo;s Engine was his core&mdash;a solid silver Eastern Orthodox Cross pendant with a ruby stamped in the center. Nails, rings, bullets, I&rsquo;ve seen all different kinds of cores from Level 2 operatives but never something so ornate. The nature of such a situation inclined me to confront him during a group meal at a ramen bar in Sapporo. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Aye! Aye! Aye! Ishin, you know I wanted to ask you about something.&rdquo;, I said loudly while pressing a bottle of Sake to his shoulder. Delaying himself, he met my countenance, raised his brow, and returned to eating. &ldquo;Oh come on Isheeeen!&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Are you suicidal? Or is the sake extracting some hidden bravery from that insipid soul you parade?&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Owch Sheen, just being friendly. Dick.&rdquo; Ishin angrily shifted to his side to face me, scanning the booth for anyone who could hear what he was about to say.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Fine, you&rsquo;re probably too drunk to remember this anyway. My Engine was given to me by someone who is no longer here. She fought protecting me while I stood watching, helpless and bleeding from a knife wound to the gut.&rdquo; He turned back to his drink, tilted the glass, and watched the ice cubes shift. &ldquo;That special woman wanted me to have her Engine and her artifact. Wherever I go she follows, because she&rsquo;ll always be in that ruby.&rdquo; Teardrops hit the bar surface while Ishin gulped the remainder of his gin tonic. He stared deep into that glass with the same introspective glare. The lump in my throat grew as time passed. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Shit. How&rsquo;d you even know what I&rsquo;d ask?&rdquo; Ishin wouldn&rsquo;t look at me.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Because I see you watching me when I tune my core panel.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Thanks for that.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Didn&rsquo;t do it for you.&rdquo;, Ishin responded suddenly. Raiku was walking towards us. We suddenly felt large hands grip our shoulders. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Boys! Did I interrupt anything?&rdquo;, asked Raiku, sticking his head between us and quickly observing us two.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Just Kazuki interrogating me,&#39;&#39; replied Ishin. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Why don&rsquo;t you all join us for a game of pool! Lorum could use a partner&rdquo;, Raiku bumped his shoulder, &ldquo;...Ishin! Right now it&rsquo;s Itadoske and I against him! Kazuki can be on my team.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Fine. But the teams are still uneven genius.&rdquo; </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Sure! I&rsquo;d like to kick Lorum&rsquo;s ass anyway,&rdquo; I said, clutching my fist in an exaggerated manner. </span>
            </p>
            <p class="c1">
            <span class="c3">That conversation was never spoken about again. I believe he judged me as far more inebriated than I truly was. Never got to ask him about his eye socket augmentations and why an operator would even need them. He was chock full of peculiarities. Raiku was quite prudent in ending our discussion that night, even though he claims to know nothing about Ishin&rsquo;s history. </span>
            </p>
            <p class="c5 c7">
            <span class="c3"></span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Seems that we all more or less have history in Fukushima then&mdash;besides Itadoske and I,&rdquo; said Ishin.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;That&rsquo;s hard to believe with your ominous ass, bearing specialized gear like a Level I Soldier.&rdquo; Snapped Itadoske almost in a mocking manner.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Believe what you want.&rdquo; Ishin returned to staring off. Those two never enjoyed each other&rsquo;s company. Both instantly chose the other when sparring, both always competed with one another in any team competition, even betting. Sometimes for kicks, Lorum and I would instigate arguments and bet on how long they&rsquo;d last. The record still stands at an hour and a half. Comprised most of the time Ishin talked, honestly.</span>
            </p>
            <p class="c1">
            <span class="c3">Our pendular motion began to lessen as the ship landed on the dock. After a complete stop, we went to the deck to inspect the scenery. Even though The Anomaly was a geomagnetic nightmare, nature still overcame its severity on an occasion. This day was no exception, clear white clouds stretched for miles over Matsukawa-ura Bay. Past these white clouds though, were denser, more gray clouds festering. Sunlight illuminated the long enclosing isles of tattered rebar walkway which flanked us on every side except our behind. Each docking bay was constructed with mahogany planks underneath a concrete strip held by a sporadic pillar.</span>
            </p>
            <p class="c1">
            <span class="c3">Soma was particularly busy. Soldiers, residents, and logistical robots were offloading cargo from multiple ships. JFAC had set up multiple bases of operation along the coast of mainland Japan and although worldwide news coverage reports the area to be an anarchic wasteland, such a report was farthest from the truth. While true the government of Japan no longer had control over a vast area of mainland Japan, some factions which erupted after The Incident desired close cooperation with the Japanese government. Soma was different though, the harbor was owned by JFAC exclusively as a military installation, and the surrounding residencies were delegated free residency. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;ALL NEW JFAC/IFAC OPERATIVES IN VESSELS 1-5 REPORT TO OPERATIONS HALL FOR PRESENTATION AT 16:00!&rdquo; Boomed some loud overbearing voice from the intercom system. We all walked on the concrete harbor, observing our surroundings.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Seems that Operation Tempest was a lot larger than we wagered,&rdquo; spoke Raiku, searching for a familiar face among those offloading our cargo.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Even brought IFAC squads,&rdquo; Lorum said. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;I wonder what they could possibly hope to do with this many forces. Reminds me of two &nbsp;years ago.&rdquo; </span>
            </p>
            <p class="c1">
            <span class="c3">Lorum sighed, &ldquo;Yeah it does.&rdquo; A stocky white figure with blonde hair began making his way to our flank.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Let&rsquo;s hope a different outcome than last time eh Rumble Raiku?&rdquo; The figure elbowed Raiku&rsquo;s side while chuckling. </span>
            </p>
            <p class="c1">
            <span class="c3">Raiku looked flustered, &ldquo;Don&rsquo;t call me that! I never liked that nickname you gave me anyway. Besides,&rdquo; he glanced aggressively towards him, &ldquo;take those glasses off when you speak to your rival. Cole.&rdquo; Ishin raised an eyebrow.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Your rival?!&rdquo; exclaimed Todo and I simultaneously. The figure took off his long rectangular black glasses and puffed his chest while Lorum sighed yet again.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Correct and the pleasure is all yours&mdash;,&rdquo; Cole began to speak.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Oh brother here we go,&rdquo; interrupted a defeated-sounding Lorum.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;&mdash;my friends! Ever since our first joint international operation, Raiku and I had competed against each other. Together, we took down a Level 1,&rdquo; he drew his breath and pointed vigorously at each of us, &ldquo;and since then we push each other every opportunity we get!&rdquo; After such a presentation, Cole stood victoriously, holding his hips with pride over our disturbed faces.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;It&rsquo;s true you know!&rdquo; said Raiku, nodding his head. Todo and I were disturbed by the almost cartoon-like tone and presence this dynamic carried, but nonetheless some pieces managed to make sense. Cole seemed to be the first person I could wholeheartedly say matched Raiku&rsquo;s presence and enthusiasm.</span>
            </p>
            <p class="c1">
            <span class="c3">Other members from Cole&rsquo;s squad began to file behind him. One slim black-haired beauty with blue eyes and French skin, another was this stout mammoth of a man carrying a pack almost as large as his entire midsection. Two males with a dark brown complexion stood behind the short mammoth, both looked to be identical twins. </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Oh! That&rsquo;s right! What kind of manners do I have? You haven&rsquo;t even met my new squad besides Lorum!&rdquo; Raiku exclaimed, cutting the tension immediately. &ldquo;This is Itadoske, he&rsquo;s quite the hot-headed type,&rdquo; Itadoske raised his eyebrow, &ldquo;next we have Ishin. He doesn&rsquo;t talk much. Last but not least we have Todo and Kazuki!&rdquo; Everyone was fed up with being talked for. </span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Seems like you have quite the squad Rumble Raiku!&rdquo; Cole crossed his arms, preparing a proper stance for his speech. &ldquo;Before you we have Eliane! She&rsquo;s from Normandy-Bordeaux, and a 1st year with a kill record of 6 already! This hobbit actor is Gerlat, I&rsquo;ve never met such a nonalcoholic Irishmen in my life!&rdquo; He scanned around his squad for a second and paused. &ldquo;And lastly, we have the Rodriguez twins, Alejandro and Lucille.&rdquo;</span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Are you two done speaking for us?&rdquo; Ishin questioned, voicing his frustration at the proverbial dick measuring contest.</span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Well you&rsquo;re no fun, now are you little Ishin?&rdquo; Cole bent down, putting his hand on his kneecaps to meet the eyes of Ishin and smiled wide. That man was a monster of a human in size&mdash;easily six feet, but Ishin wasn&rsquo;t all too shorter. I decided to step in before a squadmate of Cole&rsquo;s tried to reinforce their leader. </span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Would you look at what time it is! Time to report to the Operations Hall for our debriefing! Come on Ishin.&rdquo; I said, grabbing Ishin by the wrist and dragging him towards the operation hall. He held his ground with the defiance of a teenage daughter until eventually shirking my grip and walking with me. Our squad followed. </span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Along the harbor was a matrix of tents, some larger than others, which established the rather &ldquo;permanent&rdquo; parts of this base. Most areas were victims of environmental disasters or geomagnetic problems and thus investing in rather permanent structures was useless. Bases could change like the wind when all you needed to establish one was tarp and stakes. The Operations Hall was one of the largest tents constructed and stuck out among the others. As we walked inside, other groups were fraternizing near the stage area, discussing war stories and bragging about each other&rsquo;s strength. Behind the stage, three guards and a general walked to the top, adjusting his podium. Stonewall posture pervaded his presence, imbuing the air around everyone including myself with a sense of overwhelming authority. Some felt such a pressure out of respect, others for his queer powers of domination. </span>
            </p>
            <p class="c8">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Good evening agents my name is General Akuma and I hope your rest on the landing boats was decent. You&rsquo;ll need it. Most of you were called here under the pretense that Operation Temptest was a search and extract mission involving the Ghost Squadron. While not a lie, OP Temptest is far more complex and ever-reaching than that. Apologies for the deception, but the Ghost Squadron isn&rsquo;t the main objective. Finding that group and its men are a very large benefit, but not a necessity and as such should be treated as an optional order. Tempest is really about </span>
            <span class="c6">what </span>
            <span>the Ghost Squadron were investigating that made them disappear.&rdquo; General Akuma pursed his lips feverishly. &ldquo;Recent intelligence suggests an organization known as Deus Incursion has brought nuclear warheads into its possession. We don&rsquo;t know </span>
            <span class="c6">how </span>
            <span>or </span>
            <span class="c6">why</span>
            <span class="c3">, but our job is to disarm and kill the leader of Deus Incursion.&rdquo;</span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chattering began to disseminate among the crowd as a dramatic pause ensued. Everyone knew the person JFAC was referring to, the name was ubiquitous. &ldquo;Screwtape&rdquo; as he was dubbed, the fabled Bender of Benders, a destructive archdemon of unimaginable power and skill. Luckily, it was rumored, that he incapacitated himself during a fight with a top samurai years ago. Still no one would want to fight such an opponent, even Raiku had beads of sweat puddling along his forehead lines. </span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;EVERYONE! SILENCE!&rdquo; The untameable mass of rumoring soldiers quieted. &ldquo;That name, I understand, brings unease. Screwtape&hellip;&rdquo;, he paused and clicked his tongue for a minute or so, &ldquo;and his power has never been verified by an operative on the field. While this statement may cause only more fear, there is the possibility Screwtape is far weaker than projections believe. Regardless, Sapporo demands we stop Deus Group at once before the international community reacts&mdash;lest we forget Japan&rsquo;s &hellip;tenuous diplomatic standing currently. Six companies will be created based on these squadron leaders and their choices.&rdquo; He pulled out a large clipboard containing a list. </span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorum, who was standing next to Raiku at this point in time, looked to him. &ldquo;They&rsquo;re probably going to call you up to lead a company don&rsquo;t you think?&rdquo; he said.</span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Brass should&rsquo;ve notified me if I would be,&rdquo; Raiku replied.</span>
            </p>
            <p class="c8">
            <span class="c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Brass also lied about the true nature of this mission, probably even the destinations as well.&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">General Akuma began to speak, &ldquo;Raiku &lsquo;Thunderclap&rsquo; Surikaga, Cole &lsquo;Boxer&rsquo; Fletchinger, Vladimir &lsquo;Blindspot&rsquo; Kolinin, Tezumo &lsquo;Chimera&rsquo; Date, Kasuki &lsquo;Scissor&rsquo; Kokomo, and Isaki &lsquo;Razor&rsquo; Soma! Bring yourselves forward!&rdquo; </span>
            </p>
            <p class="c1">
            <span class="c3">Lorum smirked and Itadoske smacked Raiku&rsquo;s back. While walking to the stage, Raiku and Cole glanced at each other through the overbearing and packed crowd. Six men, nine including General Akuma and his guards, stood boldly over their flocks of sheep. Three of those callsigns were new to me. I leaned towards Lorum&rsquo;s ear and whispered to him.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Who are those three on the end?&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">Lorum turned his head around enough to inspect me with a sole eye. &ldquo;Wow, you really didn&rsquo;t hear about these soldiers? They&rsquo;re pretty rumored around The Anomaly. Well, Tezumo is named Chimera because apparently he implanted his limbs with bone tissue of his captures. I&rsquo;m not too certain on what people claim Chimera&rsquo;s abilities are. I want to see that shit. Scissor&rsquo;s an interesting type. No one ever mentioned Razor to you?&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Why would I ask you?&rdquo;</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Fair. Isaki Soma is from a famous samurai clan&hellip;as in the Soma bloodline.&rdquo; He was looking for me to recognize the importance of the Soma name.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Like the clan that gave birth to HF blades?&rdquo; </span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Correct. Apparently Isaki is one of the most skilled samurai we have, with a perfect cut that rivals even Squad 10&rsquo;s swordsman.&rdquo; Uniform chatter was passing between every soldier, other samurai discussing the choices for battalion leaders. General Akuma scanned the crowd angrily, his neck muscles biding rage until he smacked his fist onto his podium.</span>
            </p>
            <p class="c1">
            <span class="c3">&ldquo;Attention! I am not finished!&rdquo;, General Akuma said, silencing the crowd almost immediately. &ldquo;Our objectives along the way to Fukushima are clear; purge the landscape of Deus supporters and supply the Monks within each city we cross. Once we finally reach Fukushima, we will regroup in Fujita Station within the Date District and confront Deus&rsquo; main group. Finally, I wish all of you the best of luck. &nbsp;Remember the reason you joined this fight. If it&rsquo;s for love, for yourself, for the state, or just to see the morning sun one more time, understand this! A world created with the intentions of our enemy disregard all of it! Now men, onboarding for battalions will occur at 18:00 so pack well!&rdquo;</span>
            </p>
       </div>             
    )
}

export default Chapter;