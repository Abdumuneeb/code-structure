import { NextPage } from 'next';
import React from 'react';

// Define types for your content
interface TeamMember {
    name?: string,
    position?: string,
    image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/john_doe.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: '/images/jane_smith.jpg',
  },
  // Add more team members as needed
];

const AboutUs: NextPage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Us</h1>
      <section style={{ marginBottom: '40px' }}>
        <h2>Our History</h2>
        <p>
          We started our journey in 2010 with a mission to revolutionize the industry.
          Over the years, we have grown significantly, expanding our services and
          building a team of dedicated professionals. Our commitment to excellence
          remains our top priority.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-notch solutions that drive innovation and
          deliver exceptional value to our clients. We strive to foster a culture of
          continuous improvement and to be a leader in our field.
        </p>
      </section>

      <section>
        <h2>Meet the Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {teamMembers.map((member) => (
            <div key={member.name} style={{ width: '200px', textAlign: 'center' }}>
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '100%', borderRadius: '50%' }}
              />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
