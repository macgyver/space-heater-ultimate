<script lang="ts">
	// images sized to 600px wide, reduced to 256 colors via ImageAlpha, and then optimized with ImageOptim
	import aj from './aj.png'
	import miles from './miles.png'
	import claire from './claire.png'
	import alan from './alan.png'
	import anthony from './anthony.png'
	import duke from './duke.png'
	import jfey from './jfey.png'
	import jonny from './jonny.png'
	import beezus from './beezus.png'
	import kyle from './kyle.png'
	import sandy from './sandy.png'
	import hackett from './hackett.png'
	import pete from './pete.png'
	import friend from './friend.png'
	import chance from './chance.png'
	import amber from './amber.png'
	import ashleigh from './ashleigh.png'
	import austin from './austin.png'
	import ben from './ben.png'
	import dane from './dane.png'
	import kath from './kath.png'
	import kelly from './kelly.png'
	import lisi from './lisi.png'
	import molly from './molly.png'
	import tucker from './tucker.png'
	import verena from './verena.png'
	import nada from './nada.png'
	import ryan from './ryan.png'
	import hannah from './hannah.png'
	import carly from './carly.png'
	// import ryan from './ryan.png'
	import conner from './conner.png'
	import gabe from './gabe.png'
	import gabewebster from './gabewebster.png'
	import dutchy from './dutchy.png'
	import ty from './ty.png'

	const players = [
		{
			name: 'Alan Kolick',
			picture: alan,
			dinosaur: 'Oviraptor',
			link: 'https://en.wikipedia.org/wiki/Oviraptor',
			reason: 'steals eggs',
			notes: '3rd year',
		},
		{
			name: 'Anthony McLean',
			picture: anthony,
			dinosaur: 'Tyrannosaurus Rex',
			link: 'https://en.wikipedia.org/wiki/Tyrannosaurus',
			reason: 'chomp chomp',
			notes: '3rd year',
		},

		{
			name: 'David “Duke” Boylan-Kolchin',
			picture: duke,
			dinosaur: 'Crocodile',
			link: 'https://en.wikipedia.org/wiki/Crocodile',
			reason: 'good at lurking; moves surprisingly quickly',
			notes: '3rd year',
		},
		{
			name: 'Jenny Fey',
			picture: jfey,
			dinosaur: 'Styracosaurus',
			link: 'https://en.wikipedia.org/wiki/Styracosaurus',
			reason: 'dino-tsar; has some points',
			notes: '3rd year',
		},
		{
			name: 'Jonny Malks',
			picture: jonny,
			dinosaur: 'Brachiosaurus',
			link: 'https://en.wikipedia.org/wiki/Brachiosaurus',
			reason: 'slow; eats leaves',
			notes: '3rd year',
		},
		{
			name: 'Kelly “Beezus” Hyland',
			picture: beezus,
			dinosaur: 'Compsognathus',
			link: 'https://en.wikipedia.org/wiki/Compsognathus',
			reason: 'scratches/bites like a house cat',
			notes: '3rd year',
		},
		{
			name: 'Kyle Khalifa',
			picture: kyle,
			dinosaur: 'dinasor',
			link: 'https://www.youtube.com/watch?v=q6EoRBvdVPQ',
			reason: 'yeeee',
			notes: '3rd year',
		},
		{
			name: 'Sandy Jorgensen',
			picture: sandy,
			dinosaur: 'Allosaurus',
			link: 'https://en.wikipedia.org/wiki/Allosaurus',
			reason: '“different;” will eat you up',
			notes: '3rd year',
		},
		{
			name: 'Pete MacArthur',
			picture: pete,
			dinosaur: 'Hadrosaurus',
			link: 'https://en.wikipedia.org/wiki/Hadrosaurus',
			reason: 'true middle',
			notes: '2nd year',
		},
		{
			name: 'Theresa Hackett',
			picture: hackett,
			dinosaur: 'Diplodocus',
			link: 'https://en.wikipedia.org/wiki/Diplodocus',
			reason: 'longest tail of any creature that ever lived?',
			notes: '2nd year',
		},
		{
			name: 'Joe Freund',
			picture: friend,
			dinosaur: 'Argentinosaurus',
			link: 'https://en.wikipedia.org/wiki/Argentinosaurus',
			reason: 'way bigger',
			notes: 'back for more',
		},
		{
			name: 'Chance Cochran',
			picture: chance,
			dinosaur: 'Irritator',
			link: 'https://en.wikipedia.org/wiki/Irritator',
			reason: 'a problem',
			notes: '“returner”',
		},
		{
			name: 'AJ Merriman',
			picture: aj,
			dinosaur: 'Momo',
			link: 'https://avatar.fandom.com/wiki/Momo',
			reason: 'sense of humor',
			notes: '1st year',
		},
		{
			name: 'Amber Sinicrope',
			picture: amber,
			dinosaur: 'Ouranosaurus',
			link: 'https://en.wikipedia.org/wiki/Ouranosaurus',
			reason: 'no, YOU are',
			notes: '1st year',
		},
		{
			name: 'Ashleigh Buch',
			picture: ashleigh,
			dinoHtml: `
				<span style="display:inline-flex;align-items: center; gap: .4em;">
				<span style="display:flex;flex-direction:column; gap: .2em; align-items:center">
					<span>distance raptor</span>
					<span style="border-top:1px solid currentColor; align-self: stretch"></span>
					<span>time raptor</span>
				</span>
				=
				<a href='https://en.wikipedia.org/wiki/Velociraptor'>velociraptor</a>
				</span>
			`,
			reason: 'nerd',
			notes: '1st year',
		},
		{
			name: 'Austin Bartenstein',
			picture: austin,
			dinosaur: 'Spinosaurus',
			link: 'https://en.wikipedia.org/wiki/Spinosaurus',
			reason: 'would not be able to kill T Rex but “would give good fight”',
			notes: '1st year',
		},
		{
			name: 'Ben Preiss',
			picture: ben,
			width: 200,
			aspectRatio: 0.6103764,
			dinosaur: 'Gorosaurus',
			link: 'https://en.wikipedia.org/wiki/Gorosaurus',
			reason: 'does a cool jump kick thing to attack King Kong',
			notes: '1st year',
		},
		{
			name: 'Dane Warner',
			picture: dane,
			dinosaur: 'Muttaburrasaurus',
			link: 'https://en.wikipedia.org/wiki/Muttaburrasaurus',
			reason: 'weird toes; surprisingly long arms',
			notes: '1st year',
		},
		{
			name: 'Kath Ratcliff',
			picture: kath,
			dinosaur: 'Triceraptops',
			link: 'https://en.wikipedia.org/wiki/Muttaburrasaurus',
			reason: 'three beautiful horns',
			notes: '1st year',
		},
		{
			name: 'Kelly Ross',
			picture: kelly,
			width: 175,
			aspectRatio: 0.49710025,
			dinosaur: 'Apatosaurus',
			link:
				'https://en.wikipedia.org/wiki/List_of_The_Land_Before_Time_characters#Littlefoot',
			reason: '(aka Littlefoot) very long; has main character syndrome',
			notes: '1st year',
		},
		{
			name: 'Lisi Lohre',
			picture: lisi,
			dinosaur: 'Pterodactylus',
			link: 'https://en.wikipedia.org/wiki/Pterodactylus',
			reason: 'as close to an owl as a dino can get',
			notes: '1st year',
		},
		{
			name: 'Molly Roy',
			picture: molly,
			width: 225,
			aspectRatio: 0.8220339,
			dinosaur: 'Sauralophus',
			link: 'https://en.wikipedia.org/wiki/The_Land_Before_Time_(film)',
			reason: '“yep, yep!”',
			notes: '1st year',
		},
		{
			name: 'Nikki “Tucker” Ross',
			picture: tucker,
			dinosaur: 'Ankylosaurus',
			link: 'https://en.wikipedia.org/wiki/Ankylosaurus',
			reason: 'bone crusher',
			notes: '1st year',
		},
		{
			name: 'Verena Woloson',
			picture: verena,
			dinosaur: 'Stegosaurus',
			link: 'https://en.wikipedia.org/wiki/Stegosaurus',
			reason: 'took a buzzfeed quiz',
			notes: '1st year',
		},
		{
			name: 'Nada Tramonte',
			picture: nada,
			dinosaur: 'Pteronadon',
			link: 'https://en.wikipedia.org/wiki/Pteranodon',
			reason: 'because pterodactyl is a misnomer',
			notes: '1st year',
		},
		{
			name: 'Hannah Boone',
			picture: hannah,
			dinosaur: 'Fabrosaurus',
			link: 'https://en.wikipedia.org/wiki/Fabrosaurus',
			reason: 'might not be real',
			notes: 'practice squad',
		},
		{
			name: 'Carly Campana',
			picture: carly,
			dinosaur: 'Iguanadon',
			link: 'https://en.wikipedia.org/wiki/Iguanodon',
			reason: 'thumb spikes; prehensile fifth finger (aka thumb)',
			notes: 'practice squad',
		},
		{
			name: 'Claire Trop',
			picture: claire,
			link: 'https://media.giphy.com/media/cnS6tecHFYx0I/source.gif',
			dinosaur: 'All Dinos, All Saurs',
			reason: 'time is a flat circle',
			notes: 'practice squad',
		},
		{
			name: 'Conner Fox',
			picture: conner,
			dinosaur: 'Plesiosaurus',
			link: 'https://en.wikipedia.org/wiki/Plesiosaurus',
			reason: 'comfortable on the water',
			notes: 'practice squad',
		},
		{
			name: 'Gabe Webster',
			picture: gabewebster,
			dinosaur: 'Struthiomimus',
			link: 'https://en.wikipedia.org/wiki/Struthiomimus',
			reason: 'funky',
			notes: 'practice squad',
		},
		{
			name: 'Gabe Westegren',
			picture: gabe,
			dinosaur: 'Archeopteryx',
			link: 'https://en.wikipedia.org/wiki/Archaeopteryx',
			reason: 'the very first bird',
			notes: 'practice squad',
		},
		{
			name: 'Miles Grovic',
			picture: miles,
			dinosaur: 'Saltopus',
			link: 'https://en.wikipedia.org/wiki/Saltopus',
			reason: '"hopping foot"',
			notes: 'practice squad',
		},
		{
			name: 'Ryan Cooper',
			picture: ryan,
			dinosaur: 'Theupel Strudel',
			reason: 'the Dragonborn he made in D&D',
			link: 'https://dungeonsdragons.fandom.com/wiki/Dragonborn',
			notes: 'practice squad',
		},

		{
			name: 'Alex “Dutchy” Ghesquiere',
			picture: dutchy,
			dinosaur: 'Troodon',
			link: 'https://dtrain.fandom.com/wiki/Troodon',
			reason: 'conductor of children',
			notes: 'coachy pal',
		},
		{
			name: 'Ty Aderhold',
			picture: ty,
			dinosaur: 'Pachycephalosaurus',
			link: 'https://en.wikipedia.org/wiki/Pachycephalosaurus',
			reason: 'thick head, full of brains',
			notes: 'coachy pal',
		},
	]
</script>

<div>
	<h1>2021 Dinos</h1>

	<section>
		{#each players as { name, link, picture, width, aspectRatio, dinoHtml, dinosaur, reason, notes }, i}
			<table border="1" cellpadding="8">
				<tr>
					<td><h2>{name}</h2></td>
				</tr>
				<tr>
					<td>
						<h3>
							{#if dinoHtml}
								{@html dinoHtml}
							{:else}
								<a href={link} target="_blank">
									{dinosaur}
								</a>
							{/if}
						</h3>
					</td>
				</tr>
				<tr> <td><h4>{reason}</h4></td></tr>
				<tr>
					<td>{notes}</td>
				</tr>
				<tr>
					<td
						><img
							loading="lazy"
							width={width || 300}
							style="aspect-ratio: {aspectRatio}"
							src={picture}
							alt=""
						/></td
					>
				</tr>
			</table>
		{/each}
	</section>
</div>

<style>
	section {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 1.5em;
	}

	table {
		max-width: 30em;
		background: var(--bg-color);
	}

	h2,
	h3,
	h4 {
		margin: 0;
	}

	img {
		max-width: 100%;
	}
</style>
