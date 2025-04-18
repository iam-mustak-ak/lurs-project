const InfoItem = ({ data }) => {
    const { title, type, description } = data;

    let content;

    if (type === "array-bulleted") {
        content = (
            <ul className="list-disc pl-5">
                {description.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item.includes(":") ? (
                            <>
                                <span className="font-semibold">
                                    {item.split(":")[0]}:
                                </span>
                                {item.split(":")[1]}
                            </>
                        ) : (
                            item
                        )}
                    </li>
                ))}
            </ul>
        );
    }
    if (type === "array-numbered") {
        content = (
            <ol className="list-decimal pl-5">
                {description.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                    </li>
                ))}
            </ol>
        );
    }
    if (type === "only-description") {
        content = <p className="text-base font-normal">{description}</p>;
    }

    return (
        <article className="p-3 rounded-lg border border-gray-100 shadow-md mb-4 bg-gray-50 break-inside-avoid">
            <h2 className="text-xl md:text-2xl text-darkBlue font-bold mb-3">
                {title}
            </h2>
            {content}
        </article>
    );
};

export default InfoItem;
