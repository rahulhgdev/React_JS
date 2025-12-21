import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from '../supabase-config'
// create context
export const AuthContext = createContext();
// comntext provider
export const AuthProvider = ({children}) => {
    const [session, setSession] = useState(undefined);

    // Sign up
    const signUpNewUser = async (email, password) => {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password
        });
        if(error){
            console.error("There was an error while signup", error);
            return {success: false, error};
        }
        return {success: true, data};
    }

    // Sign in
    const signInUser = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email:email,
                password: password,
            });
            if(error){
                console.error("Sign in error occurred : ", error);
                return {success: false, error: error.message}
            }
            console.log("sign-in successfully", data);
            return {success: true, data}
        } catch (error) {   
            console.error("an error occurred", error)
        }
    } 

    // listen to auth on auth state change (maintaining session)
    useEffect(() => {
        supabase.auth.getSession().then(({data: { session }}) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
    }, [])

    // Sign out
    const signOut = async () => {
        const {error} = supabase.auth.signOut();
        if(error){
            console.error("there was an error", error)
        }
    }

    // Reset pass

    const resetPass = async (email) => {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email);
        if(error) {
            console.error("error occurred while password reset", error);
        }
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
          if (event == "PASSWORD_RECOVERY") {
            const newPassword = prompt("What would you like your new password to be?");
            const { data, error } = await supabase.auth
              .updateUser({ password: newPassword })
     
            if (data) alert("Password updated successfully!")
            if (error) alert("There was an error updating your password.")
          }
        })
      }, [])


    return (
        <AuthContext.Provider value={{session, signUpNewUser, signInUser, signOut, resetPass}}>
            {children}
        </AuthContext.Provider>
    )
}

// shortand to use context
export const UserAuth = () =>{
    return useContext(AuthContext);
}
