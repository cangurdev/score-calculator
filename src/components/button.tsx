function Button(props: any) {
    return (
        <div 
            onClick     = { (e : any) => props.onChange(e.target.value) }
            className   = { 'flex items-center justify-center bg-teal-600 text-white rounded-lg h-12 w-48 m-12' }
        >
            { props.label }
        </div>
    );
  }
  
export default Button;