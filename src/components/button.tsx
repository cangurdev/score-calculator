function Button(props: any) {
    return (
        <div 
            onClick     = { (e : any) => props.onClick(e.target.value) }
            className   = { 'flex items-center justify-center bg-secondary text-white rounded-lg h-12 w-48 m-12' }
        >
            { props.label }
        </div>
    );
  }
  
export default Button;