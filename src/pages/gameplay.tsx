import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
// import style from "./production-history.module.scss"
// import AOSImage from "../components/aos-image";

const GameplayPage = () => (
  <Layout>
    <SEO title="GameplayPage" />
    <h1>Gameplay</h1>
    <article>
      <p>So you want to play <em>Rooftops!</em> Below, you can find a summary of the rules so you can get a sense of what the game is like. But if you've heard enough and you want to get down to business, head over to our <Link to="/download">Download</Link> page and check out the Quickplay Guide.</p>
      <h2>System</h2>
      <p>This is a <em>Powered by the Apocalypse</em> game! If you don't know what that means, the basics are this: players choose <strong>Playbooks </strong>that fit their character vision; Playbooks give them unique <strong>Moves </strong>on top of the<strong> Basic Moves</strong> everyone can use. Using a Move almost always requires rolling <strong>Two Six-Sided Dice </strong>(2d6) and adding or subtracting a small modifier. A 7-9 is a <strong>Mixed Success</strong>, a 10+ is an <strong>Exceptional Success</strong>, and a 6 or below is a <strong>Miss </strong>(bad things happen! ...but the hero gets to <strong>mark experience</strong>). <em>Powered by the Apocalypse </em>is also an <strong>asymmetrical </strong>game by design, in the sense that the rules for heroes are different than the rules for the <strong>Mastermind</strong>. Heroes have to roll for things; monsters and villains never do. Instead, the Mastermind makes <strong>soft moves</strong> against the heroes that they can react to in real time, or <strong>hard moves</strong> that they can't resist (usually when they mess up in some way).</p>
      <h2>What Makes It <em>Rooftops</em></h2>
      <p>In <em>Rooftops</em>, players choose TWO playbooks, an <strong>archetype</strong> and a <strong>powerset</strong>. Think of an archetype as <em>who</em> <em>you are</em>, and a powerset as <em>what you can do.</em> Both archetypes and powersets give players unique moves, but archetypes tend to be more roleplay focused, while powersets tend to be more actiony. Also, in many PbtA games, characters have ability 'scores' that modify their roles. In <em>Rooftops</em>, there are no scores: you either are something, or you aren't. Moves typically require a combination of 3 <strong>traits</strong>. Each hero begins with just a few traits; they roll at +1 for every trait they have, and -1 if they have none of them. Also, if the heroes work together to pull off a move, they can <strong>Team Up</strong>, and lend each other traits for the purpose of modifying their rolls (See <strong>Special Moves</strong> for details).</p>
      <h2>Starting a Campaign</h2>
      <p>Ask your players what kind of campaign they want to play. Some possibilities include, <strong>Basically Good Guys</strong>, a <strong>Moral Fog</strong>, and <strong>Race to the Bottom. </strong>For the best experience, all your players should agree on what sort of superhero team they want to be. Since team reputation is a key mechanic, there will be real in-game consequences for behavior that either ingratiates or alienates the public (see <strong>Public Opinion Shifts</strong>). If you'd like to play more than once, take some time to answer the questions on the <strong>Session Zero </strong>sheet. If you are playing a 'one-shot' or just want to dive right in, make some decisions about the world yourself and skip to <strong>Planning a Mission.</strong></p>
      <h2>Planning a Mission</h2>
      <p>Create a villain and give them special <strong>gear</strong>, surround them with <strong>pawns, </strong>or plant them in the middle of a <strong>dangerous space</strong>; maybe they take <strong>hostages</strong> or threaten a city-wide <strong>catastrophe</strong>. A good villain has a number of tricks up their sleeve; either some kind of immunity or an ability to feint away from being insta-killed by the heroes. Perhaps they have a<strong> </strong>key <strong>weakness</strong>, or an <strong>artifact</strong> from which they derive their powers (see <strong>Combat</strong>).</p>
      <h2>Combat</h2>
      <p>
        In <em>PbtA </em>games, all action is a conversation, and combat is no different. There is no official turn order; it is the Mastermind's job to respond to heroic actions and drive the conflict forward, either with <strong>soft moves</strong> (use an ability or engage), or <strong>hard moves </strong>(deal damage). All opponents of the heroes have the ability to <strong>engage </strong>a target. An engaged hero is actively avoiding being hit by their opponent, and must <strong>Get Physical </strong>to <strong>disengage </strong>or deal damage unless they accept being hit by their opponent (an invitation for the Mastermind to use a hard move). In <em>Rooftops</em>, villains do not have hit points; instead, they have 'health tracks' similar to heroes; any 'point' of damage should <strong>reveal information </strong>(e.g. a specific immunity), <strong>weaken </strong>the villain (e.g. they become <strong>Ragged</strong>), or <strong>end the fight </strong>(depending on the hero's intent, the villain might be killed or simply incapacitated)<strong>.</strong>
      </p>
    </article>
  </Layout>
)

export default GameplayPage;
