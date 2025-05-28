type TagType = 'New' | 'Sold Out';

interface Props {
    contentTag: TagType; 
}

const getTagColor = (content: TagType) => {
    const lowerContent = content.toLowerCase();
    if(lowerContent === 'New') return 'bg-slate-800';
    if(lowerContent === 'Sold out') return 'bg-red-600';

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
