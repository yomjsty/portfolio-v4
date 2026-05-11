export function TitleHeader({
    number,
    title,
}: {
    number: string;
    title: string;
}) {
    return (
        <div className="font-mono flex items-center gap-4 justify-between">
            <h2 className="text-3xl font-bold">{number}</h2>
            <h2 className="text-3xl font-bold">{title}</h2>
        </div>
    );
}
