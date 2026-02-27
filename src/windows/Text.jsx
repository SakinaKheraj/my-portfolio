import WindowControlls from "#components/WindowControlls";
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.text?.data;

    return (
        <>
            <div id="window-header">
                <WindowControlls target="text" />
                <h2>{data?.name ?? "Text File"}</h2>
            </div>

            <div className="p-8 space-y-5 overflow-y-auto max-h-[65vh] bg-white text-gray-800">
                {data?.image && (
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-48 object-cover rounded-lg shadow-sm"
                    />
                )}

                {data?.subtitle && (
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                        {data.subtitle}
                    </h3>
                )}

                <div className="space-y-4">
                    {Array.isArray(data?.description)
                        ? data.description.map((para, i) => (
                            <p key={i} className="leading-relaxed text-sm text-gray-600">
                                {para}
                            </p>
                        ))
                        : data?.description
                            ? <p className="leading-relaxed text-sm text-gray-600">{data.description}</p>
                            : <p className="text-sm text-gray-400 italic">No content to display.</p>
                    }
                </div>
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "text");

export default TextWindow;
