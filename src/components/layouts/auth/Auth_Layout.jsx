const Auth_Layout = ({children}) => {
  return (
      
      <div className="bg-primary">
          <div className="d-flex flex-column align-items-center justify-content-center vh-100">
              {children}
          </div>
      </div>
      
  )
}

export default Auth_Layout