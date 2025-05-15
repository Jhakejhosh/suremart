import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/reduxHook'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { clearUser, setUser } from '../redux/authSlice';

const AuthListner = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user) {
                dispatch(setUser({
                    displayName: user.displayName,
                    email: user.email
                }))
            }else {
                dispatch(clearUser())
            }
        })
        return () => unsubscribe()
    }, [dispatch])
  return null
}

export default AuthListner