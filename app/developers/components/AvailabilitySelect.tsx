interface AvailabilityProps {
  value?: string;
  options: string[];
  onChange: (value: string) => void;
}

const AvailabilitySelect = ({
  value,
  options,
  onChange,
}: AvailabilityProps) => {
  return (
    <div>
      <select value={value || ""} onChange={(e) => onChange(e.target.value)}>
        <option value="">Todas</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default AvailabilitySelect;
