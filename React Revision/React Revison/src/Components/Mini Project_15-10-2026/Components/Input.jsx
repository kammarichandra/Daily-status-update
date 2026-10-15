export default function Input({ label, value, onChange, name }) {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} required/>
    </div>
  );
}