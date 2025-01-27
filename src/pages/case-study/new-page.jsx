import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export default () => <>
    <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
        <Image
            className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
            alt=""
            width={1558}
            height={946}
            unoptimized
        />
        <Container className="relative w-1/2 mx-auto">
            <div class="entry-content content leading-tight text-sm">

                <p><img alt="a" src="https://ethicalwiki.com/wp-content/uploads/2021/12/movingup-3.jpg" /></p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>Introduction</h5>
                <p>Almost 20 years ago, two people started a website that started as a basic forum. Over the years, the website slowly grew into a job board, blog, forum, social network, and professional resources hub for millions of users. The website was covered in the mainstream media and in academic journals. Its growing popularity was seen as a signal for trends in their profession. But did the online community qualify for a Wikipedia page? That is the perennial question when it comes to new pages.</p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Rules</h5>
                <p>In a nutshell, Wikipedia requires that a company, product, person, website, or other subject be famous to qualify for a Wikipedia page. There are two theories behind this requirement. One theory is that the topic of the page has to be “worthy of notice” to be included in an encyclopedia. The other is that Wikipedia needs enough credible source material (citations) to draw from in order to create a good page with quality citations.</p>
                <p>Wikipedia’s formal requirements to qualify for a page includes five elements: The proposed topic must be the subject of</p>
                <ol>
                    <li>significant coverage in</li>
                    <li>multiple</li>
                    <li>independent</li>
                    <li>reliable (credible/trusted)</li>
                    <li>secondary sources (usually press)</li>
                </ol>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Reality</h5>
                <p>In practice, these five criteria are open to a wide spectrum of interpretations. Almost every prospective client that inquires about creating a new Wikipedia page insists that they meet these requirements. In more than 75% of cases, they are not even close. Wikipedia editors themselves will often keep articles about trivial open source projects that clearly do not meet the requirements, while deleting articles on Fortune 500 CEOs.</p>
                <p>Additionally, Wikipedians often look at other factors that are not formally documented in the rules, such as a company’s size and age. In most cases, companies will not qualify for a page until they reach about $150 million in revenue and are no longer considered a “startup”. WikiProject Private Equity offers <a href="https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Private_Equity#Establishing_Notability">a rule of thumb</a>&nbsp;of $1 billion under management for private equity firms.</p>
                <p>With the client in question, as is often the case, the challenge was with criteria #1 for <em>significant</em> coverage. That requirement is spelled out in detail <a href="https://en.wikipedia.org/wiki/Wikipedia:Notability_(organizations_and_companies)#Significant_coverage">here</a>. Their website was the subject of a significant feature story in the mainstream press, but that article was not a very long, in-depth profile. The website had also been the subject of sub-sections in academic journals or had a couple paragraphs on it in other mainstream media stories. Whether they qualified for a Wikipedia page was a borderline case. Different Wikipedia editors could reasonably argue either way.</p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Strategy</h5>
                <p>The client adopted the strategies I recommend for any individual or organization looking to start a new page on Wikipedia.</p>
                <p><strong>We crafted a very small page.</strong> This is important for a couple reasons. First, if there isn’t a page about the topic already, the topic probably isn’t <em>that</em> famous. A page on <a href="https://en.wikipedia.org/wiki/Apple_Inc.">Apple</a> I would expect to be quite large&nbsp;because so much has been written about them, the topic is so significant, and it takes a lot of words to document their long history. Smaller articles are expected for smaller, less famous companies with a shorter history. Attempting to create an over-sized page is often seen as an act of vanity; an effort to exaggerate the significance of the company. It usually involves using lower-quality citations to fill out the page with more content. It leads to shoddier pages.</p>
                <p>Second, the draft page I create for the client will later be submitted to Wikipedia for consideration through the <a href="https://en.wikipedia.org/wiki/Wikipedia:Articles_for_creation">Articles for Creation</a> system. This means an independent, crowd-sourced volunteer Wikipedian has to review the content we prepared and consider whether it is appropriate for Wikipedia. This volunteer is donating their free time to review potentially hundreds or thousands of similar submissions. They might be multi-tasking on World of Warcraft or spending just 10 seconds on each page. Creating a short article that relies on only the strongest citations makes it easy for them to review and approve bit-sized content.</p>
                <p><strong>We crafted a neutral page.</strong>&nbsp;The content I created contained information about the company/website’s formation, history, and significance. It contained no awards, no philanthropy, and no off-topic information about the founders or executives. Volunteer editors reviewing these submissions rarely clean up promotional articles.&nbsp;Instead, they will reject the entire draft page, even if removing just a couple sentences of promotion would make it acceptable. This is because volunteer editors do not want to spend their free time on Wikipedia helping corporations rework their articles.</p>
                <p><strong>I encouraged patience, persistence, and civility.</strong>&nbsp;Wikipedia regularly has a backlog of 3,000+ proposed new pages pending review at Articles for Creation. This page is immensely important to the client, which is why they hired Ethical Wiki. However, from the volunteer editor’s perspective, it is one of hundreds of pages they are reviewing. After reviewing 99 company pages that are promotional, the editor will come to the 100th with some preconceived notions. It can take kind persistence to get individualized attention from the site’s editors. </p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Execution</h5>
                <p>I researched, wrote, and coded a draft Wikipedia page about the company and its online community. The client had a few minor corrections, which were incorporated. In some instances, they asked about adding content I advised may raise red flags with Wikipedia. They took my advice and did not make those changes.&nbsp;Within a couple weeks, we had arrived at a “final” version to submit to Wikipedia. We got on a Zoom video conference call, where the client shared their screen with me. I walked them through creating an account, disclosing their affiliation to the website, and submitting the draft to Articles for Creation. </p>
                <p><strong>What followed was a mess.</strong> The client included a simple disclosure of their name and affiliation to the website on their user profile, as required by Wikipedia’s <a href="https://foundation.wikimedia.org/wiki/Terms_of_Use/en#4._Refraining_from_Certain_Activities">Terms of Use</a>. Within minutes, an administrator deleted their user profile, alleging the client was using their profile page to promote themselves. Then, another user complained the client was not disclosing their connection to the subject of the page, just minutes after an administrator deleted that very disclosure. Additionally, the client had already disclosed their connection to the website on the article submission, in their username, on their Talk page, and in their edit-summary. </p>
                <p>After a couple weeks, an editor reviewed the client’s submission and rejected the page. The rejecting editor was a teenager halfway across the world and a relatively new Wikipedia editor. The editor seemed to be saying the page was inherently promotional because it was written by someone with an affiliation to the subject. They focused heavily on the client’s connection to the subject rather than the content or citations in the draft. The language barrier also made it difficult to figure out where the editor’s head was at.</p>
                <p>Wikipedia is run by anonymous internet participants. Like any crowd-sourced website, it’s often messy. However, these experiences are highly unusual for someone that discloses their connection to the subject and follows proper protocol. </p>
                <p><strong>We turned things around.</strong> The client took my advice on how to handle their communications with editors. First, we steered clear of a couple editors that were asking the client to disclose their connection to the subject. To be clear, the client did, in fact, disclose their affiliation, unambiguously and in many places. The client’s instinct was to respond to the editors and clarify that they have already disclosed many times. </p>
                <p>However, I looked into the editors’ profiles and edit-histories. They appeared to routinely badger financial interests on Wikipedia. In fact, this kind of disclosure badgering is a common harassment tactic. Editors that dislike corporate participation on the site will often keep asking for disclosure, no matter how much disclosure has already been offered. They’ll allege you didn’t use the right template, provide enough information, or disclose in the right places, but in truth no amount of disclosure will ever get them to stop badgering the user.</p>
                <p>Instead, the client discussed the page directly with the editor that rejected it. This editor also repeatedly asked the client about their connection to the subject. The client disclosed their affiliation, over and over and over again. About ten times in total. Behind the scenes, the client was frustrated and angry. They were being treated like a criminal or a corrupt businessperson, even after taking extraordinary efforts to do the right thing. However, on Wikipedia they were patient and level-headed. </p>
                <p>Eventually, the prodding led to the editor to turn their attention to the content and citations of the page, rather than the disclosure. No real complaints about the content itself were raised and the editor approved the page without any changes. All it took was a little patience and savvy to get an editor to really give the page individualized attention, putting their pre-conceived notions about corporate participation on the site aside.</p>

            </div>
        </Container>
    </section>

</>

