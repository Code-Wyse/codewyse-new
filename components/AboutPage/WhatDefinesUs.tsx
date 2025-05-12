import Link from 'next/link';

const WhatDefinesUs = () => {
  return (
    <section className=" pt-15 pb-10 section--numbered" id="about-grid">
      <div className="container">
        <h2 className='pb-20 lg:text-4xl !text-4xl' style={{
            fontSize: '3.375rem',
            fontWeight: '700'
        }}>What Defines Us</h2>
        <ol className="numbered-grid" style={{
             listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -60px',
        }}>
          <li className='lg:w-[50] !w-full'>
            <span className="numbered-grid__number">1.</span>
            <div className="numbered-grid__content">
              <h3>Transparency</h3>
              <p>
                Many companies claim to be transparent — it’s easy to say. But you can just keep
                reading our website to see that we live it. Between our{' '}
                <Link href="/iversoft-services/">Services</Link> page and{' '}
                <Link href="/iversoft-faq/">FAQ</Link>, we’ve tried to anticipate your questions and
                provide straightforward answers.
              </p>
              <p>
                We do this because we want to <strong>help you find the right solution</strong>,
                whether or not it’s us. If you get in touch, we’ll even let you know if we think
                your problem can be solved without going custom. But if you do work with us, you can
                be sure you’ll always get our <strong>honest answers</strong>, not what we think you
                want to hear.
              </p>
            </div>
          </li>

          <li className='lg:w-[50] !w-full'>
            <span className="numbered-grid__number">2.</span>
            <div className="numbered-grid__content">
              <h3>Integrity</h3>
              <p>
                In competitive industries like development, your reputation is everything. We’ve
                stayed in business for so many years because{' '}
                <strong>we deliver on our promises</strong>.
              </p>
              <p>
                But, we don’t pretend to be perfect. Even with a brilliant team like ours, no one
                can predict every possible outcome. If surprises happen, we don’t hide it. We
                immediately let you know exactly what’s happening so we can work together to respond
                quickly. We believe in doing the right thing, especially when it isn’t the easy
                thing.
              </p>
            </div>
          </li>

          <li className='lg:w-[50] !w-full'>
            <span className="numbered-grid__number">3.</span>
            <div className="numbered-grid__content">
              <h3>Passion</h3>
              <p>
                The best products are created by people who get excited about innovation and care
                about what they do. We bring this passion to your projects in a few different ways.
              </p>
              <p>
                First, we hire smart, creative people and give them the space to contribute their
                ideas. We firmly believe that <strong>a good idea can come from anywhere</strong>.
              </p>
              <p>
                Second, we take on complex projects that push the boundaries of what’s possible. We
                don’t repackage old solutions — we build{' '}
                <strong>cutting-edge digital products</strong>.
              </p>
              <p>
                Finally, we partner with other passionate people we trust to deliver unique, more
                comprehensive services.
              </p>
            </div>
          </li>

          <li className='lg:w-[50] !w-full'>
            <span className="numbered-grid__number">4.</span>
            <div className="numbered-grid__content">
              <h3>Excellence</h3>
              <p>
                “Good enough” isn’t in our vocabulary. We’ve meticulously designed our processes
                around research and strategy, enabling us to make informed,{' '}
                <strong>data-driven decisions</strong>.
              </p>
              <p>
                Spending time on research upfront also saves us time in the long-run. Instead of
                wasting precious time on trial and error, we simply execute on a well thought out
                plan. By the time we start coding, we completely understand your problem, your
                company, your design preferences, and most importantly, the opportunities we can
                take advantage of to <strong>make your project stand out</strong>.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default WhatDefinesUs;
