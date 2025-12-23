const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="bg-accent/20 px-1 py-0.5 rounded-lg border border-accent/50 text-xs cursor-default"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
