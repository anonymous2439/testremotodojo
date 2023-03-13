import * as moment from 'moment';
import { BlogCategories } from '../../enums/blog-categories';
import { BlogModel } from './blog.model';

export const blogs: BlogModel[] = [
  {
    id: 1,
    image:
      './../../../../assets/widgets/article-card/pexels-karolina-grabowska-5632403.jpg',
    title: 'Cyber Monday – A Stress Test for IT Outsourcing?',
    slug: 'cyber-monday-a-stress-test-for-it-outsourcing',
    //metaText: `For businesses big and small, Cyber Monday is an extremely critical point of the year when it comes to all their digital assets. It is the Black Friday of ecommerce after all. Everyone from Amazon to the little...`,
    metaText:
      'For businesses big and small, Cyber Monday is an extremely critical point of the year when it comes to all their digital assets. Find out more, click here.',
    metaTitle: 'Cyber Monday: A Stress Test for IT Outsourcing?',
    category: BlogCategories.ECommerce,
    commentCount: 0,
    industryNews: '',
    date: moment('2021-11-10').toString(),
    content: `
    <article>
      <img src="./../../../../assets/widgets/article-card/pexels-karolina-grabowska-5632403.jpg" class="right">
      <p>For businesses big and small, Cyber Monday is an extremely critical point of the year when it comes to all their digital assets.</p>
      <p>It <i>is</i> the Black Friday of e-commerce after all. Everyone from Amazon to the little Etsy vendors will be up all night wanting to make sure orders are made, products are shipped and that not even the slightest bug could incite an angry customer. There's <a href="https://fitsmallbusiness.com/cyber-monday/" target="_blank">loads of advice on the topic</a> when it comes to using this day as a way to test how good you are at digital marketing.</p>
      <p>On the other hand, marketing expertise is only winning half the battle. Many technical errors and limitations often crop up on that same day. That is why many businesses also outsource IT staff to handle the problem.</p>
      <p>Of course, it also means that Cyber Monday can be just as challenging for outsourced IT professionals. It can seriously test the quality of the service being provided (and this quality is not always tied to price). <a href="https://mention.com/en/blog/bfcm-marketing-strategy/" target="_blank">Preparing for the Cyber</a> Monday rush can gauge the skill level of your outsourced website developers and other professionals. </p>
      <p>At the same time though, it is good to have a better understanding of exactly how they are being tested by the digital holiday shopping crowd. Below is a breakdown list of different IT assets, what they mean for Cyber Monday and what to expect from outsourced IT staff.</p>
    
      <strong><h3>1. Backend/Server Side</h3></strong>
      <br>
      <p><a href="https://www.smashingmagazine.com/2010/12/what-to-do-when-your-website-goes-down/" target="_blank">Website crashes</a> are the most infamous and widespread of Cyber Monday problems. One can even say that this is the problem that many IT departments base their entire holiday action plan on.</p>
      <p>More specifically, however, it draws attention to the quality of a website's backend. You will need professionals who are more attuned to the server side of a website. That includes DevOps specialists and system administrators just to name a few.</p>
      <p>These people should also be very familiar with the <a href="https://articles.bplans.com/nine-things-to-know-before-selecting-the-web-host-for-your-business/" target="_blank">web hosting services</a> you are using (with the biggest examples being Amazon Web Services). You will know you have the right people when they can not only take action during the big day but also make plans to improve your systems many months in advance.</p>
    
      <strong><h3>2. Cybersecurity</h3></strong>
      <br>
      <p><a href="https://www.theitbase.com/technology/what-is-cybersecurity/amp/" target="_blank">Cybersecurity</a> is another top priority during large-scale shopping periods. Hackers are just as active as bargain hunters during Cyber Monday, which means your outsourced IT services should have some means to counteract their activities.</p>
      <p>These include protocols in case of ransomware events, attempted DDoS attacks and even a way to alert the team of signs of suspicious log-in attempts (such as those from <a href="https://www.scmp.com/yp/report/junior-reporters-club/article/3132361/what-phishing-how-protect-yourself-and-your-money" target="_blank">phishing schemes</a>). </p>
      <p>Sure, you could just opt for the budget route of telling customers to also adopt best security practices. But on the other hand, any cost you pay for improving your own website's security will always be less than the heavy price of exposing sensitive customer information. The IT staff you outsource should be very familiar with all the most common cybercrime tactics (and <a href="https://sourcedefense.com/resources/blog/holiday-hacking-black-friday-and-cyber-monday-bring-in-all-the-shoppers-and-hackers/" target="_blank">even the lesser known ones</a>).</p>
    
      <strong><h3>3. Tracking Systems</h3></strong>
      <br>
      <p>Speaking of which, how well does your site track user behavior? You may be surprised to see just how easily you can make a site look great and fill it with great deals yet invest nothing in its ability to track how people are interacting with it.</p>
      <p>Any veteran digital marketer will tell you that this is <a href="https://www.forbes.com/sites/nicolemartin1/2019/10/22/why-utilizing-data-in-your-digital-marketing-strategy-is-so-essential/?sh=49d5e079d525" target="_blank">a tremendously huge loss of opportunity.</a> You are essentially running your site blind on a day where your business cannot afford to be. Worst still, you likely do not have the web development expertise to integrate the tools and plugins needed to generate this data.</p>
      <p>Fortunately, this is still well within the ability of competent IT professionals (even <a href="https://itchronicles.com/it/why-do-companies-choose-to-outsource-it-work/" target="_blank">outsourced ones</a>). It is crucial, however, that this is planned out long before even the holiday season. You may have a sales funnel already in mind, but you have to make sure that this is then translated into functions and features for your website. You will know that you are working with serious professionals when they can actually come up with a project timeline that is ahead of the curve you set.</p>

      <div class="conclusion">
        <div class="indicator"></div>
        <div class="content">
          <p class="title">Wrap Up</p>
          <p>There is nothing in the nature of outsourcing that can diminish the quality of tech talent needed to prepare your site to get the most out of big shopping holidays like Cyber Monday. If anything, it is just the experience you need to know you have done business with real pros.</p>
        </div>
      </div>
    </article>`,
    isPopular: false,
  },
  {
    id: 2,
    image: './../../../../assets/widgets/article-card/card-2.jpg',
    title: 'Days at the Dojo - Our Hot Take on Remote Work',
    slug: 'our-hot-take-on-remote-work',
    //metaText: `Last time, we talked about why the Remoto aspect of our brand is really to describe how we are moving ahead of the curve to meet a very urgent, international demand for remote teams. It, alas, do...`,
    metaText: `Remote work is about location. Our brand's RemotoDojo component, is to demonstrate how we are setting the pace to fulfill pressing global demand. Learn more.`,
    metaTitle: 'Days at the Dojo: Our Hot Take on Remote Work',
    category: BlogCategories.DaysAtDojo,
    commentCount: 0,
    industryNews: '',
    date: moment('2021-11-02').toString(),
    content: `
    <article>
      <img src="./../../../../assets/widgets/article-card/Days-at-the-Dojo-Sign.jpg">
      <p>Last time, <a href="https://www.remotodojo.com/articles#blog-section" target="_blank">we talked about</a> why the Remoto aspect of our brand is really to describe how we are moving ahead of the curve to meet a very urgent, international demand for remote teams. It, alas, does not mean we have the luxury of giving our own people the remote work option.</p>
      <p>That said, we did promise a hotter take on the idea.</p>
      <p>To keep it short: It's just not for us.</p>
      <p>Remember, we are all about offering a <i>team</i>. And while some will argue that its members can work remotely apart, our collective experience has taught us differently.</p>
      <p>This is not just another message from our higher management. Different members of <i>our own staff</i> have been very vocally opposed to the remote work life that is <a href="https://hrsea.economictimes.indiatimes.com/news/industry/philippines-bpo-workers-to-return-onsite-starting-april-1/90193876" target="_blank">trending in the Philippine BPO scene</a>. (And as far as the rest of the world goes, <a href="https://www.forbes.com/sites/tracybrower/2021/07/11/the-real-reason-to-go-back-to-the-office-hint-its-not-for-your-employer/?sh=1d63b03917ca" target="_blank">we are not alone either.</a>)</p>
      <p>Ask yourself: Would you demand that your favorite basketball team split apart and work remotely? What about that food you are ordering on UberEats? Do you honestly think every restaurant preparing your takeout is having people prepare it in their own separate kitchens at home?</p>
      <p>The same reasoning applies to the Dojo's IT Ninjas. </p>
      <p>We explained it before in the previous post: we do our best work on-site. For us, communication, coordination and community are all things that simply come more easily when we are all working in one space. It helps us nurture certain qualities that we want <a href="https://www.remotodojo.com/" target="_blank">our company</a>, as a whole, to embody.</p>
      <p>These include:</p>
      
      <strong><h3>1. Responsiveness</h3></strong>
      <br>
      <p>It is no secret that we are under a lot of <a href="https://articles.bplans.com/seven-creative-ways-to-engage-with-your-customers-online/" target="_blank">pressure from clients</a> whenever they send us messages about bugs or project roadblocks. That is common in a lot of BPO-IT companies.</p>
      <p>On the other hand, we take a lot of strength from our ability to respond quickly. Our collective experience has taught us that IT development teams are simply too slow to answer when individual members are limited to <a href="https://www.livechat.com/success/online-communication/" target="_blank">online communication</a>.</p>
      <p>That is why, if something goes wrong, we would rather be all hands on deck in a matter of seconds. Everyone from our chief officers to our managers and developers can come together to develop a solution. </p>
      <p>In fact, even our own marketing and creative departments would rather talk to our developers directly (rather than sit around at home, waiting for someone to get back to them before they can actually create our ads and content).</p>
    
      <strong><h3>2. Transparency</h3></strong>
      <br>
      <p>On the management side, <a href="https://www.techtarget.com/searchcustomerexperience/post/What-to-consider-for-a-contact-center-remote-working-strategy" target="_blank">remote work</a> is riddled with issues regarding visibility, trust and transparency.</p>
      <p>In other words, project heads are forced to rely on less direct means to know how team members have been working on their tasks. Likewise, remote workers still struggle with the fact that any announcements from higher up are disseminated to them in the form of more passive messages on a group chat.</p>
      <p>This simply does not sit well with us. We believe any issue or conflict that arises in the Dojo is best resolved when all parties are present and personally facing each other in the room. Done this way, there is less room for backstabbing and more room for honest conversation.</p>
      <p>Likewise, it gives us more reason to invest in our <a href="https://ceoworld.biz/2021/10/19/why-manager-employee-relationship-is-important-and-five-strategies-to-help-improve-it/" target="_blank">professional relationships</a> because it is a lot easier to drop someone who never talks to us face-to-face and is just there to tick off tasks in their digital checkboxes.</p>
    
      <strong><h3>3. Passion</h3></strong>
      <br>
      <p>Should you ever step into the Dojo, one of the first things you will immediately notice is that each one of us is very dedicated to their field. And while you can make the case that remote workers can also be as passionate, we argue that we have the advantage when it comes to bringing all that passion together.</p>
      <p>That is why, for the better part of this year, we have been doing our best to find the most driven and motivated self-starters in Cebu. We want to offer these <a href="https://www.inc.com/jeff-haden/managing-millenials-how-to-lead-connect-and-engage-millenial-employees.html" target="_blank">ambitious professionals the guidance</a> that will really help them make their way up both in the company and in the global IT industry.</p>
      <p>In a way, we are actually doing them all a favor because we do not want to add more to any issues that they have to juggle with at home. You can even say we are offering a <a href="https://learn.g2.com/hybrid-work-culture" target="_blank">safe space for people</a> who genuinely want to focus on work and not having to compromise that focus by simultaneously juggling a number of other concerns.</p>
    
      <div class="conclusion">
        <div class="indicator"></div>
        <div class="content">
          <p class="title">Wrap-Up</p>
          <p>Make no mistake: We know that the present situation still requires other companies to adopt some form of work-from-home strategy. But on the other hand, not every company is equal in terms of meeting this requirement.</p>
          <p>In the case of the Dojo, we have very valid reasons why we do not think it is a great fit for our workforce. This is not just the sentiment of our leaders. It is something even our own employees have had less than satisfying work experience with.</p>
        </div>
      </div>
    </article>`,
    isPopular: false,
  },
  {
    id: 3,
    image:
      './../../../../assets/widgets/article-card/savings-g503cd4b9e_640.jpg',
    title: 'Does Your IT Outsourcing Budget Fit Your Goals',
    slug: 'does-your-it-outsourcing-budget-fit-your-goals',
    //metaText: `IT Outsourcing Budget List Most people think that your IT outsourcing budget should already have specific numbers. That is only partially true. Before worrying about precision, you should really be thinking about...`,
    metaText: `Most people think that your IT outsourcing budget fit your goals and should already have specific numbers. That is only partially true. Find out more.`,
    metaTitle: `Does Your IT Outsourcing Budget Fit Your Goals`,
    category: BlogCategories.Outsourcing,
    commentCount: 0,
    industryNews: '',
    date: moment('2021-11-03').toString(),
    content: `
    <article>
      <img src="./../../../../assets/widgets/article-card/savings-g503cd4b9e_640.jpg">
    
      <p>Most people think that your IT <a href="https://www.upcounsel.com/offshore-outsourcing" target="_blank">outsourcing</a> budget should already have specific numbers. That is only partially true.</p>
      <p>Before worrying about precision, you should really be thinking about what kind of goal you want to achieve with IT professionals (yes, even <a href="https://itchronicles.com/it/why-do-companies-choose-to-outsource-it-work/" target="_blank">outsourced ones</a>). After all, you might know someone who bragged about paying top dollar for a really awesome website and be tempted to just pour in buckets of cash to get the same for your business.</p>
      <p>This is not the right approach to a tech project of any kind (or even any business venture). Do you really expect that a high amount is a shortcut to understanding what you are paying for?</p>
      <p>Of course, the extreme opposite is true. Going for the cheapest developers available will not bring you closer to knowing the value you are getting for a website.</p>
      <p>So no matter how tiring it is, you should take some time to sit down and establish the IT <a href="https://articles.bplans.com/how-to-set-clear-and-actionable-goals-for-your-business/" target="_blank">goals you want to achieve</a> for your business. And rest assured, this does not take any high-level programming expertise to figure out.</p>
      <p>In fact, here is a short list of common IT goals many businesses want to achieve and whether these goals demand a high or low budget.</p>
    
      <strong><h3>1. Visibility</h3></strong>
      <br>
      <p>Unless you're Google or Facebook, this continues to be the <a href="https://www.webfx.com/blog/marketing/marketing-goals-examples/" target="_blank">topmost priority for every business on the internet.</a> Do you want more brand awareness? Higher spots in search engine results? How about more social media followers?</p>
      <p>All of that can be summed up with wanting <a href="https://www.techdee.com/necessary-elements-for-site-visibility/" target="_blank">your website to be more visible</a> on the world wide web.</p>
      <p>The funny thing is that this can be the cheapest goal you can hit, depending on how your website fits in your bigger marketing strategy. Sometimes all you need is a really good designer, a decent developer who knows WordPress and your own knack for good content.</p>
      <p>Sure, it may just result in a website that is no more than a snazzy digital <a href="https://www.remotodojo.com/about#brochure-section" target="_blank">brochure</a>. But if you are a <a href="https://viralsolutions.net/marketing-hacks-for-small-business/" target="_blank">small business</a> that is strapped for cash, then aiming for a visual appeal that gets people visiting your store or engaging you on social media is still a goal worth hitting.</p>
    
      <strong><h3>2. Enterprise Planning</h3></strong>
      <br>
      <p>On the more expensive side of things, you have websites that serve more like an enterprise management portal or <a href="https://analyticsindiamag.com/10-most-used-databases-by-developers-in-2020/" target="_blank">database</a>. If this is your goal, then there is a good chance you may already know that what you are building is not going to be cheap.</p>
      <p>Still, there remains a tendency to think otherwise if you assume your website does not have that many bells and whistles. This may go especially if all that happens on it appears to be simple data inputs and storage.</p>
      <p>Even if that is the case though, you are <i>still collecting</i> volumes of information that will get heavy (especially if your number of users reaches beyond the number of people you can pack inside an office building). </p>
      <p>You will also have to consider roles outside of your usual front-end developer, such as system administrators, cybersecurity consultants and then some.</p>
    
      <strong><h3>3. Functionality</h3></strong>
      <br>
      <p>Most people think that a <a href="https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/" target="_blank">website with various functions</a> (e.g. interactive buttons, multimedia elements etc) is expensive.</p>
      <p>That is not entirely the case.</p>
      <p>In fact, you can argue that it is the most flexible IT project goal when it comes to your budget. If you are building something on the level of an e-commerce site, then you should definitely expect to pay a steep price. For instance, you might need a developer well-versed in Angular and this stack is not easy to learn (thereby leading it to be more expensive when hiring straight from the IT job market).</p>
      <p>Alternatively, if you just want your site to be flashier and be more engaging on the front end (like maybe a web game or an interactive slideshow), then you have a wide range of other stacks that are easier for devs and more affordable for your <a href="https://www.proprofsproject.com/blog/project-management-in-small-business/" target="_blank">project</a> budget.</p>
    
      <div class="conclusion">
        <div class="indicator"></div>
        <div class="content">
          <p class="title">Side Note</p>
          <p>Of course, these are just some of the many goals you can achieve when outsourcing your IT department. There are situations where you may even start with one but then need to transition to another. This is normal!</p>
          <p>That is why it is all the more reason to set your goals first before setting your budget for IT outsourcing. You may not always have a lot to spare, but you will always have spare time to site down and just think about what your present needs should be.</p>
        </div>
      </div>
    </article>`,
    isPopular: false,
  },
  {
    id: 4,
    image: './../../../../assets/widgets/article-card/card-4.jpg',
    title:
      "3 Simple Reasons Why You Should Believe Your Outsourced IT Staff's Estimates",
    //metaText: `Another common complaint about IT outsourcing is with regards to estimates. You've probably heard a number of instances where clients were initially on board with outsourcing some of their projects but ...`,
    metaText: `Here are three simple reasons you can start with to trust your outsourced IT staff with regards to estimates. Find out more, click here.`,
    metaTitle: `Believe in Your IT Staff's Estimates | 3 Reasons Why`,
    slug: '3-simple-reasons-why-you-should-believe-your-outsourced-it-staffs-estimates',
    category: BlogCategories.Outsourcing,
    commentCount: 0,
    industryNews: '',
    date: moment('2021-11-04').toString(),
    content: `
    <article>
      <img src="./../../../../assets/widgets/article-card/pexels-mikhail-nilov-6964105.jpg">
      <p>Another common complaint about IT <a href="https://www.upcounsel.com/offshore-outsourcing" target="_blank">outsourcing</a> is with regards to estimates. You've probably heard a number of instances where clients were initially on board with outsourcing some of their projects but were then disappointed to learn their providers sent estimates that were ‘barely' better.</p>
      <p>After all, isn't the client always right? Shouldn't they expect the best? Surely a BPO-IT company with a lot of experts can do better when it comes to delivering at a certain date!</p>
      <p>However, the reality is that this complaint actually highlights the knowledge gap between client companies and many IT firms.</p>
      <p>Sure, you may very well run into some companies that are all show and no substance. But on the other hand, the opposite rings true. There are also stories of nightmare clients who refused to believe the experts and have impossible standards, requirements and goals.</p>
      <p>Such a reputation as a client is just as bad as experiencing poor service from a <a href="https://www.smartsheet.com/everything-you-need-know-about-business-process-outsourcing" target="_blank">BPO</a> company. Clients who persist in such behavior do not learn from their <a href="https://biz30.timedoctor.com/mistakes-of-first-time-outsourcing/" target="_blank">outsourcing mistakes</a> and will find fewer organizations (or even applicants) who want to work with them.</p>
      <p>The good news, however, is that you can avoid going down this path by giving yourself simple reasons to trust your <a href="https://itchronicles.com/it/why-do-companies-choose-to-outsource-it-work/" target="_blank">outsourced IT</a> guys a little more. Here are three you can start with:</p>
    
      <strong><h3>1. They have done many projects like yours before.</h3></strong>
      <br>
      <p>Say you ran into a company that had successfully launched three to four websites. You checked these sites, liked what you saw and eagerly set an <a href="https://www.remotodojo.com/articles/remotodojos-appointment-setter-a-business-essential" target="_blank">appointment</a> because you want them to give your site a makeover as well.</p>
      <p>During the sales meeting though, the time for seeing the estimates finally comes. You may see a proposed project timeline or you could just be fielding questions to their expert on how long a certain task or build would take.</p>
      <p>Oftentimes, these are the moments where the temptation to question the estimates often creeps in. That is why it is best to remember all the sites you saw before. Because, as frank as this sounds, IT staffing companies often boast about their finished work because it is their way of showing how much time they have spent doing that work compared to you.</p>
    
      <strong><h3>2. You can't window-shop forever.</h3></strong>
      <br>
      <p>You know that medical meme about getting second opinions? That applies even in IT outsourcing. You could spend months window-shopping for a company that will build and launch your killer brand on the internet, but guess what? You will still risk losing out to a weaker brand who was at least smart enough to get their site actually <i>built</i> because they didn't waste time getting more opinions due to being too doubtful.</p>
      <p>Try to limit yourself to maybe three companies to <a href="https://www.newscientist.com/article/mg19426021-100-top-10-ways-to-make-better-decisions/" target="_blank">consult before deciding</a> on one for your project. Adjust your expectations accordingly to what these three candidates can provide. Take a day to research even just some of the basics of your tech requirements if you still feel unsure which one will give you the most value for your <a href="https://ceoworld.biz/2013/07/17/key-business-drivers-to-justify-it-outsourcing-and-bpo-decision-making-investments-22937002/" target="_blank">investment</a>.</p>
      <p>Again, there comes a point where you have to actually get things started instead of second-guessing every expert you meet. </p>
    
      <strong><h3>3. They don't have to be on Google's level to know better.</h3></strong>
      <br>
      <p>Lastly, as humbling as it feels, you must accept that you would be less eager to outsource if you were a Silicon Valley titan with high-quality developers eager to walk through your door. Likewise, you would be more confident about doubting an estimate if you had a brain like Jeff Bezos, Elon Musk or Mark Zuckerberg.</p>
      <p>When you are none of those things, then companies who just have considerably more expertise and several years more in IT will always be a step ahead of you. That is just how it is and it is generally better to work with them rather than compete with them or get into contests with them over what is realistic.</p>
      <p>This is how accepting the limitations of your own business is the first step to overcoming those roadblocks. You need to be smart about making up for what your organization lacks, using the present resources you have and <a href="https://www.proprofsproject.com/blog/project-management-in-small-business/" target="_blank">managing</a> your expectations.</p>
    
      <div class="conclusion">
        <div class="indicator"></div>
        <div class="content">
          <p class="title">Wrap-Up</p>
          <p>To sum it up, estimates sent to you by IT experts are the point where your expectations have to meet reality. Because no matter how good or bad you perceive them to be, you are generally at a disadvantage when you know less than they do.</p>
          <p>Instead of negatively reacting to a difficult estimate, take it as an opportunity to overcome that knowledge gap! Seize your chance to learn the hows and whys of the development process. So even if a project fails, you come out better and smarter for your next one.</p>
        </div>
      </div>
    </article>`,
    isPopular: false,
  },
  {
    id: 5,
    image:
      './../../../../assets/widgets/article-card/Days-at-the-Dojo-Sign-400x250.jpg',
    title: 'Days at the Dojo – Lunchtimes and the Life-Work Balance',
    slug: 'lunchtimes-and-the-life-work-balance',
    /*metaText: `Our last post talked a bit about our mornings so let's move on to lunchtime. Because for all the serious work we do (and the standards we set), we are not slave drivers.
    All of us are human...`,*/
    metaText: `We're all just people, and people deserve a break. This applies to all of our employees of RemotoDojo. We enjoy our Lunchtimes and Life-work Balance. Know more!`,
    metaTitle: `Days at the Dojo: Lunchtimes and Life-work Balance`,
    category: BlogCategories.DaysAtDojo,
    commentCount: 0,
    industryNews: '',
    date: moment('2021-11-05').toString(),
    content: `
    <article>
      <img src="./../../../../assets/widgets/article-card/Days-at-the-Dojo-Sign.jpg">
    
      <p>Our <a href="https://www.remotodojo.com/articles/how-we-start-our-days" target="_blank">last post talked</a> a bit about our mornings so let's move on to lunchtime.</p>
      <p>Because for all the serious work we do (and the standards we set), we are not slave drivers.</p>
      <p>All of us are human beings and human beings deserve a break. This goes not only for our C-suite, but also our managers, our devs and everyone else working here.</p>
      <p>It is just a matter of <i>how</i> we organize our free time. At the Dojo, we firmly hold to a one hour limit for lunch breaks. We also give staff two fifteen-minute breaks that they can take at any period provided that they are not too close to each other or lunchtime.</p>
      <p>Outside of that though, everyone pretty much has free reign over what they want to do.</p>
      <p>Many have just brought packed lunches from home and chill out at our break room. Some spend the rest of their breaks playing games, watching videos or just having a laugh.</p>
    
      <img src="./../../../../assets/widgets/article-card/LunchtimeFun.jpg">
      <p>Again, it is a nice reminder that for all the grit, toughness and high pressure we put on ourselves, we do our best to offset that with ample downtime. We may not be absolutely perfect in keeping that balance, but we do our best.</p>
      <p>When you really think about it though, this is <a href="https://www.businessinsider.com/google-employees-work-life-balance-2014-3" target="_blank">not a balance that even Google gets right.</a> This isn't to make excuses for us to not do better, but it is certainly worth pointing out the bar being set.</p>
      <p>The issue of <a href="https://personalexcellence.co/blog/work-life-balance/" target="_blank">balancing life and work</a> reflects a lot of our own unique challenges as a BPO-IT company in the offshoring race. On the one hand, we are combating a lot of negative stereotypes regarding our working conditions. By <i>default</i>, we are guilty in the eyes of certain interest groups who believe we make ourselves more affordable because we apparently exploit everyone to the bone. On the other hand, we do need to make ourselves affordable compared to on-site IT departments (especially since there are many countries and states <a href="https://www.zenbusiness.com/info/best-cities-to-start-a-small-business/" target="_blank">where wages and costs of living are becoming too much for SMEs</a>). We also have to make sure our clients never have the impression that we're running off with their money.</p>
      <p>In the midst of dealing with all of this, we see ourselves in a pioneering position of offering good salaries for providing good IT support, all without breaking the banks of our clients.</p>
      <p>Sure, it is true that we offer rates that take advantage of the Philippines' relatively lower cost of living (even though that <a href="https://remotodojo.com/articles/offshore-outsourcing-and-the-cost-of-living-controversies/">involves factors <i>way beyond</i> our control</a>). That does not mean we are so draconian that we do not give our staff a break and a slew of other mandated benefits.</p>
      <p>We are a Dojo, not a sweatshop.</p>
      <p>Our values put emphasis on great rewards for great efforts and great results. It is that simple. And even if the results are not so great, we don't just kick people out. We work hard to find a solution and give it another go.</p>
      <p>That is our approach to work, as is our approach to life.</p>
    </article>`,
    isPopular: false,
  },
  {
    id: 6,
    image: './../../../../assets/widgets/article-card/card-1.jpg',
    title: 'Offshore Outsourcing and the Cost of Living Controversies',
    slug: 'offshore-outsourcing-and-the-cost-of-living-controversies',
    /*metaText: `For many companies engaged in offshoring, the term ‘low cost of living' is considered a selling point. But for
    critics of the practice, the term borders on a dog whistle for exploitative business. The problem with...`,*/
    metaText: `Offshore outsourcing is a complex phenomena with a complicated reality. With the pandemic crisis still present, it is even more challenging. Learn more.`,
    metaTitle: `Offshore Outsourcing and the Cost of Living Controversies`,
    category: BlogCategories.Outsourcing,
    commentCount: 0,
    industryNews:
      'The people in ASEAN are well aware that technology is changing at a pace where even global business leaders are challenged to change the way they think. It is time to help everyone step up!',
    date: moment('2021-11-06').toString(),
    content: `
    <article>
      <img src="./../../../../assets/widgets/article-card/pexels-mel-casipit-6180744.jpg">
      <p>For many companies engaged in offshoring, the term ‘low cost of living' is considered a selling point. But for critics of the practice, the term borders on a dog whistle for exploitative business.</p>
      <p>The problem with the latter is that it often makes too many poor assumptions.</p>
      <p>The reality behind the outsourcing phenomenon is complex. It is even complicated further with a still ongoing pandemic situation that has pressured many businesses to make their organizations leaner and more dependent on online, remote communication.</p>
      <p>A considerable number of firms have already skipped the phase of hiring remote employees and went straight to increasing their <a href="https://www.techopedia.com/definition/14497/offshore-outsourcing" target="_blank"offshore outsourcing</a> contracts. The usual perks of the practice (such as lack of overhead and zero hiring costs) have only increased in value.</p>
      <p>This goes especially for small businesses as they are more cash-strapped organizations <a href="https://www.entrepreneur.com/growing-a-business/build-a-better-business-with-outsourcing-how-to-outsource/204652" target="_blank">who must make crucial value-based decisions in order to grow.</a> The influence that comes from low cost of living in offshoring hubs is closer to a win-win situation than critics will likely admit.</p>
      <p>Yet still, the same critics persist and demand that low cost of living be seen in a negative light. It gets only worse when their rationale creates unfair depictions of both small businesses as well as the small BPO firms they work with.</p>
      <p>The following is a brief list of questions that demonstrate just how accusatory and uncharitable such a mindset is when it comes to the <a href="https://biz30.timedoctor.com/offshoring-best-practices/" target="_blank">offshoring practice</a>. On the bright side, each one can be countered with a reasonable reply that really exposes the flaws in the criticism.</p>
      
      <strong><h3>1. Do BPO employees have poor housing conditions?</h3></strong>
      <br>
      <p>Many critics often support their claims by showcasing the poorest areas in an offshore destination and pairing it with a written account of one anonymous employee supposedly living in the area.</p>
      <p>It's a common tactic also used by non-profit organizations for garnering sympathy. But when applied to offshore outsourcing companies, the image can find immediate challenges when one looks at the tech hubs themselves (such as <a href="https://www.cebuitpark.com/" target="_blank">this one in the Philippines</a>).</p>
      <p>Even if one were to argue that this is where only the most expensive BPO firms exist, the ones who are lower in terms of costs are still not employing people living in squalor. Many still live in decent apartments or houses and are hardly the stuff of <a href="https://blogs.lse.ac.uk/politicsandpolicy/for-whose-benefit/" target="_blank">poverty porn</a>.</p>
  
      <strong><h3>2. Are BPO employees paid below minimum wage?</h3></strong>
      <br>
      <p>Another tactic that has been borrowed from non-profits is the inaccurate comparison of minimum wages. Currently, countries like the U.S. are pushing for the much touted $15-per-hour rate. Based on this trend, it is somehow assumed that this should be the norm all around the world.</p>
      <p>This is a very naive proposition and ignores <a href="https://www.ilo.org/global/topics/wages/minimum-wages/rates/WCMS_432669/lang--en/index.htm" target="_blank">the very complex reality behind the differences of minimum wage systems between countries.</a> The factors that allow a country to have certain minimum wages are often the subject of long, intensive study because of their sheer number of differences in terms of circumstance. For instance, earlier this year Japan is still <a href="https://asia.nikkei.com/Politics/Japan-panel-seeks-record-28-yen-rise-in-minimum-wage-to-930-yen" target="_blank">trying to push for a minimum wage of $8-per-hour.</a></p>
      <p>For the many <a href="https://blog.blackcurve.com/sme-and-startup-pricing" target="_blank">SMEs</a> that need to offset costs with offshoring, there is too little time and too few resources to look into the situation of their overseas BPO firms. This is not even factoring in the trend of offshore BPOs being founded and run by expats who want to avoid the rising costs of living in their home state.</p>
  
      <strong><h3>3. Are BPO employees struggling with basic needs?</h3></strong>
      <br>
      <p>The discrepancy between minimum wages is often used to springboard assumptions about the daily expenses of offshore BPO employees. It is practically a trick that does not give the mind room to consider other factors like the prices of goods in their country or even their spending habits.</p>
      <p>This is not to say that these employees are living in the best conditions. On the other hand, to say that the offshoring practice somehow contributes to a developing nation's destitution is still a horribly exaggerated claim.</p>
      <p>In fact, one can make a stronger case that the high-value relationships between a developed country's SMEs and developing country's offshore BPOs only generates more income for both parties. This, in turn, allows them more spending power and allows everyone to live better lives.</p>
      <p></p>
      <p></p>
  
      <div class="conclusion">
        <div class="indicator"></div>
        <div class="content">
          <p class="title">Conclusion</p>
          <p>A growing number of advocates are falling behind the trend of criticizing the business practice of offshoring due to a negative perception on low costs of living. However, despite all good intentions, this criticism is based on misleading ideas and even made in bad faith. The truth behind the influence from low cost of living is complicated and is, at best, full of many grey areas.</p>
        </div>
      </div>
    </article>`,
    isPopular: false,
  },
  {
    id: 7,
    image:
      './../../../../assets/widgets/article-card/Days-at-the-Dojo-Sign-400x250.jpg',
    title: 'Days at the Dojo – How We Start Our Days',
    slug: 'how-we-start-our-days',
    //metaText: `The last couple of installments have been a bit on the serious side. So for this week, we'll talk about something lighter...`,
    metaText: `Stand-up meetings are something you may be familiar with. This is how we start our days at the Dojo and how we get things going. Learn more, click here.`,
    metaTitle: `Days at the Dojo: How We Start Our Days`,
    category: BlogCategories.DaysAtDojo,
    commentCount: 0,
    industryNews: '',
    date: moment('2021-11-05').toString(),
    content: `
    <article>
      <p>The last couple of installments have been a bit on the serious side. So for this week, we'll talk about something lighter: how we start our mornings here in the Dojo.</p>
      <p>Now we have talked a great deal about our office life in <a href="https://develop--remotodojo.netlify.app/articles#blog-section" target="_blank">our newsletters</a>. (<i>And if you haven't checked them out yet, then please do!</i>)</p>
      <p>On the other hand, we have yet to really talk about the cool thing regarding the the mornings we all share.</p>
      <img src="./../../../../assets/widgets/article-card/StandUpMeeting.jpg">
      <p>You may have heard of stand-up meetings before. This is ours, and this is how we kick things off.</p>
      <p>No doubt this looks a little bit bigger than some of the ones you may have had. In our case, this is because our stand-up meetings bring in people from all departments. These include not only our developers but also our recruitment and marketing department.</p>
      <p>Alternatively, it still goes to show that we are not that big a company in terms of headcount (but you can bet that we are constantly aiming to).</p>
      <p>All of that aside, our stand-up meetings are more than just an opportunity for our people to talk about what they did the day before and their current tasks. It is a statement in its own way, and it expresses three points.</p>
      
      <strong><h3>1. Silos are no-gos.</h3></strong>
      <br>
      <p>We may have mentioned this before but we really, really do not want anything resembling <a href="https://yourbusiness.azcentral.com/silos-mean-business-culture-3448.html" target="_blank">silos</a> in our company. This is not even a trade secret. The importance of <a href="https://www.forbes.com/sites/brentgleeson/2013/10/02/the-silo-mentality-how-to-break-down-the-barriers/?sh=3001278c7e9f" target="_blank">breaking down silos</a> in any corporate environment should be the stuff of textbooks at this point. Otherwise, we would be choking ourselves with needless bureaucracy, under-the-table dealings and sheer lack of organizational cohesion.</p>
      <p>This goes especially for a company of our present size. Everybody sees everyone else in here, even our own upper management. Both our CGO and CTO have desks placed right along with everyone else because we do so much better when we can just stand up, come together and talk about any of our present challenges.</p>
    
      <strong><h3>2. Punctuality is crucial.</h3></strong>
      <br>
      <p>Our stand-up meetings are also scheduled the minute our shift starts. This is our way of challenging all our staff members (even our leaders) to come on time. We make no attempt to hide the fact that some of our staff have not been perfect in this regard.</p>
      <p>But today, we can at least say that this message had been effectively relayed and we're proud to say many of us have developed a habit of coming earlier before our shift.</p>
      <p>There are people who assume that the standing part of a stand-up meeting is what's meant to instill discipline. We actually take it a step further and say that even the time of this meeting should be an instrument of <a href="https://www.lifehack.org/508085/how-to-build-good-habits" target="_blank">building good habits</a> for dedicated IT professionals.</p>
    
      <strong><h3>3. We love crossing disciplines.</h3></strong>
      <br>
      <p>While we are huge advocates of digital transformation, we are also big advocates of a cross-disciplinary approach to project roadblocks.</p>
      <p>This is why we like bringing different departments together for the morning stand-up. Our recruiters are not always as familiar with the <a href="https://merehead.com/blog/dominating-web-development-trends-techniques-2022/" target="_blank">latest web development and programming trends</a> compared to our devs. Likewise, our devs may have more like-minded pros but they are not sure how to bring them on board.</p>
      <p>The stand-up meeting has become a regular routine for all of them to put their heads together and tackle the company's most present challenges.</p>
    
      <div class="conclusion">
        <div class="indicator"></div>
        <div class="content">
          <p class="title">Side Note</p>
          <p>Of course, we are all only human and there's no denying a lot of light banter and funny stuff also goes on during our stand-up meetings. (In fact, we have a tendency to do even more of it as we get closer to Friday but that's another story for another post.)</p>
          <p>Regardless, these meetings certainly serve a good purpose for all our jobs no matter what department someone is in. It brings us all together, helps us solve problems and remind us that we are all one team.</p>
        </div>
      </div>
    </article>`,
    isPopular: false,
  },
  {
    id: 8,
    image: './../../../../assets/widgets/article-card/a-business-essential.png',
    title: "Remotodojo's appointment setter: A business essential",
    slug: 'remotodojos-appointment-setter-a-business-essential',
    //metaText: `A company should look for an asset that will improve, speed up operations, and help company sales representatives...`,
    metaText: `Appointment setters are business essential they work as permanent employees, organize meetings between sales representatives and potential customers. know more!`,
    metaTitle: `RemotoDojo's Appointment Setter: A Business Essential`,
    category: BlogCategories.ECommerce,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-08-19').toString(),
    content: `
    <article>
      <p>
        A company should look for an asset that will improve, speed up operations, and help company sales representatives. <a href="https://www.eventomax.com/articles/eventomax-appointment-setter-job-a-business-essential" target="_blank">Appointment setters</a> are important individuals in your company. They serve as a link between you and your clients. Everything will fall into place for a business if you hire the right and skilled appointment setters. What makes Remotodojo's appointment makers worth considering? The qualities are outstanding.
      </p>
      <strong><h3>1. Engaging</h3></strong>
      <br>
      <p>
        They have the ability and motivation to persuade customers while setting up appointments.Aside from having <a href="https://www.eventomax.com/articles/eventomax-connecting-you-to-the-future" target="_blank">good communication skills</a>, an engaging appointment setter will sound interesting to clients. Customers are more likely to respond yes when the staff are good and engaging. We are proud to have appointment setters at RemotoDojo who have this fundamental skill for maintaining business and client relationships.
      </p>
      <strong><h3>2. Optimistic</h3></strong>
      <br>
      <p>
        Who wouldn't want a team of <a href="https://eventomax/about-us" target="_blank">optimistic employees</a>? Optimists strive to make the impossible possible. Having optimistic appointment setters ensures that the day will be productive and right. These optimistic appointment makers from RemotoDojo will serve as a key instrument for businesses, which is a commendable display of work ethic. 
      </p>
      <strong><h3>3. Willpower</h3></strong>
      <br>
      <p>
        Regardless of the circumstance or difficulty, appointment setters with strong willpower may overcome any situation. A checkmark on their to-do list is what they desire at the end of the day. Remotodojo's strong willpower demonstrates a determination to see the <a href="https://www.eventomax.com/articles/new-year-2023-staff-decisions-as-growth-accelerator/" target="_blank">company succeed</a>. Yes, our appointment setters are the ideal business frontline. 
      </p>
      <strong><h3>4. Flexible</h3></strong>
      <br>
      <p>
        There are times when we have no control over the situation.  When it comes to adapting to changes, Remotodojo has patience. Our appointment setters, on the other hand, can handle unforeseen situations with grace and still produce a positive outcome.
      </p>
      <p>
        Are you looking for skilled appointment setters? Visit our website now <a href="mailto:https://www.eventomax.com/contact/">https://www.eventomax.com/contact</a> and connect with us.
      </p>
    </article>`,
    isPopular: false,
  },
  {
    id: 9,
    image:
      './../../../../assets/widgets/article-card/the-ceos-perspective-on-work-culture-and-employees.png',
    title: "The CEO's perspective on work culture and employees",
    slug: 'the-ceos-perspective-on-work-culture-and-employees',
    // metaText: `Different? Yes! Indifferent? Of course not.`,
    metaText: `The CEO of RemotoDojo, Leon Fedro, discusses his ideas for a positive perspective on work culture and employees. To find out more, click here.`,
    metaTitle: `The CEO's Perspective on Work Culture and Employees`,
    category: BlogCategories.ECommerce,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-09-02').toString(),
    content: `
    <article>
      <p>
        <strong>
          Different? Yes! Indifferent? Of course not.
        </strong>
      </p>
      <p>
        While building up RemotoDojo people are often asking me about my <a href="https://www.eventomax.com/articles/eventomax-connecting-you-to-the-future" target="_blank">vision of company culture</a>. When I answered that I do not know exactly how exactly the culture should be they reacted with questioning eyes or were even shocked.
      </p>
      <p>
        The truth is that I know exactly what I do not want! Sometimes, I see job posts stating “Entry level” and then they require 2-3 years of experience with monstrous skill set requirements.
      </p>
      <p>
        This reminds me of my beginnings. Where would I be today if no one would have given me a chance? What I mean is a chance and totally without any experience.
      </p>
      <p>
        How much I wished that someone would have mentored me, giving me chances to develop and to learn things that university didn’t teach me.
      </p>
      <p>
        I wish I would have felt trust and protection from superiors, protecting me from “louder” co-workers who pretended to be friends, but at the first opportunity took advantage trying to overtake me or pushing me aside.
      </p>
      <p>
        I wished that someone would see my talents and would have had a plan to grow my career as well as my personality. To make it short, the above never really happened. To make a career I had to go all the way by myself.
      </p>
      <p>
        Thinking about RemotoDojo, I would like to offer young gifted and talented but undiscovered and underestimated professionals the chance to experience all that I mentioned above: <a href="https://www.eventomax.com/" target="_blank">A place and a chance to grow</a>. A place to make mistakes and to learn. A place where you can be yourself knowing that you will be appreciated while earning a more than fair salary.
      </p>
      <p>
        I think an employee should not need to beg for a pay raise. It should be the superior who recognizes that someone deserves more.
      </p>
      <p>
        Leadership positions? Grow organically. Try to promote rather than hire people you don’t know from outside.
      </p>
      <p>
        <strong>
         I could tell so much more about how a working place should be and how it shouldn't be, so better apply at <a href="mailto:mail:talent@cognitiv.com">talent@cognitiv.com</a>. Let’s talk about you and create a vision for your future career! Use <span>#TalktotheCEO</span>
        </strong>
      </p>
    </article>`,
    isPopular: true,
  },
  {
    id: 10,
    image:
      './../../../../assets/widgets/article-card/the-process-of-content-creation.png',
    title: 'The Process Of Content Creation',
    slug: 'the-process-of-content-creation',
    //metaText: `This proverbial maxim declares that "content is king."`,
    metaText: `One of our aims is to assist you in the process of content creation, therefore here are the steps RemotoDojo takes to create quality content. Discover more!`,
    metaTitle: `The Process of Content Creation | Content is King`,
    category: BlogCategories.ECommerce,
    commentCount: 0,
    industryNews: 'TEST',
    date: moment('2022-09-07').toString(),
    content: `
    <article>
      <p>
      This proverbial maxim declares that "content is king."
      </p>
      <p>
      We agree with this adage from Bill Gates, and it serves as a reminder of how content creation aids in marketing for all types of businesses.
      </p>
      <p>
      The company's <a href="https://www.everflow.io/post/guest-post-10-ways-investing-in-digital-marketing-can-make-your-business-more-successful" target="_blank">digital marketing</a> activities should be elevated in the current digital era by creating content that is both timely and distinctive.
      </p>
      <p>
      Helping you on your journey of content production is one of our goals and here are the steps on how we produce <a href="https://www.marketingprofs.com/articles/2022/47014/effective-content-writing-in-15-steps" target="_blank">effective content</a> at Remotodojo. 
      </p>
      <strong><h3>
      1. Planning Phase 
      </h3></strong>
      <br>
      <p>
      The Remotodojo team thinks that if everything is carefully prepared, we can always deliver our best. 
      </p>
      <p>
      It is simpler to <a href="https://themeisle.com/blog/blog-content-strategy/" target="_blank">strategize</a> with two heads than one. We also make sure our team is open to suggestions and criticisms. 
      </p>
      <p>
      The planning phase is essential because it establishes the target audience and the <a href ="https://www.outsourceaccelerator.com/articles/5-types-of-content-commonly-used-in-content-marketing/" target="_blank">type of content</a> that will be created. 
      </p>
      <p>
      In short, this is primarily about recognizing the objective being pursued. You start your objective right here. What is the purpose in developing this content? Answer this question and everything follows. 
      </p>
      <strong><h3>
      2. Developing Content 
      </h3></strong>
      <br>
      <p>
      For this, research and brainstorming are necessary.  
      </p>
      <p>
      We intend to create unique content. As a result, creating content takes effort. We don't want to be labeled as imitators.
      </p>
      <p>
      The originality will also help in creating brand identity. This distinguishes the company from others, particularly competitors.  
      </p>
      <p>
      Although challenging, creating materials is enjoyable since it allows creative expression. We are producing the <a href="https://www.pointvisible.com/blog/roadmap-to-great-content/" target="_blank">highest quality content</a> that will align and speak for the brand.   
      </p>
      <p>
      At the end of the day, the content reflects our efforts and dedication. Are you ready to accept the challenge? Yes! The ninjas do not back down.   
      </p>
      <strong><h3>
      3. Review 
      </h3></strong>
      <br>
      <p>
        Time is valuable. Timelines for each project exist. We take the deadlines seriously here at Remotodojo. <br/><br/> But we also think that it's important to deliver high-quality content in addition to meeting the deadline.<br/><br/> Review and revise are all part of the content creation process. We seek impeccable content that will be advantageous to both the target market and the company. <br/><br/> Review and revise until it’s perfectly done! Be patient.The effort is worthwhile.
      </p>
    </article>`,
    isPopular: true,
  },
  {
    id: 11,
    image:
      './../../../../assets/widgets/article-card/doji-newsletter-cover.png',
    title: 'Doji Newsletter - October 2022',
    slug: 'doji-newsletter-october-2022',
    //metaText: `Read our latest newsletter!`,
    metaText: `Get the most recent Doji Newsletter to stay informed. We are showcasing our CEO, team members, and our company's explosive growth. Discover more.`,
    metaTitle: `Your Latest Doji Newsletter | October 2022`,
    category: BlogCategories.DojiNewsLetter,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-10-11').toString(),
    content: `
    <article>
      <p>
        Get updated with our latest Doji Newsletter. We are featuring our CEO, employees and the rapid expansion of our company!
      </p>
      <p class="title">
        <a style="font-weight: 500;" href="https://drive.google.com/file/d/1Lm6trIYkv3OA9xOLXhx-sCOjaC0q9j-K/view?usp=sharing" target="_blank">Doji Newsletter - October 2022</a>
      </p>
    </article>`,
    isPopular: true,
  },
  {
    id: 12,
    image:
      './../../../../assets/widgets/article-card/remotodojos-business-angels-back-startups.png',
    title: "RemotoDojo's Business Angels Back Startups",
    slug: 'remotodojos-business-angels-back-startups',
    //metaText: `Plan, aid, make it a reality."`,
    metaText: `The aim of RemotoDojo's business angels is to enhance the company's value, particularly for entrepreneurs, in addition to making investments. Discover more!`,
    metaTitle: `RemotoDojo's Business Angels | Back Startups`,
    category: BlogCategories.BusinessAngels,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-10-19').toString(),
    content: `
    <article>
    <strong><h3>
      Plan, aid, make it a reality.
      </h3></strong>
      <br>
      <p>
        RemotoDojo's business angels have this goal in mind, especially for <a href="https://visualmodo.com/5-common-mistakes-that-entrepreneurs-commit-while-starting-a-business/" target="_blank">entrepreneurs whose businesses are still in the beginning stages</a>.
      </p>
      <p>
        <strong>Leon Fedro</strong>, the chief executive officer (CEO) of RemotoDojo said this approach guarantees that client's goals, particularly the startups, are realized.
      </p>
      <p>
        "We believe that those people approaching us to be part of the RemotoDOjo's incubator do not have the capital or ability to raise funds, but are absolutely willing to succeed with their ideas," he said.
      </p>
      <p>
        As of press time, RemotoDojo's business angels have aided a handful of startups which are now established and operating.
      </p>
      <p>
        The business angels are quick decision makers and can even link <a href="https://www.zoho.com/blog/projects/top-4-startup-fears-conquer.html" target="_blank">struggling startups</a> to more contacts, investors, and opportunities.
      </p>
      <p>
        The goal is not just to invest but to also add value to the company. Another reason why RemotoDojo's business angels can help startups is because this does not give interest.
      </p>
      <p>
        "Our payment is equity. That is what we call split risks and producing win-win situations," Fedro added.
      </p>
      <p>
        Fedro also believes in the principle that abilities, expertise, and reputation including the company history which started from scratch is an indicator how fast success can come to those who are willing to go through a kind of scrutiny process.
      </p>
      <strong><h3>
        No need to worry.
        </h3></strong>
        <br>
      <p>
        He also understands that some startups are hesitant in approaching the business angels at RemotoDojo.
      </p>
      <p>
        "Not having second and even third thoughts would disqualify you as an entrepreneur. It is to work with someone you as an entrepreneur. It is to work with someone who gives you the feeling to understand where you are coming from and where you want to go," Fedro added.
      </p>
    </article>`,
    isPopular: true,
  },
  {
    id: 13,
    image:
      './../../../../assets/widgets/article-card/remotodojo-expands-banner.png',
    title: 'RemotoDojo expands rapidly in 8 months',
    slug: 'remotodojo-expands-rapidly-in-8-months',
    /* metaText:
      'This rapidly expanding information technology (IT) and business process outsourcing (BPO) company in Mandaue City has increased its workforce since it began operating in January 2022.',*/
    metaText: `This rapidly expanding information technology (IT) and business process outsourcing (BPO) company in Mandaue city has increased. Find out more, click here.`,
    metaTitle: 'RemotoDojo Expands Rapidly in 8 Months',
    category: BlogCategories.DaysAtDojo,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-10-26').toString(),
    content: `
      <article>
        <p>
          This rapidly expanding information technology (IT) and <a href="https://www.smartsheet.com/everything-you-need-know-about-business-process-outsourcing" target="_blank">business process outsourcing</a> (BPO) company in Mandaue City has increased its <a href="https://www.remotodojo.com/articles/our-hot-take-on-remote-work">workforce</a> since it began operating in January 2022.
        </p>
        <p>
          The company started with 12 employees after super typhoon Odette hit Cebu.
        </p>
        <p>
          Amidst the challenge of putting up a new company after the catastrophe, Leon Fedro, the chief executive officer (CEO) of RemotoDojo came up with a completely new concept, shifting from IT staffing into the classic BPO line.
        </p>
        <p>
          "Literally as an add-on, it was my defined target to become 100 heads strong by the end of this year. Now by the end of September we are 80 heads in total. So, my target is reachable I guess. I am happy how things worked out for us, but not euphoric. We have to become better and we will," he said.
        </p>
        <p>
          The growing number of workforce has been considered as a measurement of success by the company.
        </p>
        <p>
          The reason for the <a href="https://www.mygreatlearning.com/blog/company-can-be-successful-with-social-media-marketing/" target="_blank">company's success</a> is a clear concept and learnings from previous mistakes paired with the power of a very dedicated workforce and staff who are passionate and skilled.
        </p>
        <p>
          "It's a start sign for everyone's ambition to grow and to reach the next step," he added.
        </p>
        <p>
          RemotoDojo is a BPO and IT company that provides cost-effective services in 11 countries around the world.
        </p>
        <p>
          BPO services offered are <a href="https://www.remotodojo.com/articles/remotodojos-appointment-setter-a-business-essential">appointment setter</a>, customer service, customer support, chat support, digital marketing, lead generation, sales, support staff, technical support, and virtual assistance.
        </p>
        <p>
          For IT services, it is known for offering expertise in blockchain, <a href="https://www.remotodojo.com/articles/the-process-of-content-creation">content creation</a>, cyber security, mobile applications, search engine optimization (SEO), software, and shop fronts. Though RemotoDojo might be considered as a startup, its dedication to help businesses anywhere in the world has gained trust and value from clients.
        </p>
        <div>
          <img src="./../../../../assets/widgets/article-card/remotodojo-expands-featured-img.png" />
        </div>
        <p>
          It has more than 120 clients ad accomplished over 290 projects as of press time. These figures only show that RemotoDojo delivers and addresses every company's needs.
        </p>
        <p>
          As more businesses and clients trust RemotoDojo, Fedro said that the company will use the professional approach to help them be more successful.
        </p>
        <p>
          "We grow, our client accounts are growing. With each and every step in growth we analyze and simply try to implement additional structures, policies and methods. This way our clients have the assurance that we do our best and are able to take our and most of all client success to the next level. Our clients see the results, so they usually stay. That's for us a clear sign that we do quite well," he said.
        </p>
      </article>
    `,
    isPopular: true,
  },
  {
    id: 14,
    image:
      './../../../../assets/widgets/article-card/the-untold-stories-banner.png',
    title: 'RemotoDojo Stories: The Untold Ninja Tales',
    slug: 'the-untold-ninja-tales',
    //metaText: 'Are you ready for real-life stories at the RemotoDojo?',
    metaText: `Are you ready for real-life stories at the RemotoDojo? As DOJI returns, it also launches "RemotoDojo Stories: The Untold Ninja Tales" campaign. Find out more.`,
    metaTitle: 'RemotoDojo Stories: The Untold Ninja Tales',
    category: BlogCategories.RemotoDojoStories,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-10-28').toString(),
    content: `
      <article>
        <p class="title">
          Are you ready for real-life stories at the RemotoDojo?
        </p>
        <p>
          As DOJI returns, it also launches "RemotoDojo Stories: The Untold Ninja Tales" campaign, which features stories from the company and its dedicated employees.
        </p>
        <p>
          Michelle Padayhag, author of "RemotoDojo Stories: The Untold Ninja Tales," stated that this is something that all DOJI readers should look forward to every month.
        </p>
        <p>
          "These are not just the usual success stories. Moreover, these are stories that provide inspiration and hope," Padayhag said.
        </p>
        <p>
          The author also wants to highlight employees' life stories and how they have become valuable assets to the company.
        </p>
        <p>
          A former journalist and storyteller herself, Padayhag believes that featuring inspiring stories can also empower aspiring professionals who want to grow with RemotoDojo.
        </p>
        <p>
          "Stories are always powerful. Having the right tool can have an even greater impact," she said.
        </p>
        <p>
          Following the pandemic and super typhoon Odette, the author believes it is time to share stories that make a positive impact on people.
        </p>
        <p>
          Padayhag is grateful for the amount of support given for the launch of "RemotoDojo Stories: The Untold Ninja tales," particularly the company's CEO, Leon Fedro, who approved the idea.
        </p>
        <p>
          To kick-off the campaign, the author has chosen an appointment setter, one of the accomplished employees who hails from northern Cebu.
        </p>
        <p>
          “The story is not just about a dedicated employee but a loving daughter to her family. You will learn from her story that we can always be selfless when it comes to our family” she said. 
        </p>
        <p>
          The author advises readers not to miss the first installment of "Remotodojo Stories: The Untold Ninja Tales," which is also included in the October DOJI issue.
        </p>
        <p>
          After giving hints of the first installment of the campaign, Padayhag also gives hints to other upcoming feature stories.
        </p>
        <p>
          She stated that it will be about life's firsts and the unfolding of dreams. “Anything is first here at the Remotodojo stories,” she said.       
        </p>
      </article>
    `,
    isPopular: true,
  },
  {
    id: 15,
    image: './../../../../assets/widgets/article-card/robert-nobong-banner.png',
    title: 'Robert Nobong: A Proud Breadwinner of the Family',
    slug: 'robert-nobong-a-proud-breadwinner-of-the-family',
    /*metaText:
      'Robert Nobong started to become a breadwinner six years ago. Being the eldest of five children, this Sogod, northern Cebu has become the breadwinner of the family.',*/
    metaText: `Robert Nobong started to become a breadwinner six years ago. Being the eldest of five children, this Sogod, northern Cebu. Click here to learn more.`,
    metaTitle: 'The Untold Ninja Tales | Robert Nobong',
    category: BlogCategories.RemotoDojoStories,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-10-28').toString(),
    content: `
      <article>
        <p>
          She can do anything for her family.
        </p>
        <p>
          Robert Nobong started to become a breadwinner six years ago. Being the eldest of five children, this Sogod, northern Cebu has become the breadwinner of the family.
        </p>
        <p>
          "As a breadwinner, I was able to achieve better opportunities for myself and my family as well," she said.
        </p>
        <p>
          Part of her accomplishments as a breadwinner is sending her brother to college who became an accomplished degree holder.
        </p>
        <p>
          "I am proud of it (being a breadwinner)," Nobong added.
        </p>
        <p>
          Nobong is not a newbie in the <a href="https://www.smartsheet.com/everything-you-need-know-about-business-process-outsourcing" target="_blank">business process outsourcing</a> (BPO) industry. He has been in the BPO for six years and joined RemotoDojo on March 27, 2022.
        </p>
        <p>
          Currently, Nobong is one of the high-performing appointment setter in RemotoDojo.
        </p>
        <p>
          When asked for Nobong's strategy on how she has become a top-performing appointment setter, she said, "Mindfulness is something a lot of us take for granted. Having a clear and sharp mind can unlock many opportunities and meditation is the number one way to achieve this. So I tend to make sure that I can meditate before heading to work."
        </p>
        <p>
          As an appointment seter, Nobong connects sales and clients to schedule appointments that will increase the company's sales
        </p>
        <p>
          Amidst being an accomplised <a href="https://www.remotodojo.com/articles/remotodojos-appointment-setter-a-business-essential">appointment setter</a> for RemotoDojo, Nobong still believes that there is still room for improvement and every day is a chance to work better and be more successful.
        </p>
        <p class="title>
          Never give up
        </p>
        <p>
          Nobong wants here colleagues at the RemotoDojo to be successful in their tasks as well. For her, giving up will never be an option.
        </p>
        <p>
          "It does not matter how slowly you go as long as you do not stop. I might not know you but you will succee. This is something people will not tell you, never give up," she explained.
        </p>
        <p>
          RemotoDojo is a fast growing BPO and IT company located in Barangay Cabancalan, Mandaue City.
        </p>
        <p>
          It is known for services like appointment setter, customer service, chat support, technical support, support staff, lead generation, virtual assistance, digital marketing, sales, bookkeeping, mobile applications, search engine optimization (SEO), and more.
        </p>
        <p>
          Nobong sees herself growing with the company in the coming years. For her to become more accomplished, Nobong wants to have work and life balance.
        </p>
        <p>
          "Sleep, rest, hobbies, nutrition, and exercise are so vital for being a happy and healthy employee and I see that here in RemotoDojo. I love the idea of having a balance between work and personal life. It is important to use your time wisely because it is the most luxurious investment that you can ever have," she said.
        </p>
      </article>
    `,
    isPopular: true,
  },
  {
    id: 16,
    image: './../../../../assets/widgets/article-card/nov-doji-cover.png',
    title: 'Doji Newsletter - November 2022',
    slug: 'doji-newsletter-november-2022',
    metaText: `Get the most recent Doji Newsletter to stay informed. We are showcasing our CEO, team members, and our company's explosive growth. Discover more.`,
    metaTitle: `Your Latest Doji Newsletter | November 2022`,
    category: BlogCategories.DojiNewsLetter,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-11-04').toString(),
    content: `
    <article>
      <p>
        DOJI is the official monthly newsletter of RemotoDojo. Check the latest events and updates inside the RemotoDojo quarters! Click this link and download DOJI now.
      </p>
      <p class="title">
        <a style="font-weight: 500;" href="https://drive.google.com/file/d/11oWHc3coTDIeJXpMQtYZu6N5ZU6q1gJH/view?usp=share_link" target="_blank">Doji Newsletter - November 2022</a>
      </p>
    </article>`,
    isPopular: true,
  },
  {
    id: 17,
    image: './../../../../assets/widgets/article-card/the-bpo-work-culture.png',
    title: 'The BPO Work Culture',
    slug: 'the-bpo-work-culture',
    metaText: `Running a contact center business has taught the company about great people, enthusiasm, dedication, and loy`,
    metaTitle: `The BPO Work Culture`,
    category: BlogCategories.RemotoDojoStories,
    commentCount: 0,
    industryNews: '',
    date: moment('2022-02-23').toString(),
    content: `
    <article>
      <p>
        Running a contact center business has taught the company about great people, enthusiasm, dedication, and loyalty.
      </p>
      <p>
        New friends were made, and we worked together to build a company from scratch that now employs over 100 people and is expanding rapidly.
      </p>
      <p>
        Unfortunately, there is something else is happening.
      </p>
      <p>
        Every company in the offshoring, outsourcing, and business process management (BPM) industries, including mine and the big players, received negative reviews and libelous social media posts to an insulting personal extent from former employees who resigned or were terminated.
      </p>
      <p>
        All businesses are accused of being toxic, of not paying their employees' salaries, of having inept management, or simply of being unable.
      </p>
      <p>
        Have you ever considered the reasons behind what employers do?
      </p>
      <p>
        Did you give the required amount of notice under the Labor Laws? Have you guys returned any equipment that the business loaned you to use while working, such as laptops and headsets? Have you guys demonstrated a suitable level of attendance?
      </p>
      <p>
        You might have published articles on social media criticizing your former workplace and poaching coworkers.
      </p>
      <p>
        An employer will always pay their employees and those who leave with the appropriate level of professionalism without jeopardizing your reputation or that of the business.
      </p>
      <p>
        No employer fosters or cultivates a hostile work environment. Those who fall short of expectations create toxic situations by criticizing and nagging others behind their backs rather than making improvements.
      </p>
      <p>
        This demonstrates your lack of professionalism and your unwillingness to acknowledge your shortcomings. Subpar by default because success requires the appropriate attitude.
      </p>
      <p>
        You will succeed if you approach your work with the correct mindset and are grateful for the possibilities that come your way.
      </p>
      <p>
        Follow the rules if you want to leave.
      </p>
      <p>
        Playing by the rules without attempting to harm or discredit your soon-to-be former employer earns you a last salary, a prorated 13th-month salary, a bright reference, and a potential future return.
      </p>
      <p>
        The biggest plus: is no stress. You can focus on future tasks without looking back and without the fear that your now former employer might file legal charges against you!
      </p>
      <p>
        The scenario is a masterwork of professionalism!
      </p>
      <p>
        Foreign investors will simply leave the Philippines or refuse to hire Filipino management staff if you don't alter your mindset and recognize that you are hurting every employer you have ever worked for.
      </p>
      <p>
        We still believe that Cebu, Philippines is an excellent place to run a global business. Good people are helping us, and we hope to find better people!
      </p>
      <p>
        This is a statement from RemotoDojo management. We are people from 5 continents and consist of as many women as men. We are proud of our work and happy to be part of the RemotoDojo Group Management.
      </p>
      <p>
        In case you like to work for an employer who cares about you with fair treatment and open opportunities, you are invited to apply at <a href="mailto:sales@remotodojo.com">sales@remotodojo.com</a>.
      </p>
      <p>
        We are looking for you! The Management, RemotoDojo
    </article>`,
    isPopular: true,
  },
];
