const AuthLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full flex items-center justify-center bg-[#EBE8DB]">
            {children}
        </div>
     );
}
 
export default AuthLayout;