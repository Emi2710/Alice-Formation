const InputField = (props) => {
  const { handleChange, label, name, type, value, placeholder } = props;
  return (
    <div>
      <label className="" htmlFor={name}>{label}</label>
      <input className="" type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder} required />
    </div>
  )
}

export default InputField