import App from './app'
import '../../assets/css/reset.css'

Vue.filter('time', val => {
    return moment(val).format('YYYY-MM-DD HH:mm')
})

Vue.use(VueRouter)

var router = new VueRouter({
    hashbang: true
})

router.map({
    '/shop': {
        component: require('./shop'),
        menu: '1-1'
    }
})

router.redirect({
    '/': '/shop'
})

router.beforeEach(transition => {
    if (transition.to.hasOwnProperty('menu')) {
        router.app.current = transition.to.menu
    }
    transition.next()
})

router.start(App, '#app')