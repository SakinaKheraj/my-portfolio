import { WindowControlls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useMobile from "#hooks/useMobile";
import { Mail, ArrowRight, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";

// ── Mobile: full-page contact card ────────────────────────────────────────
const ContactMobile = () => {
    return (
        <div className="px-4 pt-4 pb-8 space-y-6">
            {/* Profile hero */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white text-center">
                <div className="relative inline-block mb-4">
                    <img
                        src="/images/avatar.jpg"
                        alt="Sakina Kheraj"
                        className="size-24 rounded-full border-2 border-white/20 shadow-xl mx-auto"
                    />
                    <div className="absolute bottom-1 right-1 bg-green-400 size-4 rounded-full border-2 border-white" />
                </div>
                <h2 className="text-xl font-black mb-1">Sakina Kheraj</h2>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                    Software Engineer
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Building premium digital experiences with code and design.
                </p>
            </div>

            {/* Email CTA */}
            <a
                href="mailto:sakinakheraj@gmail.com"
                className="flex items-center justify-between px-5 py-4 bg-gray-900 text-white rounded-2xl active:opacity-80 transition-opacity touch-manipulation"
            >
                <div className="flex items-center gap-3">
                    <Mail size={20} />
                    <div>
                        <p className="text-sm font-bold">Work with me</p>
                        <p className="text-xs text-gray-400">sakinakheraj@gmail.com</p>
                    </div>
                </div>
                <ArrowRight size={16} className="text-gray-500" />
            </a>

            {/* Socials */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">Socials</h2>
                <div className="space-y-2">
                    {socials.map(({ id, text, icon, bg, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-4 py-3 bg-gray-50 rounded-2xl border border-gray-100 active:bg-gray-100 touch-manipulation"
                            style={{ '--brand-color': bg }}
                        >
                            <div
                                className="size-10 rounded-xl flex items-center justify-center"
                                style={{ background: `${bg}22` }}
                            >
                                <img src={icon} alt={text} className="size-5" />
                            </div>
                            <span className="flex-1 text-sm font-semibold text-gray-800">{text}</span>
                            <ExternalLink size={14} className="text-gray-300" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ── Desktop: original unchanged ───────────────────────────────────────────
const ContactDesktop = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="contact-horizontal">
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
};

const Contact = (props) => {
    const isMobile = useMobile();
    return isMobile ? <ContactMobile {...props} /> : <ContactDesktop {...props} />;
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;