type TagType = "Nuevo" | "Agotado";

interface Props {
    contentTag: TagType; 
}

const getTagColor = (content: TagType) => {
    const lowerContent = content.toLowerCase();
    if(lowerContent === 'Nuevo') return 'bg-slate-800';
    if(lowerContent === 'Agotado') return 'bg-red-600';

    return 'bg-slate-400';
}

export const Tag = ({ contentTag }: Props) => {
    return (
    <div
    className={`text-white w-fit px-2 ${getTagColor(contentTag)}`}
    >
        <p className="uppercase text-xs font-medium">{contentTag}</p>
    </div>
    );
};
