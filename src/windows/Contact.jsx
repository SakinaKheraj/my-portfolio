import { WindowControlls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"
import { Mail, ArrowRight, ExternalLink } from "lucide-react";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="contact-horizontal">
                {/* Left Section: Profile Info */}
                <div className="profile-sidebar">
                    <div className="avatar-box">
                        <img src="/images/avatar.jpg" alt="Sakina Kheraj" className="avatar-img" />
                        <div className="status-badge">Available</div>
                    </div>

                    <div className="meta-info">
                        <h3>Sakina Kheraj</h3>
                        <p className="title">Software Engineer</p>
                        <p className="bio">Building premium digital experiences with code and design.</p>
                    </div>

                    <a href="mailto:sakinakheraj@gmail.com" className="email-button">
                        <Mail size={16} />
                        <span>Work with me</span>
                    </a>
                </div>

                {/* Right Section: Social Links */}
                <div className="links-panel">
                    <p className="section-label">Connect Socially</p>
                    <div className="social-links-list">
                        {socials.map(({ id, text, icon, bg, link }) => (
                            <a
                                key={id}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-item group"
                                style={{ '--brand-color': bg }}
                            >
                                <div className="social-icon-box">
                                    <img src={icon} alt={text} className="icon-img" />
                                </div>
                                <span className="social-text">{text}</span>
                                <ExternalLink size={14} className="social-arrow" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;