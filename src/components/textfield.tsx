function Textfield(props: any) {
    return (
        <input 
            type        = { 'text' }
            onChange    = { (e : any) => props.onChange(e.target.value) }
            className   = { 'border-2' }
        />
    );
  }
  
  export default Textfield;