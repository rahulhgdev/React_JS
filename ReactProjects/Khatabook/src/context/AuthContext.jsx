import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../supabase-config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setIsLoading(false);
    };
    fetchSession();

    // Set up a listener to update the session when it changes (like sign-in or sign-out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email, password) => {
    try {
      const { data: { session }, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      setSession(session);
    } catch (error) {
      console.error('Error signing up:', error.message);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data: { session }, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setSession(session);
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, isLoading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
