"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BarChart3, Calendar, Heart, MessageCircle, Trophy, Users } from "lucide-react";

const assetMap = [
  {
    id: "hero-image",
    url: "https://images.pexels.com/photos/9519530/pexels-photo-9519530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Real Madrid team celebration"
  },
  {
    id: "marcus-silva",
    url: "https://images.pexels.com/photos/8380015/pexels-photo-8380015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Marcus Silva team captain"
  },
  {
    id: "david-chen",
    url: "https://images.pexels.com/photos/9438095/pexels-photo-9438095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "David Chen goalkeeper"
  },
  {
    id: "alex-rodriguez",
    url: "https://images.pexels.com/photos/29582091/pexels-photo-29582091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Alex Rodriguez midfielder"
  },
  {
    id: "james-wilson",
    url: "https://images.pexels.com/photos/30726645/pexels-photo-30726645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "James Wilson striker"
  },
  {
    id: "sarah-johnson",
    url: "https://images.pexels.com/photos/54308/man-fan-person-football-54308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Sarah Johnson fan"
  },
  {
    id: "mike-thompson",
    url: "https://images.pexels.com/photos/32255451/pexels-photo-32255451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Mike Thompson supporter"
  },
  {
    id: "elena-martinez",
    url: "https://images.pexels.com/photos/31160065/pexels-photo-31160065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Elena Martinez with family"
  },
  {
    id: "tom-bradley",
    url: "https://images.pexels.com/photos/27271619/pexels-photo-27271619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Tom Bradley youth coach"
  }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Team", id: "team" },
            { name: "Stats", id: "metrics" },
            { name: "Matches", id: "about" },
            { name: "News", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Real Madrid"
          button={{
            text: "Join Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Real Madrid Football Club"
          description="Home to champions, united by passion. Join our legacy of excellence on and off the pitch."
          tag="Season 2024/25"
          tagIcon={Trophy}
          buttons={[
            {
              text: "Join the Team",
              href: "contact"
            },
            {
              text: "Match Schedule",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/9519530/pexels-photo-9519530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Real Madrid team celebration"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 1985, Real Madrid has grown from a local neighborhood team into a powerhouse of community football. We believe in developing not just skilled players, but strong character.",
            "With 15 league championships and countless community awards, we continue to set the standard for excellence both on the pitch and in our community involvement."
          ]}
          buttons={[
            {
              text: "Team History",
              href: "team"
            },
            {
              text: "Join Us",
              href: "contact"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Players"
          description="The talented athletes who make Real Madrid a force to be reckoned with"
          tag="Squad 2024/25"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marcus Silva",
              role: "Team Captain",
              imageSrc: "https://images.pexels.com/photos/8380015/pexels-photo-8380015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Silva team captain"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Goalkeeper",
              imageSrc: "https://images.pexels.com/photos/9438095/pexels-photo-9438095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen goalkeeper"
            },
            {
              id: "3",
              name: "Alex Rodriguez",
              role: "Midfielder",
              imageSrc: "https://images.pexels.com/photos/29582091/pexels-photo-29582091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Rodriguez midfielder"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Striker",
              imageSrc: "https://images.pexels.com/photos/30726645/pexels-photo-30726645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson striker"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Achievements"
          description="Numbers that showcase our dedication and success over the years"
          tag="Statistics"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "15",
              title: "Championships",
              description: "League titles won since foundation",
              icon: Trophy
            },
            {
              id: "2",
              value: "200+",
              title: "Players",
              description: "Developed through our academy",
              icon: Users
            },
            {
              id: "3",
              value: "5000+",
              title: "Supporters",
              description: "Loyal fans cheering us on",
              icon: Heart
            },
            {
              id: "4",
              value: "39",
              title: "Years",
              description: "Of community football excellence",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Supporters Say"
          description="Hear from the passionate fans who make Real Madrid special"
          tag="Fan Voices"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Season Ticket Holder",
              testimonial: "Real Madrid isn't just a football club, it's a family. The community spirit and dedication to excellence keeps me coming back every season.",
              imageSrc: "https://images.pexels.com/photos/54308/man-fan-person-football-54308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson fan"
            },
            {
              id: "2",
              name: "Mike Thompson",
              role: "Local Business Owner",
              testimonial: "Supporting Real Madrid has been one of my best decisions. The club's values align perfectly with our community, and the matches are absolutely electric.",
              imageSrc: "https://images.pexels.com/photos/32255451/pexels-photo-32255451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Thompson supporter"
            },
            {
              id: "3",
              name: "Elena Martinez",
              role: "Parent & Supporter",
              testimonial: "My kids love coming to the matches. Real Madrid creates an environment that's passionate yet family-friendly. True community champions.",
              imageSrc: "https://images.pexels.com/photos/31160065/pexels-photo-31160065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elena Martinez with family"
            },
            {
              id: "4",
              name: "Tom Bradley",
              role: "Youth Coach",
              testimonial: "The way Real Madrid develops young talent is incredible. They don't just train footballers, they build character and confidence in our youth.",
              imageSrc: "https://images.pexels.com/photos/27271619/pexels-photo-27271619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tom Bradley youth coach"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Join Real Madrid Today"
          description="Ready to be part of our winning team? Get in touch and let's discuss how you can contribute to our legacy of excellence."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "position",
              type: "text",
              placeholder: "Preferred Position",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your football experience and why you want to join Real Madrid...",
            rows: 4,
            required: true
          }}
          buttonText="Submit Application"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Real Madrid"
          columns={[
            {
              items: [
                {
                  label: "Team Roster",
                  href: "team"
                },
                {
                  label: "Match Schedule",
                  href: "about"
                },
                {
                  label: "Training Sessions",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Club History",
                  href: "about"
                },
                {
                  label: "Achievements",
                  href: "metrics"
                },
                {
                  label: "News & Updates",
                  href: "testimonials"
                }
              ]
            },
            {
              items: [
                {
                  label: "Join the Team",
                  href: "contact"
                },
                {
                  label: "Season Tickets",
                  href: "contact"
                },
                {
                  label: "Youth Academy",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}