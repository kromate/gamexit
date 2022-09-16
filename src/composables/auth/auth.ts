import { useUser } from '../useGlobals'
import { googleAuth, signOutUser } from '@/firebase/auth'
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
        useLoading().openLoading('Signing You out...😗')
        await signOutUser()
		useLoading().closeLoading()
    }

    return { googleSignin, signOut }
}
