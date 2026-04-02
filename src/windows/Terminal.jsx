import WindowControlls from "#components/WindowControlls";
import { techStack, socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useMobile from "#hooks/useMobile";
import { Check, Flag, ExternalLink } from "lucide-react";

// ── Mobile: clean skills list ─────────────────────────────────────────────
const TerminalMobile = () => {
    return (
        <div className="px-4 pt-4 pb-8 space-y-4">
            <div className="bg-gray-950 rounded-2xl p-4 mb-4">
                <p className="font-mono text-xs text-green-400">
                    <span className="text-purple-400">@sakina</span>
                    <span className="text-gray-500"> ~ %</span>
                    <span className="text-white ml-2">show tech-stack</span>
                </p>
            </div>

            {techStack.map(({ category, items }) => (
                <div key={category} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="size-2 rounded-full bg-green-400" />
                        <h3 className="text-sm font-bold text-gray-800">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            <div className="bg-gray-950 rounded-2xl p-4">
                <p className="font-mono text-xs text-green-400 flex items-center gap-2">
                    <Check size={12} />
                    All stacks loaded — render time: 7ms
                </p>
            </div>

        </div>
    );
};

// ── Desktop: original unchanged ───────────────────────────────────────────
const TerminalDesktop = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold">@sakina %</span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex item-center">
                            <Check className="check" size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                        {i < items.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <div className="footnote">
                    <p>
                        <Check size={20} /> 5 of 5 stacks loaded successully (100%)
                    </p>
                    <p className="text-black">
                        <Flag size={15} fill="black" />
                        Render time: 7ms
                    </p>
                </div>
            </div>
        </>
    );
};

const Terminal = (props) => {
    const isMobile = useMobile();
    return isMobile ? <TerminalMobile {...props} /> : <TerminalDesktop {...props} />;
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;