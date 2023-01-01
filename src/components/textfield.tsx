function Textfield(props: any) {
    return (
        <input 
            type        = { props.type || 'text' }
            onChange    = { (e : any) => props.onChange(e.target.value) }
            className   = { 'rounded-lg focus:outline-none text-black px-2 py-1' }
        />
    );
  }
  
export default Textfield;