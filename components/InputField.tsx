const InputField = ({
  value,
  label,
  onChange,
}: {
  value: string;
  label: string;
  onChange: (value: string) => void;
}) => {
  return (
    <section>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </section>
  );
};

export default InputField;
