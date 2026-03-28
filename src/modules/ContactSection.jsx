import { Section } from '../components/Section'
import { profile } from '../data/profile'

export function ContactSection() {
  const { email, phone, location } = profile.contact
  const { resume } = profile
  return (
    <Section id="contact" eyebrow="Reach out" title="Contact">
      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          <a href={`mailto:${email}`} className="contact-value">
            {email}
          </a>
        </li>
        <li>
          <span className="contact-label">Phone</span>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-value">
            {phone}
          </a>
        </li>
        <li>
          <span className="contact-label">Location</span>
          <span className="contact-value">{location}</span>
        </li>
        <li>
          <span className="contact-label">Resume</span>
          <a
            href={resume.url}
            target="_blank"
            rel="noopener noreferrer"
            download={resume.fileName}
            className="contact-value"
          >
            Download PDF
          </a>
        </li>
      </ul>
    </Section>
  )
}
