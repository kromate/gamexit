import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signOut
} from 'firebase/auth'
import { app } from './init'
// eslint-disable-next-line import/named
import { useAlert, useLoading } from '@/composables/useNotification'
import { useUser } from '@/composables/useGlobals'

const { openAlert } = useAlert()
const { openLoading, closeLoading } = useLoading()
const { clearUser, saveUser } = useUser()

const auth = getAuth(app)

onAuthStateChanged(auth, (user) => {
	if (user) saveUser(user)
	else clearUser()
})

const provider = new GoogleAuthProvider()

export const googleAuth = async () => {
	try {
		const result = await signInWithPopup(auth, provider)
		return result.user
	} catch (error) {
		closeLoading()
		openAlert(`Oops seems something went wrong 😕 : ${error.message}`)
	}
}

export const signOutUser = () => {
	openLoading('Signing You out...😗')
	signOut(auth)
		.then(() => {
			clearUser()
			location.reload()
			closeLoading()
		})
		.catch((error) => {
			closeLoading()
			openAlert(`Oops seems something went wrong 😕 : ${error.message}`)
		})
}
