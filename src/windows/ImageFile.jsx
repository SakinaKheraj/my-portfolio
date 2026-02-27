import WindowControlls from "#components/WindowControlls";
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";

const ImageFile = () => {
    const { windows } = useWindowStore();
    const data = windows.image?.data;

    return (
        <>
            <div id="window-header">
                <WindowControlls target="image" />
                <p>{data?.name ?? "Image Viewer"}</p>
            </div>

            <div className="preview">
                {data?.imageUrl ? (
                    <img
                        src={data.imageUrl}
                        alt={data.name}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full h-full flex-center text-gray-400 italic">
                        No image to display.
                    </div>
                )}
            </div>
        </>
    );
};

const ImageFileWindow = WindowWrapper(ImageFile, "image");

export default ImageFileWindow;
