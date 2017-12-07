import moment from 'moment'
import { getLanguage } from '../../store/localStore'



/**
 * inital moment.locale
 */
const initializeMomentLocale = () => {
	const currentLanguage = getLanguage()
	// zh
	if (currentLanguage === 'zh') {
		moment.locale('zh-cn')
	}
	// en
	if (currentLanguage === 'en') {
		moment.locale('en')
	}
}


export default initializeMomentLocale