import { useUser } from '../useGlobals'
import { googleAuth } from '../../firebase/auth'
import { useAlert, useLoading } from '@/composables/useNotification'



export const useSignin = () => {
    const googleSignin = async () => {
        useLoading().openLoading('Logging you in... 🤩')
        const user = await googleAuth()
        useUser().saveUser(user)
        useLoading().closeLoading()
        useAlert().openAlert('You have successfully signed in 🥳')
    }
    
    const signOut = async () => {
        
    }

    return { googleSignin }
}
