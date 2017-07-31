module.exports = {
    post: function (option) {
        var defaults = {
            url: option.url,
            type: 'POST',
            dataType: 'json',
            data: option.data || {},
            checkLogin: option.checkLogin === undefined ? true : option.checkLogin,
            headers: {
                'COntent-Type': 'application/json',
                'X-Device': 'Web'
            }
        }
        defaults.data = JSON.stringify(defaults.data)
        return new Promise((resolve, reject) => {
            $.ajax(defaults).done(data => {
                if (typeof data != 'object') {
                    try {
                        data = JSON.parse(data)
                    } catch (error) {
                        console.log(error)
                    }
                }
                if (defaults.checkLogin === true && data.stat == 'ERR_NOT_LOGIN') {
                    window.location.href = 'login.html'
                }
                resolve(data)
            }).fail(data => {
                if (typeof data != 'object') {
                    try {
                        data = JSON.parse(data)
                    } catch (error) {
                        console.log(error)
                    }
                }
                reject(data)
            })
        })
    }
}